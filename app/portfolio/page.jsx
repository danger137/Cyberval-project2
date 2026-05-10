"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Loader2, Search } from "lucide-react";
import ScrollReveal from "../component/ScrollReveal";
import Footer from "../component/footer/Footer";
import "./portfolio.css";

export default function PortfolioPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/case-studies");
        const data = await response.json();
        if (Array.isArray(data)) {
          setProjects(data);
        }
      } catch (error) {
        console.error("Error fetching portfolio:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const categories = ["All", ...new Set(projects.map(p => p.category).filter(Boolean))];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="portfolio-hero-content">
          <ScrollReveal direction="up">
            <span className="portfolio-badge">Success Stories</span>
            <h1 className="portfolio-title">
              Our <span className="highlight">Portfolio</span> of Digital Resilience
            </h1>
            <p className="portfolio-subtitle">
              Explore how we've helped organizations across the globe strengthen their cybersecurity posture and achieve compliance excellence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="portfolio-grid-section">
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-manrope font-semibold transition-all duration-300 ${
                filter === cat 
                  ? "bg-[#2E5A88] text-white shadow-lg" 
                  : "bg-white text-[#585858] border border-gray-200 hover:border-[#2E5A88] hover:text-[#2E5A88]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="h-10 w-10 animate-spin text-[#2E5A88] mb-4" />
            <p className="text-[#585858] font-manrope">Loading our success stories...</p>
          </div>
        ) : (
          <div className="portfolio-grid">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.id} direction="up" delay={index * 0.1}>
                <Link href={`/portfolio/${project.id}`}>
                  <article className="portfolio-card">
                    <div className="portfolio-image-wrapper">
                      <img 
                        src={project.images?.[0] || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1470&auto=format&fit=crop"} 
                        alt={project.title} 
                        className="portfolio-image"
                      />
                      {project.category && (
                        <span className="portfolio-category-tag">{project.category}</span>
                      )}
                    </div>
                    <div className="portfolio-card-content">
                      <span className="portfolio-client">{project.client}</span>
                      <h3 className="portfolio-card-title">{project.title}</h3>
                      <p className="portfolio-card-desc">{project.description}</p>
                      
                      <div className="portfolio-card-footer">
                        <span className="portfolio-date">
                          {project.date ? new Date(project.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : ""}
                        </span>
                        <div className="btn-view-case">
                          View Case Study <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}

        {!loading && filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-sora font-bold text-[#212121]">No case studies found</h3>
            <p className="text-[#585858] font-manrope mt-2">Try selecting a different category.</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
