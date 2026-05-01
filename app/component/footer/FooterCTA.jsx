"use client";
import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

export default function FooterCTA({ 
  title = "Contact Us Today", 
  subtitle = "Ready to strengthen your cybersecurity posture? Get in touch and we'll help you find the right solution.",
  buttonText = "Contact Us",
  buttonLink = "/Contact"
}) {
  return (
    <div className="w-full pt-[60px] max-[1024px]:pt-0 pb-[20px] max-[1024px]:pb-0 px-0">
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[40px] lg:px-[80px]">
        <ScrollReveal direction="up">
          <div className="bg-[#000F2E] bg-[url('/bgcardFot.svg')] bg-cover bg-center w-full max-w-[1230px] h-auto md:min-h-[380px] mx-auto text-center text-[#ffffff] flex flex-col items-center justify-center gap-[12px] relative overflow-hidden p-[40px] md:p-[60px] before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_70%)] before:pointer-events-none footer-cta-banner">
            <div className="z-10 relative">
              <h2 className="font-sora text-[28px] md:text-[32px] font-semibold leading-[1.2] md:leading-[49px] m-0 max-w-[650px] mx-auto footer-cta-title">
                {title}
              </h2>
              <p className="font-manrope text-[15px] md:text-[16px] font-normal leading-[30px] text-white my-[2px] mb-[12px] max-w-[600px] mx-auto footer-cta-desc">
                {subtitle}
              </p>
            </div>
            <Link 
              href={buttonLink} 
              style={{ color: '#000000' }} 
              className="z-10 relative inline-flex justify-center items-center w-auto min-w-[236px] h-[48px] py-[13px] px-[40px] bg-[#ffffff] rounded-[8px] !text-black font-manrope font-semibold text-[16px] leading-none no-underline border-none cursor-pointer transition-all duration-200 ease-in-out mt-[10px] whitespace-nowrap hover:-translate-y-[2px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:bg-[#f8fafc] footer-cta-btn"
            >
              {buttonText}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
