import Link from "next/link";
import { 
  Briefcase, 
  Users, 
  FileText, 
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { prisma } from "@/lib/db";
import { formatDistanceToNow } from "date-fns";

export const dynamic = "force-dynamic";

async function getPercentageChange(model, extraWhere = {}) {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  
  const sixtyDaysAgo = new Date();
  sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60);

  const currentPeriodCount = await model.count({
    where: {
      ...extraWhere,
      createdAt: { gte: thirtyDaysAgo }
    }
  });

  const previousPeriodCount = await model.count({
    where: {
      ...extraWhere,
      createdAt: { gte: sixtyDaysAgo, lt: thirtyDaysAgo }
    }
  });

  if (previousPeriodCount === 0) return currentPeriodCount > 0 ? 100 : 0;
  
  return Math.round(((currentPeriodCount - previousPeriodCount) / previousPeriodCount) * 100);
}

export default async function DashboardPage() {
  // Fetch stats concurrently
  const [
    jobsCount, 
    applicationsCount, 
    formsCount, 
    recentApplications,
    jobsChange,
    applicationsChange,
    formsChange
  ] = await Promise.all([
    prisma.job.count({ where: { status: "OPEN" } }),
    prisma.application.count(),
    prisma.submission.count(),
    prisma.application.findMany({
      take: 3,
      orderBy: { createdAt: 'desc' },
      include: { job: true }
    }),
    getPercentageChange(prisma.job, { status: "OPEN" }),
    getPercentageChange(prisma.application),
    getPercentageChange(prisma.submission)
  ]);

  const statCards = [
    {
      label: "Total Job Openings",
      value: jobsCount,
      trend: jobsChange,
      icon: Briefcase,
      color: "text-sky-500",
      bgColor: "bg-sky-500/10",
    },
    {
      label: "New Applications",
      value: applicationsCount,
      trend: applicationsChange,
      icon: Users,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
    },
    {
      label: "Form Submissions",
      value: formsCount,
      trend: formsChange,
      icon: FileText,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight font-sora text-white">Dashboard Overview</h2>
        <p className="text-zinc-400">Welcome back to your Cybervol command center.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {statCards.map((stat) => (
          <div key={stat.label} className="p-6 bg-[#0b1b33] border border-white/10 rounded-xl">
            <div className="flex items-center justify-between">
              <div className={stat.bgColor + " p-3 rounded-lg"}>
                <stat.icon className={stat.color + " h-6 w-6"} />
              </div>
              <div className={`flex items-center text-sm font-medium ${stat.trend >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {stat.trend >= 0 ? (
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 mr-1" />
                )}
                {stat.trend > 0 ? '+' : ''}{stat.trend}%
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-zinc-400">{stat.label}</p>
              <h3 className="text-2xl font-bold text-white mt-1">
                {stat.value}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <div className="p-6 bg-[#0b1b33] border border-white/10 rounded-xl">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentApplications.length > 0 ? (
              recentApplications.map((activity) => (
                <div key={activity.id} className="flex items-center gap-x-3 p-3 rounded-lg hover:bg-white/5 transition">
                  <div className="h-2 w-2 rounded-full bg-sky-500" />
                  <div className="flex-1">
                    <p className="text-sm text-zinc-300">
                      New job application received for <span className="text-white font-medium">{activity.job?.title || "a role"}</span>
                    </p>
                    <p className="text-xs text-zinc-500">
                      {formatDistanceToNow(new Date(activity.createdAt), { addSuffix: true })}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-zinc-500 text-center py-4">No recent activity found.</p>
            )}
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
