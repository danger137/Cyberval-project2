"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { 
  FileText, 
  ArrowLeft, 
  Save, 
  Loader2,
  Image as ImageIcon,
  CheckCircle2,
  X,
  FileUp
} from "lucide-react";
import Link from "next/link";
import { CldUploadWidget } from "next-cloudinary";

export default function EditResourcePage() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "Article",
    category: "Blog",
    fileUrl: "",
    image: "",
    content: "",
    author: "",
  });

  useEffect(() => {
    const fetchResource = async () => {
      try {
        const response = await fetch(`/api/resources/${params.id}`);
        const data = await response.json();

        if (response.ok) {
          setFormData({
            title: data.title || "",
            description: data.description || "",
            type: data.type || "Article",
            category: data.category || "Blog",
            fileUrl: data.fileUrl || "",
            image: data.image || "",
            content: data.content || "",
            author: data.author || "",
          });
        }
      } catch (error) {
        console.error("Error fetching resource:", error);
      } finally {
        setFetching(false);
      }
    };

    if (params.id) {
      fetchResource();
    }
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.category === "E-book" && !formData.fileUrl) {
      alert("Please upload a file for the E-book");
      return;
    }
    setLoading(true);

    try {
      const response = await fetch(`/api/resources/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong");
      }

      router.push("/dashboard/resources");
      router.refresh();
    } catch (err) {
      console.error("Error updating resource:", err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
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
          <Link href="/dashboard/resources">
            <button className="p-2 hover:bg-white/10 rounded-full text-zinc-400 hover:text-white transition">
              <ArrowLeft className="h-5 w-5" />
            </button>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight font-sora text-white">Edit Resource</h2>
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
              <label className="text-sm font-medium text-zinc-400">Category</label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition"
              >
                <option value="Blog" className="bg-[#0b1b33]">Blog</option>
                <option value="E-book" className="bg-[#0b1b33]">E-book</option>
                <option value="Newsletter" className="bg-[#0b1b33]">Newsletter</option>
              </select>
            </div>
            {formData.category === "E-book" && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Author</label>
                <input
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  placeholder="e.g. Kevin Mitnick"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition"
                />
              </div>
            )}
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Resource Type</label>
              <select
                required
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition"
              >
                <option value="Article" className="bg-[#0b1b33]">Article / Post</option>
                <option value="PDF" className="bg-[#0b1b33]">PDF Document</option>
                <option value="Whitepaper" className="bg-[#0b1b33]">Whitepaper</option>
                <option value="Guide" className="bg-[#0b1b33]">Guide / eBook</option>
              </select>
            </div>
          </div>

          {(formData.category === "Blog" || formData.category === "Newsletter") && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Content (Markdown/Text)</label>
              <textarea
                rows={10}
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Write your content here..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition resize-none"
              />
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Cover Image</label>
              <CldUploadWidget 
                uploadPreset="cyberval_portfolio"
                onSuccess={(result) => {
                  setFormData({ ...formData, image: result.info.secure_url });
                }}
              >
                {({ open }) => (
                  <div 
                    onClick={() => open()}
                    className="relative group cursor-pointer border-2 border-dashed border-white/10 rounded-2xl h-[200px] flex flex-col items-center justify-center hover:border-sky-500/50 hover:bg-sky-500/5 transition overflow-hidden p-4"
                  >
                    {formData.image ? (
                      <img src={formData.image} alt="Cover" className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-center">
                        <p className="text-white text-xs font-medium">Click to Upload Image</p>
                      </div>
                    )}
                  </div>
                )}
              </CldUploadWidget>
            </div>

            {(formData.category === "E-book" || formData.category === "Newsletter") && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Downloadable File (PDF/ZIP)</label>
                <CldUploadWidget 
                  uploadPreset="cyberval_portfolio"
                  onSuccess={(result) => {
                    setFormData({ ...formData, fileUrl: result.info.secure_url });
                  }}
                >
                  {({ open }) => (
                    <div 
                      onClick={() => open()}
                      className="relative group cursor-pointer border-2 border-dashed border-white/10 rounded-2xl h-[200px] flex flex-col items-center justify-center hover:border-sky-500/50 hover:bg-sky-500/5 transition overflow-hidden p-4"
                    >
                      {formData.fileUrl ? (
                        <div className="text-center text-emerald-500 font-bold">File Uploaded</div>
                      ) : (
                        <div className="text-center">
                          <p className="text-white text-xs font-medium">Click to Upload File</p>
                        </div>
                      )}
                    </div>
                  )}
                </CldUploadWidget>
              </div>
            )}
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
            Update Resource
          </button>
        </div>
      </form>
    </div>
  );
}
