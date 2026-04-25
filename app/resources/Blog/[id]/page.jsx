"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogDetailPage() {
  const params = useParams();
  const id = parseInt(params.id);

  const blogs = [
    {
      id: 1,
      title: "Top Cybersecurity Trends Every Business Should Know in 2026",
      description: "In 2026, companies face new challenges and opportunities in cybersecurity. From advanced AI-driven attacks to enhanced security protocols, staying informed about the latest trends is crucial.",
      date: "Jan 10, 2026",
      category: "Cybersecurity",
      image: "/images/pages/resources/Blog/blog-detail/banner-1-image.svg",
    },
    {
      id: 2,
      title: "Navigating AI Security Challenges in Modern Enterprises",
      description: "How organizations can safely adopt AI while maintaining a robust security posture and protecting sensitive data.",
      date: "Jan 10, 2026",
      category: "AI & Security",
      image: "/images/pages/resources/Blog/card-2-image.svg",
    },
    {
      id: 3,
      title: "The Future of Compliance: SOC 2 and Beyond",
      description: "Stay ahead of regulatory changes and ensure your organization remains compliant and secure in an increasingly regulated world.",
      date: "Jan 05, 2026",
      category: "Compliance",
      image: "/images/pages/resources/Blog/card-3-image.svg",
    },
    {
      id: 4,
      title: "Understanding the Role of Zero Trust Architecture",
      description: "Learn why Zero Trust is becoming the gold standard for enterprise security in a perimeter-less world.",
      date: "Jan 02, 2026",
      category: "Security Strategy",
      image: "/images/pages/resources/Blog/card-1-image.svg",
    },
    {
      id: 5,
      title: "Securing Remote Workforces in the Age of Cloud",
      description: "Best practices for maintaining visibility and control over distributed teams and cloud-native applications.",
      date: "Dec 28, 2025",
      category: "Cloud Security",
      image: "/images/pages/resources/Blog/card-2-image.svg",
    },
    {
      id: 6,
      title: "Best Practices for Incident Response Planning",
      description: "A comprehensive guide to building a resilient incident response plan that minimizes business disruption.",
      date: "Dec 20, 2025",
      category: "Incident Response",
      image: "/images/pages/resources/Blog/card-3-image.svg",
    },
  ];

  const blog = blogs.find((b) => b.id === id) || blogs[0];

  return (
    <div className="w-full min-h-screen bg-[#ffffff] pt-[120px]">
      <div className="max-w-[1224px] mx-auto px-[20px]">
        {/* Navigation - Static Image */}


        {/* Header Section */}
        <div className="flex justify-between items-start mb-[30px] gap-[40px]">
          <div className="flex-1">
            <h1 className="font-sora text-[40px] font-semibold text-[#111827] leading-[1.3] m-0">
              {blog.title}
            </h1>
            <p className="font-manrope text-[14px] text-[#585858] mt-[15px] m-0">
              {blog.date}
            </p>
          </div>
          
          <div className="flex gap-[12px] mt-[10px]">
            {/* Share Icon (Blue) */}
            <button className="w-[44px] h-[44px] bg-[#2E5A88] rounded-full flex items-center justify-center cursor-pointer border-none transition-transform hover:scale-105">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
            </button>
            {/* Wishlist Icon (Circle) */}
            <button className="w-[44px] h-[44px] bg-[#F3F4F6] rounded-full flex items-center justify-center cursor-pointer border border-[#E5E7EB] transition-transform hover:scale-105">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#585858" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </button>
          </div>
        </div>

        {/* Main Banner Image */}
        <div className="w-full h-[540px] rounded-[20px] overflow-hidden mb-[60px] max-[768px]:h-auto">
          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
        </div>

        {/* Blog Content Section */}
        <div className="max-w-[1000px] mx-auto pb-[100px]">
          <div className="prose prose-lg max-w-none font-manrope text-[#585858] leading-[1.8]">
            <p className="mb-[30px]">
              {blog.description} This article helps you understand the key developments so you can effectively protect your organization against modern threats.
            </p>
            
            <h3 className="font-sora text-[22px] font-bold text-[#111827] mt-[40px] mb-[20px]">
              Cybersecurity in 2026 goes beyond just firewalls and passwords. It involves a holistic approach that combines technology, human behaviour, and processes to minimise risks.
            </h3>
            
            <p className="mb-[30px]">
              In 2026, companies must consider various factors: the rise of sophisticated cyberattacks, the need for continuous monitoring, investment in staff training, and implementing robust security measures that can withstand future threats.
            </p>

            <p className="font-bold text-[#111827] mb-[15px]">Key focus areas include:</p>
            <ul className="list-none p-0 m-0 mb-[40px] flex flex-col gap-[10px]">
              <li className="flex items-start gap-[10px]">
                <span className="text-[#2E5A88] font-bold mt-[2px]">•</span>
                <span>The rise of AI and machine learning in both attacks and defence:</span>
              </li>
              <li className="flex items-start gap-[10px]">
                <span className="text-[#2E5A88] font-bold mt-[2px]">•</span>
                <span>Increasing regulations and compliance requirements:</span>
              </li>
              <li className="flex items-start gap-[10px]">
                <span className="text-[#2E5A88] font-bold mt-[2px]">•</span>
                <span>The importance of zero-trust security models:</span>
              </li>
              <li className="flex items-start gap-[10px]">
                <span className="text-[#2E5A88] font-bold mt-[2px]">•</span>
                <span>Flexible and scalable security solutions that adapt to changing business needs.</span>
              </li>
            </ul>

            {/* Legal Framework Box */}
            <div className="bg-[#F8FAFF] border-l-[4px] border-[#2E5A88] p-[30px_40px] mb-[60px] rounded-r-[8px]">
              <h4 className="font-sora text-[18px] font-bold text-[#111827] mt-0 mb-[10px]">Legal Framework:</h4>
              <p className="m-0 text-[15px] leading-[26px]">
                Determining a breach involves assessing the facts, legality, and accountability based on established legal standards.
              </p>
            </div>

            {/* Secondary Image */}
            <div className="w-full h-[480px] rounded-[20px] overflow-hidden mb-[40px] max-[768px]:h-auto">
              <img src="/images/pages/resources/Blog/blog-detail/banner-2-image.svg" alt="Cybersecurity Discussion" className="w-full h-full object-cover" />
            </div>

            <h3 className="font-sora text-[24px] font-bold text-[#111827] mt-[20px] mb-[15px]">
              Which cybersecurity trends will dominate in 2026?
            </h3>
            <p className="mb-[25px]">
              In 2026, we see companies increasingly investing in automated detection and response, using behavioural analysis to identify threats, and collaborating with external experts to strengthen their security.
            </p>

            <p className="font-bold text-[#111827] mb-[12px]">Examples of trends include:</p>
            <ul className="list-none p-0 m-0 mb-[25px] flex flex-col gap-[10px]">
              <li className="flex items-start gap-[10px]">
                <span className="text-[#2E5A88] font-bold mt-[2px]">•</span>
                <span>AI-driven threat detection: systems that learn from attacks to respond faster;</span>
              </li>
              <li className="flex items-start gap-[10px]">
                <span className="text-[#2E5A88] font-bold mt-[2px]">•</span>
                <span>Increased focus on cloud security due to the growth of remote working;</span>
              </li>
              <li className="flex items-start gap-[10px]">
                <span className="text-[#2E5A88] font-bold mt-[2px]">•</span>
                <span>Integration of cybersecurity into overall business strategy;</span>
              </li>
              <li className="flex items-start gap-[10px]">
                <span className="text-[#2E5A88] font-bold mt-[2px]">•</span>
                <span>Use of blockchain for secure data exchange.</span>
              </li>
            </ul>

            <p className="font-manrope text-[14px] text-[#585858] bg-[#F9FAFB] p-[15px_20px] rounded-[8px] mb-[40px] italic">
              <strong>Note:</strong> these trends are indicative and may vary by sector and company size. It is important to tailor your security strategy to your specific situation and risks.
            </p>

            <p className="font-sora text-[22px] font-bold text-[#111827] mb-[15px]">
              Cybersecurity is an ongoing process — stay alert and adapt.
            </p>
            <p className="mb-[40px]">
              Just as negotiation is essential in business relationships, flexibility is key in cybersecurity. Use tools and knowledge to continually improve your defence and collaborate with experts. This ensures a secure and future-proof organisation.
            </p>

            {/* Bottom Social Share */}
            <div className="flex items-center gap-[20px] pt-[40px] border-t border-[#E5E7EB]">
              <span className="font-manrope font-bold text-[14px] text-[#585858] uppercase">Share with your community:</span>
              <div className="flex gap-[12px]">
                <Link href="#" className="w-[32px] h-[32px] bg-[#F3F4F6] rounded-full flex items-center justify-center hover:bg-[#E5E7EB] transition-all">
                  <img src="/images/pages/resources/Blog/blog-detail/facebook-icon.svg" alt="Facebook" className="w-[16px] h-[16px]" />
                </Link>
                <Link href="#" className="w-[32px] h-[32px] bg-[#F3F4F6] rounded-full flex items-center justify-center hover:bg-[#E5E7EB] transition-all">
                  <img src="/images/pages/resources/Blog/blog-detail/insta-icon.svg" alt="Instagram" className="w-[16px] h-[16px]" />
                </Link>
                <Link href="#" className="w-[32px] h-[32px] bg-[#F3F4F6] rounded-full flex items-center justify-center hover:bg-[#E5E7EB] transition-all">
                  <img src="/images/pages/resources/Blog/blog-detail/X-icon.svg" alt="X" className="w-[16px] h-[16px]" />
                </Link>
                <Link href="#" className="w-[32px] h-[32px] bg-[#F3F4F6] rounded-full flex items-center justify-center hover:bg-[#E5E7EB] transition-all">
                  <img src="/images/pages/resources/Blog/blog-detail/youtube-icon.svg" alt="YouTube" className="w-[16px] h-[16px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles Section */}
      <section className="w-full bg-[#F3F7FC] py-[100px]">
        <div className="max-w-[1224px] mx-auto px-[20px]">
          <div className="flex justify-between items-center mb-[50px]">
            <h2 className="font-sora text-[32px] font-bold text-[#111827] m-0">Related articles</h2>
            <Link href="/resources/Blog" className="p-[10px_24px] bg-transparent border border-[#030D1A] text-[#030D1A] font-manrope font-bold text-[14px] rounded-[8px] transition-all hover:bg-[#030D1A] hover:text-white">
              View all
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-[30px] max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
            
            {/* Related Card 1 */}
            <article className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-[16px] overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl">
              <div className="relative h-[240px] overflow-hidden">
                <img 
                  src="/images/pages/resources/Blog/blog-detail/card-1-image.svg" 
                  alt="Related Article" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-[24px] flex flex-col flex-1">
                <span className="text-[12px] text-[#718096] mb-[12px] font-manrope">Jan 15, 2026</span>
                <h3 className="text-[18px] font-bold text-[#111827] mb-[20px] leading-[1.4] line-clamp-2 min-h-[50px] font-sora group-hover:text-[#2E5A88] transition-colors">
                  Navigating AI Regulations: What Companies Need to Watch
                </h3>
                <div className="mt-auto flex items-center">
                  <Link href="/resources/Blog/2" className="text-[14px] font-bold text-[#2E5A88] flex items-center gap-[10px] group/link font-manrope">
                    <span className="opacity-100">Read More</span>                    <img 
                      src="/images/pages/resources/Blog/blog-detail/all-cards-airow-iconicons.svg" 
                      alt="" 
                      className="w-[24px] h-[24px] transition-transform duration-300 group-hover/link:translate-x-1" 
                    />
                  </Link>
                </div>
              </div>
            </article>

            {/* Related Card 2 */}
            <article className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-[16px] overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl">
              <div className="relative h-[240px] overflow-hidden">
                <img 
                  src="/images/pages/resources/Blog/blog-detail/card-2-image.svg" 
                  alt="Related Article" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-[24px] flex flex-col flex-1">
                <span className="text-[12px] text-[#718096] mb-[12px] font-manrope">Jan 12, 2026</span>
                <h3 className="text-[18px] font-bold text-[#111827] mb-[20px] leading-[1.4] line-clamp-2 min-h-[50px] font-sora group-hover:text-[#2E5A88] transition-colors">
                  The Future of Data Privacy in a Decentralized World
                </h3>
                <div className="mt-auto flex items-center">
                  <Link href="/resources/Blog/3" className="text-[14px] font-bold text-[#2E5A88] flex items-center gap-[10px] group/link font-manrope">
                    <span className="opacity-100">Read More</span>                    <img 
                      src="/images/pages/resources/Blog/blog-detail/all-cards-airow-iconicons.svg" 
                      alt="" 
                      className="w-[24px] h-[24px] transition-transform duration-300 group-hover/link:translate-x-1" 
                    />
                  </Link>
                </div>
              </div>
            </article>

            {/* Related Card 3 */}
            <article className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-[16px] overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl">
              <div className="relative h-[240px] overflow-hidden">
                <img 
                  src="/images/pages/resources/Blog/blog-detail/card-3-image.svg" 
                  alt="Related Article" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-[24px] flex flex-col flex-1">
                <span className="text-[12px] text-[#718096] mb-[12px] font-manrope">Jan 08, 2026</span>
                <h3 className="text-[18px] font-bold text-[#111827] mb-[20px] leading-[1.4] line-clamp-2 min-h-[50px] font-sora group-hover:text-[#2E5A88] transition-colors">
                  Zero Trust: Why Your Perimeter is No Longer Enough
                </h3>
                <div className="mt-auto flex items-center">
                  <Link href="/resources/Blog/4" className="text-[14px] font-bold text-[#2E5A88] flex items-center gap-[10px] group/link font-manrope">
                    <span className="opacity-100">Read More</span>                    <img 
                      src="/images/pages/resources/Blog/blog-detail/all-cards-airow-iconicons.svg" 
                      alt="" 
                      className="w-[24px] h-[24px] transition-transform duration-300 group-hover/link:translate-x-1" 
                    />
                  </Link>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>
    </div>
  );
}
