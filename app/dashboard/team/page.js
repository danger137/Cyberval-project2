"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Edit, User, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const TeamPage = () => {
  const router = useRouter();
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/team");
      const data = await response.json();
      if (Array.isArray(data)) {
        setTeam(data);
      }
    } catch (error) {
      console.error("Error fetching team:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!memberToDelete) return;
    try {
      setIsDeleting(true);
      const response = await fetch(`/api/team/${memberToDelete}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setTeam(team.filter((m) => m.id !== memberToDelete));
        setShowDeleteModal(false);
        setMemberToDelete(null);
      } else {
        const error = await response.json();
        alert(error.error || "Failed to delete member");
      }
    } catch (error) {
      console.error("Error deleting member:", error);
      alert("Something went wrong");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight font-sora text-white">Team Management</h2>
          <p className="text-zinc-400">Manage the experts who protect your clients.</p>
        </div>
        <Link href="/dashboard/team/new">
          <button className="flex items-center gap-x-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition font-medium text-sm">
            <Plus className="h-4 w-4" />
            Add Team Member
          </button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <div key={member.id} className="group bg-[#0b1b33] border border-white/10 rounded-2xl overflow-hidden hover:border-sky-500/50 transition duration-300 p-6">
            <div className="flex flex-col items-center text-center">
              {/* Circular Profile Photo */}
              <div className="h-24 w-24 rounded-full overflow-hidden border-2 border-sky-500/30 mb-4 bg-white/5 flex-shrink-0">
                {member.imageUrl ? (
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-600">
                    <User className="h-10 w-10" />
                  </div>
                )}
              </div>

              {/* Name & Role */}
              <h3 className="text-lg font-bold text-white">{member.name}</h3>
              <p className="text-sm text-sky-400 font-medium mt-1">{member.designation}</p>
              
              {/* Bio */}
              {member.bio && (
                <p className="mt-3 text-sm text-zinc-400 line-clamp-2 italic">
                  &quot;{member.bio}&quot;
                </p>
              )}

              {/* Action Buttons */}
              <div className="flex gap-x-2 mt-4 pt-4 border-t border-white/5 w-full justify-center">
                <button 
                  onClick={() => router.push(`/dashboard/team/${member.id}/edit`)}
                  className="p-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition"
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => {
                    setMemberToDelete(member.id);
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

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowDeleteModal(false)}
          />
          <div className="relative bg-[#0b1b33] border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 text-red-500 mb-4 mx-auto">
              <AlertTriangle className="h-6 w-6" />
            </div>
            
            <h3 className="text-xl font-bold text-white text-center mb-2">Delete Team Member?</h3>
            <p className="text-zinc-400 text-center mb-6">
              This action cannot be undone. This member will be permanently removed from your team.
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
                  "Delete Member"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamPage;
