"use client";
import "./service-6.css";
import React from "react";
import ScrollReveal from "../../component/ScrollReveal";

export default function ServiceSixPage() {
  return (
    <div className="w-full min-h-screen bg-[#ffffff]">
    <div className="w-full bg-[#ffffff]">
      <div className="w-full bg-[#ffffff]">
        {/* Hero Section */}
        <section className="relative w-full min-[1025px]:h-[556px] min-h-[500px] mx-auto flex flex-col justify-center items-center overflow-hidden bg-[url('/images/pages/services/service-6/Frame%202147225646%20(3).svg')] min-[1025px]:bg-[url('/images/pages/services/service-6/hero-bg.svg')] bg-cover bg-center bg-no-repeat bg-[#030D1A] opacity-100 p-[100px_20px_60px] max-[1454px]:p-[160px_20px_100px] text-center max-[1024px]:!pt-[140px] max-[1024px]:!pb-[80px] max-[425px]:!pt-[130px] max-[425px]:!pb-[60px] max-[1024px]:px-[24px]">
          <ScrollReveal direction="up">
            <div className="relative w-full max-w-[850px] flex flex-col items-center gap-[21px] z-[5] opacity-100 mx-auto">
              <div className="flex justify-center items-center w-auto max-w-[90%] min-h-[38px] gap-[8.12px] rounded-[27.61px] p-[8px_16px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] m-0">
                <span className="opacity-100 font-manrope font-semibold text-[12px] min-[1025px]:text-[14px] leading-[1.5] tracking-[0.09em] uppercase text-[#FFFFFF] bg-transparent border-none text-center antialiased">SERVICES</span>
              </div>

              <h1 className="font-sora text-[32px] font-semibold text-[#ffffff] w-full max-w-[800px] opacity-100 min-[1025px]:leading-[57px] text-center [text-wrap:balance] mx-auto m-0 max-[1024px]:!text-[32px] max-[1024px]:!leading-[1.3] max-[480px]:!text-[32px] max-[480px]:!leading-[48px] max-[480px]:tracking-[-0.02em] max-[320px]:!text-[32px] max-[320px]:!leading-[1.25] antialiased">
                Training and Certifications
              </h1>

              <p className="font-manrope font-normal text-[18px] min-[1025px]:leading-[30px] leading-[26px] text-[#EEEEEE] w-full max-w-[795px] opacity-100 text-center mx-auto m-0 max-[1024px]:!text-[18px] max-[1024px]:!leading-[1.6] max-[480px]:!text-[18px] max-[480px]:!leading-[28px] max-[320px]:!text-[18px] antialiased">
                Our training and certification programs span cybersecurity, AI, digital transformation, governance, compliance, and privacy, building the knowledge, confidence, and practical skills needed to tackle today's threats, meet industry standards, and drive measurable outcomes.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Areas we cover Section */}
        <section className="p-[140px_20px_100px] max-[1024px]:!p-[80px_24px_60px] max-[425px]:!p-[60px_16px_40px] bg-[#ffffff]">
          <ScrollReveal direction="up">
            <div className="max-w-[1230px] mx-auto">
              <header className="flex flex-col min-[1025px]:flex-row justify-between items-start gap-[40px] mb-[60px] max-[1024px]:!gap-[12px]">
                <h2 className="m-0 font-sora font-semibold text-[#212121] text-[32px] leading-[49px] text-left max-[1024px]:!text-[28px] max-[1024px]:!leading-[40px] max-[425px]:!text-[26px] max-[425px]:!leading-[36px] antialiased">
                  Areas <span className="text-[#2E5A88]">we cover</span>
                </h2>
                <p className="m-0 font-manrope font-normal text-[#585858] text-[18px] leading-[30px] max-w-[643px] text-left max-[1024px]:!w-full max-[1024px]:!text-[15px] max-[1024px]:!leading-[26px] antialiased">
                  For Training and Certifications, our catalog spans five portfolios designed to build capability across security, innovation, resilience, governance, and privacy.
                </p>
              </header>

              <div className="flex flex-col gap-[24px] w-full">
                {/* Row 1 */}
                <div className="flex flex-row items-stretch justify-center gap-[24px] w-full max-[1220px]:flex-col max-[1220px]:items-center min-[1025px]:min-h-[334px]">
                  {/* Card 1 - Cybersecurity */}
                  <article className="relative bg-[linear-gradient(230.36deg,rgba(135,187,243,0.36)_3.31%,rgba(111,144,180,0.07)_49.84%,rgba(246,248,251,0.49)_95.24%)] rounded-[20px] p-[40px] max-[425px]:p-[32px] flex flex-row max-[1024px]:flex-col items-start justify-between overflow-hidden flex-[1.5] group service-card-anim" style={{ animationDelay: '0s' }}>
                    <div className="relative z-[2] flex flex-col gap-[12px] max-w-[400px]">
                      <h3 className="m-0 font-sora text-[18px] font-semibold text-[#212121] leading-[38px] antialiased">Cybersecurity</h3>
                      <p className="font-manrope font-normal text-[18px] max-[1024px]:text-[16px] leading-[28px] text-[#585858] antialiased">
                        Training courses in this portfolio focus on safeguarding information systems, identifying and mitigating cyber threats, and building robust security strategies that ensure data protection and integrity.
                      </p>
                    </div>
                    <div className="relative z-[1] w-[220px] h-[220px] max-[1024px]:w-[180px] max-[1024px]:h-[180px] self-center ml-[20px] max-[1024px]:ml-0 max-[1024px]:mt-[20px]">
                      <img src="/images/pages/services/service-6/card-1-icon.svg" alt="Cybersecurity" className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </article>

                  {/* Card 2 - AI and Digital Transformation */}
                  <article className="relative bg-[#F6F8FB] rounded-[20px] p-[40px_32px_80px_32px] flex flex-col overflow-hidden flex-1 group service-card-anim" style={{ animationDelay: '0.1s' }}>
                    <div className="flex flex-col gap-[12px] w-full">
                      <h3 className="font-sora text-[18px] font-semibold text-[#212121] leading-[38px] antialiased">AI and Digital Transformation</h3>
                      <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#585858] antialiased">
                        This portfolio focuses on the intersection of artificial intelligence and digital innovation. These courses help organizations harness AI technologies and navigate the challenges and opportunities posed by digital transformation.
                      </p>
                    </div>
                    <div className="absolute bottom-[24px] right-[24px]">
                      <img src="/images/pages/services/service-6/card-2-icon.svg" alt="" className="w-[54px] h-[54px] opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </article>
                </div>

                {/* Row 2 */}
                <div className="flex flex-row items-stretch justify-center gap-[24px] w-full max-[1220px]:flex-col max-[1220px]:items-center min-[1025px]:min-h-[334px]">
                  {/* Card 3 - Continuity */}
                  <article className="relative bg-[#F6F8FB] rounded-[20px] p-[40px_32px_80px_32px] flex flex-col overflow-hidden flex-1 group service-card-anim" style={{ animationDelay: '0.2s' }}>
                    <div className="flex flex-col gap-[12px] w-full">
                      <h3 className="m-0 font-sora text-[18px] font-semibold text-[#212121] leading-[30px] antialiased">Continuity, Resilience, and Recovery</h3>
                      <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#585858] antialiased">
                        Courses under this portfolio prepare professionals to develop and implement strategies that ensure business continuity, organizational resilience, and effective recovery in the face of disruptive events.
                      </p>
                    </div>
                    <div className="absolute bottom-[24px] right-[24px]">
                      <img src="/images/pages/services/service-6/card-3-icon.svg" alt="" className="w-[54px] h-[54px] opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </article>

                  {/* Card 4 - GRC */}
                  <article className="relative bg-[#F6F8FB] rounded-[20px] p-[40px_32px_80px_32px] flex flex-col overflow-hidden flex-1 group service-card-anim" style={{ animationDelay: '0.3s' }}>
                    <div className="flex flex-col gap-[12px] w-full">
                      <h3 className="m-0 font-sora text-[18px] font-semibold text-[#212121] leading-[30px] antialiased">Governance, Risk, and Compliance</h3>
                      <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#585858] antialiased">
                        This portfolio emphasizes governance frameworks, risk management, and compliance strategies, equipping participants to align organizational objectives with regulatory and business requirements.
                      </p>
                    </div>
                    <div className="absolute bottom-[24px] right-[24px]">
                      <img src="/images/pages/services/service-6/card-4-icon.svg" alt="" className="w-[54px] h-[54px] opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </article>

                  {/* Card 5 - Privacy */}
                  <article className="relative bg-[#F6F8FB] rounded-[20px] p-[40px_32px_80px_32px] flex flex-col overflow-hidden flex-1 group service-card-anim" style={{ animationDelay: '0.4s' }}>
                    <div className="flex flex-col gap-[12px] w-full">
                      <h3 className="m-0 font-sora text-[18px] font-semibold text-[#212121] leading-[30px] antialiased">Privacy and Data Protection</h3>
                      <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#585858] antialiased">
                        This portfolio covers critical data protection laws and practices, including GDPR compliance and strategies for protecting personal and sensitive information in an increasingly data-driven world.
                      </p>
                    </div>
                    <div className="absolute bottom-[24px] right-[24px]">
                      <img src="/images/pages/services/service-6/card-5-icon.svg" alt="" className="w-[54px] h-[54px] opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Recognized Section */}
        <section className="p-[140px_20px_100px] max-[1024px]:!p-[80px_24px_60px] max-[425px]:!p-[60px_16px_40px] bg-[#F8FAFF]">
          <ScrollReveal direction="up">
            <div className="w-full max-w-[1230px] mx-auto flex items-center justify-between gap-[80px] max-[1024px]:flex-col max-[1024px]:text-left">
              <div className="flex-1 flex flex-col gap-[7px] max-w-[599px] text-left max-[1024px]:items-start max-[1024px]:text-left">
                <h2 className="font-sora text-[32px] font-semibold text-[#212121] leading-[49px] m-0 max-[1024px]:!text-[28px] max-[1024px]:!leading-[40px] max-[425px]:!text-[26px] max-[425px]:!leading-[36px] antialiased">
                  Recognized by <span className="text-[#2E5A88]">Global Certifications</span>
                </h2>
                <p className="font-manrope font-normal text-[18px] leading-[30px] text-[#585858] m-0 max-w-[422px] antialiased">
                  Industry-recognized cybersecurity training and certification programs designed to help professionals lead, defend, and grow in a rapidly evolving digital world.
                </p>
                <ul className="flex flex-col gap-[17px] mt-[24px] min-[1025px]:w-[641px] max-[1024px]:items-start">
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
                  className="w-full max-w-[474px] h-auto object-contain" 
                />
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
    </div>
  );
}
