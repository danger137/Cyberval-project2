"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Briefcase, 
  Users, 
  FileText, 
  ArrowUpRight,
  Loader2 
} from "lucide-react";

export default function DashboardPage() {
  const [stats, setStats] = useState({
    jobs: 0,
    applications: 0,
    forms: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/analytics");
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const statCards = [
    {
      label: "Total Job Openings",
      value: stats.jobs,
      icon: Briefcase,
      color: "text-sky-500",
      bgColor: "bg-sky-500/10",
    },
    {
      label: "New Applications",
      value: stats.applications,
      icon: Users,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
    },
    {
      label: "Form Submissions",
      value: stats.forms,
      icon: FileText,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight font-sora text-white">Dashboard Overview</h2>
        <p className="text-zinc-400">Welcome back to your Cyberval command center.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {statCards.map((stat) => (
          <div key={stat.label} className="p-6 bg-[#0b1b33] border border-white/10 rounded-xl">
            <div className="flex items-center justify-between">
              <div className={stat.bgColor + " p-3 rounded-lg"}>
                <stat.icon className={stat.color + " h-6 w-6"} />
              </div>
              <div className="flex items-center text-emerald-400 text-sm font-medium">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                +12%
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-zinc-400">{stat.label}</p>
              <h3 className="text-2xl font-bold text-white mt-1">
                {loading ? "..." : stat.value}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <div className="p-6 bg-[#0b1b33] border border-white/10 rounded-xl">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-x-3 p-3 rounded-lg hover:bg-white/5 transition">
                <div className="h-2 w-2 rounded-full bg-sky-500" />
                <div className="flex-1">
                  <p className="text-sm text-zinc-300">New job application received for <span className="text-white font-medium">Security Analyst</span></p>
                  <p className="text-xs text-zinc-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-6 bg-[#0b1b33] border border-white/10 rounded-xl">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/dashboard/jobs">
              <button className="w-full p-4 rounded-lg bg-sky-500 hover:bg-sky-600 transition text-white text-sm font-medium">
                Post New Job
              </button>
            </Link>
            <Link href="/dashboard/portfolio">
              <button className="w-full p-4 rounded-lg bg-violet-500 hover:bg-violet-600 transition text-white text-sm font-medium">
                Add Case Study
              </button>
            </Link>
            <Link href="/dashboard/resources">
              <button className="w-full p-4 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition text-white text-sm font-medium">
                Upload Resource
              </button>
            </Link>
            <Link href="/dashboard/analytics">
              <button className="w-full p-4 rounded-lg bg-zinc-700 hover:bg-zinc-600 transition text-white text-sm font-medium">
                View Analytics
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
