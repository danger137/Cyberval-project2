"use client";

import React from "react";

export default function VMPTaaSPage() {
  return (
    <div className="w-full min-h-screen bg-[#ffffff]">
      {/* Hero Section */}
      <section className="relative min-[1025px]:w-[1440px] min-[1025px]:h-[556px] h-[733px] max-[1024px]:w-[440px] mx-auto flex flex-col justify-center items-center overflow-hidden bg-[url('/images/pages/services/service-5/(VMPTaaS)/hero-bg.svg')] max-[1024px]:bg-[url('/images/pages/services/service-5/(VMPTaaS)/Frame%202147225646.svg')] bg-cover bg-top bg-no-repeat opacity-100 p-[120px_20px_60px] text-center">
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
          
          <div className="flex flex-row items-stretch justify-center w-full max-w-[1173px] mx-auto gap-[17px] min-[1280px]:h-[545px] max-[1024px]:h-auto max-[1024px]:gap-[40px] max-[1024px]:flex-col max-[1024px]:items-center relative">
            {/* Left Column */}
            <div className="flex flex-col gap-[17px] flex-1 max-w-[331px] w-full min-[1280px]:h-[545px] max-[1024px]:order-1">
              {/* Feature 1 */}
              <article className="bg-[#F6F8FB] border-none rounded-[16px] p-[32px] text-left relative flex flex-col justify-center min-h-[250px] flex-1">
                 <div className="w-[52px] h-[52px] flex items-center justify-center absolute top-[24px] right-[24px]">
                   <img src="/images/pages/services/service-5/(VMPTaaS)/left-colum-icon-1.svg" alt="" className="w-full h-full" />
                 </div>
                 <h3 className="text-[20px] font-bold text-[#212121] mb-[12px] mt-[40px]">What is VMPTaaS?</h3>
                 <p className="text-[14px] leading-[1.6] text-[#585858]">VMPTaaS combines continuous vulnerability management with focused penetration testing so you can see risk, rank it, and validate what really matters.</p>
              </article>
              {/* Feature 2 */}
              <article className="bg-[#F6F8FB] border-none rounded-[16px] p-[32px] text-left relative flex flex-col justify-center min-h-[250px] flex-1">
                 <div className="w-[52px] h-[52px] flex items-center justify-center absolute top-[24px] right-[24px]">
                   <img src="/images/pages/services/service-5/(VMPTaaS)/left-colum-icon-2.svg" alt="" className="w-full h-full" />
                 </div>
                 <h3 className="text-[20px] font-bold text-[#212121] mb-[12px] mt-[40px]">Why it matters</h3>
                 <p className="text-[14px] leading-[1.6] text-[#585858]">Threats change fast, and point-in-time testing misses a lot. Ongoing reviews keep remediation focused on the issues most likely to be exploited.</p>
              </article>
            </div>

            {/* Center Image */}
            <div className="relative flex justify-center items-center w-full max-w-[404px] h-full min-[1280px]:h-[545px] mx-auto max-[1024px]:order-2">
              <picture className="w-full min-[1025px]:w-[404px] h-full flex justify-center items-center relative">
                <img src="/images/pages/services/service-5/(VMPTaaS)/Frame%201597883839%20(1).svg" alt="VMPTaaS Dashboard" className="w-full h-full object-cover rounded-[20px]" />
                
                {/* Strategic Labels positioned relative to image */}
                <div className="flex items-center justify-center absolute min-[1280px]:-left-[40px] max-[1024px]:left-[-15px] top-[15%] max-[1024px]:top-[47px] w-auto max-[1024px]:w-[172px] h-auto max-[1024px]:h-[35px] bg-[#ffffff] p-[8.12px] rounded-[27.61px] text-[10px] font-bold text-[#2E5A88] whitespace-nowrap z-10 border-[0.81px] border-[#FFFFFF26] shadow-[0px_5px_15px_rgba(0,0,0,0.35)]">CONTINUOUS SCANNING</div>
                <div className="flex items-center justify-center absolute min-[1280px]:-left-[45px] max-[1024px]:left-[-15px] bottom-[30%] max-[1024px]:top-[392px] w-auto max-[1024px]:w-[179px] h-auto max-[1024px]:h-[35px] bg-[#ffffff] p-[8.12px] rounded-[27.61px] text-[10px] font-bold text-[#2E5A88] whitespace-nowrap z-10 border-[0.81px] border-[#FFFFFF26] shadow-[0px_5px_15px_rgba(0,0,0,0.35)]">TARGETED TESTING</div>
                <div className="flex items-center justify-center absolute min-[1280px]:-right-[50px] max-[1024px]:right-[-15px] top-[40%] max-[1024px]:top-[169px] w-auto max-[1024px]:w-[206px] h-auto max-[1024px]:h-[35px] bg-[#ffffff] p-[8.12px] rounded-[27.61px] text-[10px] font-bold text-[#2E5A88] whitespace-nowrap z-10 border-[0.81px] border-[#FFFFFF26] shadow-[0px_5px_15px_rgba(0,0,0,0.35)]">ACTIONABLE REMEDIATION</div>
              </picture>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-[17px] flex-1 max-w-[331px] w-full min-[1280px]:h-[545px] max-[1024px]:order-3">
              {/* Feature 3 */}
              <article className="bg-[#F6F8FB] border-none rounded-[16px] p-[32px] text-left relative flex flex-col justify-center min-h-[250px] flex-1">
                 <div className="w-[52px] h-[52px] flex items-center justify-center absolute top-[24px] right-[24px]">
                   <img src="/images/pages/services/service-5/(VMPTaaS)/right-colum-icon-1.svg" alt="" className="w-full h-full" />
                 </div>
                 <h3 className="text-[20px] font-bold text-[#212121] mb-[12px] mt-[40px]">How we work</h3>
                 <p className="text-[14px] leading-[1.6] text-[#585858]">We scan, triage, and test on a schedule that fits your environment, then deliver clear remediation guidance and validation reports your teams can act on.</p>
              </article>
              {/* Feature 4 */}
              <article className="bg-[#F6F8FB] border-none rounded-[16px] p-[32px] text-left relative flex flex-col justify-center min-h-[250px] flex-1">
                 <div className="w-[52px] h-[52px] flex items-center justify-center absolute top-[24px] right-[24px]">
                   <img src="/images/pages/services/service-5/(VMPTaaS)/right-coloum-icon-2.svg" alt="" className="w-full h-full" />
                 </div>
                 <h3 className="text-[20px] font-bold text-[#212121] mb-[12px] mt-[40px]">Who benefits</h3>
                 <p className="text-[14px] leading-[1.6] text-[#585858]">It is a strong fit for teams that need regular security evidence, clearer prioritization, and a practical way to show progress across compliance or internal risk programs.</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
