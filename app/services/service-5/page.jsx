"use client";
import "./service-5.css";
import React from "react";
import Link from "next/link";

export default function ServiceFivePage() {
  return (
    <main className="w-full min-h-screen bg-[#ffffff] mt-[-10px]">
      {/* Hero Section */}
      <section className="relative w-full mx-auto flex flex-col justify-center items-center overflow-hidden bg-[url('/images/pages/services/service-5/hero-bg.svg')] max-[1024px]:bg-[url('/images/pages/services/service-5/her-bg-mobile.svg')] bg-cover bg-top bg-no-repeat opacity-100 p-[120px_20px_60px] text-center min-[1025px]:h-[556px] h-[733px] max-[1024px]:w-[440px] flex">
        <div className="flex flex-col items-center z-[5] opacity-100 w-full max-w-[850px] relative mx-auto hero-reveal">
          <div className="flex justify-center items-center w-[128px] h-[38px] gap-[8.12px] rounded-[27.61px] p-[8.12px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] opacity-100 mb-[20px]">
            <span className="flex justify-center items-center w-[75px] h-[37px] opacity-100 font-manrope font-semibold text-[14px] leading-[36.54px] tracking-[0.09em] uppercase text-[#FFFFFF] bg-transparent border-none">SERVICES</span>
          </div>

          <h1 className="font-sora font-semibold text-[#FFFFFF] opacity-100 text-center [text-wrap:balance] mx-auto w-full h-auto min-[1025px]:w-[795px] min-[1025px]:text-[32px] min-[1025px]:leading-[57px] max-[1024px]:!text-[32px] max-[1024px]:!leading-[1.3] max-[480px]:!text-[32px] max-[480px]:!leading-[48px] max-[480px]:tracking-[-0.02em] max-[320px]:!text-[32px] max-[320px]:!leading-[1.25] antialiased">
            Managed Cybersecurity as a Service (MCaaS)
          </h1>

          <p className="font-manrope font-normal text-[#EEEEEE] opacity-100 text-center mx-auto min-[1025px]:w-[669px] min-[1025px]:text-[18px] min-[1025px]:leading-[30px] max-[1454px]:w-full max-[1024px]:!text-[16px] max-[1024px]:!leading-[1.6] max-[480px]:!text-[16px] max-[480px]:!leading-[28px] max-[320px]:!text-[14px] antialiased">
            At Cybervol, our Managed Cybersecurity as a Service (MCaaS) provides continuous monitoring and proactive protection, delivering tailored security solutions that keep your business resilient and compliant against evolving threats.
          </p>
        </div>
      </section>

      {/* VMPTaaS Section */}
      <section className="p-[120px_0] max-[1024px]:p-[60px_0] bg-[#ffffff]">
        <div className="w-full max-w-[1230px] mx-auto px-[20px] flex items-center justify-between gap-[80px] max-[1024px]:flex-col max-[1024px]:gap-[40px] max-[1024px]:text-left">
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
          <div className="flex-1 flex flex-col items-start card-entrance" style={{ animationDelay: '0.1s' }}>
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
      </section>
        
      {/* vCISO Section */}
      <section className="p-[120px_0] max-[1024px]:p-[60px_0] bg-[#F8FAFF]">
        <div className="w-full max-w-[1230px] mx-auto px-[20px] flex items-center justify-between gap-[80px] max-[1024px]:flex-col max-[1024px]:gap-[40px] max-[1024px]:text-left">
          <div className="flex-1 flex flex-col items-start card-entrance" style={{ animationDelay: '0.2s' }}>
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
      </section>
        
      {/* SOCaaS Section */}
      <section className="p-[120px_0] max-[1024px]:p-[60px_0] bg-[#ffffff]">
        <div className="w-full max-w-[1230px] mx-auto px-[20px] flex items-center justify-between gap-[80px] max-[1024px]:flex-col max-[1024px]:gap-[40px] max-[1024px]:text-left">
          <div className="flex-1 flex flex-col items-start card-entrance" style={{ animationDelay: '0.3s' }}>
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
        </div>
      </section>
      {/* Why Choose Section */}
      <section className="pt-[140px] px-0 pb-[0px] max-[1024px]:pt-[60px] max-[1024px]:px-[0px] max-[1024px]:pb-[0px] bg-[#ffffff] text-center">
        <h2 className="text-[32px] font-semibold text-[#212121] leading-[49px] mb-[30px] max-[1024px]:!text-[28px] max-[1024px]:!leading-[40px] antialiased font-sora">
          Why Choose <span className="text-[#2E5A88]">MCaaS</span>
        </h2>

        <div className="w-full max-w-[1230px] mx-auto px-[20px] grid grid-cols-[1fr_1.2fr_1fr] gap-[24px] items-stretch max-[1024px]:grid-cols-1 max-[1024px]:gap-[24px]">
          {/* Left Column */}
          <div className="flex flex-col gap-[24px] max-[1024px]:order-1">
            <div className="bg-[#F6F8FB] rounded-[16px] p-[32px] text-left flex flex-col justify-center min-h-[250px] relative service-card-anim card-entrance" style={{ animationDelay: '0.4s' }}>
              <div className="w-[52px] h-[52px] flex items-center justify-center absolute top-[24px] right-[24px]">
                <img
                  src="/images/pages/services/service-5/section-4-left-colum-icon-1.svg"
                  alt="Trust"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-[18px] font-semibold text-[#212121] leading-[38px] antialiased font-sora mb-[12px] max-w-[180px]">Unparalleled trust</h3>
              <p className="text-[18px] leading-[28px] text-[#585858] antialiased font-manrope">Build next-level security & customer trust</p>
            </div>
            <div className="bg-[#F6F8FB] rounded-[16px] p-[32px] text-left flex flex-col justify-center min-h-[250px] relative service-card-anim card-entrance" style={{ animationDelay: '0.5s' }}>
              <div className="w-[52px] h-[52px] flex items-center justify-center absolute top-[24px] right-[24px]">
                <img
                  src="/images/pages/services/service-5/section-4-left-colum-icon-.svg"
                  alt="Innovation"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-[18px] font-semibold text-[#212121] leading-[38px] antialiased font-sora mb-[12px] max-w-[200px]">Focus on business innovation</h3>
              <p className="text-[18px] leading-[28px] text-[#585858] antialiased font-manrope">
                Offload the burden of managing complex security issues and focus
                on business growth and innovation
              </p>
            </div>
          </div>

          {/* Center Column */}
          <div className="relative flex justify-center items-center h-full max-[1024px]:h-auto max-[1024px]:order-2 card-entrance" style={{ animationDelay: '0.6s' }}>
            <picture className="w-[404px] h-[524px] max-[1024px]:w-full max-[1024px]:h-auto rounded-[20px] overflow-hidden">
              <source media="(max-width: 1024px)" srcSet="/images/pages/services/service-5/mobile-last section image.svg" />
              <img
                src="/images/pages/services/service-5/section-4-center-icon.svg"
                alt="Cyber Defense"
                className="w-full h-full object-cover opacity-100 rounded-[20px]"
              />
            </picture>
            <div className="absolute bottom-[24px] left-1/2 -translate-x-1/2 w-[378px] h-[209px] max-[1024px]:w-[calc(100%-48px)] bg-[#1616161A] backdrop-blur-[20px] border border-[#FFFFFF33] rounded-[12px] p-[24px] text-left z-[10] shadow-[0px_4px_34px_rgba(0,0,0,0.15)] flex items-end">
              <div className="absolute top-[24px] right-[24px] w-[46px] h-[45px]">
                <img src="/images/pages/services/service-5/Frame 12.svg" alt="Security Icon" className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-[12px] w-full">
                <h3 className="font-sora text-[18px] font-semibold text-[#FFFFFF] pr-[50px] leading-[38px] m-0 antialiased">Expert led cyber defense</h3>
                <p className="font-manrope text-[18px] leading-[28px] text-[rgba(255,255,255,0.9)] m-0 antialiased">
                  Access top-tier cybersecurity professionals who leverage
                  advanced tools and frameworks to safeguard your digital assets
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-[24px] max-[1024px]:order-3">
            <div className="bg-[#F6F8FB] rounded-[16px] p-[32px] text-left flex flex-col justify-center min-h-[250px] relative service-card-anim card-entrance" style={{ animationDelay: '0.7s' }}>
              <div className="w-[52px] h-[52px] flex items-center justify-center absolute top-[24px] right-[24px]">
                <img
                  src="/images/pages/services/service-5/section-4-right-cloum-icon-1.svg"
                  alt="Proactive"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-[18px] font-semibold text-[#212121] leading-[38px] antialiased font-sora mb-[12px] max-w-[200px]">Proactive threat management</h3>
              <p className="text-[18px] leading-[28px] text-[#585858] antialiased font-manrope">
                Continuous monitoring, real-time threat detection, and rapid
                incident response to keep your business secure.
              </p>
            </div>
            <div className="bg-[#F6F8FB] rounded-[16px] p-[32px] text-left flex flex-col justify-center min-h-[250px] relative service-card-anim card-entrance" style={{ animationDelay: '0.8s' }}>
              <div className="w-[52px] h-[52px] flex items-center justify-center absolute top-[24px] right-[24px]">
                <img
                  src="/images/pages/services/service-5/section-4-right-colum-icon-2.svg"
                  alt="Solutions"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-[18px] font-semibold text-[#212121] leading-[38px] antialiased font-sora mb-[12px] max-w-[200px]">Tailored security solutions</h3>
              <p className="text-[18px] leading-[28px] text-[#585858] antialiased font-manrope">
                Customized to fit your unique security needs, leveraging a
                risk-based approach to build resilience against evolving
                threats.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
