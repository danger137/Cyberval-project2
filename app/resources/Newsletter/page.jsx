"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "../../component/ScrollReveal";
import Footer from "../../component/footer/footer";
import { Loader2, Mail } from "lucide-react";

export default function NewsletterPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsletters = async () => {
      try {
        const response = await fetch("/api/resources?category=Newsletter");
        const data = await response.json();
        if (Array.isArray(data)) {
          setNewsletters(data);
        }
      } catch (error) {
        console.error("Error fetching newsletters:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNewsletters();
  }, []);

  const filteredNewsletters = newsletters.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="w-full bg-[#ffffff]">
      <div className="w-full max-[1024px]:max-w-[440px] max-[1024px]:mx-auto bg-[#ffffff]">
        {/* Hero Section */}
        <section className="relative w-full min-[1025px]:h-[556px] min-h-[500px] flex flex-col justify-center items-center overflow-hidden bg-[#000F2E] p-[120px_20px_80px] text-center">
            <div className="absolute inset-0 bg-[url('/images/pages/resources/Blog/Frame%209%20(2).svg')] bg-cover opacity-40"></div>
          <ScrollReveal direction="up">
            <div className="relative w-full max-w-[850px] flex flex-col items-center gap-[24px] text-center z-[5] px-[20px] mx-auto">
              <div className="flex justify-center items-center w-auto h-[38px] gap-[8.12px] rounded-[27.61px] p-[8.12px_24px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] m-0">
                <span className="opacity-100 font-manrope font-semibold text-[14px] leading-none tracking-[0.09em] uppercase text-[#FFFFFF]">NEWSLETTER</span>
              </div>

              <h1 className="font-sora text-[48px] font-semibold text-[#ffffff] leading-tight">
                Cyberval <span className="text-sky-400">Insider</span>
              </h1>

              <p className="font-manrope font-normal text-[18px] leading-[30px] text-[#EEEEEE] w-full max-w-[687px] opacity-100 text-center mx-auto m-0">
                Stay updated with our latest quarterly newsletters, security alerts, and company news.
              </p>

              {/* Search Bar */}
              <div className="relative w-full max-w-[600px] mt-[20px]">
                <input 
                  type="text" 
                  placeholder="Search newsletters..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-[60px] pl-[60px] pr-[30px] rounded-[30px] bg-white border-none outline-none font-manrope text-[16px] text-[#030D1A] shadow-lg"
                />
                <div className="absolute left-[24px] top-1/2 -translate-y-1/2">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Newsletter Cards Section */}
        <section className="p-[100px_20px_60px] bg-[#ffffff]">
          <ScrollReveal direction="up">
            <div className="max-w-[1230px] mx-auto">
              {loading ? (
                 <div className="flex flex-col items-center justify-center py-20">
                    <Loader2 className="h-10 w-10 animate-spin text-[#2E5A88] mb-4" />
                    <p className="text-gray-500 font-manrope">Loading newsletters...</p>
                 </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                    {filteredNewsletters.length > 0 ? (
                    filteredNewsletters.map((item, index) => (
                        <article 
                        key={item.id} 
                        className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group transition-all duration-300 hover:shadow-xl"
                        >
                        <div className="relative h-[200px] overflow-hidden">
                            <img 
                            src={item.image || "/images/pages/resources/Blog/card-1-image.svg"} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 rounded-full text-xs font-bold text-[#2E5A88]">
                                {new Date(item.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-[20px] font-bold text-[#030D1A] mb-[12px] font-sora leading-tight group-hover:text-[#2E5A88] transition-colors">
                            {item.title}
                            </h3>
                            <p className="text-gray-500 font-manrope text-sm mb-6 line-clamp-3">
                                {item.description}
                            </p>
                            
                            <div className="mt-auto flex items-center justify-between">
                            <Link href={item.fileUrl || "#"} target="_blank" className="text-[#2E5A88] font-bold text-sm hover:underline">
                                View Newsletter
                            </Link>
                            <Mail className="h-5 w-5 text-gray-200" />
                            </div>
                        </div>
                        </article>
                    ))
                    ) : (
                    <div className="col-span-full py-20 text-center">
                        <p className="text-[20px] font-manrope text-gray-500">No newsletters found.</p>
                    </div>
                    )}
                </div>
              )}
            </div>
          </ScrollReveal>
        </section>
    </div>
  );
}
