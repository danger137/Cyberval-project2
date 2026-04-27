"use client";

import React from "react";

export default function VMPTaaSPage() {
  return (
    <div className="w-full min-h-screen bg-[#ffffff]">
      {/* Hero Section */}
      <section className="relative w-full min-h-[631px] min-[1025px]:h-[556px] min-[1025px]:w-[1454px] mx-auto flex flex-col justify-center items-center overflow-hidden bg-[url('/images/pages/services/service-5/(VMPTaaS)/hero-bg.svg')] max-[1024px]:bg-[url('/images/pages/services/service-5/(VMPTaaS)/Frame%202147225646.svg')] bg-cover bg-top bg-no-repeat opacity-100 p-[120px_20px_60px] text-center max-[1454px]:w-full">
        <div className="relative w-full max-w-[850px] flex flex-col items-center gap-[21px] text-center z-[5] px-[20px] mx-auto">
          <div className="flex justify-center items-center w-auto max-w-[90%] min-h-[38px] gap-[8.12px] rounded-[27.61px] p-[8px_16px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] m-0">
            <span className="opacity-100 font-manrope font-semibold text-[12px] sm:text-[14px] leading-[1.5] tracking-[0.09em] uppercase text-[#FFFFFF] bg-transparent border-none text-center">MANAGED CYBERSECURITY AS A SERVICE</span>
          </div>

          <h1 className="font-sora text-[32px] sm:text-[40px] font-semibold text-[#ffffff] w-full max-w-[750px] opacity-100 leading-[1.3] text-center [text-wrap:balance] mx-auto m-0">
            Vulnerability Management & Penetration Testing as a Service (VMPTaaS)
          </h1>

          <p className="font-manrope font-normal text-[16px] sm:text-[18px] leading-[1.6] text-[#EEEEEE] w-full max-w-[687px] opacity-100 text-center mx-auto m-0">
            Continuous vulnerability visibility, prioritized remediation, and real-world validation in one service.
          </p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="p-[120px_20px] bg-[#ffffff]">
        <div className="max-w-[1300px] mx-auto text-center">
          <h2 className="font-sora text-[40px] font-bold text-[#212121] mb-[80px] max-[768px]:text-[32px]">
            Why Choose <span className="text-[#2E5A88]">VMPTaaS</span>
          </h2>
          
          <div className="flex flex-row items-stretch justify-between gap-[10px] max-[1024px]:gap-[40px] max-[1024px]:flex-col relative">
            {/* Left Column */}
            <div className="flex flex-col justify-between gap-[30px] flex-1 max-w-[350px] w-full max-[1024px]:order-1">
              {/* Feature 1 */}
              <article className="bg-[#F6F8FB] border-none rounded-[16px] p-[32px] text-left relative flex flex-col justify-center min-h-[250px]">
                 <div className="w-[52px] h-[52px] flex items-center justify-center absolute top-[24px] right-[24px]">
                   <img src="/images/pages/services/service-5/(VMPTaaS)/left-colum-icon-1.svg" alt="" className="w-full h-full" />
                 </div>
                 <h3 className="text-[20px] font-bold text-[#212121] mb-[12px] pr-[40px]">What is VMPTaaS?</h3>
                 <p className="text-[14px] leading-[1.6] text-[#585858]">VMPTaaS combines continuous vulnerability management with focused penetration testing so you can see risk, rank it, and validate what really matters.</p>
                 {/* Label */}
                 {/* <div className="hidden min-[1280px]:block absolute -right-[40px] top-[40px] bg-[#E9F0F7] p-[4px_12px] rounded-[20px] text-[10px] font-bold text-[#2E5A88] whitespace-nowrap z-10">CONTINUOUS SCANNING</div> */}
              </article>
              {/* Feature 2 */}
              <article className="bg-[#F6F8FB] border-none rounded-[16px] p-[32px] text-left relative flex flex-col justify-center min-h-[250px]">
                 <div className="w-[52px] h-[52px] flex items-center justify-center absolute top-[24px] right-[24px]">
                   <img src="/images/pages/services/service-5/(VMPTaaS)/left-colum-icon-2.svg" alt="" className="w-full h-full" />
                 </div>
                 <h3 className="text-[20px] font-bold text-[#212121] mb-[12px] pr-[40px]">Why it matters</h3>
                 <p className="text-[14px] leading-[1.6] text-[#585858]">Threats change fast, and point-in-time testing misses a lot. Ongoing reviews keep remediation focused on the issues most likely to be exploited.</p>
                 {/* Label */}
                 {/* <div className="hidden min-[1280px]:block absolute -right-[20px] bottom-[40px] bg-[#E9F0F7] p-[4px_12px] rounded-[20px] text-[10px] font-bold text-[#2E5A88] whitespace-nowrap z-10">TARGETED TESTING</div> */}
              </article>
            </div>

            {/* Center Image */}
            <div className="relative flex justify-center items-center w-full max-w-[580px] h-auto mx-auto min-[1280px]:h-[515px] max-[1024px]:order-2">
              <picture className="w-full min-[1025px]:w-[580px] h-full flex justify-center items-center">
                <img src="/images/pages/services/service-5/(VMPTaaS)/center-image.svg" alt="VMPTaaS Dashboard" className="w-full h-full object-contain" />
              </picture>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-between gap-[15px] flex-1 max-w-[350px] w-full max-[1024px]:order-3">
              {/* Feature 3 */}
              <article className="bg-[#F6F8FB] border-none rounded-[16px] p-[32px] text-left relative flex flex-col justify-center min-h-[250px]">
                 <div className="w-[52px] h-[52px] flex items-center justify-center absolute top-[24px] right-[24px]">
                   <img src="/images/pages/services/service-5/(VMPTaaS)/right-colum-icon-1.svg" alt="" className="w-full h-full" />
                 </div>
                 <h3 className="text-[20px] font-bold text-[#212121] mb-[12px] pr-[40px]">How we work</h3>
                 <p className="text-[14px] leading-[1.6] text-[#585858]">We scan, triage, and test on a schedule that fits your environment, then deliver clear remediation guidance and validation reports your teams can act on.</p>
                 {/* Label */}
                 {/* <div className="hidden min-[1280px]:block absolute -left-[50px] top-[40px] bg-[#E9F0F7] p-[4px_12px] rounded-[20px] text-[10px] font-bold text-[#2E5A88] whitespace-nowrap z-10">ACTIONABLE REMEDIATION</div> */}
              </article>
              {/* Feature 4 */}
              <article className="bg-[#F6F8FB] border-none rounded-[16px] p-[32px] text-left relative flex flex-col justify-center min-h-[250px]">
                 <div className="w-[52px] h-[52px] flex items-center justify-center absolute top-[24px] right-[24px]">
                   <img src="/images/pages/services/service-5/(VMPTaaS)/right-coloum-icon-2.svg" alt="" className="w-full h-full" />
                 </div>
                 <h3 className="text-[20px] font-bold text-[#212121] mb-[12px] pr-[40px]">Who benefits</h3>
                 <p className="text-[14px] leading-[1.6] text-[#585858]">It is a strong fit for teams that need regular security evidence, clearer prioritization, and a practical way to show progress across compliance or internal risk programs.</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
