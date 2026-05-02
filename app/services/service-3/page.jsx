"use client";
import "./service-3.css";
import ScrollReveal from "../../component/ScrollReveal";
import Link from "next/link";

export default function ServiceThreePage() {
  const commonCardClass = "bg-[#F8FAFF] rounded-[19.35px] p-[32px_24px_100px] relative overflow-hidden flex flex-col justify-start transition-all duration-300 ease border border-[#E1E8F533] w-full h-full flex-1";
  const notLargeCardResponsiveClass = "max-[1279px]:![&:not(.large-card)]:pb-[110px]";
  const commonIconBoxClass = "absolute bottom-[24px] right-[24px] w-[70px] h-[70px] flex items-center justify-center rounded-[12px] p-[12px]";
  const notLargeIconBoxResponsiveClass = "max-[1279px]:![&:not(.large-icon-box)]:absolute max-[1279px]:![&:not(.large-icon-box)]:bottom-[24px] max-[1279px]:![&:not(.large-icon-box)]:right-[24px] max-[1279px]:![&:not(.large-icon-box)]:left-auto max-[1279px]:![&:not(.large-icon-box)]:transform-none max-[1279px]:![&:not(.large-icon-box)]:w-[64px] max-[1279px]:![&:not(.large-icon-box)]:h-[64px] max-[1279px]:![&:not(.large-icon-box)]:mt-0";

  return (
    <div className="w-full bg-[#ffffff]">
        {/* Hero Section */}
        <section className="relative w-full min-[1025px]:h-[556px] min-h-[500px] mx-auto bg-[url('/images/pages/services/serivce-3/service-3-hero-bg.svg')] bg-cover bg-center bg-no-repeat bg-[#030D1A] flex flex-col justify-center items-center overflow-hidden max-[1024px]:!bg-[url('/images/pages/services/serivce-3/mobile-view-hero-bg%20.svg')] max-[1024px]:bg-top opacity-100 p-[100px_20px_60px] max-[1454px]:p-[160px_20px_100px] text-center max-[1024px]:!pt-[140px] max-[1024px]:!pb-[80px] max-[425px]:!pt-[130px] max-[425px]:!pb-[60px] max-[1024px]:px-[24px]">
          <ScrollReveal direction="up">
            <div className="relative w-full max-w-[795px] flex flex-col items-center gap-[21px] z-[5] opacity-100 mx-auto">
              <div className="flex justify-center items-center w-[128px] h-[38px] gap-[8.12px] rounded-[27.61px] p-[8.12px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] m-0 max-[1024px]:w-[104px]">
                <span className="w-[75px] h-[37px] font-manrope font-semibold text-[14px] leading-[36.54px] tracking-[0.09em] uppercase text-[#FFFFFF] flex items-center justify-center max-[1024px]:w-[65px] max-[1024px]:text-[12px] antialiased">SERVICES</span>
              </div>

              <h1 className="w-full max-w-[721px] font-semibold font-sora text-[#FFFFFF] m-0 min-[1025px]:text-[32px] min-[1025px]:leading-[57px] max-[1024px]:!text-[32px] max-[1024px]:!leading-[1.3] max-[480px]:!text-[32px] max-[480px]:!leading-[48px] max-[480px]:tracking-[-0.02em] max-[320px]:!text-[32px] max-[320px]:!leading-[1.25] antialiased">
                Offensive Security
              </h1>

              <p className="w-full max-w-[687px] font-manrope font-normal text-center text-[#EEEEEE] mx-auto m-0 min-[1025px]:text-[18px] min-[1025px]:leading-[30px] max-[1024px]:!text-[16px] max-[1024px]:!leading-[1.6] max-[480px]:!text-[16px] max-[480px]:!leading-[28px] max-[320px]:!text-[14px] antialiased">
                Cybervol's Offensive Security service identifies and remediates vulnerabilities before attackers can exploit them. Through penetration testing, ethical hacking, and adversary simulations, we uncover weaknesses and deliver actionable strategies to strengthen your cybersecurity resilience.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Capabilities Section */}
        <section className="p-[140px_20px_80px] bg-[#ffffff] max-[1024px]:!p-[80px_24px_60px] max-[425px]:!p-[60px_16px_40px] max-[1024px]:!overflow-hidden">
          <ScrollReveal direction="up">
            <div className="w-full max-w-[1230px] mx-auto">
          <div className="flex justify-between items-start mb-[60px] gap-[40px] max-[1024px]:flex-col max-[1024px]:!w-full max-[1024px]:!gap-[12px] max-[1024px]:text-left max-[1024px]:mx-auto min-[1025px]:w-[1230px] min-[1025px]:h-[60px] min-[1025px]:mx-auto">
            <h2 className="font-sora text-[32px] font-semibold text-[#212121] leading-[49px] m-0 max-[1024px]:!text-[28px] max-[1024px]:!leading-[40px] min-[1025px]:w-[289px] min-[1025px]:h-[50px] max-[425px]:!text-[26px] max-[425px]:!leading-[36px] antialiased">
              Our <span className="text-[#2E5A88]">Capabilities</span>
            </h2>
            <p className="font-manrope text-[18px] leading-[30px] text-[#585858] max-w-[736px] w-full m-0 max-[1024px]:!w-full max-[1024px]:!text-[18px] max-[1024px]:!leading-[26px] min-[1025px]:w-[736px] min-[1025px]:h-[60px] antialiased">
              At Cybervol, our goal is simple: to fortify your business with elite security. We champion asset protection, promote innovation, and ensure leaders navigate the digital landscape with confidence.
            </p>
          </div>
            <div className="flex flex-col gap-[20px] w-full max-w-[1230px] mx-auto">
            {/* Row 1: 2 Cards */}
            <div className="flex gap-[19px] w-full max-w-[1230px] max-[1024px]:!flex-col max-[1024px]:items-center">
              {/* Card 1: Web Application VAPT */}
              <article 
                className={`${commonCardClass} large-card !rounded-[14.38px] !border-none max-[1024px]:!p-[32px_24px_40px] max-[1024px]:bg-[linear-gradient(230.36deg,rgba(135,187,243,0.36)_3.31%,rgba(111,144,180,0.07)_49.84%,rgba(246,248,251,0.49)_95.24%)] max-[1024px]:relative min-[1025px]:w-[727px] min-[1025px]:h-[334px] min-[1025px]:bg-[url('/images/pages/services/serivce-3/lerger-bg-1.svg')] min-[1025px]:bg-cover min-[1025px]:bg-center min-[1025px]:p-[37px_40px_47px_29px]`}
                style={{ animationDelay: '0s' }}
              >
                {/* Content Wrapper */}
                <div className="relative z-[2] w-full h-full max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:items-center min-[1025px]:flex min-[1025px]:flex-row min-[1025px]:justify-between min-[1025px]:items-start min-[1025px]:w-[670.09px] min-[1025px]:h-[235px] min-[1025px]:gap-[35px]">
                  <div className="flex flex-col items-start w-full h-auto gap-[10px]">
                    <h3 className="m-0 !font-sora font-semibold text-left text-[18px] leading-[38px] text-[#212121] antialiased">Web Application VAPT</h3>
                    <p className="m-0 font-manrope font-normal text-left text-[#585858] text-[18px] leading-[28px] antialiased">Identifies security flaws in web applications, including authentication, session management, and injection vulnerabilities.</p>
                  </div>

                  {/* Icon (Responsive for both mobile and desktop) */}
                  <div className="w-full max-w-[305.09px] min-[1025px]:w-[305.09px] h-[235px] relative mt-[20px] min-[1025px]:mt-0 flex justify-center">
                    <img
                      src="/images/pages/services/serivce-3/icon-1.svg"
                      alt="Web Application VAPT"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </article>

              {/* Card 2: Mobile Application VAPT */}
              <article 
                className={`${commonCardClass} ${notLargeCardResponsiveClass} w-full max-w-[482px] h-[334px] rounded-[14.38px] !bg-[#F6F8FB] max-[1024px]:!bg-[#F6F8FB] max-[1024px]:!pb-[40px] min-[1025px]:w-[482px] min-[1025px]:h-[334px]`}
                style={{ animationDelay: '0.15s' }}
              >
                <div className="relative z-[2] flex flex-col gap-[10px] w-full h-auto">
                  <h3 className="m-0 font-sora font-semibold text-[18px] leading-[38px] text-[#212121] antialiased">Mobile Application VAPT</h3>
                  <p className="m-0 font-manrope font-normal text-[#585858] text-[18px] leading-[28px] antialiased">Assesses mobile apps for weaknesses in authentication, data storage, and API security to prevent exploitation.</p>
                </div>
                <div className={`${commonIconBoxClass} ${notLargeIconBoxResponsiveClass} max-[1024px]:relative max-[1024px]:bottom-0 max-[1024px]:right-0 max-[1024px]:left-0 max-[1024px]:mt-[20px] max-[1024px]:self-end`}>
                  <img
                    src="/images/pages/services/serivce-3/icon-2.svg"
                    alt="Mobile Application VAPT"
                    className="w-full h-full object-contain"
                  />
                </div>
              </article>
            </div>

            {/* Row 2: 2 Cards */}
            <div className="flex gap-[19px] w-full max-w-[1230px] max-[1024px]:!flex-col max-[1024px]:items-center min-[1025px]:w-[1230px] min-[1025px]:h-[334px]">
              {/* Card 3: Network VAPT */}
              <article 
                className={`${commonCardClass} ${notLargeCardResponsiveClass} w-full max-w-[482px] h-[334px] rounded-[14.38px] !bg-[#F6F8FB] max-[1024px]:!bg-[#F6F8FB] max-[1024px]:!pb-[40px] min-[1025px]:w-[482px] min-[1025px]:h-[334px]`}
                style={{ animationDelay: '0.2s' }}
              >
                <div className="relative z-[2] flex flex-col gap-[10px] w-full h-auto">
                  <h3 className="m-0 !font-sora font-semibold text-[18px] leading-[38px] text-[#212121] antialiased">Network VAPT</h3>
                  <p className="m-0 !font-manrope font-normal text-[#585858] text-[18px] leading-[30px] antialiased">Evaluates internal and external networks for vulnerabilities, misconfigurations, and unauthorized access points.</p>
                </div>
                <div className={`${commonIconBoxClass} ${notLargeIconBoxResponsiveClass} max-[1024px]:relative max-[1024px]:bottom-0 max-[1024px]:right-0 max-[1024px]:left-0 max-[1024px]:mt-[20px] max-[1024px]:self-end`}>
                  <img
                    src="/images/pages/services/serivce-3/icon-3.svg"
                    alt="Network VAPT"
                    className="w-full h-full object-contain"
                  />
                </div>
              </article>

              {/* Card 4: Cloud VAPT */}
              <article 
                className={`${commonCardClass} large-card !rounded-[14.38px] w-full max-w-[727px] h-[334px] bg-[linear-gradient(230.36deg,rgba(135,187,243,0.36)_3.31%,rgba(111,144,180,0.07)_49.84%,rgba(246,248,251,0.49)_95.24%)] !border-none min-[1025px]:!p-[48px] max-[1024px]:!p-[32px_24px_40px] max-[1024px]:!bg-[linear-gradient(230.36deg,rgba(135,187,243,0.36)_3.31%,rgba(111,144,180,0.07)_49.84%,rgba(246,248,251,0.49)_95.24%)] max-[1024px]:!relative min-[1025px]:w-[727px] min-[1025px]:h-[334px]`}
                style={{ animationDelay: '0.3s' }}
              >
                <div className="z-[2] flex flex-col min-[1025px]:flex-row items-center justify-between gap-[10px] w-full h-full min-[1025px]:max-w-none">
                  <div className="flex flex-col gap-[10px] w-full min-[1025px]:max-w-[303px]">
                    <h3 className="m-0 font-sora font-semibold text-[#212121] text-[18px] leading-[38px] antialiased">Cloud VAPT</h3>
                    <p className="m-0 font-manrope font-normal text-[18px] leading-[28px] text-[#585858] antialiased">Tests cloud environments for misconfigurations, identity weaknesses, and compliance risks to secure cloud workloads.</p>
                  </div>

                  {/* Icon Box (Now visible on mobile and desktop) */}
                  <div className="w-full max-w-[322px] min-[1025px]:w-[322px] h-[198px] flex items-center justify-center mt-[20px] min-[1025px]:mt-0">
                    <img
                      src="/images/pages/services/serivce-3/icon-4.svg"
                      alt="Cloud VAPT"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </article>
            </div>

            {/* Row 3: 3 Cards */}
            <div className="flex gap-[19px] w-full max-w-[1230px] max-[1024px]:!flex-col max-[1024px]:items-center min-[1025px]:w-[1230px] min-[1025px]:h-[305.99px] min-[1025px]:gap-[19px]">
              {/* Card 5: API Assessment */}
              <article 
                className={`${commonCardClass} ${notLargeCardResponsiveClass} w-full max-w-[394.47px] h-[305.99px] !bg-[#F6F8FB] max-[1024px]:!bg-[#F6F8FB] max-[1024px]:!rounded-[19.35px] min-[1025px]:w-[394.47px] min-[1025px]:h-[305.99px]`}
                style={{ animationDelay: '0.4s' }}
              >
                <div className="relative z-[2] flex flex-col gap-[10px] w-full h-auto">
                  <h3 className="m-0 font-sora font-semibold text-[#212121] text-[18px] leading-[38px] antialiased">API Assessment</h3>
                  <p className="m-0 font-manrope font-normal text-[#585858] text-[18px] leading-[28px] antialiased">Identifies security gaps in APIs, including authentication flaws, data exposure, and injection risks.</p>
                </div>
                <div className={`${commonIconBoxClass} ${notLargeIconBoxResponsiveClass}`}>
                  <img
                    src="/images/pages/services/serivce-3/icon-5.svg"
                    alt="API Assessment"
                    className="w-full h-full object-contain"
                  />
                </div>
              </article>

              {/* Card 6: Wireless Assessment */}
              <article 
                className={`${commonCardClass} ${notLargeCardResponsiveClass} w-full max-w-[394.47px] h-[305.99px] !bg-[#F6F8FB] max-[1024px]:!bg-[#F6F8FB] max-[1024px]:!rounded-[19.35px] min-[1025px]:w-[394.47px] min-[1025px]:h-[305.99px]`}
                style={{ animationDelay: '0.5s' }}
              >
                <div className="relative z-[2] flex flex-col gap-[10px] w-full h-auto">
                  <h3 className="m-0 font-sora font-semibold text-[#212121] text-[18px] leading-[29px]">Wireless Assessment</h3>
                  <p className="m-0 font-manrope font-normal text-[#585858] text-[18px] leading-[30px]">Secures wireless networks against unauthorized access, rogue APs, and encryption weaknesses.</p>
                </div>
                <div className={`${commonIconBoxClass} ${notLargeIconBoxResponsiveClass}`}>
                  <img
                    src="/images/pages/services/serivce-3/icon-6.svg"
                    alt="Wireless Assessment"
                    className="w-full h-full object-contain"
                  />
                </div>
              </article>

              {/* Card 7: Social Engineering Simulation */}
              <article 
                className={`${commonCardClass} ${notLargeCardResponsiveClass} w-full max-w-[394.47px] h-[305.99px] !bg-[#F6F8FB] max-[1024px]:!bg-[#F6F8FB] max-[1024px]:!rounded-[19.35px] min-[1025px]:w-[394.47px] min-[1025px]:h-[305.99px]`}
                style={{ animationDelay: '0.6s' }}
              >
                <div className="relative z-[2] flex flex-col gap-[10px] w-full h-auto">
                  <h3 className="m-0 font-sora font-semibold text-[#212121] text-[18px] leading-[38px] antialiased">Social Engineering Simulation</h3>
                  <p className="m-0 font-manrope font-normal text-[#585858] text-[18px] leading-[30px] antialiased">Assess human-layer vulnerabilities through phishing campaigns, pretexting, and other real-world deception techniques.</p>
                </div>
                <div className={`${commonIconBoxClass} ${notLargeIconBoxResponsiveClass}`}>
                  <img
                    src="/images/pages/services/serivce-3/icon-7.svg"
                    alt="Social Engineering Simulation"
                    className="w-full h-full object-contain"
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      </ScrollReveal>
        </section>

      {/* Methodology Section */}
      <section className="w-full flex flex-col items-center relative z-[10] mt-[40px] max-[1024px]:mt-[20px] mb-[0] pb-[40px] max-[1024px]:pb-[60px] max-[1024px]:pt-[60px] max-[1024px]:!bg-[linear-gradient(216.84deg,rgba(135,187,243,0.36)_-14.36%,rgba(111,144,180,0.07)_30.97%,rgba(253,253,253,0)_90.28%)] min-[1025px]:-mt-[50px] min-[1025px]:w-full min-[1025px]:h-auto min-[1025px]:pt-[80px] min-[1025px]:pb-[40px] min-[1025px]:bg-[linear-gradient(216.84deg,rgba(135,187,243,0.36)_-14.36%,rgba(111,144,180,0.07)_30.97%,rgba(253,253,253,0)_43.28%)]">
        <div className="flex flex-col items-center w-full max-w-[1230px] px-[20px] gap-[30px] min-[1025px]:gap-[10px]">
          <div className="flex justify-center w-full min-[1025px]:w-[976.01px] h-auto">
            <h2 className="font-sora font-semibold text-[#212121] text-center m-0 text-[28px] leading-[40px] min-[1025px]:w-[976.01px] min-[1025px]:h-[49px] min-[1025px]:text-[32px] min-[1025px]:leading-[49px] max-[425px]:!text-[26px] max-[425px]:!leading-[36px] antialiased">
              Offensive Security <span className="text-[#2E5A88]">Methodology</span>
            </h2>
          </div>
          <div className="w-full flex justify-center">
            <img
              src="/images/pages/services/serivce-3/OF-S-M/full-icon.svg"
              alt="Offensive Security Methodology"
              className="hidden min-[1025px]:block min-[1025px]:w-[976.01px] min-[1025px]:h-[504.91px] object-contain"
            />
            <img
              src="/images/pages/services/serivce-3/OF-S-M/section-2-mobile-icon.svg"
              alt="Offensive Security Methodology Mobile"
              className="block min-[1025px]:hidden w-full max-w-[394px] h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
