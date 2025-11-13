import { NextResponse } from 'next/server';

interface Repo {
  name: string;
  private: boolean;
  owner: {
    login: string;
  };
}

interface Commit {
  sha: string;
  commit: {
    author: {
      date: string;
    };
  };
}

function parseLinkHeader(header: string | null): Record<string, string> {
  if (!header) return {};
  return header
    .split(',')
    .map((part) => part.trim().split(';'))
    .reduce<Record<string, string>>((acc, [urlPart, relPart]) => {
      const urlMatch = urlPart.trim().replace(/<(.*)>/, '$1');
      const relMatch = relPart.trim().replace(/rel="(.*)"/, '$1');
      acc[relMatch] = urlMatch;
      return acc;
    }, {});
}

async function fetchWithAuth(url: string): Promise<Response | null> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return null; // Return null if no token, will fall back to public API
  }

  return fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.v3+json',
    },
  });
}

async function countCommitsInRepos(
  repos: Repo[],
  username: string,
  oneYearAgoISO: string,
  token: string | null
): Promise<number> {
  const commitCounts = await Promise.all(
    repos.map(async (repo) => {
      try {
        // Try authenticated request first if token is available
        let commitsRes: Response;
        if (token) {
          const authRes = await fetchWithAuth(
            `https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits?author=${username}&since=${oneYearAgoISO}&per_page=1`
          );
          if (authRes && authRes.ok) {
            commitsRes = authRes;
          } else {
            // Fall back to public API
            commitsRes = await fetch(
              `https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits?author=${username}&since=${oneYearAgoISO}&per_page=1`
            );
          }
        } else {
          commitsRes = await fetch(
            `https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits?author=${username}&since=${oneYearAgoISO}&per_page=1`
          );
        }

        if (!commitsRes.ok) {
          // If 404, repo might not exist or we don't have access
          if (commitsRes.status === 404) return 0;
          return 0;
        }

        const linkHeader = commitsRes.headers.get('link');
        if (linkHeader) {
          const links = parseLinkHeader(linkHeader);
          const lastUrl = links['last'];
          if (lastUrl) {
            const urlObj = new URL(lastUrl);
            const pageParam = urlObj.searchParams.get('page');
            return pageParam ? parseInt(pageParam, 10) : 0;
          }
        }
        // If no Link header: either 0 commits or exactly 1 commit
        const commitsArray = (await commitsRes.json()) as Commit[];
        // Filter commits to only those from the last year
        const recentCommits = commitsArray.filter(
          (commit) => commit.commit.author.date >= oneYearAgoISO
        );
        return recentCommits.length;
      } catch {
        return 0;
      }
    })
  );

  return commitCounts.reduce((sum, c) => sum + c, 0);
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');

    if (!username) {
      return NextResponse.json(
        { error: 'Username is required' },
        { status: 400 }
      );
    }

    // 1) Fetch all repos (public + private) with authentication
    const allRepos: Repo[] = [];
    let page = 1;
    const token = process.env.GITHUB_TOKEN;
    
    if (token) {
      // Try authenticated request to get both public and private repos
      while (true) {
        const res = await fetchWithAuth(
          `https://api.github.com/user/repos?per_page=100&page=${page}&affiliation=owner&sort=updated`
        );
        if (!res || !res.ok) {
          // If auth fails, fall back to public repos only
          if (res && (res.status === 401 || res.status === 403)) {
            break; // Will fall through to public API
          }
          if (!res) break; // No token, fall through to public API
          throw new Error('Failed to fetch repos');
        }
        const repos: Repo[] = await res.json();
        // Filter to only repos owned by the username
        const userRepos = repos.filter((repo) => repo.owner.login === username);
        allRepos.push(...userRepos);
        const linkHeader = res.headers.get('link');
        const links = parseLinkHeader(linkHeader);
        if (!links['next']) break;
        page++;
      }
    }
    
    // If no token or auth failed, fetch public repos only
    if (allRepos.length === 0) {
      page = 1;
      while (true) {
        const publicRes = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&page=${page}`
        );
        if (!publicRes.ok) throw new Error('Failed to fetch repos');
        const repos: Repo[] = await publicRes.json();
        allRepos.push(...repos);
        const linkHeader = publicRes.headers.get('link');
        const links = parseLinkHeader(linkHeader);
        if (!links['next']) break;
        page++;
      }
    }

    const totalRepos = allRepos.length;

    // Calculate date one year ago
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    const oneYearAgoISO = oneYearAgo.toISOString().split('T')[0]; // Format: YYYY-MM-DD

    // 2) Use GitHub Search API to find ALL commits by the user from the last year
    // This includes commits in repos owned by others (contributions)
    let totalCommits = 0;
    
    // GitHub Search API requires a special Accept header for commit search
    const searchHeaders: Record<string, string> = {
      Accept: 'application/vnd.github.cloak-preview+json',
    };
    
    if (token) {
      searchHeaders['Authorization'] = `Bearer ${token}`;
    }
    
    try {
      const searchUrl = `https://api.github.com/search/commits?q=author:${username}+author-date:>${oneYearAgoISO}&per_page=100`;
      const searchRes = await fetch(searchUrl, { headers: searchHeaders });
      
      if (searchRes.ok) {
        const searchData = await searchRes.json();
        totalCommits = searchData.total_count || 0;
        
        // GitHub Search API has a limit of 1000 results
        // If there are more, we need to handle it differently
        // For now, we'll cap at 1000, but ideally we'd paginate or use date ranges
        if (totalCommits > 1000) {
          // If more than 1000, we'll need to sum up pages or use a different approach
          // For now, let's try to get more accurate count by paginating
          let page = 1;
          let allCommits = 0;
          while (page <= 10 && allCommits < totalCommits) { // Max 10 pages = 1000 results
            const pageRes = await fetch(`${searchUrl}&page=${page}`, { headers: searchHeaders });
            if (!pageRes.ok) break;
            const pageData = await pageRes.json();
            allCommits += pageData.items?.length || 0;
            if (!pageData.items || pageData.items.length < 100) break;
            page++;
          }
          // Use the actual count we retrieved, or the total_count if it's less than 1000
          totalCommits = Math.min(totalCommits, allCommits || totalCommits);
        }
      } else {
        // If search fails (e.g., rate limit or no access), fall back to counting commits in owned repos
        totalCommits = await countCommitsInRepos(allRepos, username, oneYearAgoISO, token || null);
      }
    } catch (error) {
      // Fall back to counting commits in owned repos
      totalCommits = await countCommitsInRepos(allRepos, username, oneYearAgoISO, token || null);
    }

    // 3) Compute commit streak based on public events (last 100)
    const eventsRes = await fetch(
      `https://api.github.com/users/${username}/events/public?per_page=100`
    );
    if (!eventsRes.ok) throw new Error('Failed to fetch events');
    const events = await eventsRes.json();
    const pushEvents = events.filter((e: any) => e.type === 'PushEvent');
    const dateSet = new Set(pushEvents.map((e: any) => e.created_at.slice(0, 10)));

    let streak = 0;
    const today = new Date();
    while (dateSet.has(today.toISOString().slice(0, 10))) {
      streak++;
      today.setDate(today.getDate() - 1);
    }

    return NextResponse.json({
      totalRepos,
      totalCommits,
      commitStreak: streak,
    });
  } catch (error) {
    console.error('Error fetching GitHub metrics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub metrics' },
      { status: 500 }
    );
  }
}

