"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "./career.css";
import ScrollReveal from "../component/ScrollReveal";
export default function CareerPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const tabsRef = useRef(null);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/jobs");
      const data = await response.json();
      if (Array.isArray(data)) {
        setJobs(data);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const checkScroll = () => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    fetchJobs();
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  // Scroll active tab into view on mobile
  useEffect(() => {
    if (tabsRef.current) {
      const activeTabElement = tabsRef.current.querySelector(".tab-btn.active");
      if (activeTabElement) {
        activeTabElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center"
        });
      }
      setTimeout(checkScroll, 300); // Check after scroll animation
    }
  }, [activeTab]);

  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = 200;
      tabsRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const filteredJobs = jobs.filter(job => {
    const matchesTab = activeTab === "All" || job.department === activeTab;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getCategoryCount = (category) => {
    if (category === "All") return jobs.length;
    return jobs.filter(job => job.department === category).length;
  };

  const dynamicCategories = ["All", ...new Set(jobs.map(job => job.department))];

  return (
    <div className="career-container">
      {/* Hero Section */}
      <section className="career-hero">
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center">
            <div className="career-tag">
              <span>CAREER</span>
            </div>
            <h1 className="career-title">Career Opportunities</h1>
            <p className="career-subtitle">
              Explore exciting career paths and job opportunities with us
            </p>
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Search here..." 
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="search-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Tabs Section */}
      <section className="tabs-section">
        <ScrollReveal direction="up">
          <h2 className="section-heading">We have {jobs.length} open positions now!</h2>
          
          <div className="tabs-wrapper-outer">
            {canScrollLeft && (
              <button 
                className="scroll-arrow left" 
                onClick={() => scrollTabs("left")}
                aria-label="Scroll left"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
            )}
            
            <div 
              className="tabs-container" 
              ref={tabsRef}
              onScroll={checkScroll}
            >
              {dynamicCategories.map(category => (
                <button 
                  key={category}
                  className={`tab-btn ${activeTab === category ? "active" : ""}`}
                  onClick={() => setActiveTab(category)}
                >
                  {category} {category !== "All" && `(${getCategoryCount(category)})`}
                </button>
              ))}
            </div>

            {canScrollRight && (
              <button 
                className="scroll-arrow right" 
                onClick={() => scrollTabs("right")}
                aria-label="Scroll right"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            )}
          </div>
        </ScrollReveal>

        {/* Job Listings */}
        <div className="jobs-list">
          {loading ? (
            <div className="py-20 flex justify-center">
               <div className="h-8 w-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : filteredJobs.map((job, index) => (
            <ScrollReveal key={job.id} direction="up" delay={index * 0.1} className="job-card-wrapper">
              <div className="job-card">
                <div className="job-info text-left">
                  <h3 className="job-title">{job.title}</h3>
                  <div className="job-tags">
                    <span className="job-tag">{job.location}</span>
                    {job.workMode && <span className="job-tag">{job.workMode}</span>}
                    <span className="job-tag">{job.type}</span>
                  </div>
                  <p className="job-description line-clamp-3">
                    {job.description}
                  </p>
                </div>
                <div className="job-action">
                  <Link href={`/career/${job.id}`} className="view-openings-btn">
                    View Openings 
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
          
          {!loading && filteredJobs.length === 0 && (
            <div className="py-20">
              <p className="font-manrope text-gray-500 text-lg">No positions found matching your criteria.</p>
            </div>
          )}
        </div>

        {!loading && filteredJobs.length > 0 && (
          <div className="show-more-container">
            <button className="show-more-btn">Show More</button>
          </div>
        )}
      </section>
    </div>
  );
}
