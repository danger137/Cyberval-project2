"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./career.css";
import ScrollReveal from "../component/ScrollReveal";
import { jobsData } from "./jobsData";

const categories = [
  "All",
  "Security Engineering",
  "Threat Analysis",
  "Security Design",
  "Incident Response"
];

export default function CareerPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobsData.filter(job => {
    const matchesTab = activeTab === "All" || job.category === activeTab;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getCategoryCount = (category) => {
    if (category === "All") return jobsData.length;
    return jobsData.filter(job => job.category === category).length;
  };

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
          <h2 className="section-heading">We have {jobsData.length} open positions now!</h2>
          <div className="tabs-container">
            {categories.map(category => (
              <button 
                key={category}
                className={`tab-btn ${activeTab === category ? "active" : ""}`}
                onClick={() => setActiveTab(category)}
              >
                {category} {category !== "All" && `(${getCategoryCount(category)})`}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Job Listings */}
        <div className="jobs-list">
          {filteredJobs.map((job, index) => (
            <ScrollReveal key={job.id} direction="up" delay={index * 0.1} className="job-card-wrapper">
              <div className="job-card">
                <div className="job-info text-left">
                  <h3 className="job-title">{job.title}</h3>
                  <div className="job-tags">
                    <span className="job-tag">{job.location}</span>
                    {job.workMode && <span className="job-tag">{job.workMode}</span>}
                    <span className="job-tag">{job.type}</span>
                  </div>
                  <p className="job-description">
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
          
          {filteredJobs.length === 0 && (
            <div className="py-20">
              <p className="font-manrope text-gray-500 text-lg">No positions found matching your criteria.</p>
            </div>
          )}
        </div>

        {filteredJobs.length > 0 && (
          <div className="show-more-container">
            <button className="show-more-btn">Show More</button>
          </div>
        )}
      </section>
    </div>
  );
}
