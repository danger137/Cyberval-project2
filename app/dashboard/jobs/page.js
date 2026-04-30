"use client";

import { useState, useEffect } from "react";
import { 
  Plus, 
  Search, 
  MoreVertical, 
  Briefcase, 
  MapPin, 
  Users,
  CheckCircle2,
  XCircle,
  Trash2,
  AlertTriangle
} from "lucide-react";
import Link from "next/link";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [jobToDelete, setJobToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/jobs");
      const data = await response.json();
      if (Array.isArray(data)) {
        setJobs(data);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!jobToDelete) return;

    try {
      setIsDeleting(true);
      const response = await fetch(`/api/jobs/${jobToDelete}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setJobs(jobs.filter(job => job.id !== jobToDelete));
        setShowDeleteModal(false);
        setJobToDelete(null);
      } else {
        const error = await response.json();
        alert(error.error || "Failed to delete job");
      }
    } catch (error) {
      console.error("Error deleting job:", error);
      alert("Something went wrong");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight font-sora text-white">Job Openings</h2>
          <p className="text-zinc-400">Manage your company's career opportunities.</p>
        </div>
        <Link href="/dashboard/jobs/new">
          <button className="flex items-center gap-x-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition font-medium text-sm">
            <Plus className="h-4 w-4" />
            Post New Job
          </button>
        </Link>
      </div>

      <div className="flex items-center gap-x-4 bg-[#0b1b33] p-4 border border-white/10 rounded-xl">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <input 
            placeholder="Search jobs..." 
            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50"
          />
        </div>
        <select className="bg-[#0b1b33] border border-white/10 rounded-lg px-4 py-2 text-sm text-zinc-400 focus:outline-none">
          <option>All Departments</option>
          <option>Security</option>
          <option>Infrastructure</option>
        </select>
      </div>

      <div className="bg-[#0b1b33] border border-white/10 rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-white/5 border-b border-white/10">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Job Title</th>
              <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Applications</th>
              <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {jobs.map((job) => (
              <tr key={job.id} className="hover:bg-white/5 transition">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">{job.title}</span>
                    <div className="flex items-center gap-x-3 mt-1">
                      <span className="flex items-center text-xs text-zinc-500">
                        <Briefcase className="h-3 w-3 mr-1" />
                        {job.department}
                      </span>
                      <span className="flex items-center text-xs text-zinc-500">
                        <MapPin className="h-3 w-3 mr-1" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    job.status === "OPEN" ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"
                  }`}>
                    {job.status === "OPEN" ? <CheckCircle2 className="h-3 w-3 mr-1" /> : <XCircle className="h-3 w-3 mr-1" />}
                    {job.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center text-sm text-zinc-300">
                    <Users className="h-4 w-4 mr-2 text-sky-500" />
                    {job._count?.applications || 0} Applications
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-x-2">
                    <Link href={`/dashboard/jobs/${job.id}/applications`}>
                      <button className="p-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-sky-500 transition">
                        <Users className="h-4 w-4" />
                      </button>
                    </Link>
                    <button 
                      onClick={() => {
                        setJobToDelete(job.id);
                        setShowDeleteModal(true);
                      }}
                      className="p-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-red-500 transition"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Custom Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowDeleteModal(false)}
          />
          <div className="relative bg-[#0b1b33] border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 text-red-500 mb-4 mx-auto">
              <AlertTriangle className="h-6 w-6" />
            </div>
            
            <h3 className="text-xl font-bold text-white text-center mb-2">Delete Job Opening?</h3>
            <p className="text-zinc-400 text-center mb-6">
              This action cannot be undone. All associated applications for this job will also be permanently deleted.
            </p>

            <div className="flex gap-x-3">
              <button 
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition font-medium border border-white/10"
              >
                Cancel
              </button>
              <button 
                onClick={handleDelete}
                disabled={isDeleting}
                className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 disabled:bg-red-500/50 text-white rounded-lg transition font-medium flex items-center justify-center"
              >
                {isDeleting ? (
                  <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Delete Job"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobsPage;
