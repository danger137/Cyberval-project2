"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { 
  Briefcase, 
  MapPin, 
  ArrowLeft, 
  Save, 
  Loader2,
  Globe,
  Clock,
  Award,
  ListChecks
} from "lucide-react";
import Link from "next/link";

export default function EditJobPage() {
  const router = useRouter();
  const { jobId } = useParams();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    customDepartment: "",
    location: "",
    description: "",
    type: "Full-time",
    workMode: "On-site",
    experience: "",
    requirements: "",
    qualifications: "",
    status: "OPEN"
  });

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`/api/jobs/${jobId}`);
        const data = await response.json();
        
        if (response.ok) {
          setFormData({
            ...data,
            requirements: data.requirements?.join('\n') || "",
            qualifications: data.qualifications?.join('\n') || "",
            customDepartment: "" // Will be set if department is not in list
          });
        }
      } catch (error) {
        console.error("Error fetching job:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [jobId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    const finalDepartment = formData.department === "Other" ? formData.customDepartment : formData.department;

    try {
      const response = await fetch(`/api/jobs/${jobId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          department: finalDepartment,
          requirements: formData.requirements.split('\n').filter(r => r.trim() !== ""),
          qualifications: formData.qualifications.split('\n').filter(q => q.trim() !== ""),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      router.push("/dashboard/jobs");
      router.refresh();
    } catch (err) {
      console.error("Error updating job:", err);
      alert(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-sky-500" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <Link href="/dashboard/jobs">
            <button className="p-2 hover:bg-white/10 rounded-full text-zinc-400 hover:text-white transition">
              <ArrowLeft className="h-5 w-5" />
            </button>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight font-sora text-white">Edit Job</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 pb-20">
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
                <option value="Security Engineering" className="bg-[#0b1b33]">Security Engineering</option>
                <option value="Infrastructure" className="bg-[#0b1b33]">Infrastructure</option>
                <option value="Threat Analysis" className="bg-[#0b1b33]">Threat Analysis</option>
                <option value="Security Design" className="bg-[#0b1b33]">Security Design</option>
                <option value="Incident Response" className="bg-[#0b1b33]">Incident Response</option>
                <option value="Other" className="bg-[#0b1b33]">Other (Add Custom)</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
                <input
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Experience</label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
                <input
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Job Type</label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition"
                >
                  <option value="Full-time" className="bg-[#0b1b33]">Full-time</option>
                  <option value="Part-time" className="bg-[#0b1b33]">Part-time</option>
                  <option value="Contract" className="bg-[#0b1b33]">Contract</option>
                  <option value="Internship" className="bg-[#0b1b33]">Internship</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Work Mode</label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
                <select
                  value={formData.workMode}
                  onChange={(e) => setFormData({ ...formData, workMode: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition"
                >
                  <option value="On-site" className="bg-[#0b1b33]">On-site</option>
                  <option value="Remote" className="bg-[#0b1b33]">Remote</option>
                  <option value="Hybrid" className="bg-[#0b1b33]">Hybrid</option>
                </select>
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-zinc-400">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition"
              >
                <option value="OPEN" className="bg-[#0b1b33]">OPEN</option>
                <option value="CLOSED" className="bg-[#0b1b33]">CLOSED</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-400">Job Description</label>
            <textarea
              required
              rows={5}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-400">Requirements (One per line)</label>
            <div className="relative">
              <ListChecks className="absolute left-3 top-4 h-4 w-4 text-zinc-600" />
              <textarea
                rows={5}
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition resize-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-400">Qualifications (One per line)</label>
            <div className="relative">
              <Award className="absolute left-3 top-4 h-4 w-4 text-zinc-600" />
              <textarea
                rows={5}
                value={formData.qualifications}
                onChange={(e) => setFormData({ ...formData, qualifications: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition resize-none"
              />
            </div>
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
            disabled={saving}
            className="flex items-center gap-x-2 px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-xl transition font-bold disabled:opacity-50"
          >
            {saving ? <Loader2 className="h-5 w-5 animate-spin" /> : <Save className="h-5 w-5" />}
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
