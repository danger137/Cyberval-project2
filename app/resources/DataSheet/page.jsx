"use client";
import "./datasheet.css";
import React, { useState } from "react";
import Link from "next/link";

const datasheetsData = [
  {
    id: 1,
    title: "Virtual CISO (vCISO)",
    description: "Access strategic cybersecurity leadership to guide governance, risk, and compliance—without the cost of a full-time CISO.",
    tags: ["Cyber Threats", "Awareness"]
  },
  {
    id: 2,
    title: "SOC as a Service",
    description: "24/7 security monitoring and incident response to protect your organization from advanced threats.",
    tags: ["SOCaaS", "Monitoring"]
  },
  {
    id: 3,
    title: "Cloud Security Assessment",
    description: "Identify vulnerabilities and misconfigurations in your cloud environment to ensure data protection.",
    tags: ["Cloud", "Security"]
  },
  {
    id: 4,
    title: "Incident Response Planning",
    description: "Prepare your team to handle security breaches effectively with a comprehensive response strategy.",
    tags: ["IR", "Strategy"]
  },
  {
    id: 5,
    title: "Network Vulnerability Scanning",
    description: "Proactively identify and patch security holes in your network infrastructure before attackers find them.",
    tags: ["Vulnerability", "Scanning"]
  },
  {
    id: 6,
    title: "Compliance Management",
    description: "Simplify the complexity of global compliance standards including SOC 2, GDPR, and ISO 27001.",
    tags: ["Compliance", "Global"]
  }
];

export default function DataSheetPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDatasheets = datasheetsData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full bg-[#ffffff]">
      <div className="w-full max-[1024px]:max-w-[440px] max-[1024px]:mx-auto bg-[#ffffff]">
        {/* Hero Section */}
        <section className="relative w-full h-[556px] min-[1025px]:w-[1440px] min-[1025px]:mx-auto max-[1024px]:h-[519px] flex flex-col justify-center items-center overflow-hidden min-[1025px]:bg-[url('/images/pages/resources/Blog/Frame%209%20(2).svg')] max-[1024px]:bg-[url('/images/pages/resources/DataSheet/Frame%202147225646%20(8).svg')] bg-cover bg-center bg-no-repeat bg-[#000F2E] opacity-100 p-[120px_20px_80px] max-[1024px]:!pt-[100px] max-[1024px]:!pb-[60px] max-[1024px]:!px-[24px] text-center">
          <div className="relative w-full max-w-[850px] flex flex-col items-center gap-[24px] text-center z-[5] px-[20px] mx-auto hero-reveal max-[1024px]:!gap-[12px]">
            <div className="flex justify-center items-center w-auto h-[38px] gap-[8.12px] rounded-[27.61px] p-[8.12px_24px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] m-0 max-[1024px]:!h-[34px] max-[1024px]:!p-[6px_16px]">
              <span className="opacity-100 font-manrope font-semibold text-[14px] leading-none tracking-[0.09em] uppercase text-[#FFFFFF] bg-transparent border-none whitespace-nowrap max-[1024px]:!text-[12px]">DATA DEEP DIVE</span>
            </div>

            <h1 className="font-sora text-[32px] font-semibold text-[#ffffff] w-full max-w-[750px] opacity-100 min-[1025px]:leading-[57px] text-center [text-wrap:balance] mx-auto m-0 max-[1024px]:!text-[32px] max-[1024px]:!leading-[1.4] antialiased">
              Datasheets
            </h1>

            <p className="font-manrope font-normal text-[18px] leading-[30px] text-[#EEEEEE] w-full max-w-[687px] opacity-100 text-center mx-auto m-0 max-[1024px]:!text-[18px] max-[1024px]:!leading-[22px] antialiased">
              Explore our detailed datasheets to learn about our products and services.
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
        </section>

        {/* Datasheets Cards Section */}
        <section className="p-[100px_20px_20px] bg-[#ffffff] max-[1024px]:!p-[60px_24px_20px]">
          <div className="max-w-[1230px] mx-auto">

            <div className="grid grid-cols-3 gap-[30px] max-[1220px]:grid-cols-2 max-[1024px]:grid-cols-1">
              {filteredDatasheets.length > 0 ? (
                filteredDatasheets.map((item, index) => (
                  <article 
                    key={item.id} 
                    className="bg-white border border-[#E5E7EB] rounded-[16px] p-[40px] flex flex-col h-full transition-all duration-300 datasheet-card-anim card-entrance max-[1024px]:p-[30px]"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Icon */}
                    <div className="mb-[24px]">
                      <img 
                        src="/images/pages/resources/DataSheet/all-cards-icons.svg" 
                        alt="icon" 
                        className="w-[48px] h-[48px] object-contain" 
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-[18px] font-semibold text-[#030D1A] mb-[16px] leading-[1.3] font-sora antialiased">
                      {item.title}
                    </h3>
                    <p className="text-[18px] leading-[28px] text-[#4A5568] mb-[24px] font-manrope flex-grow antialiased">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-[10px] mb-[32px]">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="px-[16px] py-[6px] bg-[#E6F0FA] text-[#2E5A88] text-[12px] font-bold rounded-full uppercase tracking-wider font-manrope">{tag}</span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-[12px] mt-auto">
                      <button className="flex-1 h-[52px] bg-white border border-[#030D1A] text-[#030D1A] text-[15px] font-bold rounded-[8px] transition-all duration-300 hover:bg-[#030D1A] hover:text-white font-manrope">
                        Read Online
                      </button>
                      <button className="flex-1 h-[52px] bg-[#2E5A88] text-white text-[15px] font-bold rounded-[8px] flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#1A3F66] font-manrope">
                        Download
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                      </button>
                    </div>
                  </article>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <p className="text-[20px] font-manrope text-gray-500">No datasheets found matching your search.</p>
                </div>
              )}
            </div>

            {/* Load More Button */}
            {filteredDatasheets.length > 0 && (
              <div className="mt-[60px] flex justify-center max-[1024px]:mt-[40px]">
                <button className="p-[14px_40px] bg-transparent border border-[#030D1A] text-[#030D1A] text-[16px] font-bold rounded-[8px] cursor-pointer transition-all duration-300 hover:bg-[#030D1A] hover:text-[#FFFFFF] font-manrope max-[1024px]:p-[12px_30px] max-[1024px]:text-[14px]">
                  Load more
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
