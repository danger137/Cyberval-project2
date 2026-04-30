"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { 
  ArrowLeft, 
  Mail, 
  FileText, 
  Calendar,
  User,
  ExternalLink,
  Download
} from "lucide-react";
import Link from "next/link";

const ApplicationsPage = () => {
  const params = useParams();
  const jobId = params.jobId;
  const [applications, setApplications] = useState([]);
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobAndApplications = async () => {
      try {
        const response = await fetch(`/api/jobs/${jobId}/applications`);
        const data = await response.json();
        if (response.ok) {
          setApplications(data.applications);
          setJob(data.job);
        }
      } catch (error) {
        console.error("Error fetching applications:", error);
      } finally {
        setLoading(false);
      }
    };

    if (jobId) {
      fetchJobAndApplications();
    }
  }, [jobId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-x-3">
        <Link href="/dashboard/jobs">
          <button className="p-2 hover:bg-white/10 rounded-full text-zinc-400 hover:text-white transition">
            <ArrowLeft className="h-5 w-5" />
          </button>
        </Link>
        <div>
          <h2 className="text-3xl font-bold tracking-tight font-sora text-white">
            Applications
          </h2>
          <p className="text-zinc-400">
            Viewing candidates for <span className="text-sky-400 font-medium">{job?.title || "Loading..."}</span>
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        {applications.length === 0 ? (
          <div className="bg-[#0b1b33] border border-white/10 rounded-2xl p-12 text-center">
            <User className="h-12 w-12 text-zinc-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No Applications Yet</h3>
            <p className="text-zinc-400">When candidates apply for this job, they will appear here.</p>
          </div>
        ) : (
          applications.map((app) => (
            <div key={app.id} className="bg-[#0b1b33] border border-white/10 rounded-xl p-6 hover:border-sky-500/30 transition group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-x-4">
                  <div className="h-12 w-12 bg-sky-500/10 rounded-full flex items-center justify-center text-sky-500 font-bold text-lg">
                    {app.candidateName.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition">{app.candidateName}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-1">
                      <span className="flex items-center text-xs text-zinc-500">
                        <Mail className="h-3 w-3 mr-1" />
                        {app.email}
                      </span>
                      <span className="h-1 w-1 bg-zinc-700 rounded-full" />
                      <span className="flex items-center text-xs text-zinc-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        Applied on {new Date(app.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-x-3">
                  <a 
                    href={app.resumeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition text-sm font-medium border border-white/10"
                  >
                    <FileText className="h-4 w-4 text-sky-500" />
                    View Resume
                    <ExternalLink className="h-3 w-3 opacity-50" />
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ApplicationsPage;
