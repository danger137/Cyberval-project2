"use client";

import { useState, useEffect } from "react";
import { Plus, FileText, Download, Trash2, Eye, Lock, AlertTriangle } from "lucide-react";
import Link from "next/link";

const ResourcesPage = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [resourceToDelete, setResourceToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/resources");
      const data = await response.json();
      if (Array.isArray(data)) {
        setResources(data);
      }
    } catch (error) {
      console.error("Error fetching resources:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!resourceToDelete) return;

    try {
      setIsDeleting(true);
      const response = await fetch(`/api/resources/${resourceToDelete}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setResources(resources.filter(r => r.id !== resourceToDelete));
        setShowDeleteModal(false);
        setResourceToDelete(null);
      } else {
        const error = await response.json();
        alert(error.error || "Failed to delete resource");
      }
    } catch (error) {
      console.error("Error deleting resource:", error);
      alert("Something went wrong");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight font-sora text-white">Resource Library</h2>
          <p className="text-zinc-400">Manage lead magnets and informational documents.</p>
        </div>
        <Link href="/dashboard/resources/new">
          <button className="flex items-center gap-x-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition font-medium text-sm">
            <Plus className="h-4 w-4" />
            Upload Resource
          </button>
        </Link>
      </div>

      <div className="grid gap-4">
        {resources.map((resource) => (
          <div key={resource.id} className="bg-[#0b1b33] border border-white/10 rounded-xl p-5 hover:border-white/20 transition">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-4">
                <div className="p-3 bg-sky-500/10 rounded-lg">
                  <FileText className="h-6 w-6 text-sky-500" />
                </div>
                <div>
                  <div className="flex items-center gap-x-2">
                    <h3 className="font-bold text-white">{resource.title}</h3>
                    <span className="flex items-center gap-x-1 text-[10px] bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                      <Lock className="h-2 w-2" />
                      Gated
                    </span>
                  </div>
                  <div className="flex items-center gap-x-3 mt-1">
                    <span className="text-xs text-zinc-500">{resource.type}</span>
                    {resource.category && (
                      <>
                        <span className="h-1 w-1 bg-zinc-700 rounded-full" />
                        <span className="text-xs text-zinc-500">{resource.category}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-x-6">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-bold text-white">0</p>
                  <p className="text-[10px] text-zinc-500 uppercase font-medium">Downloads</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <button 
                    onClick={() => window.open(resource.fileUrl, "_blank")}
                    className="p-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => {
                      setResourceToDelete(resource.id);
                      setShowDeleteModal(true);
                    }}
                    className="p-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-red-500 transition"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
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
            
            <h3 className="text-xl font-bold text-white text-center mb-2">Delete Resource?</h3>
            <p className="text-zinc-400 text-center mb-6">
              This action cannot be undone. This document will be permanently removed from your library.
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
                  "Delete Resource"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourcesPage;
