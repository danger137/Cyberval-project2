"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag, CheckCircle2, Quote, Loader2 } from "lucide-react";
import ScrollReveal from "../../component/ScrollReveal";
import Footer from "../../component/footer/Footer";
import "./portfolio.css";

export default function PortfolioDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/case-studies/${params.id}`);
        const data = await response.json();
        if (response.ok) {
          setProject(data);
        } else {
          router.push("/portfolio");
        }
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchProject();
    }
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <Loader2 className="h-10 w-10 animate-spin text-[#2E5A88] mb-4" />
        <p className="text-[#585858] font-manrope">Loading case study details...</p>
      </div>
    );
  }

  if (!project) return null;

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero !min-h-[500px]">
        <div className="portfolio-hero-content !max-w-[1000px] !text-left !mx-auto !w-full px-5">
          <ScrollReveal direction="left">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sky-400 hover:text-white transition mb-8 font-manrope font-semibold">
              <ArrowLeft className="h-4 w-4" /> Back to Portfolio
            </Link>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-white text-sm font-semibold border border-white/10">
                <Tag className="h-4 w-4 text-sky-400" /> {project.category}
              </span>
              <span className="flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-white text-sm font-semibold border border-white/10">
                <Calendar className="h-4 w-4 text-sky-400" /> {project.date ? new Date(project.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : ""}
              </span>
            </div>
            <h1 className="portfolio-title !text-5xl md:!text-6xl !max-w-4xl">{project.title}</h1>
            <div className="flex items-center gap-3 mt-8">
              <div className="h-10 w-10 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold">
                {project.client?.charAt(0)}
              </div>
              <div>
                <p className="text-white font-bold leading-none">{project.client}</p>
                <p className="text-sky-400 text-sm mt-1">Valued Partner</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-[1230px] mx-auto px-5 -mt-20 relative z-30 pb-20">
        <ScrollReveal direction="up">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 mb-16">
            <img 
              src={project.images?.[0] || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1470&auto=format&fit=crop"} 
              alt={project.title}
              className="w-full h-auto max-h-[600px] object-cover"
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <ScrollReveal direction="up">
              <section>
                <h2 className="text-3xl font-sora font-bold text-[#212121] mb-6">Project Overview</h2>
                <div className="text-lg text-[#585858] leading-relaxed font-manrope whitespace-pre-wrap">
                  {project.description}
                </div>
              </section>
            </ScrollReveal>

            {project.results && (
              <ScrollReveal direction="up">
                <section className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
                  <h2 className="text-3xl font-sora font-bold text-[#212121] mb-8 flex items-center gap-3">
                    <CheckCircle2 className="h-8 w-8 text-[#2E5A88]" /> Key Results
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.results.split(';').map((result, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <div className="h-6 w-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <p className="text-[#585858] font-manrope font-medium">{result.trim()}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </ScrollReveal>
            )}
          </div>

          <div className="space-y-8">
            {project.testimonial && (
              <ScrollReveal direction="right">
                <div className="bg-[#030D1A] rounded-3xl p-8 text-white relative overflow-hidden">
                  <Quote className="absolute top-4 right-4 h-16 w-16 text-white/5" />
                  <div className="relative z-10">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map(s => <Tag key={s} className="h-4 w-4 fill-sky-400 text-sky-400" />)}
                    </div>
                    <p className="italic text-lg font-manrope leading-relaxed mb-6">
                      "{project.testimonial}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                        <User className="h-6 w-6 text-sky-400" />
                      </div>
                      <div>
                        <p className="font-bold">Client Feedback</p>
                        <p className="text-sky-400 text-sm">{project.client}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <h3 className="font-sora font-bold text-xl mb-6">Share this Case Study</h3>
                <div className="flex gap-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center cursor-pointer hover:bg-sky-500 hover:text-white transition duration-300">
                      <Search className="h-5 w-5" />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
