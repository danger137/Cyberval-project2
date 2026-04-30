"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  User, 
  ArrowLeft, 
  Save, 
  Loader2,
  Camera,
  Linkedin,
  Shield,
  CheckCircle2,
  X
} from "lucide-react";
import Link from "next/link";
import { CldUploadWidget } from "next-cloudinary";

export default function NewTeamMemberPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    bio: "",
    image: "",
    linkedin: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image) {
      alert("Please upload a profile photo first");
      return;
    }
    setLoading(true);

    try {
      const response = await fetch("/api/team", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      console.log("Team member added successfully:", data);
      router.push("/dashboard/team");
      router.refresh();
    } catch (err) {
      console.error("Error adding team member:", err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <Link href="/dashboard/team">
            <button className="p-2 hover:bg-white/10 rounded-full text-zinc-400 hover:text-white transition">
              <ArrowLeft className="h-5 w-5" />
            </button>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight font-sora text-white">Add Team Member</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-[#0b1b33] border border-white/10 rounded-2xl p-8 space-y-6">
          {/* Photo Upload Section */}
          <CldUploadWidget 
            uploadPreset="cyberval_portfolio"
            options={{ 
              cropping: true, 
              croppingAspectRatio: 1,
              showSkipCropButton: false,
              croppingShowDimensions: true,
              clientAllowedFormats: ["png", "jpg", "jpeg", "webp"]
            }}
            onSuccess={(result) => {
              setFormData({ ...formData, image: result.info.secure_url });
            }}
            onUpload={(result) => {
              setFormData({ ...formData, image: result.info.secure_url });
            }}
          >
            {({ open }) => (
              <div 
                onClick={() => open()}
                className="relative group cursor-pointer border-2 border-dashed border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center hover:border-sky-500/50 hover:bg-sky-500/5 transition overflow-hidden"
              >
                {formData.image ? (
                  <div className="relative">
                    <div className="h-32 w-32 rounded-full border-4 border-sky-500/30 overflow-hidden shadow-2xl">
                      <img 
                        src={formData.image} 
                        alt="Profile preview" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-1.5 rounded-full shadow-lg border-2 border-[#0b1b33]">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setFormData({ ...formData, image: "" });
                      }}
                      className="absolute -top-2 -right-2 bg-red-500 text-white p-1.5 rounded-full shadow-lg border-2 border-[#0b1b33] opacity-0 group-hover:opacity-100 transition"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="h-20 w-20 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-sky-500/10 group-hover:text-sky-500 transition border border-white/10">
                      <Camera className="h-8 w-8" />
                    </div>
                    <div className="text-center">
                      <p className="text-white font-medium">Upload Profile Photo</p>
                      <p className="text-xs text-zinc-500 mt-1">Recommended: Square image, max 2MB</p>
                    </div>
                  </>
                )}
              </div>
            )}
          </CldUploadWidget>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
                <input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. David Miller"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Role / Designation</label>
              <div className="relative">
                <Shield className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
                <input
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="e.g. CEO & Founder"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition"
                />
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-zinc-400">LinkedIn Profile URL</label>
              <div className="relative">
                <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
                <input
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  placeholder="https://linkedin.com/in/username"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-400">Biography</label>
            <textarea
              required
              rows={4}
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              placeholder="Brief professional background..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition resize-none"
            />
          </div>
        </div>

        <div className="flex justify-end gap-x-4">
          <Link href="/dashboard/team">
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
            Save Member
          </button>
        </div>
      </form>
    </div>
  );
}
