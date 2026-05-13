"use client";

import { useState, useEffect } from "react";
import { Eye, Loader2, Trash2 } from "lucide-react";

const SubmissionsPage = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  useEffect(() => {
    const fetchSubmissions = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/submissions");
        const data = await response.json();
        setSubmissions(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching submissions:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSubmissions();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight font-sora text-white">Form Submissions</h2>
          <p className="text-zinc-400">Manage incoming business inquiries from your contact form.</p>
        </div>
      </div>

      <div className="bg-[#0b1b33] border border-white/10 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-8 py-5 text-xs font-bold text-zinc-500 uppercase tracking-widest">Name</th>
                <th className="px-8 py-5 text-xs font-bold text-zinc-500 uppercase tracking-widest">Email</th>
                <th className="px-8 py-5 text-xs font-bold text-zinc-500 uppercase tracking-widest">Message</th>
                <th className="px-8 py-5 text-xs font-bold text-zinc-500 uppercase tracking-widest text-center">Date Received</th>
                <th className="px-8 py-5 text-xs font-bold text-zinc-500 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {submissions.map((sub) => (
                <tr key={sub.id} className="hover:bg-white/5 transition-all duration-300 group">
                  <td className="px-8 py-5">
                    <p className="text-sm font-bold text-white group-hover:text-sky-400 transition">
                      {sub.firstName || sub.name || "N/A"} {sub.lastName || ""}
                    </p>
                  </td>
                  <td className="px-8 py-5">
                    <p className="text-sm text-zinc-400 font-medium">{sub.email || "N/A"}</p>
                  </td>
                  <td className="px-8 py-5">
                    <p className="text-sm text-zinc-400 font-medium truncate max-w-[200px]">{sub.message || "N/A"}</p>
                  </td>
                  <td className="px-8 py-5 text-sm text-zinc-400 text-center font-medium">
                    {new Date(sub.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      <button 
                        onClick={() => setSelectedSubmission(sub)}
                        className="p-2.5 hover:bg-sky-500/10 rounded-xl text-zinc-400 hover:text-sky-500 transition-all duration-300 border border-transparent hover:border-sky-500/30"
                      >
                        <Eye className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {loading && (
                <tr>
                  <td colSpan={5} className="px-8 py-20 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <Loader2 className="h-10 w-10 text-sky-500 animate-spin" />
                      <p className="text-sm text-zinc-500 font-bold animate-pulse">Retrieving your leads...</p>
                    </div>
                  </td>
                </tr>
              )}
              {!loading && submissions.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-8 py-24 text-center">
                    <div className="flex flex-col items-center gap-4 opacity-40">
                      <div className="p-6 bg-white/5 rounded-full">
                        <Eye className="h-12 w-12 text-zinc-600" />
                      </div>
                      <div>
                        <p className="text-xl font-bold text-white">No inquiries yet</p>
                        <p className="text-sm text-zinc-500 mt-1">New leads from your website will appear here automatically.</p>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for viewing submission details */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-[#0b1b33] border border-white/10 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-8 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white font-sora">Submission Details</h3>
              <button 
                onClick={() => setSelectedSubmission(null)}
                className="text-zinc-500 hover:text-white transition"
              >
                ✕
              </button>
            </div>
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-2">First Name</label>
                  <p className="text-white font-medium">{selectedSubmission.firstName || "N/A"}</p>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-2">Last Name</label>
                  <p className="text-white font-medium">{selectedSubmission.lastName || "N/A"}</p>
                </div>
                <div className="col-span-2">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-2">Email Address</label>
                  <p className="text-white font-medium">{selectedSubmission.email || "N/A"}</p>
                </div>
                <div className="col-span-2">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-2">Message</label>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-zinc-300 whitespace-pre-wrap min-h-[150px]">
                    {selectedSubmission.message || "No message content."}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 bg-white/5 border-t border-white/10 flex justify-end">
              <button 
                onClick={() => setSelectedSubmission(null)}
                className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl transition shadow-lg shadow-sky-500/25"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmissionsPage;
