"use client";

import React, { useState } from "react";
import Link from "next/link";

const blogData = [
  {
    id: 1,
    title: "Top Cybersecurity Trends to Watch in 2026",
    date: "Jan 15, 2026",
    image: "/images/pages/resources/Blog/card-1-image.svg",
    description: "Discover the latest threats and protection strategies as the digital landscape continues to evolve in the coming year."
  },
  {
    id: 2,
    title: "Navigating AI Security Challenges in Modern Enterprises",
    date: "Jan 10, 2026",
    image: "/images/pages/resources/Blog/card-2-image.svg",
    description: "How organizations can safely adopt AI while maintaining a robust security posture and protecting sensitive data."
  },
  {
    id: 3,
    title: "The Future of Compliance: SOC 2 and Beyond",
    date: "Jan 05, 2026",
    image: "/images/pages/resources/Blog/card-3-image.svg",
    description: "Stay ahead of regulatory changes and ensure your organization remains compliant and secure in an increasingly regulated world."
  },
  {
    id: 4,
    title: "Understanding the Role of Zero Trust Architecture",
    date: "Jan 02, 2026",
    image: "/images/pages/resources/Blog/card-1-image.svg",
    description: "Learn why Zero Trust is becoming the gold standard for enterprise security in a perimeter-less world."
  },
  {
    id: 5,
    title: "Securing Remote Workforces in the Age of Cloud",
    date: "Dec 28, 2025",
    image: "/images/pages/resources/Blog/card-2-image.svg",
    description: "Best practices for maintaining visibility and control over distributed teams and cloud-native applications."
  },
  {
    id: 6,
    title: "Best Practices for Incident Response Planning",
    date: "Dec 20, 2025",
    image: "/images/pages/resources/Blog/card-3-image.svg",
    description: "A comprehensive guide to building a resilient incident response plan that minimizes business disruption."
  }
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-[#ffffff]">
      {/* Hero Section */}
      <section className="relative w-full h-[550px] max-[1454px]:h-auto mx-auto flex flex-col justify-center items-center overflow-hidden bg-[url('/images/pages/services/service-6/hero-bg.svg')] bg-cover bg-center bg-no-repeat bg-[#030D1A] opacity-100 p-[120px_20px_80px] max-[1454px]:p-[160px_20px_100px] text-center">
        <div className="relative w-full max-w-[850px] flex flex-col items-center gap-[21px] text-center z-[5] px-[20px] mx-auto">
          <div className="flex justify-center items-center w-auto h-[38px] gap-[8.12px] rounded-[27.61px] p-[8.12px_24px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] m-0">
            <span className="opacity-100 font-manrope font-semibold text-[14px] leading-none tracking-[0.09em] uppercase text-[#FFFFFF] bg-transparent border-none whitespace-nowrap">RESOURCES</span>
          </div>

          <h1 className="font-sora text-[40px] font-semibold text-[#ffffff] w-full max-w-[750px] opacity-100 leading-[1.3] text-center [text-wrap:balance] mx-auto max-[1454px]:h-auto max-[1454px]:text-[clamp(32px,5vw,40px)] max-[1454px]:leading-normal m-0">
            Blog
          </h1>

          <p className="font-manrope font-normal text-[18px] leading-[30px] text-[#EEEEEE] w-full max-w-[687px] opacity-100 text-center mx-auto max-[1454px]:h-auto max-[768px]:text-[16px] m-0">
            Stay updated with the latest insights, trends, and expert guidance in the ever-evolving world of cybersecurity.
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-[600px] mt-[30px]">
            <input 
              type="text" 
              placeholder="Search articles..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-[60px] pl-[60px] pr-[30px] rounded-[30px] bg-white border-none outline-none font-manrope text-[16px] text-[#030D1A] shadow-lg"
            />
            <div className="absolute left-[24px] top-1/2 -translate-y-1/2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="p-[100px_20px] bg-[#ffffff]">
        <div className="max-w-[1230px] mx-auto">
          <div className="grid grid-cols-3 gap-[30px] max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <article key={blog.id} className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-[16px] overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-[240px] overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-[30px] flex flex-col flex-1">
                    <span className="text-[14px] text-[#718096] mb-[12px] font-manrope">{blog.date}</span>
                    <h3 className="text-[20px] font-bold text-[#030D1A] mb-[16px] leading-[1.4] line-clamp-2 min-h-[56px] group-hover:text-[#2E5A88] transition-colors font-sora">
                      {blog.title}
                    </h3>
                    <p className="text-[15px] leading-[1.7] text-[#4A5568] mb-[24px] line-clamp-3 font-manrope">
                      {blog.description}
                    </p>
                    <div className="mt-auto pt-[20px] border-t border-[#E5E7EB] flex items-center">
                      <Link href={`/resources/Blog/${blog.id}`} className="text-[14px] font-bold text-[#2E5A88] flex items-center gap-[10px] cursor-pointer group/link font-manrope">
                        <span className="inline-block opacity-100 visible">Read More</span>
                        <img 
                          src="/images/pages/resources/Blog/all-cards-airow-iconicons.svg" 
                          alt="" 
                          className="w-[28.25px] h-[28.12px] transition-transform duration-300 group-hover/link:translate-x-1" 
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-[20px] font-manrope text-gray-500">No blog posts found matching your search.</p>
              </div>
            )}
          </div>

          {/* Load More Button */}
          {filteredBlogs.length > 0 && (
            <div className="mt-[80px] flex justify-center">
               <button className="p-[14px_40px] bg-transparent border border-[#030D1A] text-[#030D1A] text-[16px] font-bold rounded-[8px] cursor-pointer transition-all duration-300 hover:bg-[#030D1A] hover:text-[#FFFFFF] font-manrope">
                 Load more
               </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
