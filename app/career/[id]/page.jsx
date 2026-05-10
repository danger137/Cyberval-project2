"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import "../job-detail.css";
import ScrollReveal from "../../component/ScrollReveal";
import { jobsData } from "../jobsData";

export default function JobDetailPage() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [similarJobs, setSimilarJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        setLoading(true);
        // Fetch current job
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        
        if (res.ok) {
          setJob(data);
          
          // Fetch all jobs to find similar ones (filtered by department)
          const allRes = await fetch("/api/jobs");
          const allData = await allRes.json();
          if (Array.isArray(allData)) {
            setSimilarJobs(
              allData
                .filter(j => j.id !== data.id && j.department === data.department)
                .slice(0, 3)
            );
          }
        }
      } catch (error) {
        console.error("Error fetching job:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchJobData();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        <div className="h-10 w-10 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAFC]">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Not Found</h2>
        <Link href="/career" className="text-sky-500 hover:underline">Back to Careers</Link>
      </div>
    );
  }

  return (
    <div className="job-detail-container">
      {/* Job Header */}
      <section className="job-detail-header">
        <ScrollReveal direction="up">
          <div className="job-header-left text-left">
            <h1 className="font-sora text-[32px] font-semibold text-[#030D1A] mb-4">{job.title}</h1>
            <div className="flex gap-3 mb-4">
              <span className="job-tag">{job.location} / {job.workMode || "On-site"}</span>
              <span className="job-tag">{job.type}</span>
            </div>
          </div>
        </ScrollReveal>
        <div className="job-header-right">
          <Link href="#apply-form" className="apply-now-btn">Apply now</Link>
          <button className="share-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </button>
        </div>
      </section>

      {/* Job Content */}
      <div className="job-content-wrapper">
        <div className="job-main-content">
          <ScrollReveal direction="up">
            <div className="job-section">
              <p className="job-section-text">{job.description}</p>
            </div>

            {job.requirements && job.requirements.length > 0 && (
              <div className="job-section">
                <h2 className="job-section-title">Requirements</h2>
                <ul className="job-list-items">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="job-list-item">{req}</li>
                  ))}
                </ul>
              </div>
            )}

            {job.qualifications && job.qualifications.length > 0 && (
              <div className="job-section">
                <h2 className="job-section-title">Qualification & Experience</h2>
                <ul className="job-list-items">
                  {job.qualifications.map((qual, i) => (
                    <li key={i} className="job-list-item">{qual}</li>
                  ))}
                </ul>
              </div>
            )}
          </ScrollReveal>
        </div>

        {/* Sidebar */}
        <aside className="job-sidebar">
          <h3 className="sidebar-title">Job Position</h3>
          <div className="sidebar-info-item">
            <span className="info-label">Employee Type</span>
            <span className="info-value">{job.type || "Full Time"}</span>
          </div>
          <div className="sidebar-info-item">
            <span className="info-label">Location</span>
            <span className="info-value">{job.location}</span>
          </div>
          <div className="sidebar-info-item">
            <span className="info-label">Job Type</span>
            <span className="info-value">{job.workMode || "On-site"}</span>
          </div>
          <div className="sidebar-info-item">
            <span className="info-label">Experience</span>
            <span className="info-value">{job.experience || "Not specified"}</span>
          </div>
          <div className="sidebar-info-item">
            <span className="info-label">Job Posted</span>
            <span className="info-value">{new Date(job.createdAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</span>
          </div>
        </aside>
      </div>

      {/* Submit Form */}
      <section id="apply-form" className="form-section">
        <ScrollReveal direction="up">
          <div className="form-container">
            <h2 className="form-title">Submit Form</h2>
            <form className="apply-form">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input type="text" placeholder="Write here" className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" placeholder="Write here" className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input type="text" placeholder="Write here" className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Upload your CV</label>
                <div className="file-upload-wrapper">
                  <label className="file-upload-btn">
                    Upload Resume
                    <input type="file" style={{ display: 'none' }} />
                  </label>
                  <span className="file-name">No file chosen</span>
                </div>
              </div>
              <div className="form-group full-width">
                <label className="form-label">Message</label>
                <textarea placeholder="Write here" className="form-textarea"></textarea>
              </div>
              <div className="submit-btn-wrapper">
                <button type="submit" className="submit-btn">Submit</button>
              </div>
            </form>
          </div>
        </ScrollReveal>
      </section>

      {/* Similar Jobs */}
      {similarJobs.length > 0 && (
        <section className="similar-jobs-section">
          <ScrollReveal direction="up">
            <h2 className="font-sora text-[32px] font-semibold text-[#030D1A] text-left">Similar Jobs</h2>
            <div className="similar-jobs-grid">
              {similarJobs.map((sJob) => (
                <div key={sJob.id} className="similar-job-card">
                  <h3 className="similar-job-title">{sJob.title}</h3>
                  <div className="similar-job-meta">
                    {sJob.location} • {sJob.type}
                  </div>
                  <div className="mb-4 text-[12px] text-[#64748B]">
                    {new Date(sJob.createdAt).toLocaleDateString()} • {sJob._count?.applications || 0} applicants
                  </div>
                  <Link href={`/career/${sJob.id}`} className="see-positions-btn">
                    See Positions
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}
    </div>
  );
}
