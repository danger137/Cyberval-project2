"use client";
import "./service-5.css";
import React from "react";
import Link from "next/link";
import ScrollReveal from "../../component/ScrollReveal";

export default function ServiceFivePage() {
  return (
    <div className="w-full bg-[#ffffff]">
      <div className="w-full bg-[#ffffff]">
        {/* Hero Section */}
        <section className="relative w-full min-[1025px]:h-[556px] min-h-[500px] mx-auto flex flex-col justify-center items-center overflow-hidden bg-[url('/images/pages/services/service-5/hero-bg.svg')] max-[1024px]:bg-[url('/images/pages/services/service-5/her-bg-mobile.svg')] bg-cover bg-center bg-no-repeat opacity-100 p-[100px_20px_60px] max-[1454px]:p-[160px_20px_100px] text-center max-[1024px]:!pt-[140px] max-[1024px]:!pb-[80px] max-[425px]:!pt-[130px] max-[425px]:!pb-[60px] max-[1024px]:px-[24px]">
          <ScrollReveal direction="up">
            <div className="relative w-full max-w-[850px] flex flex-col items-center gap-[21px] z-[5] opacity-100 mx-auto">
              <div className="flex justify-center items-center w-[128px] h-[38px] gap-[8.12px] rounded-[27.61px] p-[8.12px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] m-0">
                <span className="opacity-100 font-manrope font-semibold text-[14px] leading-[36.54px] tracking-[0.09em] uppercase text-[#FFFFFF] bg-transparent border-none text-center antialiased">SERVICES</span>
              </div>

              <h1 className="font-sora font-semibold text-[#FFFFFF] opacity-100 text-center [text-wrap:balance] mx-auto w-full h-auto min-[1025px]:w-[795px] min-[1025px]:text-[32px] min-[1025px]:leading-[57px] max-[1024px]:!text-[32px] max-[1024px]:!leading-[1.3] max-[480px]:!text-[32px] max-[480px]:!leading-[48px] max-[480px]:tracking-[-0.02em] max-[320px]:!text-[32px] max-[320px]:!leading-[1.25] antialiased">
                Managed Cybersecurity as a Service (MCaaS)
              </h1>

              <p className="font-manrope font-normal text-[#EEEEEE] opacity-100 text-center mx-auto min-[1025px]:w-[669px] min-[1025px]:text-[18px] min-[1025px]:leading-[30px] max-[1454px]:w-full max-[1024px]:!text-[16px] max-[1024px]:!leading-[1.6] max-[480px]:!text-[16px] max-[480px]:!leading-[28px] max-[320px]:!text-[14px] antialiased">
                At Cybervol, our Managed Cybersecurity as a Service (MCaaS) provides continuous monitoring and proactive protection, delivering tailored security solutions that keep your business resilient and compliant against evolving threats.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* VMPTaaS Section */}
        <section className="p-[140px_20px_80px] max-[1024px]:!p-[80px_24px_60px] max-[425px]:!p-[60px_16px_40px] bg-[#ffffff]">
          <ScrollReveal direction="up">
            <div className="w-full max-w-[1230px] mx-auto flex items-center justify-between gap-[80px] max-[1024px]:flex-col max-[1024px]:gap-[40px] max-[1024px]:text-left">
              <div className="flex-1 flex justify-center w-full">
                <picture className="w-full max-w-[550px]">
                  <source media="(max-width: 1024px)" srcSet="/images/pages/services/service-5/mobile-icon-1.svg" />
                  <img
                    src="/images/pages/services/service-5/section-1-icon.svg"
                    alt="VMPTaaS"
                    className="w-full h-auto"
                  />
                </picture>
              </div>
              <div className="flex-1 flex flex-col items-start">
                <h2 className="text-[32px] font-semibold text-[#212121] leading-[49px] mb-[10px] max-[1024px]:!text-[28px] max-[1024px]:!leading-[40px] max-[425px]:!text-[26px] max-[425px]:!leading-[36px] antialiased font-sora">
                  Vulnerability Management & Penetration Testing as a Service{" "}
                  <span className="text-[#2E5A88]">(VMPTaaS)</span>
                </h2>
                <p className="text-[18px] leading-[30px] text-[#585858] mb-[20px] max-[1024px]:!text-[15px] max-[1024px]:!leading-[26px] antialiased font-manrope">
                  Continuously identify, assess, and prioritize vulnerabilities
                  across your infrastructure while simulating real-world attacks to
                  validate the effectiveness of your defenses. Our automated and
                  expert-driven approach not only highlights security gaps but also
                  tests their exploitability—ensuring risks are addressed
                  proactively and in alignment with business impact.
                </p>
                <Link href="/services/service-5/VMPTaaS">
                  <button className="p-[14px_28px] bg-transparent border border-[#030D1A] text-[#030D1A] text-[14px] font-semibold rounded-[8px] cursor-pointer transition-all duration-300 ease hover:bg-[#030D1A] hover:text-[#FFFFFF]">Learn more about VMPTaaS</button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* vCISO Section */}
        <section className="p-[140px_20px_80px] max-[1024px]:!p-[80px_24px_60px] max-[425px]:!p-[60px_16px_40px] bg-[#F8FAFF]">
          <ScrollReveal direction="up">
            <div className="w-full max-w-[1230px] mx-auto flex items-center justify-between gap-[80px] max-[1024px]:flex-col max-[1024px]:gap-[40px] max-[1024px]:text-left">
              <div className="flex-1 flex flex-col items-start">
                <h2 className="text-[32px] font-semibold text-[#212121] leading-[49px] mb-[10px] max-[1024px]:!text-[28px] max-[1024px]:!leading-[40px] max-[425px]:!text-[26px] max-[425px]:!leading-[36px] antialiased font-sora">
                  Virtual CISO <span className="text-[#2E5A88]">(vCISO)</span>
                </h2>
                <p className="text-[18px] leading-[30px] text-[#585858] mb-[20px] max-[1024px]:!text-[15px] max-[1024px]:!leading-[26px] antialiased font-manrope">
                  Gain access to strategic cybersecurity leadership for risk
                  management, governance, and compliance. Our vCISO service delivers
                  tailored guidance to strengthen your security posture—cost-effectively
                  and on-demand.
                </p>
                <Link href="/services/service-5/vCISO">
                  <button className="p-[14px_28px] bg-transparent border border-[#030D1A] text-[#030D1A] text-[14px] font-semibold rounded-[8px] cursor-pointer transition-all duration-300 ease hover:bg-[#030D1A] hover:text-[#FFFFFF]">Learn more about vCISO</button>
                </Link>
              </div>
              <div className="flex-1 flex justify-center w-full">
                <picture className="w-full max-w-[550px]">
                  <source media="(max-width: 1024px)" srcSet="/images/pages/services/service-5/mobile-icon-2.svg" />
                  <img
                    src="/images/pages/services/service-5/section-2-icon.svg"
                    alt="vCISO"
                    className="w-full h-auto"
                  />
                </picture>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* SOCaaS Section */}
        <section className="p-[140px_20px_80px] max-[1024px]:!p-[80px_24px_60px] max-[425px]:!p-[60px_16px_40px] bg-[#ffffff]">
          <ScrollReveal direction="up">
            <div className="w-full max-w-[1230px] mx-auto flex items-center justify-between gap-[80px] max-[1024px]:flex-col max-[1024px]:gap-[40px] max-[1024px]:text-left">
              <div className="flex-1 flex justify-center w-full">
                <picture className="w-full max-w-[550px]">
                  <source media="(max-width: 1024px)" srcSet="/images/pages/services/service-5/mobile-icon-3.svg" />
                  <img
                    src="/images/pages/services/service-5/section-3-icon.svg"
                    alt="SOCaaS"
                    className="w-full h-auto"
                  />
                </picture>
              </div>
              <div className="flex-1 flex flex-col items-start">
                <h2 className="text-[32px] font-semibold text-[#212121] leading-[49px] mb-[10px] max-[1024px]:!text-[28px] max-[1024px]:!leading-[40px] max-[425px]:!text-[26px] max-[425px]:!leading-[36px] antialiased font-sora">
                  Security Operations Center-as-a-Service{" "}
                  <span className="text-[#2E5A88]">(SOCaaS)</span>
                </h2>
                <p className="text-[18px] leading-[30px] text-[#585858] mb-[20px] max-[1024px]:!text-[15px] max-[1024px]:!leading-[26px] antialiased font-manrope">
                  Gain continuous, expert-driven threat monitoring without the
                  overhead of building an in-house team. Our SOC-as-a-Service
                  (SOCaaS) delivers real-time detection, rapid incident response,
                  and advanced analytics to keep your organization secure—24/7. With
                  scalable, cost-effective protection tailored to your environment,
                  we help you stay ahead of evolving cyber threats while reducing
                  operational complexity.
                </p>
                <Link href="/services/service-5/SOCaaS">
                  <button className="p-[14px_28px] bg-transparent border border-[#030D1A] text-[#030D1A] text-[14px] font-semibold rounded-[8px] cursor-pointer transition-all duration-300 ease hover:bg-[#030D1A] hover:text-[#FFFFFF]">Learn more about SOCaaS</button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Why Choose Section (Redesigned) */}
        <section className="p-[140px_20px_100px] max-[1024px]:!p-[80px_24px_60px] max-[425px]:!p-[60px_16px_40px] bg-[#ffffff] text-center">
          <ScrollReveal direction="up">
            <div className="max-w-[1230px] mx-auto">
              <h2 className="text-[32px] font-semibold text-[#212121] leading-[49px] mb-[60px] max-[1024px]:mb-[40px] max-[1024px]:!text-[28px] max-[1024px]:!leading-[40px] antialiased font-sora">
                Why Choose <span className="text-[#2E5A88]">MCaaS</span>
              </h2>

              <div className="grid grid-cols-[1fr_1.15fr_1fr] gap-[24px] items-stretch max-[1024px]:grid-cols-1 max-[1024px]:gap-[24px] min-[1025px]:min-h-[580px]">
                
                {/* Left Column */}
                <div className="flex flex-col gap-[24px] max-[1024px]:order-1">
                  <div className="bg-[#F6F8FB] rounded-[24px] p-[32px] text-left flex flex-col justify-center flex-1 relative service-card-anim group" style={{ animationDelay: '0.4s' }}>
                    <div className="w-[56px] h-[56px] flex items-center justify-center absolute top-[32px] right-[32px]">
                      <img
                        src="/images/pages/services/service-5/section-4-left-colum-icon-1.svg"
                        alt="Trust"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-[10px] mt-[20px] pr-[50px]">
                      <h3 className="text-[22px] font-semibold text-[#212121] leading-[30px] antialiased font-sora m-0">Unparalleled trust</h3>
                      <p className="text-[16px] leading-[26px] text-[#585858] antialiased font-manrope m-0">Build next level security & customer trust</p>
                    </div>
                  </div>
                  
                  <div className="bg-[#F6F8FB] rounded-[24px] p-[32px] text-left flex flex-col justify-center flex-1 relative service-card-anim group" style={{ animationDelay: '0.5s' }}>
                    <div className="w-[56px] h-[56px] flex items-center justify-center absolute top-[32px] right-[32px]">
                      <img
                        src="/images/pages/services/service-5/section-4-left-colum-icon-.svg"
                        alt="Innovation"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-[10px] mt-[20px] pr-[50px]">
                      <h3 className="text-[22px] font-semibold text-[#212121] leading-[30px] antialiased font-sora m-0">Focus on business innovation</h3>
                      <p className="text-[16px] leading-[26px] text-[#585858] antialiased font-manrope m-0">
                        Offload the burden of managing compel security issues and focus on business growth and innovation
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Column */}
                <div className="relative flex w-full h-full max-[1024px]:min-h-[520px] max-[1024px]:order-2 service-card-anim rounded-[24px] overflow-hidden bg-[#0a111a]" style={{ animationDelay: '0.6s' }}>
                  <picture className="absolute inset-0 w-full h-full block z-0">
                    <source media="(max-width: 1024px)" srcSet="/images/pages/services/service-5/mobile-last section image.svg" />
                    <img
                      src="/images/pages/services/service-5/section-4-center-icon.svg"
                      alt="Cyber Defense"
                      className="absolute inset-0 w-full h-full object-cover block"
                    />
                  </picture>
                  {/* Subtle gradient overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000B3] via-[#00000000] to-transparent pointer-events-none z-[1]"></div>
                  
                  {/* Glassmorphism Panel */}
                  <div className="absolute bottom-[24px] left-[24px] right-[24px] bg-[#16161640] backdrop-blur-[24px] border border-[#FFFFFF26] rounded-[20px] p-[28px] max-[425px]:p-[24px] text-left z-[10] shadow-[0px_10px_40px_rgba(0,0,0,0.2)]">
                    <div className="absolute top-[28px] right-[28px] max-[425px]:top-[24px] max-[425px]:right-[24px] w-[48px] h-[48px]">
                      <img src="/images/pages/services/service-5/Frame 12.svg" alt="Security Icon" className="w-full h-full object-contain" />
                    </div>
                    <div className="pr-[56px] flex flex-col gap-[8px]">
                      <h3 className="font-sora text-[22px] max-[425px]:text-[20px] font-semibold text-[#FFFFFF] leading-[1.4] m-0 antialiased">Expert led cyber defense</h3>
                      <p className="font-manrope text-[16px] max-[425px]:text-[15px] leading-[1.6] text-[#EBEBEB] m-0 antialiased">
                        Access to top tier cybersecurity professional who leverage advanced tools and frameworks to safeguard your digital assets
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-[24px] max-[1024px]:order-3">
                  <div className="bg-[#F6F8FB] rounded-[24px] p-[32px] text-left flex flex-col justify-center flex-1 relative service-card-anim group" style={{ animationDelay: '0.7s' }}>
                    <div className="w-[56px] h-[56px] flex items-center justify-center absolute top-[32px] right-[32px]">
                      <img
                        src="/images/pages/services/service-5/section-4-right-cloum-icon-1.svg"
                        alt="Proactive"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-[10px] mt-[20px] pr-[50px]">
                      <h3 className="text-[22px] font-semibold text-[#212121] leading-[30px] antialiased font-sora m-0">Proactive threat management</h3>
                      <p className="text-[16px] leading-[26px] text-[#585858] antialiased font-manrope m-0">
                        Continuous monitoring, real-time threat detection, and rapid incident response to keep your business secure.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-[#F6F8FB] rounded-[24px] p-[32px] text-left flex flex-col justify-center flex-1 relative service-card-anim group" style={{ animationDelay: '0.8s' }}>
                    <div className="w-[56px] h-[56px] flex items-center justify-center absolute top-[32px] right-[32px]">
                      <img
                        src="/images/pages/services/service-5/section-4-right-colum-icon-2.svg"
                        alt="Solutions"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-[10px] mt-[20px] pr-[50px]">
                      <h3 className="text-[22px] font-semibold text-[#212121] leading-[30px] antialiased font-sora m-0">Tailored security solutions</h3>
                      <p className="text-[16px] leading-[26px] text-[#585858] antialiased font-manrope m-0">
                        Customized to fit your unique security needs, leveraging a risk-based approach to build resilience against evolving threats.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}