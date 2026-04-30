"use client";

import { useState, useEffect } from "react";
import { Plus, GripVertical, Trash2, Settings, Save, Eye, Loader2, CheckCircle2 } from "lucide-react";

const FormBuilderPage = () => {
  const [activeTab, setActiveTab] = useState("builder");
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  const [mounted, setMounted] = useState(false);
  
  const [formName, setFormName] = useState("Contact Inquiry Form");
  const [formDesc, setFormDesc] = useState("Used on the main landing page contact section.");
  const [fields, setFields] = useState([
    { id: "1", type: "text", label: "Full Name", placeholder: "Enter your name" },
    { id: "2", type: "email", label: "Email Address", placeholder: "Enter your email" },
    { id: "3", type: "textarea", label: "Message", placeholder: "How can we help?" },
  ]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fetch form structure on mount
  useEffect(() => {
    const fetchForm = async () => {
      try {
        const response = await fetch("/api/forms");
        const data = await response.json();
        if (data && data.fields) {
          setFormName(data.name);
          setFormDesc(data.description || "");
          setFields(data.fields);
        }
      } catch (error) {
        console.error("Error fetching form:", error);
      }
    };
    fetchForm();
  }, []);

  // Fetch submissions when tab changes
  useEffect(() => {
    if (activeTab === "submissions") {
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
    }
  }, [activeTab]);

  const addField = (type) => {
    const newField = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      label: `New ${type} field`,
      placeholder: `Enter ${type}...`,
    };
    setFields([...fields, newField]);
  };

  const removeField = (id) => {
    setFields(fields.filter(f => f.id !== id));
  };

  const updateField = (id, updates) => {
    setFields(fields.map(f => f.id === id ? { ...f, ...updates } : f));
  };

  const handleSaveForm = async () => {
    setSaving(true);
    setSaveSuccess(false);
    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName,
          description: formDesc,
          fields: fields
        })
      });

      if (response.ok) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
      } else {
        alert("Failed to save form");
      }
    } catch (error) {
      console.error("Error saving form:", error);
      alert("Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight font-sora text-white">Form Builder & Leads</h2>
          <p className="text-zinc-400">Create forms and manage incoming business inquiries.</p>
        </div>
        <div className="flex bg-[#0b1b33] p-1 rounded-xl border border-white/10 shadow-2xl">
          <button 
            onClick={() => setActiveTab("builder")}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${activeTab === 'builder' ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30' : 'text-zinc-400 hover:text-white'}`}
          >
            Builder
          </button>
          <button 
            onClick={() => setActiveTab("submissions")}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${activeTab === 'submissions' ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30' : 'text-zinc-400 hover:text-white'}`}
          >
            Submissions
          </button>
        </div>
      </div>

      {activeTab === "builder" ? (
        <div className="grid gap-8 lg:grid-cols-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-[#0b1b33] border border-white/10 rounded-2xl p-8 min-h-[500px] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-sky-500" />
              <div className="mb-8 pb-4 border-b border-white/10">
                <input 
                  value={formName} 
                  onChange={(e) => setFormName(e.target.value)}
                  className="bg-transparent text-2xl font-bold text-white focus:outline-none w-full border-b border-transparent focus:border-sky-500/30 transition-all py-1"
                  placeholder="Form Name"
                />
                <input 
                  value={formDesc} 
                  onChange={(e) => setFormDesc(e.target.value)}
                  className="bg-transparent text-sm text-zinc-500 focus:outline-none w-full mt-2 italic"
                  placeholder="Form description..."
                />
              </div>

              <div className="space-y-4">
                {fields.map((field) => (
                  <div key={field.id} className="group relative bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-x-4 hover:border-sky-500/50 hover:bg-white/10 transition-all duration-300">
                    <div className="cursor-grab text-zinc-600 hover:text-sky-500 transition">
                      <GripVertical className="h-5 w-5" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 text-sky-500 uppercase tracking-tighter">
                          {field.type}
                        </span>
                      </div>
                      <input 
                        value={field.label}
                        onChange={(e) => updateField(field.id, { label: e.target.value })}
                        className="bg-transparent text-sm font-medium text-white focus:outline-none w-full border-b border-transparent focus:border-sky-500/30 transition"
                      />
                    </div>
                    <div className="flex items-center gap-x-1 opacity-0 group-hover:opacity-100 transition-all">
                      <button className="p-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-sky-500 transition">
                        <Settings className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => removeField(field.id)}
                        className="p-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-red-500 transition"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => addField("text")}
                className="w-full mt-6 py-6 border-2 border-dashed border-white/10 rounded-xl text-zinc-500 hover:border-sky-500/50 hover:text-sky-500 hover:bg-sky-500/5 transition-all duration-300 flex flex-col items-center justify-center gap-y-2 font-medium group"
              >
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-sky-500/20 transition">
                  <Plus className="h-6 w-6" />
                </div>
                <span>Click or drag to add new field</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-[#0b1b33] border border-white/10 rounded-2xl p-6 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Plus className="h-5 w-5 text-sky-500" />
                Quick Fields
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["Text", "Email", "Textarea", "Select", "Checkbox", "Date"].map((type) => (
                  <button 
                    key={type}
                    onClick={() => addField(type.toLowerCase())}
                    className="p-3 bg-white/5 hover:bg-sky-500/10 border border-white/10 hover:border-sky-500/50 rounded-xl text-sm text-zinc-300 hover:text-white transition-all duration-300 text-left flex items-center gap-x-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-sky-500" />
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#0b1b33] border border-white/10 rounded-2xl p-6 shadow-xl space-y-4">
               <button 
                 onClick={handleSaveForm}
                 disabled={saving}
                 className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${saveSuccess ? 'bg-emerald-500 text-white' : 'bg-sky-500 hover:bg-sky-600 text-white shadow-sky-500/25'}`}
               >
                 {saving ? (
                   <Loader2 className="h-5 w-5 animate-spin" />
                 ) : saveSuccess ? (
                   <CheckCircle2 className="h-5 w-5" />
                 ) : (
                   <Save className="h-5 w-5" />
                 )}
                 {saving ? "Saving Configuration..." : saveSuccess ? "Form Structure Saved!" : "Publish Changes"}
               </button>
               {mounted && (
                 <p className="text-[10px] text-zinc-500 text-center uppercase tracking-widest font-bold">
                   Last updated: {new Date().toLocaleTimeString()}
                 </p>
               )}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#0b1b33] border border-white/10 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-8 py-5 text-xs font-bold text-zinc-500 uppercase tracking-widest">Inquiry Details</th>
                  <th className="px-8 py-5 text-xs font-bold text-zinc-500 uppercase tracking-widest text-center">Type</th>
                  <th className="px-8 py-5 text-xs font-bold text-zinc-500 uppercase tracking-widest text-center">Date Received</th>
                  <th className="px-8 py-5 text-xs font-bold text-zinc-500 uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {submissions.map((sub) => (
                  <tr key={sub.id} className="hover:bg-white/5 transition-all duration-300 group">
                    <td className="px-8 py-5">
                      <p className="text-sm font-bold text-white group-hover:text-sky-400 transition">{sub.name || "Anonymous"}</p>
                      <p className="text-xs text-zinc-500 font-medium">{sub.email || "No email provided"}</p>
                    </td>
                    <td className="px-8 py-5 text-center">
                      <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 text-[10px] font-black uppercase tracking-widest border border-sky-500/20">
                        {sub.formName || "General"}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-sm text-zinc-400 text-center font-medium">
                      {new Date(sub.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="p-2.5 hover:bg-sky-500/10 rounded-xl text-zinc-400 hover:text-sky-500 transition-all duration-300 border border-transparent hover:border-sky-500/30">
                        <Eye className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
                {loading && (
                  <tr>
                    <td colSpan={4} className="px-8 py-20 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <Loader2 className="h-10 w-10 text-sky-500 animate-spin" />
                        <p className="text-sm text-zinc-500 font-bold animate-pulse">Retrieving your leads...</p>
                      </div>
                    </td>
                  </tr>
                )}
                {!loading && submissions.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-8 py-24 text-center">
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
      )}
    </div>
  );
};

export default FormBuilderPage;
