"use client";

import React, { useEffect, useState } from "react";
import { GitBranch, GitCommit, Calendar } from "lucide-react";

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
        const res = await fetch(`/api/github?username=${username}`);
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || "failed to fetch metrics");
        }
        const data = await res.json();
        setMetrics(data);
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
