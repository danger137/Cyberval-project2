"use client";
import "./contact.css";
import React, { useState, useEffect } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import ScrollReveal from "../component/ScrollReveal";

export default function ContactPage() {
  const [formConfig, setFormConfig] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("idle"); // idle, success, error

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const response = await fetch("/api/forms");
        const data = await response.json();
        if (data && data.fields) {
          setFormConfig(data);
          // Initialize form data
          const initialData = {};
          data.fields.forEach(field => {
            initialData[field.id] = "";
          });
          setFormData(initialData);
        }
      } catch (error) {
        console.error("Error fetching form config:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchForm();
  }, []);

  const handleChange = (id, value) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formConfig) return;

    setSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formId: formConfig.id,
          data: formData
        })
      });

      if (response.ok) {
        setStatus("success");
        setFormData({}); // Reset
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="w-full bg-[#ffffff]">
      <div className="w-full max-[1024px]:max-w-[440px] max-[1024px]:mx-auto bg-[#ffffff]">
        {/* Hero Section */}
        <section className="relative w-full h-[556px] max-[1024px]:h-[519px] flex flex-col justify-center items-center overflow-hidden bg-[url('/images/pages/Contect/Frame%209.svg')] bg-cover bg-center bg-no-repeat bg-[#000F2E] opacity-100 p-[120px_20px_80px] max-[1024px]:!pt-[100px] max-[1024px]:!pb-[60px] max-[1024px]:!px-[24px] text-center">
          <ScrollReveal direction="up">
            <div className="relative w-full max-w-[850px] flex flex-col items-center gap-[24px] text-center z-[5] px-[20px] mx-auto max-[1024px]:!gap-[12px]">
              <div className="flex justify-center items-center w-auto h-[38px] gap-[8.12px] rounded-[27.61px] p-[8.12px_24px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] m-0 max-[1024px]:!h-[34px] max-[1024px]:!p-[6px_16px]">
                <span className="opacity-100 font-manrope font-semibold text-[14px] leading-none tracking-[0.09em] uppercase text-[#FFFFFF] bg-transparent border-none whitespace-nowrap max-[1024px]:!text-[12px]">CONTACT</span>
              </div>

              <h1 className="font-sora text-[40px] font-semibold text-[#ffffff] w-full max-w-[750px] opacity-100 min-[1025px]:leading-[57px] text-center [text-wrap:balance] mx-auto m-0 max-[1024px]:!text-[32px] max-[1024px]:!leading-[1.4] antialiased">
                {formConfig?.name || "Let's secure your digital future"}
              </h1>

              <p className="font-manrope font-normal text-[18px] leading-[30px] text-[#EEEEEE] w-full max-w-[687px] opacity-100 text-center mx-auto m-0 max-[1024px]:!text-[16px] max-[1024px]:!leading-[26px] antialiased">
                {formConfig?.description || "Share a bit about your organization and what you're looking to solve. Our team will follow up with practical next steps."}
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Contact Content Section */}
        <section className="p-[100px_20px_80px] bg-[#ffffff] max-[1024px]:!p-[60px_24px_40px]">
          <div className="max-w-[1230px] mx-auto flex flex-col min-[1025px]:flex-row gap-[60px] min-[1440px]:max-[2560px]:gap-[100px]">
            
            {/* Form Column - Reordered for Mobile */}
            <div className="flex-[1.2] order-1 min-[1025px]:order-2">
              <ScrollReveal direction="right">
                <div className="max-[1024px]:text-left mb-[40px] block min-[1025px]:hidden">
                  <h2 className="font-sora text-[32px] font-semibold text-[#212121] leading-[40px] mb-[12px] max-[1024px]:!text-[18px] antialiased">
                    Let's <span className="text-[#2E5A88]">connect</span>
                  </h2>
                  <p className="font-manrope font-normal text-[18px] leading-[26px] text-[#585858] m-0 max-[1024px]:!text-[16px] antialiased">
                    Tell us about your current security landscape, upcoming projects, or challenges you're facing. We'll respond with clear, actionable guidance.
                  </p>
                </div>

                {loading ? (
                  <div className="flex flex-col items-center justify-center py-20 bg-[#F9FAFB] rounded-[24px] border border-[#E1E8F533]">
                    <Loader2 className="h-8 w-8 text-[#2E5A88] animate-spin mb-4" />
                    <p className="text-zinc-500 font-medium">Loading form configuration...</p>
                  </div>
                ) : status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-20 bg-emerald-50 rounded-[24px] border border-emerald-200 text-center px-10">
                    <CheckCircle2 className="h-16 w-16 text-emerald-500 mb-6" />
                    <h3 className="text-2xl font-bold text-[#030D1A] mb-2">Message Sent Successfully!</h3>
                    <p className="text-emerald-700 font-medium max-w-sm">Thank you for reaching out. Our security experts will review your inquiry and get back to you shortly.</p>
                    <button 
                      onClick={() => setStatus("idle")}
                      className="mt-8 px-8 py-3 bg-[#2E5A88] text-white font-bold rounded-lg hover:bg-[#1A3F66] transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-[24px] bg-[#F9FAFB] p-[60px] max-[1024px]:p-[30px_30px_10px] rounded-[24px] border border-[#E1E8F533] shadow-sm">
                    {status === "error" && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 text-sm mb-4">
                        <AlertCircle className="h-5 w-5 shrink-0" />
                        <p>Failed to send message. Please try again or contact us directly.</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 gap-[20px]">
                      {formConfig?.fields.map((field) => (
                        <div key={field.id} className="flex flex-col gap-[8px]">
                          <label className="text-[14px] font-bold text-[#030D1A] font-manrope">
                            {field.label}:
                          </label>
                          
                          {field.type === "textarea" ? (
                            <textarea 
                              required
                              placeholder={field.placeholder || "Write here"}
                              value={formData[field.id] || ""}
                              onChange={(e) => handleChange(field.id, e.target.value)}
                              className="h-[150px] p-[20px] rounded-[12px] bg-white border border-[#EFEFEF] outline-none font-manrope text-[#030D1A] focus:border-[#2E5A88] resize-none placeholder:text-[#A4A4A4] transition-all"
                            />
                          ) : (
                            <input 
                              required
                              type={field.type}
                              placeholder={field.placeholder || "Write here"}
                              value={formData[field.id] || ""}
                              onChange={(e) => handleChange(field.id, e.target.value)}
                              className="h-[56px] px-[20px] rounded-[12px] bg-white border border-[#EFEFEF] outline-none font-manrope text-[#030D1A] focus:border-[#2E5A88] placeholder:text-[#A4A4A4] transition-all"
                            />
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-end mt-[10px]">
                      <button 
                        disabled={submitting}
                        className="w-full min-[1025px]:w-full h-[56px] bg-[#2E5A88] text-white font-bold text-[18px] rounded-[12px] transition-all duration-300 hover:bg-[#1A3F66] shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                      >
                        {submitting ? (
                          <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                          "Submit Inquiry"
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Info Column */}
            <div className="flex-1 flex flex-col order-2 min-[1025px]:order-1">
              <ScrollReveal direction="left">
                <div className="max-[1024px]:text-left mb-[40px] hidden min-[1025px]:block">
                  <h2 className="font-sora text-[32px] font-semibold text-[#212121] leading-[49px] mb-[20px] max-[1024px]:!text-[28px] max-[1024px]:!leading-[40px] antialiased">
                    Let's <span className="text-[#2E5A88]">connect</span>
                  </h2>
                  <p className="font-manrope font-normal text-[18px] leading-[30px] text-[#585858] max-w-[450px] m-0 max-[1024px]:!text-[15px] max-[1024px]:!leading-[26px] antialiased">
                    Tell us about your current security landscape, upcoming projects, or challenges you're facing. We'll respond with clear, actionable guidance.
                  </p>
                </div>

                {/* Contact Info Card */}
                <div className="bg-[#2E5A88] rounded-[20px] p-[40px] flex flex-col gap-[30px] max-[1024px]:p-[30px_24px] max-[1024px]:mt-[1px] shadow-xl">
                  {/* Email */}
                  <div className="flex gap-[20px] items-center transition-all duration-300 hover:translate-x-2">
                    <div className="w-[32px] h-[32px] flex justify-center items-center shrink-0">
                      <img src="/images/pages/Contect/email.svg" alt="Email" className="w-full h-full block max-[1024px]:hidden" />
                      <img src="/images/pages/Contect/mobile-email.svg" alt="Email" className="w-full h-full hidden max-[1024px]:block" />
                    </div>
                    <div>
                      <h4 className="text-[#E2E8F0] font-manrope font-medium text-[14px] mb-[2px] antialiased">Email</h4>
                      <p className="text-white font-manrope font-semibold text-[16px] antialiased">info@cybervol.com</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-[20px] items-center transition-all duration-300 hover:translate-x-2">
                    <div className="w-[32px] h-[32px] flex justify-center items-center shrink-0">
                      <img src="/images/pages/Contect/phone-icon.svg" alt="Phone" className="w-full h-full block max-[1024px]:hidden" />
                      <img src="/images/pages/Contect/phone-icon-mobile.svg" alt="Phone" className="w-full h-full hidden max-[1024px]:block" />
                    </div>
                    <div>
                      <h4 className="text-[#E2E8F0] font-manrope font-medium text-[14px] mb-[2px] antialiased">Phone</h4>
                      <p className="text-white font-manrope font-semibold text-[16px] leading-[1.4] antialiased">+1(469) 488-3005<br />+234 9137002111</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex gap-[20px] items-start transition-all duration-300 hover:translate-x-2">
                    <div className="w-[32px] h-[32px] flex justify-center items-center shrink-0 mt-1">
                      <img src="/images/pages/Contect/location-icon.svg" alt="Location" className="w-full h-full block max-[1024px]:hidden" />
                      <img src="/images/pages/Contect/location-icon-mobile.svg" alt="Location" className="w-full h-full hidden max-[1024px]:block" />
                    </div>
                    <div>
                      <h4 className="text-[#E2E8F0] font-manrope font-medium text-[14px] mb-[2px] antialiased">Location</h4>
                      <p className="text-white font-manrope font-semibold text-[15px] leading-[1.6] mb-[10px] antialiased">Dallas HQ: 1341 W. Mockingbird Lane, Suite 600W, Dallas, Texas 75247, USA</p>
                      <p className="text-white font-manrope font-semibold text-[15px] leading-[1.6] antialiased">Lagos Office: 232 Murtala Muhammed Way, Yaba Lagos 101245 Nigeria</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
