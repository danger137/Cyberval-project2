"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  FileText, 
  User, 
  ArrowLeft, 
  Save, 
  Loader2,
  Calendar,
  Image as ImageIcon,
  Plus,
  Trash2
} from "lucide-react";
import Link from "next/link";
import { CldUploadWidget } from "next-cloudinary";

export default function NewCaseStudyPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    client: "",
    category: "",
    date: "",
    description: "",
    image: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/case-studies", {
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

      console.log("Case study created successfully:", data);
      router.push("/dashboard/portfolio");
      router.refresh();
    } catch (err) {
      console.error("Error creating case study:", err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <Link href="/dashboard/portfolio">
            <button className="p-2 hover:bg-white/10 rounded-full text-zinc-400 hover:text-white transition">
              <ArrowLeft className="h-5 w-5" />
            </button>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight font-sora text-white">Create New Project</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-[#0b1b33] border border-white/10 rounded-2xl p-8 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Project Title</label>
              <div className="relative">
                <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
                <input
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Global Bank Security Audit"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Client Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
                <input
                  required
                  value={formData.client}
                  onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                  placeholder="e.g. FinanceCorp"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Project Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Category</label>
              <input
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="e.g. Security Audit, Cloud Security"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-400">Project Description</label>
            <textarea
              required
              rows={6}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe the project scope, challenges, and results..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-400">Project Cover Image</label>
            <CldUploadWidget 
              uploadPreset="cyberval_portfolio" 
              onSuccess={(result) => {
                setFormData({ ...formData, image: result.info.secure_url });
              }}
            >
              {({ open }) => (
                <div 
                  onClick={() => open()}
                  className="relative group cursor-pointer border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center hover:border-sky-500/50 hover:bg-sky-500/5 transition overflow-hidden"
                >
                  {formData.image ? (
                    <div className="w-full min-h-[300px] flex items-center justify-center bg-black/20">
                      <img 
                        src={formData.image} 
                        alt="Preview" 
                        className="max-w-full max-h-[500px] object-contain"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                        <p className="text-white text-sm font-bold">Change Image</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="p-4 bg-white/5 rounded-full mb-3 group-hover:bg-sky-500/20 transition">
                        <ImageIcon className="h-8 w-8 text-zinc-500 group-hover:text-sky-500 transition" />
                      </div>
                      <p className="text-sm font-medium text-zinc-400 group-hover:text-white transition">Select Project Image</p>
                      <p className="text-xs text-zinc-600 mt-1">PNG, JPG, or WEBP up to 5MB</p>
                    </>
                  )}
                </div>
              )}
            </CldUploadWidget>
            {formData.image && (
              <button 
                type="button"
                onClick={() => setFormData({ ...formData, image: "" })}
                className="mt-2 text-xs text-red-500 hover:text-red-400 flex items-center gap-1 transition"
              >
                <Trash2 className="h-3 w-3" /> Remove Image
              </button>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-x-4">
          <Link href="/dashboard/portfolio">
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
            Save Project
          </button>
        </div>
      </form>
    </div>
  );
}
