"use client";

import React from "react";

export default function SOCaaSPage() {
  return (
    <div className="w-full min-h-screen bg-[#ffffff]">
      {/* Hero Section */}
      <section className="relative min-[1025px]:w-[1440px] min-[1025px]:h-[556px] h-[733px] max-[1024px]:w-[440px] mx-auto flex flex-col justify-center items-center overflow-hidden bg-[url('/images/pages/services/service-5/(SOCaaS)/hero-bg.svg')] bg-cover bg-center bg-no-repeat bg-[#030D1A] opacity-100 p-[100px_20px_60px] max-[1454px]:p-[160px_20px_100px] text-center">
        <div className="relative w-full max-w-[850px] flex flex-col items-center gap-[21px] text-center z-[5] px-[20px] max-[1454px]:mx-auto">
          <div className="flex justify-center items-center w-auto min-w-[365px] h-[38px] gap-[8.12px] rounded-[27.61px] p-[8.12px_24px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] m-0">
            <span className="opacity-100 font-manrope font-semibold text-[14px] leading-none tracking-[0.09em] uppercase text-[#FFFFFF] bg-transparent border-none whitespace-nowrap">MANAGED CYBERSECURITY AS A SERVICE</span>
          </div>

          <h1 className="font-sora text-[32px] font-semibold text-[#ffffff] w-full max-w-[750px] opacity-100 leading-[1.3] text-center [text-wrap:balance] mx-auto max-[1454px]:h-auto max-[1454px]:text-[32px] max-[1454px]:leading-normal m-0">
            Security Operations Center-as-a-Service (SOCaaS)
          </h1>

          <p className="font-manrope font-normal text-[18px] leading-[30px] text-[#EEEEEE] w-full max-w-[687px] opacity-100 text-center mx-auto max-[1454px]:h-auto max-[768px]:text-[16px] m-0">
            Continuous threat visibility, rapid incident response, and real-time threat analysis—all delivered through a fully managed SOC service.
          </p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="p-[140px_20px_0px] bg-[#ffffff]">
        <div className="max-w-[1230px] mx-auto text-center">
          <h2 className="font-sora text-[32px] font-bold text-[#212121] mb-[30px] max-[768px]:text-[32px]">
            Why Choose <span className="text-[#212121]">(</span><span className="text-[#2E5A88]">SOCaaS</span><span className="text-[#212121]">)</span>
          </h2>
          
          <div className="flex flex-row items-stretch justify-center w-full max-w-[1173px] mx-auto gap-[17px] min-[1280px]:h-[545px] max-[1024px]:h-auto max-[1024px]:gap-[40px] max-[1024px]:flex-col max-[1024px]:items-center relative">
            {/* Left Column */}
            <div className="flex flex-col gap-[17px] flex-1 max-w-[331px] w-full min-[1280px]:h-[545px] max-[1024px]:order-1">
              {/* Card 1 */}
              <article className="bg-[#F6F8FB] border-none rounded-[16px] p-[32px] text-left relative flex flex-col justify-center min-h-[250px] flex-1">
                 <div className="w-[52px] h-[52px] flex items-center justify-center absolute top-[24px] right-[24px]">
                   <img src="/images/pages/services/service-5/(SOCaaS)/left-colum-1.svg" alt="" className="w-full h-full" />
                 </div>
                 <h3 className="font-sora text-[18px] font-bold text-[#212121] mb-[12px] mt-[40px]">What is SOCaaS?</h3>
                 <p className="font-manrope text-[18px] leading-[1.6] text-[#585858]">A fully managed, 24/7 security service that delivers expert threat detection, and response.</p>
              </article>
              {/* Card 2 */}
              <article className="bg-[#F6F8FB] border-none rounded-[16px] p-[32px] text-left relative flex flex-col justify-center min-h-[250px] flex-1">
                 <div className="w-[52px] h-[52px] flex items-center justify-center absolute top-[24px] right-[24px]">
                   <img src="/images/pages/services/service-5/(SOCaaS)/left-colum-2.svg" alt="" className="w-full h-full" />
                 </div>
                 <h3 className="font-sora text-[18px] font-bold text-[#212121] mb-[12px] mt-[40px]">Why organizations use it</h3>
                 <p className="font-manrope text-[18px] leading-[1.6] text-[#585858]">To gain high-end security monitoring without the costs and complexity of building an in-house SOC.</p>
              </article>
            </div>

            {/* Center Image */}
            <div className="relative flex justify-center items-center w-full max-w-[404px] h-full min-[1280px]:h-[545px] mx-auto max-[1024px]:order-2">
              <picture className="w-full min-[1025px]:w-[404px] h-full flex justify-center items-center relative">
                <img src="/images/pages/services/service-5/(SOCaaS)/center-image.svg" alt="SOCaaS Visualization" className="w-full h-full object-cover rounded-[20px]" />
                
                {/* Strategic Labels positioned relative to image */}
                <div className="flex items-center justify-center absolute min-[1280px]:-left-[40px] max-[1024px]:left-[-15px] top-[15%] max-[1024px]:top-[47px] w-auto max-[1024px]:w-[172px] h-auto max-[1024px]:h-[35px] bg-[#ffffff] p-[8.12px] rounded-[27.61px] text-[10px] font-bold text-[#2E5A88] whitespace-nowrap z-10 border-[0.81px] border-[#FFFFFF26] shadow-[0px_5px_15px_rgba(0,0,0,0.35)]">24/7 MONITORING</div>
                <div className="flex items-center justify-center absolute min-[1280px]:-left-[45px] max-[1024px]:left-[-15px] bottom-[30%] max-[1024px]:top-[392px] w-auto max-[1024px]:w-[179px] h-auto max-[1024px]:h-[35px] bg-[#ffffff] p-[8.12px] rounded-[27.61px] text-[10px] font-bold text-[#2E5A88] whitespace-nowrap z-10 border-[0.81px] border-[#FFFFFF26] shadow-[0px_5px_15px_rgba(0,0,0,0.35)]">RAPID RESPONSE</div>
                <div className="flex items-center justify-center absolute min-[1280px]:-right-[50px] max-[1024px]:right-[-15px] top-[40%] max-[1024px]:top-[169px] w-auto max-[1024px]:w-[206px] h-auto max-[1024px]:h-[35px] bg-[#ffffff] p-[8.12px] rounded-[27.61px] text-[10px] font-bold text-[#2E5A88] whitespace-nowrap z-10 border-[0.81px] border-[#FFFFFF26] shadow-[0px_5px_15px_rgba(0,0,0,0.35)]">EXPERT ANALYSIS</div>
              </picture>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-[17px] flex-1 max-w-[331px] w-full min-[1280px]:h-[545px] max-[1024px]:order-3">
              {/* Card 3 */}
              <article className="bg-[#F6F8FB] border-none rounded-[16px] p-[32px] text-left relative flex flex-col justify-center min-h-[250px] flex-1">
                 <div className="w-[52px] h-[52px] flex items-center justify-center absolute top-[24px] right-[24px]">
                   <img src="/images/pages/services/service-5/(SOCaaS)/right-colum-1.svg" alt="" className="w-full h-full" />
                 </div>
                 <h3 className="font-sora text-[18px] font-bold text-[#212121] mb-[12px] mt-[40px]">How it works</h3>
                 <p className="font-manrope text-[18px] leading-[1.6] text-[#585858]">We collect logs, analyze threats using AI and expert analysts, and provide actionable alerts and incident response.</p>
              </article>
              {/* Card 4 */}
              <article className="bg-[#F6F8FB] border-none rounded-[16px] p-[32px] text-left relative flex flex-col justify-center min-h-[250px] flex-1">
                 <div className="w-[52px] h-[52px] flex items-center justify-center absolute top-[24px] right-[24px]">
                   <img src="/images/pages/services/service-5/(SOCaaS)/right-cloum-2.svg" alt="" className="w-full h-full" />
                 </div>
                 <h3 className="font-sora text-[18px] font-bold text-[#212121] mb-[12px] mt-[40px]">Who benefits</h3>
                 <p className="font-manrope text-[18px] leading-[1.6] text-[#585858]">Ideal for companies needing round-the-clock protection, compliance assurance, and advanced threat hunting.</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
