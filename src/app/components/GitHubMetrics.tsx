"use client";

import React, { useEffect, useState } from "react";
import { GitBranch, GitCommit, Calendar } from "lucide-react";

interface EventItem {
  type: string;
  created_at: string;
  payload: { commits?: { sha: string }[] };
}

interface Metrics {
  totalRepos: number;
  totalCommits: number;
  commitStreak: number;
}

export default function GitHubMetrics({ username }: { username: string }) {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMetrics() {
      try {
        const [reposRes, eventsRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}/repos?per_page=100`),
          fetch(`https://api.github.com/users/${username}/events/public?per_page=100`),
        ]);
        
        if (!reposRes.ok || !eventsRes.ok) throw new Error("failed to fetch github data");

        const repos = await reposRes.json();
        const events: EventItem[] = await eventsRes.json();

        const totalRepos = Array.isArray(repos) ? repos.length : 0;
        const pushEvents = events.filter((e) => e.type === "PushEvent");
        const totalCommits = pushEvents.reduce(
          (sum, e) => sum + (e.payload.commits?.length || 0), 0
        );

        const dateSet = new Set(pushEvents.map((e) => e.created_at.slice(0, 10)));
        let streak = 0;
        const day = new Date();
        while (dateSet.has(day.toISOString().slice(0, 10))) {
          streak++;
          day.setDate(day.getDate() - 1);
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

  if (loading) return <p className="text-sm text-gray-400 text-center lowercase">loading github metrics…</p>;
  if (error || !metrics) return <p className="text-sm text-red-500 text-center lowercase">error loading github metrics.</p>;

  return (
    <div className="mx-auto max-w-xl mb-8 px-4 py-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center text-purple-400 lowercase">github stats</h2>
      <div className="grid grid-cols-3 gap-2 text-center text-gray-300">
        <div className="flex flex-col items-center">
          <GitBranch className="w-6 h-6 text-purple-700" />
          <span className="mt-1 text-xl font-semibold lowercase">{metrics.totalRepos}</span>
          <span className="text-sm lowercase">repos</span>
        </div>
        <div className="flex flex-col items-center">
          <GitCommit className="w-6 h-6 text-purple-700" />
          <span className="mt-1 text-xl font-semibold lowercase">{metrics.totalCommits}</span>
          <span className="text-sm lowercase">commits</span>
        </div>
        <div className="flex flex-col items-center">
          <Calendar className="w-6 h-6 text-purple-700" />
          <span className="mt-1 text-xl font-semibold lowercase">{metrics.commitStreak}</span>
          <span className="text-sm lowercase">streak</span>
        </div>
      </div>
    </div>
  );
}