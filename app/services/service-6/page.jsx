"use client";
import "./service-6.css";
import React from "react";

export default function ServiceSixPage() {
  return (
    <div className="w-full min-h-screen bg-[#ffffff]">
      {/* Hero Section */}
      <section className="relative min-[1025px]:w-[1440px] min-[1025px]:h-[556px] h-[733px] max-[1024px]:w-[440px] mx-auto flex flex-col items-center overflow-hidden bg-[url('/images/pages/services/service-6/Frame%202147225646%20(3).svg')] min-[1025px]:bg-[url('/images/pages/services/service-6/hero-bg.svg')] bg-cover bg-center bg-no-repeat bg-[#030D1A] opacity-100 p-[20px] text-center">
        <div className="relative w-full max-w-[850px] min-[1025px]:h-auto flex flex-col items-center min-[1025px]:gap-[24px] gap-[23px] text-center z-[5] px-[20px] mx-auto min-[1025px]:mt-[160px] mt-[200px] hero-reveal">
          <div className="flex justify-center items-center min-[1025px]:w-auto min-[1025px]:min-w-[128px] max-[1024px]:w-[106px] h-[38px] gap-[8.12px] rounded-[27.61px] p-[8.12px_24px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] m-0">
            <span className="opacity-100 font-manrope font-semibold min-[1025px]:text-[14px] text-[12px] min-[1025px]:leading-none max-[1024px]:leading-[36.54px] tracking-[0.09em] uppercase text-[#FFFFFF] bg-transparent border-none whitespace-nowrap antialiased">SERVICES</span>
          </div>

          <div className="flex flex-col min-[1025px]:gap-[12px] gap-[9px] w-full max-w-[850px] items-center">
            <h1 className="font-sora text-[32px] font-semibold text-[#ffffff] w-full max-w-[795px] opacity-100 min-[1025px]:leading-[62px] text-center [text-wrap:balance] mx-auto m-0 max-[1024px]:!text-[32px] max-[1024px]:!leading-[1.3] max-[480px]:!text-[32px] max-[480px]:!leading-[48px] max-[480px]:tracking-[-0.02em] max-[320px]:!text-[32px] max-[320px]:!leading-[1.25] antialiased">
              Training and Certifications
            </h1>
            <p className="font-manrope font-normal text-[18px] min-[1025px]:leading-[30px] leading-[26px] text-[#EEEEEE] w-full max-w-[795px] opacity-100 text-center mx-auto m-0 max-[1024px]:!text-[18px] max-[1024px]:!leading-[1.6] max-[480px]:!text-[18px] max-[480px]:!leading-[28px] max-[320px]:!text-[18px] antialiased">
              Our training and certification programs span cybersecurity, AI, digital transformation, governance, compliance, and privacy, building the knowledge, confidence, and practical skills needed to tackle today's threats, meet industry standards, and drive measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Areas we cover Section */}
      <section className="p-[140px_20px_80px] bg-[#ffffff]">
        <div className="max-w-[1230px] max-[1024px]:max-w-[384px] mx-auto">
          <div className="flex items-start justify-between mb-[30px] gap-[20px] max-[1024px]:flex-col max-[1024px]:items-start max-[1024px]:text-left">
            <h2 className="font-sora text-[32px] font-semibold text-[#212121] leading-[49px] m-0 max-[1024px]:!text-[28px] max-[1024px]:!leading-[40px] max-[425px]:!text-[26px] max-[425px]:!leading-[36px] antialiased">
              Areas <span className="text-[#2E5A88]">we cover</span>
            </h2>
            <p className="font-manrope font-normal text-[18px] leading-[30px] text-[#585858] max-w-[643px] m-0 max-[1024px]:!text-[15px] max-[1024px]:!leading-[26px] max-[1024px]:text-left antialiased">
              For Training and Certifications, our catalog spans five portfolios designed to build capability across security, innovation, resilience, governance, and privacy.
            </p>
          </div>

          <div className="grid grid-cols-[727px_484px] gap-[19px] max-w-[1230px] min-[1025px]:h-[334px] max-[1220px]:grid-cols-1 mx-auto mb-[19px]">
            {/* Card 1 - Cybersecurity */}
            <article className="relative min-[1025px]:w-[727px] min-[1025px]:h-[334px] rounded-[14.38px] overflow-hidden p-[32px_40px_47px_29px] flex flex-row items-start justify-between bg-[linear-gradient(230.36deg,rgba(135,187,243,0.36)_3.31%,rgba(111,144,180,0.07)_49.84%,rgba(246,248,251,0.49)_95.24%)] group max-[1024px]:flex-col max-[1024px]:items-center max-[1024px]:min-h-[542px] max-[1024px]:max-w-[384px] max-[1024px]:w-full max-[1024px]:gap-[10px] service-card-anim card-entrance" style={{ animationDelay: '0s' }}>
              <div className="relative z-[2] w-full max-w-[380px] max-[1024px]:max-w-[329px] flex flex-col min-[1025px]:gap-[10px] gap-[2.74px] max-[1024px]:h-[192.74px]">
                <h3 className="m-0 font-sora text-[18px] font-semibold text-[#212121] min-[1025px]:leading-[38px] max-[1024px]:max-w-[329px] antialiased">Cybersecurity</h3>
                <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#585858] w-full max-w-[347px] antialiased">
                  Training courses in this portfolio focus on safeguarding information systems, identifying and mitigating cyber threats, and building robust security strategies that ensure data protection and integrity.
                </p>
              </div>

              <div className="min-[1025px]:relative absolute bottom-[20px] right-[20px] z-[1] w-[256.37px] h-[255px] self-center">
                <img src="/images/pages/services/service-6/card-1-icon.svg" alt="Cybersecurity" className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </article>

            {/* Card 2 - AI and Digital Transformation */}
            <article className="relative min-[1025px]:w-[482px] min-[1025px]:h-[334px] rounded-[14.38px] overflow-hidden p-[40px] flex flex-col bg-[#F6F8FB] group max-[1024px]:w-[384px] max-[1024px]:h-[334px] max-[1024px]:p-[29px_19px_80px_19px] service-card-anim card-entrance" style={{ animationDelay: '0.1s' }}>
               <div className="flex flex-col gap-[10px] w-full max-w-[337px]">
                 <h3 className="font-sora text-[18px] font-semibold text-[#212121] leading-[38px] antialiased">AI and Digital Transformation</h3>
                 <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#585858] w-full antialiased">
                   This portfolio focuses on the intersection of artificial intelligence and digital innovation. These courses help organizations harness AI technologies and navigate the challenges and opportunities posed by digital transformation.
                 </p>
               </div>
               <div className="absolute bottom-[20px] right-[20px]">
                 <img src="/images/pages/services/service-6/card-2-icon.svg" alt="" className="w-[54px] h-[54px] opacity-80 group-hover:opacity-100 transition-opacity" />
               </div>
            </article>
          </div>

          <div className="grid grid-cols-[394px_395px_394px] gap-[19px] max-w-[1230px] min-[1025px]:h-[334px] max-[1250px]:grid-cols-1 mx-auto mt-[19px]">
            {/* Card 3 - Continuity */}
            <article className="relative bg-[#F6F8FB] rounded-[14.38px] p-[36px_18px_80px_18px] flex flex-col overflow-hidden group min-[1025px]:w-[394px] min-[1025px]:h-[334px] max-[1024px]:w-[384px] max-[1024px]:h-[334px] service-card-anim card-entrance" style={{ animationDelay: '0.2s' }}>
               <div className="flex flex-col gap-[10px] w-full">
                 <h3 className="m-0 font-sora text-[18px] font-semibold text-[#212121] leading-[30px] antialiased">Continuity, Resilience, and Recovery</h3>
                 <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#585858] w-full antialiased">
                   Courses under this portfolio prepare professionals to develop and implement strategies that ensure business continuity, organizational resilience, and effective recovery in the face of disruptive events.
                 </p>
               </div>
               <div className="absolute bottom-[20px] right-[20px]">
                 <img src="/images/pages/services/service-6/card-3-icon.svg" alt="" className="w-[54px] h-[54px] opacity-80 group-hover:opacity-100 transition-opacity" />
               </div>
            </article>

            {/* Card 4 - GRC */}
            <article className="relative bg-[#F6F8FB] rounded-[14.38px] p-[36px_24px_24px_24px] flex flex-col overflow-hidden group min-[1025px]:w-[395px] min-[1025px]:h-[334px] max-[1024px]:w-[384px] max-[1024px]:h-[334px] max-[1024px]:p-[36px_18px_80px_18px] service-card-anim card-entrance" style={{ animationDelay: '0.3s' }}>
               <div className="flex flex-col gap-[10px] w-full">
                 <h3 className="m-0 font-sora text-[18px] font-semibold text-[#212121] leading-[30px] antialiased">Governance, Risk, and Compliance</h3>
                 <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#585858] w-full antialiased">
                   This portfolio emphasizes governance frameworks, risk management, and compliance strategies, equipping participants to align organizational objectives with regulatory and business requirements.
                 </p>
               </div>
               <div className="absolute bottom-[20px] right-[20px]">
                 <img src="/images/pages/services/service-6/card-4-icon.svg" alt="" className="w-[54px] h-[54px] opacity-80 group-hover:opacity-100 transition-opacity" />
               </div>
            </article>

            {/* Card 5 - Privacy */}
            <article className="relative bg-[#F6F8FB] rounded-[14.38px] p-[36px_24px_24px_24px] flex flex-col overflow-hidden group min-[1025px]:w-[394px] min-[1025px]:h-[334px] max-[1024px]:w-[384px] max-[1024px]:h-[334px] max-[1024px]:p-[36px_24px_80px_24px] service-card-anim card-entrance" style={{ animationDelay: '0.4s' }}>
               <div className="flex flex-col gap-[10px] w-full">
                 <h3 className="m-0 font-sora text-[18px] font-semibold text-[#212121] leading-[30px] antialiased">Privacy and Data Protection</h3>
                 <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#585858] w-full antialiased">
                   This portfolio covers critical data protection laws and practices, including GDPR compliance and strategies for protecting personal and sensitive information in an increasingly data-driven world.
                 </p>
               </div>
               <div className="absolute bottom-[20px] right-[20px]">
                 <img src="/images/pages/services/service-6/card-5-icon.svg" alt="" className="w-[54px] h-[54px] opacity-80 group-hover:opacity-100 transition-opacity" />
               </div>
            </article>
          </div>
        </div>
      </section>

      {/* Recognized Section */}
      <section className="relative w-full max-w-[1438px] min-[1025px]:h-[532px] mx-auto bg-[#F8FAFF] overflow-hidden flex items-center justify-center hidden min-[1025px]:flex">
        <div className="w-full max-w-[1230px] mx-auto flex items-center justify-between gap-[80px] max-[1024px]:flex-col max-[1024px]:text-center max-[1024px]:p-[60px_20px]">
          <div className="flex-1 flex flex-col gap-[7px] max-w-[599px] text-left max-[1024px]:items-center">
            <h2 className="font-sora text-[32px] font-semibold text-[#212121] leading-[49px] m-0 max-[1024px]:!text-[28px] max-[1024px]:!leading-[40px] max-[425px]:!text-[26px] max-[425px]:!leading-[36px] antialiased">
              Recognized by <span className="text-[#2E5A88]">Global Certifications</span>
            </h2>
            <p className="font-manrope font-normal text-[18px] leading-[30px] text-[#585858] m-0 max-w-[422px] antialiased">
              Industry-recognized cybersecurity training and certification programs designed to help professionals lead, defend, and grow in a rapidly evolving digital world.
            </p>
            <ul className="flex flex-col gap-[17px] mt-[10px] min-[1025px]:w-[641px] min-[1025px]:h-[120px] max-[1024px]:items-center">
               <li className="flex items-center gap-[12px] text-[18px] font-medium text-[#585858]">
                 <img src="/images/pages/services/service-6/tick-icon.svg" alt="check" className="w-[22px] h-[22px]" />
                 ISO-Aligned Training
               </li>
               <li className="flex items-center gap-[12px] text-[18px] font-medium text-[#585858]">
                 <img src="/images/pages/services/service-6/tick-icon.svg" alt="check" className="w-[22px] h-[22px]" />
                 Practical Cybersecurity Programs
               </li>
               <li className="flex items-center gap-[12px] text-[18px] font-medium text-[#585858]">
                 <img src="/images/pages/services/service-6/tick-icon.svg" alt="check" className="w-[22px] h-[22px]" />
                 Globally Recognized Certifications
               </li>
            </ul>
          </div> 
          <div className="flex-1 flex justify-center items-center">
            <img 
              src="/images/pages/services/service-6/section-3-right-side-icon.svg" 
              alt="Certifications" 
              className="w-[474px] h-[211.63px] object-contain" 
            />
          </div>
        </div>
      </section>
    </div>
  );
}
