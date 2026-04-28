"use client";
import "./contact.css";
import React from "react";

export default function ContactPage() {
  return (
    <main className="w-full bg-[#ffffff]">
      <div className="w-full max-[1024px]:max-w-[440px] max-[1024px]:mx-auto bg-[#ffffff]">
        {/* Hero Section */}
        <section className="relative w-full h-[556px] min-[1025px]:w-[1440px] min-[1025px]:mx-auto max-[1024px]:h-[519px] flex flex-col justify-center items-center overflow-hidden bg-[url('/images/pages/Contect/Frame%209.svg')] bg-cover bg-center bg-no-repeat bg-[#000F2E] opacity-100 p-[120px_20px_80px] max-[1024px]:!pt-[100px] max-[1024px]:!pb-[60px] max-[1024px]:!px-[24px] text-center">
          <div className="relative w-full max-w-[850px] flex flex-col items-center gap-[24px] text-center z-[5] px-[20px] mx-auto hero-reveal max-[1024px]:!gap-[12px]">
            <div className="flex justify-center items-center w-auto h-[38px] gap-[8.12px] rounded-[27.61px] p-[8.12px_24px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] m-0 max-[1024px]:!h-[34px] max-[1024px]:!p-[6px_16px]">
              <span className="opacity-100 font-manrope font-semibold text-[14px] leading-none tracking-[0.09em] uppercase text-[#FFFFFF] bg-transparent border-none whitespace-nowrap max-[1024px]:!text-[12px]">CONTACT</span>
            </div>

            <h1 className="font-sora text-[40px] font-semibold text-[#ffffff] w-full max-w-[750px] opacity-100 min-[1025px]:leading-[57px] text-center [text-wrap:balance] mx-auto m-0 max-[1024px]:!text-[24px] max-[1024px]:!leading-[1.4] antialiased">
              Let's secure your digital future
            </h1>

            <p className="font-manrope font-normal text-[18px] leading-[30px] text-[#EEEEEE] w-full max-w-[687px] opacity-100 text-center mx-auto m-0 max-[1024px]:!text-[14px] max-[1024px]:!leading-[22px] antialiased">
              Share a bit about your organization and what you're looking to solve. Our team will follow up with practical next steps.
            </p>
          </div>
        </section>

        {/* Contact Content Section */}
        <section className="p-[100px_20px] bg-[#ffffff] max-[1024px]:!p-[60px_24px_5px]">
          <div className="max-w-[1230px] mx-auto flex flex-col min-[1025px]:flex-row gap-[60px] min-[1440px]:max-[2560px]:gap-[100px]">
            
            {/* Form Column - Reordered for Mobile */}
            <div className="flex-[1.2] contact-form-anim order-1 min-[1025px]:order-2">
              <div className="max-[1024px]:text-left mb-[40px] block min-[1025px]:hidden">
                <h2 className="font-sora text-[28px] font-semibold text-[#212121] leading-[40px] mb-[12px] antialiased">
                  Let's <span className="text-[#2E5A88]">connect</span>
                </h2>
                <p className="font-manrope font-normal text-[15px] leading-[26px] text-[#585858] m-0 antialiased">
                  Tell us about your current security landscape, upcoming projects, or challenges you're facing. We'll respond with clear, actionable guidance.
                </p>
              </div>

              <form className="flex flex-col gap-[24px] bg-[#F9FAFB] p-[60px] max-[1024px]:p-[30px_30px_10px] rounded-[24px] border border-[#E1E8F533]">
                <div className="grid grid-cols-2 gap-[20px] max-[768px]:grid-cols-1">
                  <div className="flex flex-col gap-[8px]">
                    <label className="text-[14px] font-bold text-[#030D1A] font-manrope">First Name:</label>
                    <input type="text" placeholder="Write here" className="h-[56px] px-[20px] rounded-[12px] bg-white border border-[#EFEFEF] outline-none font-manrope text-[#030D1A] focus:border-[#2E5A88] placeholder:text-[#A4A4A4]" />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label className="text-[14px] font-bold text-[#030D1A] font-manrope">Last Name:</label>
                    <input type="text" placeholder="Write here" className="h-[56px] px-[20px] rounded-[12px] bg-white border border-[#EFEFEF] outline-none font-manrope text-[#030D1A] focus:border-[#2E5A88] placeholder:text-[#A4A4A4]" />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] font-bold text-[#030D1A] font-manrope">Email:</label>
                  <input type="email" placeholder="Write here" className="h-[56px] px-[20px] rounded-[12px] bg-white border border-[#EFEFEF] outline-none font-manrope text-[#030D1A] focus:border-[#2E5A88] placeholder:text-[#A4A4A4]" />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] font-bold text-[#030D1A] font-manrope">Phone Number:</label>
                  <input type="text" placeholder="Write here" className="h-[56px] px-[20px] rounded-[12px] bg-white border border-[#EFEFEF] outline-none font-manrope text-[#030D1A] focus:border-[#2E5A88] placeholder:text-[#A4A4A4]" />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] font-bold text-[#030D1A] font-manrope">Message:</label>
                  <textarea placeholder="Write here" className="h-[150px] p-[20px] rounded-[12px] bg-white border border-[#EFEFEF] outline-none font-manrope text-[#030D1A] focus:border-[#2E5A88] resize-none placeholder:text-[#A4A4A4]"></textarea>
                </div>
                <div className="flex justify-end mt-[10px]">
                  <button className="w-full min-[1025px]:w-[140px] h-[50px] bg-[#2E5A88] text-white font-bold text-[16px] rounded-[8px] transition-all duration-300 hover:bg-[#1A3F66] shadow-md">
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Info Column */}
            <div className="flex-1 flex flex-col contact-info-anim order-2 min-[1025px]:order-1">
              <div className="max-[1024px]:text-left mb-[40px] hidden min-[1025px]:block">
                <h2 className="font-sora text-[32px] font-semibold text-[#212121] leading-[49px] mb-[20px] max-[1024px]:!text-[28px] max-[1024px]:!leading-[40px] antialiased">
                  Let's <span className="text-[#2E5A88]">connect</span>
                </h2>
                <p className="font-manrope font-normal text-[16px] leading-[30px] text-[#585858] max-w-[450px] m-0 max-[1024px]:!text-[15px] max-[1024px]:!leading-[26px] antialiased">
                  Tell us about your current security landscape, upcoming projects, or challenges you're facing. We'll respond with clear, actionable guidance.
                </p>
              </div>

              {/* Contact Info Card */}
              <div className="bg-[#2E5A88] rounded-[20px] p-[40px] flex flex-col gap-[30px] max-[1024px]:p-[30px_24px] max-[1024px]:mt-[1px]">
                {/* Email */}
                <div className="flex gap-[20px] items-center info-item-anim">
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
                <div className="flex gap-[20px] items-center info-item-anim">
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
                <div className="flex gap-[20px] items-start info-item-anim">
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
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
