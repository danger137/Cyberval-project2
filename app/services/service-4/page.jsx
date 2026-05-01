"use client";
import "./service-4.css";

export default function ServiceFourPage() {
  return (
    <div className="w-full min-h-screen bg-[#ffffff]">
      {/* Hero Section */}
      <section className="relative w-full min-[1025px]:h-[556px] h-[733px] mx-auto flex flex-col justify-center items-center overflow-hidden bg-[url('/images/pages/services/service-4/hero-bg.svg')] max-[1024px]:bg-[url('/images/pages/services/service-4/her-bg-mobile.svg')] bg-cover bg-top bg-no-repeat opacity-100 p-[120px_20px_20px] text-center max-[1024px]:w-[440px]">
        <div className="relative w-full max-w-[850px] flex flex-col items-center gap-[21px] text-center z-[5] px-[20px] mx-auto hero-reveal">
          <div className="flex justify-center items-center w-auto max-w-[90%] min-h-[38px] gap-[8.12px] rounded-[27.61px] p-[8px_16px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] m-0">
            <span className="opacity-100 font-manrope font-semibold text-[12px] min-[1025px]:text-[14px] leading-[1.5] tracking-[0.09em] uppercase text-[#FFFFFF] bg-transparent border-none text-center">SERVICES</span>
          </div>

          <h1 className="font-sora text-[32px] font-semibold text-[#ffffff] w-full max-w-[800px] opacity-100 min-[1025px]:leading-[57px] text-center [text-wrap:balance] mx-auto m-0 max-[1024px]:!text-[32px] max-[1024px]:!leading-[1.3] max-[480px]:!text-[32px] max-[480px]:!leading-[48px] max-[480px]:tracking-[-0.02em] max-[320px]:!text-[32px] max-[320px]:!leading-[1.25] antialiased">
            Awareness & Training
          </h1>

          <p className="font-manrope font-normal text-[18px] leading-[30px] text-[#EEEEEE] w-full max-w-[687px] opacity-100 text-center mx-auto m-0 max-[1024px]:!text-[16px] max-[1024px]:!leading-[1.6] max-[480px]:!text-[16px] max-[480px]:!leading-[28px] max-[320px]:!text-[14px] antialiased">
            At Cybervol, effective cybersecurity starts with informed people. Our Security Awareness & Training service equips your workforce with the knowledge and vigilance needed to recognize and respond to cyber threats.
          </p>
        </div>
      </section>
      <section className="w-full bg-[#ffffff] p-[140px_20px_0px] text-[#111827]" aria-labelledby="s4-defense-heading">
        <div className="max-w-[1185px] mx-auto">
          <header className="flex flex-col min-[1025px]:flex-row justify-between items-start gap-[40px] mb-[40px] max-[1024px]:!gap-[12px]">
            <h2 id="s4-defense-heading" className="m-0 font-sora font-semibold text-[#212121] text-[32px] leading-[49px] text-left max-[1024px]:!text-[28px] max-[1024px]:!leading-[40px] max-[425px]:!text-[26px] max-[425px]:!leading-[36px] antialiased">
              Strengthening Your First <br className="hidden min-[1025px]:block" /> Line of <span className="text-[#2E5A88]">Defense</span>
            </h2>
            <p className="m-0 font-manrope font-normal text-[#585858] text-[18px] leading-[30px] max-w-[600px] min-[1025px]:text-right text-left max-[1024px]:!w-full max-[1024px]:!text-[18px] max-[1024px]:!leading-[26px] antialiased">
              Empowering Your Workforce with Essential Practical Skills to Effectively Detect, Prevent, and Respond to a Wide Range of Cyber Threats.
            </p>
          </header>

          <div className="flex flex-row items-stretch justify-center gap-[24px] w-full max-[1220px]:flex-col max-[1220px]:items-center">
            {/* Card 1 */}
            <article 
              className="w-full max-w-[379px] bg-[#F6F8FB] rounded-[20px] flex flex-col relative overflow-hidden flex-1 min-h-[575px] service-card-anim card-entrance"
              style={{ animationDelay: '0s' }}
            >
              <div className="p-[13px_13px_0_13px] w-full">
                <img src="/images/pages/services/service-4/card-image-1.svg" alt="Cybersecurity Program" className="w-full h-[280px] object-cover rounded-[11px]" />
              </div>
              <div className="flex flex-col p-[24px_28px_64px_28px] flex-1 gap-[12px] min-[1025px]:gap-[10px]">
                <h3 className="m-0 font-sora font-semibold text-[#212121] text-[18px] leading-[38px] antialiased">Cybersecurity Program</h3>
                <p className="m-0 font-manrope font-normal text-[#585858] text-[18px] leading-[28px] antialiased">
                  Tailored, role-based training programs that cover essential cybersecurity topics—aligned with industry best practices and compliance requirements.
                </p>
              </div>
              <div className="absolute right-[20px] bottom-[20px] flex items-center justify-center">
                <img src="/images/pages/services/service-4/icon1.svg" alt="" className="w-[40px] h-[40px] object-contain block" />
              </div>
            </article>

            {/* Middle Stack (Card 2 & Card 3) */}
            <div className="flex flex-col gap-[20px] w-full max-w-[379px] flex-1">
              {/* Card 2 */}
              <article 
                className="w-full bg-[#F6F8FB] rounded-[20px] flex flex-col justify-center relative overflow-hidden flex-1 min-h-[277px] p-[34px_28px_64px_28px] service-card-anim card-entrance"
                style={{ animationDelay: '0.1s' }}
              >
                <div className="flex flex-col gap-[12px] min-[1025px]:gap-[10px]">
                  <h3 className="m-0 font-sora font-semibold text-[#212121] text-[18px] leading-[38px] antialiased">Phishing Simulations</h3>
                  <p className="m-0 font-manrope font-normal text-[#585858] text-[18px] leading-[28px] antialiased">
                    Realistic and customizable phishing campaigns to test employee awareness and response. Gain insights into vulnerabilities in user behavior and deliver targeted reinforcement training where needed.
                  </p>
                </div>
                <div className="absolute right-[20px] bottom-[20px] flex items-center justify-center">
                  <img src="/images/pages/services/service-4/icon-2.svg" alt="" className="w-[40px] h-[40px] object-contain block" />
                </div>
              </article>

              {/* Card 3 */}
              <article 
                className="w-full bg-[#F6F8FB] rounded-[20px] flex flex-col justify-center relative overflow-hidden flex-1 min-h-[277px] p-[34px_28px_64px_28px] service-card-anim card-entrance"
                style={{ animationDelay: '0.2s' }}
              >
                <div className="flex flex-col gap-[12px] min-[1025px]:gap-[10px]">
                  <h3 className="m-0 font-sora font-semibold text-[#212121] text-[18px] leading-[38px] antialiased">Interactive Workshops</h3>
                  <p className="m-0 font-manrope font-normal text-[#585858] text-[18px] leading-[28px] antialiased">
                    Engaging, hands-on sessions that go beyond lectures—teaching through real-life scenarios, attack demonstrations, and response exercises to embed lasting cybersecurity habits across your workforce.
                  </p>
                </div>
                <div className="absolute right-[20px] bottom-[20px] flex items-center justify-center">
                  <img src="/images/pages/services/service-4/icon-3.svg" alt="" className="w-[40px] h-[40px] object-contain block" />
                </div>
              </article>
            </div>

            {/* Card 4 */}
            <article 
              className="w-full max-w-[379px] bg-[#F6F8FB] rounded-[20px] flex flex-col relative overflow-hidden flex-1 min-h-[575px] service-card-anim card-entrance"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="p-[13px_13px_0_13px] w-full">
                <img src="/images/pages/services/service-4/card-image-2.svg" alt="Measurement & Improvement" className="w-full h-[287px] object-cover rounded-[11px]" />
              </div>
              <div className="flex flex-col p-[24px_28px_64px_28px] flex-1 gap-[12px] min-[1025px]:gap-[10px]">
                <h3 className="m-0 font-sora font-semibold text-[#212121] text-[18px] leading-[38px] antialiased">Measurement & Improvement</h3>
                <p className="m-0 font-manrope font-normal text-[#585858] text-[18px] leading-[28px] antialiased">
                  Track progress through analytics and reporting dashboards. Measure risk reduction, training effectiveness, and behavioral changes over time to continuously optimize your human-centric defense program.
                </p>
              </div>
              <div className="absolute right-[20px] bottom-[20px] flex items-center justify-center">
                <img src="/images/pages/services/service-4/icon-4.svg" alt="" className="w-[40px] h-[40px] object-contain block" />
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
