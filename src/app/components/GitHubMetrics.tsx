"use client";

import React, { useEffect, useState } from "react";
import { GitBranch, GitCommit, Calendar } from "lucide-react";

interface Repo {
  name: string;
}

interface Commit {
  sha: string;
  commit: {
    author: {
      name: string;
      date: string;
    };
    message: string;
  };
}

interface Metrics {
  totalRepos: number;
  totalCommits: number;
  commitStreak: number;
}

interface EventItem {
  type: string;
  created_at: string;
  payload: { commits?: { sha: string }[] };
}

function parseLinkHeader(header: string | null): Record<string, string> {
  if (!header) return {};
  return header
    .split(",")
    .map((part) => part.trim().split(";"))
    .reduce<Record<string, string>>((acc, [urlPart, relPart]) => {
      const urlMatch = urlPart.trim().replace(/<(.*)>/, "$1");
      const relMatch = relPart.trim().replace(/rel="(.*)"/, "$1");
      acc[relMatch] = urlMatch;
      return acc;
    }, {});
}

export default function GitHubMetrics({ username }: { username: string }) {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMetrics() {
      try {
        // 1) Fetch all repos (handle pagination)
        const allRepos: Repo[] = [];
        let page = 1;
        while (true) {
          const res = await fetch(
            `https://api.github.com/users/${username}/repos?per_page=100&page=${page}`
          );
          if (!res.ok) throw new Error("failed to fetch repos");
          const repos: Repo[] = await res.json();
          allRepos.push(...repos);
          const linkHeader = res.headers.get("link");
          const links = parseLinkHeader(linkHeader);
          if (!links["next"]) break;
          page++;
        }

        const totalRepos = allRepos.length;

        // 2) For each repo, fetch commits authored by username (per_page=1) to read Link header
        const commitCounts = await Promise.all(
          allRepos.map(async (repo) => {
            const commitsRes = await fetch(
              `https://api.github.com/repos/${username}/${repo.name}/commits?author=${username}&per_page=1`
            );
            if (!commitsRes.ok) return 0;
            const linkHeader = commitsRes.headers.get("link");
            if (linkHeader) {
              const links = parseLinkHeader(linkHeader);
              // The "last" link's URL contains ?page=<n>; that <n> is the total commit count
              const lastUrl = links["last"];
              if (lastUrl) {
                const urlObj = new URL(lastUrl);
                const pageParam = urlObj.searchParams.get("page");
                return pageParam ? parseInt(pageParam, 10) : 0;
              }
            }
            // If no Link header: either 0 commits or exactly 1 commit
            const commitsArray = (await commitsRes.json()) as Commit[];
            return commitsArray.length;
          })
        );

        const totalCommits = commitCounts.reduce((sum, c) => sum + c, 0);

        // 3) Compute commit streak based on public events (last 100)
        const eventsRes = await fetch(
          `https://api.github.com/users/${username}/events/public?per_page=100`
        );
        if (!eventsRes.ok) throw new Error("failed to fetch events");
        const events: EventItem[] = await eventsRes.json();
        const pushEvents = events.filter((e) => e.type === "PushEvent");
        const dateSet = new Set(pushEvents.map((e) => e.created_at.slice(0, 10)));

        let streak = 0;
        const today = new Date();
        while (dateSet.has(today.toISOString().slice(0, 10))) {
          streak++;
          today.setDate(today.getDate() - 1);
        }

        setMetrics({ totalRepos, totalCommits, commitStreak: streak });
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchMetrics();
  }, [username]);

  if (loading)
    return (
      <p className="text-sm text-gray-400 text-center lowercase">
        loading github metrics…
      </p>
    );
  if (error || !metrics)
    return (
      <p className="text-sm text-red-500 text-center lowercase">
        error loading github metrics.
      </p>
    );

  return (
    <div className="mx-auto max-w-xl mb-8 px-4 py-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center text-purple-400 lowercase">
        github stats
      </h2>
      <div className="grid grid-cols-3 gap-2 text-center text-gray-300">
        <div className="flex flex-col items-center">
          <GitBranch className="w-6 h-6 text-purple-700" />
          <span className="mt-1 text-xl font-semibold lowercase">
            {metrics.totalRepos}
          </span>
          <span className="text-sm lowercase">repos</span>
        </div>
        <div className="flex flex-col items-center">
          <GitCommit className="w-6 h-6 text-purple-700" />
          <span className="mt-1 text-xl font-semibold lowercase">
            {metrics.totalCommits}
          </span>
          <span className="text-sm lowercase">commits</span>
        </div>
        <div className="flex flex-col items-center">
          <Calendar className="w-6 h-6 text-purple-700" />
          <span className="mt-1 text-xl font-semibold lowercase">
            {metrics.commitStreak}
          </span>
          <span className="text-sm lowercase">streak</span>
        </div>
      </div>
    </div>
  );
}
