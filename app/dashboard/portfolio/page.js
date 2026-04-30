"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Edit, ExternalLink, Image as ImageIcon, AlertTriangle } from "lucide-react";
import Link from "next/link";

const CaseStudiesPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/case-studies");
      const data = await response.json();
      if (Array.isArray(data)) {
        setProjects(data);
      }
    } catch (error) {
      console.error("Error fetching case studies:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!projectToDelete) return;

    try {
      setIsDeleting(true);
      const response = await fetch(`/api/case-studies/${projectToDelete}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setProjects(projects.filter(p => p.id !== projectToDelete));
        setShowDeleteModal(false);
        setProjectToDelete(null);
      } else {
        const error = await response.json();
        alert(error.error || "Failed to delete project");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("Something went wrong");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight font-sora text-white">Case Studies</h2>
          <p className="text-zinc-400">Showcase your successful projects and client results.</p>
        </div>
        <Link href="/dashboard/portfolio/new">
          <button className="flex items-center gap-x-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition font-medium text-sm">
            <Plus className="h-4 w-4" />
            Create New Project
          </button>
        </Link>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-[#0b1b33] border border-white/10 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/5 transition group">
            <div className="flex items-center gap-x-4">
              <div className="h-16 w-16 bg-white/5 rounded-lg flex items-center justify-center text-zinc-500 group-hover:text-sky-500 transition overflow-hidden">
                {project.images?.[0] ? (
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <ImageIcon className="h-8 w-8" />
                )}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition">{project.title}</h3>
                <div className="flex items-center gap-x-3 mt-1">
                  <span className="text-sm text-zinc-400">{project.client}</span>
                  <span className="h-1 w-1 bg-zinc-600 rounded-full" />
                  <span className="text-sm text-zinc-500">{project.date ? new Date(project.date).toLocaleDateString() : "No date"}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-x-4">
              <div className="flex items-center gap-x-2 border-l border-white/10 pl-4 ml-4">
                <button className="p-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition">
                  <Edit className="h-4 w-4" />
                </button>
                <button className="p-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-sky-500 transition">
                  <ExternalLink className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => {
                    setProjectToDelete(project.id);
                    setShowDeleteModal(true);
                  }}
                  className="p-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-red-500 transition"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
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
            
            <h3 className="text-xl font-bold text-white text-center mb-2">Delete Project?</h3>
            <p className="text-zinc-400 text-center mb-6">
              This action cannot be undone. This case study will be permanently removed from your public portfolio.
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
                  "Delete Project"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudiesPage;
