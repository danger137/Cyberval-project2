"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Briefcase, 
  MapPin, 
  ArrowLeft, 
  Save, 
  Loader2 
} from "lucide-react";
import Link from "next/link";

export default function NewJobPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    customDepartment: "",
    location: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const finalDepartment = formData.department === "Other" ? formData.customDepartment : formData.department;

    try {
      const response = await fetch("/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          department: finalDepartment
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      console.log("Job posted successfully:", data);
      router.push("/dashboard/jobs");
      router.refresh();
    } catch (err) {
      console.error("Error posting job:", err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <Link href="/dashboard/jobs">
            <button className="p-2 hover:bg-white/10 rounded-full text-zinc-400 hover:text-white transition">
              <ArrowLeft className="h-5 w-5" />
            </button>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight font-sora text-white">Post New Job</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-[#0b1b33] border border-white/10 rounded-2xl p-8 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Job Title</label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
                <input
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Senior Security Analyst"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Department</label>
              <select
                required
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition"
              >
                <option value="" disabled className="bg-[#0b1b33]">Select Department</option>
                <option value="Security" className="bg-[#0b1b33]">Security</option>
                <option value="Infrastructure" className="bg-[#0b1b33]">Infrastructure</option>
                <option value="Compliance" className="bg-[#0b1b33]">Compliance</option>
                <option value="Operations" className="bg-[#0b1b33]">Operations</option>
                <option value="Other" className="bg-[#0b1b33]">Other (Add Custom)</option>
              </select>
            </div>
            {formData.department === "Other" && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-sky-500">Custom Department Name</label>
                <input
                  required
                  value={formData.customDepartment}
                  onChange={(e) => setFormData({ ...formData, customDepartment: e.target.value })}
                  placeholder="Enter department name"
                  className="w-full bg-sky-500/5 border border-sky-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition"
                />
              </div>
            )}
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-zinc-400">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
                <input
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. Remote, New York, London"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-400">Job Description</label>
            <textarea
              required
              rows={8}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Detailed job description, requirements, and responsibilities..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition resize-none"
            />
          </div>
        </div>

        <div className="flex justify-end gap-x-4">
          <Link href="/dashboard/jobs">
            <button type="button" className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl transition font-medium">
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-x-2 px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-xl transition font-bold disabled:opacity-50"
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Save className="h-5 w-5" />}
            Publish Job
          </button>
        </div>
      </form>
    </div>
  );
}
