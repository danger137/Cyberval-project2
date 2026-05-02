"use client";
import "./blog.css";
import React, { useState } from "react";
import Link from "next/link";
import ScrollReveal from "../../component/ScrollReveal";

const blogData =[
  {
    id: 1,
    title: "Top Cybersecurity Trends Every Business Should Know in 2026",
    date: "Jan 15, 2026",
    image: "/images/pages/resources/Blog/card-1-image.svg",
    // description: "Discover the latest threats and protection strategies as the digital landscape continues to evolve in the coming year."
  },
  {
    id: 2,
    title: "Top Cybersecurity Trends Every Business Should Know in 2026",
    date: "Jan 10, 2026",
    image: "/images/pages/resources/Blog/card-2-image.svg",
    // description: "How organizations can safely adopt AI while maintaining a robust security posture and protecting sensitive data."
  },
  {
    id: 3,
    title: "The Future of Cloud Security: Best Practices for Organizations",
    date: "Jan 05, 2026",
    image: "/images/pages/resources/Blog/card-3-image.svg",
    // description: "Stay ahead of regulatory changes and ensure your organization remains compliant and secure in an increasingly regulated world."
  },
  {
    id: 4,
    title: "Navigating AI Regulations: What Companies Need to Watch",
    date: "Jan 02, 2026",
    image: "/images/pages/resources/Blog/card-1-image.svg",
    // description: "Learn why Zero Trust is becoming the gold standard for enterprise security in a perimeter-less world."
  },
  {
    id: 5,
    title: "Navigating AI Regulations: What Companies Need to Watch",
    date: "Dec 28, 2025",
    image: "/images/pages/resources/Blog/card-2-image.svg",
    // description: "Best practices for maintaining visibility and control over distributed teams and cloud-native applications."
  },
  {
    id: 6,
    title: "Enhancing Data Privacy: Techniques for Modern Enterprises",
    date: "Dec 20, 2025",
    image: "/images/pages/resources/Blog/card-3-image.svg",
    // description: "A comprehensive guide to building a resilient incident response plan that minimizes business disruption."
  }
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (blog.description && blog.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="w-full bg-[#ffffff]">
      <div className="w-full max-[1024px]:max-w-[440px] max-[1024px]:mx-auto bg-[#ffffff]">
        {/* Hero Section */}
        <section className="relative w-full min-[1025px]:h-[556px] min-h-[500px] flex flex-col justify-center items-center overflow-hidden bg-[url('/images/pages/resources/Blog/Frame%209%20(2).svg')] max-[1024px]:bg-[url('/images/pages/resources/Blog/Frame%202147225646%20(6).svg')] bg-cover bg-center bg-no-repeat bg-[#000F2E] opacity-100 p-[120px_20px_80px] max-[1024px]:!pt-[100px] max-[1024px]:!pb-[60px] max-[1024px]:!px-[24px] text-center blog-hero-fluid">
          <ScrollReveal direction="up">
            <div className="relative w-full max-w-[850px] flex flex-col items-center gap-[24px] text-center z-[5] px-[20px] mx-auto max-[1024px]:!gap-[12px]">
              <div className="flex justify-center items-center w-auto h-[38px] gap-[8.12px] rounded-[27.61px] p-[8.12px_24px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] m-0 max-[1024px]:!h-[34px] max-[1024px]:!p-[6px_16px]">
                <span className="opacity-100 font-manrope font-semibold text-[14px] leading-none tracking-[0.09em] uppercase text-[#FFFFFF] bg-transparent border-none whitespace-nowrap max-[1024px]:!text-[12px]">NEWS & INSIGHTS</span>
              </div>

              <h1 className="font-sora text-[32px] font-semibold text-[#ffffff] w-full max-w-[750px] opacity-100 min-[1025px]:leading-[57px] text-center[text-wrap:balance] mx-auto m-0 max-[1024px]:!text-[32px] max-[1024px]:!leading-[1.4] antialiased blog-hero-title-fluid">
                Blog
              </h1>

              <p className="font-manrope font-normal text-[18px] leading-[30px] text-[#EEEEEE] w-full max-w-[687px] opacity-100 text-center mx-auto m-0 max-[1024px]:!text-[18px] max-[1024px]:!leading-[22px] antialiased">
                Browse our latest blog content and open each item to read the full detail page.
              </p>

              {/* Search Bar */}
              <div className="relative w-full max-w-[600px] mt-[20px] max-[1024px]:!mt-[30px]">
                <input 
                  type="text" 
                  placeholder="Search here..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-[60px] pl-[60px] pr-[30px] rounded-[30px] bg-white border-none outline-none font-manrope text-[16px] text-[#030D1A] shadow-lg max-[1024px]:h-[50px] max-[1024px]:!text-[14px]"
                />
                <div className="absolute left-[24px] top-1/2 -translate-y-1/2 max-[1024px]:left-[20px]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="max-[1024px]:w-[18px] max-[1024px]:h-[18px]">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Blog Cards Section */}
        <section className="p-[100px_20px_60px] bg-[#ffffff] max-[1024px]:!p-[60px_24px_40px]">
          <ScrollReveal direction="up">
            <div className="max-w-[1230px] mx-auto">
              <div className="grid grid-cols-3 gap-[24px] max-[1220px]:grid-cols-2 max-[1024px]:grid-cols-1 max-[1024px]:!gap-[30px]">
                {filteredBlogs.length > 0 ? (
                  filteredBlogs.map((blog, index) => (
                    <article 
                      key={blog.id} 
                      className="bg-transparent overflow-visible flex flex-col group transition-all duration-300 w-full min-[1025px]:w-[378px] max-[1024px]:max-w-[378px] max-[1024px]:mx-auto blog-card-fluid service-card-anim"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="relative h-[220px] rounded-[24px] overflow-hidden mb-[20px]">
                        <img 
                          src={blog.image} 
                          alt={blog.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex flex-col flex-1">
                        <span className="text-[14px] text-[#585858] mb-[8px] font-medium font-manrope">{blog.date}</span>
                        <h3 className="text-[18px] font-bold text-[#030D1A] mb-[12px] leading-[1.3] line-clamp-2 group-hover:text-[#2E5A88] transition-colors font-sora antialiased">
                          {blog.title}
                        </h3>
                        
                        <div className="mt-auto pt-[10px] flex items-center">
                          <Link href={`/resources/Blog/${blog.id}`} className="inline-flex items-center gap-[10px] cursor-pointer group/link">
                            <span className="text-[15px] font-bold text-[#2E5A88] font-manrope whitespace-nowrap leading-none border-b border-transparent group-hover/link:border-[#2E5A88] transition-all">Read More</span>
                            <div className="w-[24px] h-[24px] bg-gradient-to-br from-[#4A7DB8] to-[#2E5A88] rounded-[6px] flex items-center justify-center shadow-[0px_4px_10px_rgba(46,90,136,0.2)] group-hover/link:scale-110 transition-all">
                              <svg 
                                width="12" 
                                height="12" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="#ffffff" 
                                strokeWidth="3.5" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                              >
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                              </svg>
                            </div>
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
                <div className="mt-[60px] mb-[40px] flex justify-center max-[1024px]:mt-[40px] max-[1024px]:mb-[20px]">
                  <button className="p-[14px_40px] bg-transparent border border-[#030D1A] text-[#030D1A] text-[16px] font-bold rounded-[8px] cursor-pointer transition-all duration-300 hover:bg-[#030D1A] hover:text-[#FFFFFF] font-manrope max-[1024px]:p-[12px_30px] max-[1024px]:text-[14px]">
                    Load more
                  </button>
                </div>
              )}
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}