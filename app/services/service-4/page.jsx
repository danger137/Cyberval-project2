"use client";

export default function ServiceFourPage() {
  return (
    <div className="w-full min-h-screen bg-[#ffffff]">
      {/* Hero Section */}
      <section className="relative w-full min-h-[631px] min-[1025px]:h-[556px] min-[1025px]:w-[1454px] mx-auto flex flex-col justify-center items-center overflow-hidden bg-[url('/images/pages/services/service-4/hero-bg.svg')] max-[1024px]:bg-[url('/images/pages/services/service-4/her-bg-mobile.svg')] bg-cover bg-top bg-no-repeat opacity-100 p-[120px_20px_60px] text-center max-[1454px]:w-full">
        <div className="relative w-full max-w-[850px] flex flex-col items-center gap-[21px] text-center z-[5] px-[20px] mx-auto">
          <div className="flex justify-center items-center w-auto max-w-[90%] min-h-[38px] gap-[8.12px] rounded-[27.61px] p-[8px_16px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] m-0">
            <span className="opacity-100 font-manrope font-semibold text-[12px] sm:text-[14px] leading-[1.5] tracking-[0.09em] uppercase text-[#FFFFFF] bg-transparent border-none text-center">SERVICES</span>
          </div>

          <h1 className="font-sora text-[32px] sm:text-[40px] font-semibold text-[#ffffff] w-full max-w-[800px] opacity-100 leading-[1.3] text-center [text-wrap:balance] mx-auto m-0">
            Awareness & Training
          </h1>

          <p className="font-manrope font-normal text-[16px] sm:text-[18px] leading-[1.6] text-[#EEEEEE] w-full max-w-[687px] opacity-100 text-center mx-auto m-0">
            At Cybervol, effective cybersecurity starts with informed people. Our Security Awareness & Training service equips your workforce with the knowledge and vigilance needed to recognize and respond to cyber threats.
          </p>
        </div>
      </section>
      <section className="w-full bg-[#ffffff] p-[120px_20px] text-[#111827]" aria-labelledby="s4-defense-heading">
        <div className="max-w-[1230px] mx-auto">
          <header className="flex flex-col min-[1025px]:flex-row justify-between items-start min-[1025px]:items-center gap-[40px] mb-[80px]">
            <h2 id="s4-defense-heading" className="m-0 font-sora font-bold text-[#212121] text-[32px] sm:text-[40px] leading-[1.3] text-left">
              Strengthening Your First Line <br /> of <span className="text-[#2E5A88]">Defense</span>
            </h2>
            <p className="m-0 font-manrope font-normal text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] max-w-[600px] min-[1025px]:text-right text-left">
              Empowering Your Workforce with Essential Practical Skills to Effectively Detect, Prevent, and Respond to a Wide Range of Cyber Threats.
            </p>
          </header>

          <div className="flex flex-row items-stretch justify-start gap-[24px] w-full max-[1220px]:flex-col max-[1220px]:items-center">
            <article className="shrink-0 flex flex-col relative overflow-hidden box-border bg-[#F6F8FB] rounded-[20px]  opacity-100 min-[1025px]:w-[379px] min-[1025px]:h-[575px] max-[1220px]:w-full max-[1220px]:max-w-[379px] max-[1220px]:h-auto max-[1220px]:min-h-[575px] max-[900px]:min-h-[520px]">
              <div className="shrink-0 w-full p-[13px_13px_0_13px] box-border flex justify-center bg-transparent">
                <img
                  src="/images/pages/services/service-4/card-image-1.svg"
                  alt="Cybersecurity Program"
                  className="block opacity-100 object-cover rounded-[11px] min-[1025px]:w-[353px] min-[1025px]:h-[280px] max-[1220px]:max-w-full max-[1220px]:w-[min(353px,100%)] max-[1220px]:h-auto max-[1220px]:min-h-[200px]"
                />
              </div>
              <div className="flex flex-col gap-[20px] p-[22px] min-[1025px]:absolute min-[1025px]:top-[315px] min-[1025px]:left-[28px] min-[1025px]:w-[323px] min-[1025px]:h-[215px] min-[1025px]:gap-[20px] min-[1025px]:p-0">
                <div className="relative flex-1 min-h-0 p-[0] flex flex-col min-[1025px]:w-[323px] min-[1025px]:h-[150px]">
                  <h3 className="m-0 font-sora font-semibold text-[#212121] text-[20px] leading-[28px] min-[1025px]:w-[323px] min-[1025px]:h-[38px] min-[1025px]:text-[18px] min-[1025px]:leading-[38px]">Cybersecurity Program</h3>
                  <p className="m-[12px_0_0] font-manrope font-normal text-[#585858] flex-1 min-h-0 text-[14px] leading-[22px] min-[1025px]:w-[323px] min-[1025px]:h-[112px] min-[1025px]:text-[14px] min-[1025px]:leading-[28px]">
                    Tailored, role-based training programs that cover essential cybersecurity topics—aligned with industry best practices and compliance requirements.
                  </p>
                </div>
              </div>
              <div className="absolute right-[20px] bottom-[20px] rounded-[10px] flex items-center justify-center" aria-hidden="true">
                <img
                  src="/images/pages/services/service-4/icon1.svg"
                  alt=""
                  className="w-[40px] h-[40px] object-contain block"
                />
              </div>
            </article>

            <div className="w-[379px] h-[575px] shrink-0 flex flex-col gap-[20px] max-[1220px]:w-full max-[1220px]:max-w-[379px] max-[1220px]:h-auto">
              <article className="shrink-0 flex flex-col relative overflow-hidden box-border bg-[#F6F8FB] rounded-[20px] opacity-100 min-[1025px]:w-[379px] min-[1025px]:h-[281px] p-[34px_28px] max-[900px]:min-h-[260px]">
                <div className="relative flex-1 min-h-0 h-full flex flex-col min-[1025px]:w-[323px] min-[1025px]:h-[176px]">
                  <h3 className="m-0 font-sora font-semibold text-[#212121] text-[20px] leading-[28px] min-[1025px]:w-[323px] min-[1025px]:h-[38px] min-[1025px]:text-[18px] min-[1025px]:leading-[38px]">Phishing Simulations</h3>
                  <p className="m-[12px_0_0] font-manrope font-normal text-[#585858] flex-1 min-h-0 text-[14px] leading-[22px] min-[1025px]:w-[323px] min-[1025px]:h-[140px] min-[1025px]:text-[14px] min-[1025px]:leading-[28px]">
                    Realistic and customizable phishing campaigns to test employee awareness and response. Gain insights into vulnerabilities in user behavior and deliver targeted reinforcement training where needed.
                  </p>
                </div>
                <div className="absolute right-[20px] bottom-[20px] rounded-[10px] flex items-center justify-center" aria-hidden="true">
                  <img
                    src="/images/pages/services/service-4/icon-2.svg"
                    alt=""
                    className="w-[40px] h-[40px] object-contain block"
                  />
                </div>
              </article>

              <article className="shrink-0 flex flex-col relative overflow-hidden box-border bg-[#F6F8FB] rounded-[20px] opacity-100 min-[1025px]:w-[379px] min-[1025px]:h-[281px] p-[34px_28px] max-[900px]:min-h-[260px]">
                <div className="flex flex-col justify-between min-[1025px]:w-[327px] min-[1025px]:h-[234px]">
                <div className="relative flex-1 min-h-0 h-full flex flex-col justify-between min-[1025px]:w-[327px] min-[1025px]:h-[234px]">
                  <h3 className="m-0 font-sora font-semibold text-[#212121] text-[20px] leading-[28px] min-[1025px]:w-[327px] min-[1025px]:h-[38px] min-[1025px]:text-[18px] min-[1025px]:leading-[38px]">Interactive Workshops</h3>
                  <p className="m-[12px_0_0] font-manrope font-normal text-[#585858] flex-1 min-h-0 text-[14px] leading-[22px] min-[1025px]:w-[327px] min-[1025px]:h-[140px] min-[1025px]:text-[14px] min-[1025px]:leading-[28px]">
                    Engaging, hands-on sessions that go beyond lectures—teaching through real-life scenarios, attack demonstrations, and response exercises to embed lasting cybersecurity habits across your workforce.
                  </p>
                </div>
                <div className="absolute right-[20px] bottom-[20px] rounded-[10px] flex items-center justify-center" aria-hidden="true">
                  <img
                    src="/images/pages/services/service-4/icon-3.svg"
                    alt=""
                    className="w-[40px] h-[40px] object-contain block"
                  />
                </div>
                </div>
              </article>
            </div>

            <article className="shrink-0 flex flex-col relative overflow-hidden box-border bg-[#F6F8FB] rounded-[20px] opacity-100 min-[1025px]:w-[379px] min-[1025px]:h-[575px] max-[1220px]:w-full max-[1220px]:max-w-[379px] max-[1220px]:h-auto max-[1220px]:min-h-[600px]">
              <div className="flex flex-col min-[1025px]:absolute min-[1025px]:top-[11px] min-[1025px]:left-[13px] min-[1025px]:w-[353px] min-[1025px]:h-[533px] min-[1025px]:gap-[16px]">
              <div className="shrink-0 w-full p-[13px_13px_0_13px] min-[1025px]:w-[353px] min-[1025px]:h-[287px] box-border flex justify-center bg-transparent">
                <img
                  src="/images/pages/services/service-4/card-image-2.svg"
                  alt="Measurement & Improvement"
                  className="block opacity-100 object-cover rounded-[11px] min-[1025px]:w-[353px] min-[1025px]:h-[287px] max-[1220px]:max-w-full max-[1220px]:w-[min(353px,100%)] max-[1220px]:h-auto max-[1220px]:min-h-[200px]"
                />
              </div>
               <div className="relative flex-1 min-h-0 flex flex-col gap-[20px] p-[22px] min-[1025px]:w-[353px] min-[1025px]:h-[230px] min-[1025px]:gap-[9px] min-[1025px]:p-0 min-[1025px]:px-[13px]">
                <div className="flex flex-col min-[1025px]:w-[323px] min-[1025px]:h-[176px] box-border">
                  <h3 className="m-[0_0_12px] font-sora font-semibold text-[#212121] text-[20px] leading-[28px] min-[1025px]:w-[323px] min-[1025px]:h-[38px] min-[1025px]:text-[18px] min-[1025px]:leading-[38px]">Measurement & Improvement</h3>
                <p className="m-[12px_0_0] font-manrope font-normal text-[#585858] flex-1 min-h-0 text-[14px] leading-[28px] min-[1025px]:w-[323px] min-[1025px]:h-[140px] min-[1025px]:text-[14px] min-[1025px]:leading-[28px]">
                  Track progress through analytics and reporting dashboards. Measure risk reduction, training effectiveness, and behavioral changes over time to continuously optimize your human-centric <br /> defense   program.
                </p>
                </div>
              </div>
              <div className="absolute right-[20px] bottom-[20px] rounded-[10px] flex items-center justify-center" aria-hidden="true">
                <img
                  src="/images/pages/services/service-4/icon-4.svg"
                  alt=""
                  className="w-[40px] h-[40px] object-contain block"
                />
              </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
