"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  FileText, 
  ArrowLeft, 
  Save, 
  Loader2,
  FileUp,
  ShieldCheck,
  X,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { CldUploadWidget } from "next-cloudinary";

export default function NewResourcePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "PDF",
    category: "",
    fileUrl: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fileUrl) {
      alert("Please upload a file first");
      return;
    }
    setLoading(true);

    try {
      const response = await fetch("/api/resources", {
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

      console.log("Resource added successfully:", data);
      router.push("/dashboard/resources");
      router.refresh();
    } catch (err) {
      console.error("Error adding resource:", err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <Link href="/dashboard/resources">
            <button className="p-2 hover:bg-white/10 rounded-full text-zinc-400 hover:text-white transition">
              <ArrowLeft className="h-5 w-5" />
            </button>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight font-sora text-white">Upload Resource</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-[#0b1b33] border border-white/10 rounded-2xl p-8 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-zinc-400">Resource Title</label>
              <div className="relative">
                <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
                <input
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. 2024 Cybersecurity Threat Report"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition"
                />
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-zinc-400">Description</label>
              <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Briefly describe what this resource covers..."
                rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition resize-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">File Type</label>
              <select
                required
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition"
              >
                <option value="PDF" className="bg-[#0b1b33]">PDF Document</option>
                <option value="Whitepaper" className="bg-[#0b1b33]">Whitepaper</option>
                <option value="Guide" className="bg-[#0b1b33]">Guide / eBook</option>
                <option value="Toolkit" className="bg-[#0b1b33]">Toolkit / Checklist</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Category</label>
              <input
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="e.g. Compliance, Threat Intel"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-400">Resource File</label>
            <CldUploadWidget 
              uploadPreset="cyberval_portfolio"
              onSuccess={(result) => {
                if (result.info && typeof result.info !== 'string') {
                  setFormData({ ...formData, fileUrl: result.info.secure_url });
                }
              }}
            >
              {({ open }) => (
                <div 
                  onClick={() => open()}
                  className="relative group cursor-pointer border-2 border-dashed border-white/10 rounded-2xl min-h-[160px] flex flex-col items-center justify-center hover:border-sky-500/50 hover:bg-sky-500/5 transition overflow-hidden p-6"
                >
                  {formData.fileUrl ? (
                    <div className="flex flex-col items-center gap-y-3">
                      <div className="h-12 w-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500">
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                      <div className="text-center">
                        <p className="text-white font-medium">File Uploaded Successfully</p>
                        <p className="text-xs text-zinc-400 mt-1 truncate max-w-[300px]">{formData.fileUrl}</p>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setFormData({ ...formData, fileUrl: "" });
                        }}
                        className="mt-2 text-xs text-red-400 hover:text-red-300 flex items-center gap-x-1"
                      >
                        <X className="h-3 w-3" /> Remove & Replace
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="h-12 w-12 bg-white/5 rounded-xl flex items-center justify-center text-zinc-500 group-hover:text-sky-500 group-hover:bg-sky-500/10 transition mb-3">
                        <FileUp className="h-6 w-6" />
                      </div>
                      <div className="text-center">
                        <p className="text-white font-medium">Click to Upload File</p>
                        <p className="text-sm text-zinc-500 mt-1">PDF, DOCX, or ZIP files supported</p>
                      </div>
                    </>
                  )}
                </div>
              )}
            </CldUploadWidget>
          </div>

          <div className="p-4 bg-sky-500/10 border border-sky-500/20 rounded-xl flex items-start gap-x-3">
            <ShieldCheck className="h-5 w-5 text-sky-500 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-sky-500">Gated Content Protection</p>
              <p className="text-xs text-sky-500/70 mt-1">
                By default, all uploaded resources are "Gated". Users must provide their contact information on the public site to download these files.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-x-4">
          <Link href="/dashboard/resources">
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
            Publish Resource
          </button>
        </div>
      </form>
    </div>
  );
}
