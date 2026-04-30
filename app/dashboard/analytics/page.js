"use client";

import { useState, useEffect } from "react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';
import { 
  TrendingUp, Users, MousePointer2, Mail, ArrowUpRight, ArrowDownRight, Loader2
} from "lucide-react";

const AnalyticsPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch("/api/analytics");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching analytics:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center gap-4">
        <Loader2 className="h-10 w-10 text-sky-500 animate-spin" />
        <p className="text-zinc-500 font-bold animate-pulse">Calculating metrics...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div>
        <h2 className="text-3xl font-bold tracking-tight font-sora text-white">Analytics</h2>
        <p className="text-zinc-400">Real-time performance and user engagement.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data?.summary.map((stat) => {
          const Icon = { Users, MousePointer2, TrendingUp, Mail }[stat.icon] || Users;
          return (
            <div key={stat.label} className="p-6 bg-[#0b1b33] border border-white/10 rounded-2xl shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/5 rounded-xl">
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className={`flex items-center text-xs font-bold ${stat.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                  {stat.trend}
                </div>
              </div>
              <p className="text-sm text-zinc-500">{stat.label}</p>
              <h3 className="text-3xl font-bold text-white mt-1">{stat.value}</h3>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="p-8 bg-[#0b1b33] border border-white/10 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-8">Traffic Trends</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data?.chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="name" stroke="#71717a" fontSize={12} />
                <YAxis stroke="#71717a" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: '#0b1b33', border: '1px solid rgba(255,255,255,0.1)' }} />
                <Area type="monotone" dataKey="visits" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.1} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-8 bg-[#0b1b33] border border-white/10 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-8">Conversion</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data?.chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="name" stroke="#71717a" fontSize={12} />
                <YAxis stroke="#71717a" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: '#0b1b33', border: '1px solid rgba(255,255,255,0.1)' }} />
                <Bar dataKey="leads" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
