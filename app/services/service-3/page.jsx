"use client";

export default function ServiceThreePage() {
  const commonCardClass = "bg-[#F8FAFF] rounded-[19.35px] p-[32px] relative overflow-hidden flex flex-col justify-start transition-all duration-300 ease hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] border border-[#E1E8F533] max-[1279px]:!w-[calc(50%-10px)] max-[1279px]:!max-w-full max-[1279px]:!h-auto max-[1279px]:min-h-[320px] max-[764px]:!w-full max-[480px]:!p-[24px_20px_110px]";
  const notLargeCardResponsiveClass = "max-[1279px]:![&:not(.large-card)]:pb-[110px]";
  const commonIconBoxClass = "absolute bottom-[24px] right-[24px] w-[70px] h-[70px] flex items-center justify-center rounded-[12px] p-[12px]";
  const notLargeIconBoxResponsiveClass = "max-[1279px]:![&:not(.large-icon-box)]:absolute max-[1279px]:![&:not(.large-icon-box)]:bottom-[24px] max-[1279px]:![&:not(.large-icon-box)]:right-[24px] max-[1279px]:![&:not(.large-icon-box)]:left-auto max-[1279px]:![&:not(.large-icon-box)]:transform-none max-[1279px]:![&:not(.large-icon-box)]:w-[64px] max-[1279px]:![&:not(.large-icon-box)]:h-[64px] max-[1279px]:![&:not(.large-icon-box)]:mt-0";

  return (
    <div className="w-full min-h-screen bg-[#ffffff]">
      <section className="relative w-full h-[556px] mx-auto bg-[url('/images/pages/services/serivce-3/service-3-hero-bg.svg')] bg-cover bg-center bg-no-repeat bg-[#030D1A] flex justify-center items-center overflow-hidden max-[1454px]:w-full max-[1454px]:h-auto max-[1454px]:p-[160px_20px_100px] max-[1024px]:w-[440px] max-[1024px]:h-[631px] max-[1024px]:bg-[url('/images/pages/services/serivce-3/mobile-view-hero-bg%20.svg')] max-[1024px]:bg-top max-[1024px]:bg-white max-[1024px]:mx-auto min-[1025px]:w-[1454px] min-[1025px]:h-[556px] min-[1025px]:left-[-3px]">
        <div className="relative w-full max-w-[795px] flex flex-col items-center gap-[21px] text-center z-[5] px-[20px] max-[1454px]:mx-auto max-[1024px]:absolute max-[1024px]:top-[193px] max-[1024px]:left-[17px] max-[1024px]:w-[406px] max-[1024px]:h-[303px] max-[1024px]:gap-[21px] min-[1025px]:absolute min-[1025px]:top-[184px] min-[1025px]:left-[367px] min-[1025px]:w-[721px] min-[1025px]:h-[246px] min-[1025px]:gap-[21px]">
          <div className="flex justify-center items-center w-[128px] h-[38px] gap-[8.12px] rounded-[27.61px] p-[8.12px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] m-0 max-[1024px]:w-[104px]">
            <span className="w-[75px] h-[37px] font-manrope font-semibold text-[14px] leading-[36.54px] tracking-[0.09em] uppercase text-[#FFFFFF] flex items-center justify-center max-[1024px]:w-[65px] max-[1024px]:text-[12px]">SERVICES</span>
          </div>

          <h1 className="w-full max-w-[721px] font-semibold text-[clamp(32px,5vw,40px)] leading-[1.4] text-center font-sora text-[#FFFFFF] m-0 max-[1024px]:w-[394px] max-[1024px]:h-[57px] max-[1024px]:text-[32px] max-[1024px]:leading-[57px] min-[1025px]:w-[721px] min-[1025px]:h-[57px] min-[1025px]:text-[40px] min-[1025px]:leading-[57px]">
            Offensive Security
          </h1>

          <p className="w-full max-w-[687px] font-manrope font-normal text-[18px] leading-[1.6] text-center text-[#EEEEEE] mx-auto m-0 max-[1024px]:w-[374px] max-[1024px]:h-[180px] max-[1024px]:text-[16px] max-[1024px]:leading-[30px] min-[1025px]:w-[687px] min-[1025px]:h-[120px] min-[1025px]:text-[18px] min-[1025px]:leading-[30px]">
            Cybervol's Offensive Security service identifies and remediates vulnerabilities before attackers can exploit them. Through penetration testing, ethical hacking, and adversary simulations, we uncover weaknesses and deliver actionable strategies to strengthen your cybersecurity resilience.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}

      <section className="p-[100px_20px_120px] bg-[#ffffff] max-[1024px]:p-[60px_20px_80px]">
        <div className="max-w-[1230px] mx-auto">
          <div className="flex justify-between items-start mb-[48px] gap-[40px] max-[1024px]:flex-col max-[1024px]:w-[384px] max-[1024px]:h-[172px] max-[1024px]:gap-[9px] max-[1024px]:text-left max-[1024px]:mx-auto min-[1025px]:w-[1230px] min-[1025px]:h-[60px] min-[1025px]:mx-auto">
            <h2 className="font-sora text-[32px] font-semibold text-[#212121] leading-[1.2] m-0 max-[1024px]:w-[289px] max-[1024px]:h-[43px] max-[1024px]:text-[24px] max-[1024px]:leading-[43px] min-[1025px]:w-[289px] min-[1025px]:h-[50px] min-[1025px]:text-[32px] min-[1025px]:leading-[50px]">
              Our <span className="text-[#2E5A88] max-[1024px]:text-[24px] max-[1024px]:leading-[43px] min-[1025px]:text-[32px] min-[1025px]:leading-[50px]">Capabilities</span>
            </h2>
            <p className="font-manrope text-[16px] leading-[30px] text-[#585858] max-w-[736px] w-full m-0 max-[1024px]:w-[379px] max-[1024px]:h-[120px] max-[1024px]:text-[16px] max-[1024px]:leading-[30px] min-[1025px]:w-[736px] min-[1025px]:h-[60px] min-[1025px]:text-[16px] min-[1025px]:leading-[30px]">
              At Cybervol, our goal is simple: to fortify your business with elite security. We champion asset protection, promote innovation, and ensure leaders navigate the digital landscape with confidence.
            </p>
          </div>
          <div className="flex flex-col gap-[20px] max-[1024px]:w-[384px] max-[1024px]:h-[2672px] max-[1024px]:gap-[23px] max-[1024px]:items-center max-[1024px]:mx-auto">
            {/* Row 1: 2 Cards */}
            <div className="flex gap-[19px] w-full max-w-[1230px] max-[1024px]:!flex-col max-[1024px]:items-center">
              {/* Card 1: Web Application VAPT */}
              <article className={`${commonCardClass} large-card !rounded-[14.38px] !border-none max-[1024px]:!w-[384px] max-[1024px]:!h-[503px] max-[1024px]:!p-[37px_40px_47px_29px] max-[1024px]:bg-[linear-gradient(230.36deg,rgba(135,187,243,0.36)_3.31%,rgba(111,144,180,0.07)_49.84%,rgba(246,248,251,0.49)_95.24%)] max-[1024px]:relative min-[1025px]:w-[727px] min-[1025px]:h-[334px] min-[1025px]:bg-[url('/images/pages/services/serivce-3/lerger-bg-1.svg')] min-[1025px]:bg-cover min-[1025px]:bg-center min-[1025px]:p-[37px_40px_47px_29px]`}>

                {/* Mobile Icon (Absolute positioned to match Figma exactly) */}
                <div className="hidden max-[1024px]:block absolute !top-[207.74px] !left-[54.91px] !w-[305.09px] !h-[235px] z-[1]">
                  <img
                    src="/images/pages/services/serivce-3/icon-1.svg"
                    alt="Web Application VAPT"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Content Wrapper */}
                <div className="relative z-[2] w-full h-full max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:items-start min-[1025px]:flex min-[1025px]:flex-row min-[1025px]:justify-between min-[1025px]:items-start min-[1025px]:w-[670.09px] min-[1025px]:h-[235px] min-[1025px]:gap-[35px]">
                  <div className="flex flex-col items-start max-[1024px]:!w-[330px] max-[1024px]:h-[132.74px] max-[1024px]:gap-[2.74px] min-[1025px]:w-[330px] min-[1025px]:h-[132.74px] min-[1025px]:gap-[2.74px]">
                    <h3 className="m-0 !font-sora font-semibold text-left max-[1024px]:!w-[330px] max-[1024px]:h-[40px] max-[1024px]:text-[18px] max-[1024px]:leading-[39.73px] min-[1025px]:w-[330px] min-[1025px]:h-[40px] min-[1025px]:text-[18px] min-[1025px]:leading-[39.73px] text-[#212121]">Web Application VAPT</h3>
                    <p className="m-0 font-manrope font-normal text-left text-[#585858] max-[1024px]:w-[334px] max-[1024px]:h-[90px] max-[1024px]:text-[15.07px] max-[1024px]:leading-[30px] min-[1025px]:w-[334px] min-[1025px]:h-[90px] min-[1025px]:text-[15.07px] min-[1025px]:leading-[30px]">Identifies security flaws in web applications, including authentication, session management, and injection vulnerabilities.</p>
                  </div>

                  {/* Desktop Icon (Preserved for 1440px) */}
                  <div className="hidden min-[1025px]:block min-[1025px]:w-[305.09px] min-[1025px]:h-[235px] relative">
                    <img
                      src="/images/pages/services/serivce-3/icon-1.svg"
                      alt="Web Application VAPT"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </article>

              {/* Card 2: Mobile Application VAPT */}
              <article className={`${commonCardClass} ${notLargeCardResponsiveClass} w-full max-w-[482px] h-[334px] rounded-[14.38px] !bg-[#F6F8FB] max-[1024px]:!w-[384px] max-[1024px]:!h-[305px] max-[1024px]:!bg-[#F6F8FB] min-[1025px]:w-[482px] min-[1025px]:h-[334px]`}>
                <div className="relative z-[2] flex flex-col max-[1024px]:absolute max-[1024px]:top-[32px] max-[1024px]:left-[26px] max-[1024px]:w-[307px] max-[1024px]:h-[119.69px] max-[1024px]:gap-[3.69px] max-[1024px]:items-start min-[1025px]:w-[380px] min-[1025px]:h-[119.69px] min-[1025px]:gap-[3.69px]">
                  <h3 className="m-0 font-sora font-semibold max-[1024px]:w-[307px] max-[1024px]:h-[29px] max-[1024px]:text-[18px] max-[1024px]:leading-[29px] min-[1025px]:w-[380px] min-[1025px]:h-[29px] min-[1025px]:text-[18px] min-[1025px]:leading-[29px] text-[#212121]">Mobile Application VAPT</h3>
                  <p className="m-0 font-manrope font-normal text-[#585858] max-[1024px]:!w-[307px] max-[1024px]:!h-[87px] max-[1024px]:!text-[16px] max-[1024px]:!leading-[30px] min-[1025px]:w-[380px] min-[1025px]:h-[87px] min-[1025px]:text-[16px] min-[1025px]:leading-[30px]">Assesses mobile apps for weaknesses in authentication, data storage, and API security to prevent exploitation.</p>
                </div>
                <div className={`${commonIconBoxClass} ${notLargeIconBoxResponsiveClass}`}>
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
              <article className={`${commonCardClass} ${notLargeCardResponsiveClass} w-full max-w-[482px] h-[334px] rounded-[14.38px] !bg-[#F6F8FB] max-[1024px]:!w-[384px] max-[1024px]:!h-[305px] max-[1024px]:!bg-[#F6F8FB] min-[1025px]:w-[482px] min-[1025px]:h-[334px]`}>
                <div className="relative z-[2] flex flex-col max-[1024px]:!absolute max-[1024px]:!top-[32px] max-[1024px]:!left-[26px] max-[1024px]:!w-[326px] max-[1024px]:!h-[119.69px] max-[1024px]:!gap-[3.69px] max-[1024px]:!items-start min-[1025px]:w-[380px] min-[1025px]:h-[119.69px] min-[1025px]:gap-[3.69px]">
                  <h3 className="m-0 !font-sora font-semibold max-[1024px]:!w-[326px] max-[1024px]:!h-[29px] max-[1024px]:!text-[18px] max-[1024px]:!leading-[29px] min-[1025px]:w-[380px] min-[1025px]:h-[29px] min-[1025px]:text-[18px] min-[1025px]:leading-[29px] text-[#212121]">Network VAPT</h3>
                  <p className="m-0 !font-manrope font-Regular text-[#585858] max-[1024px]:!w-[326px] max-[1024px]:!h-[87px] max-[1024px]:!text-[16px] max-[1024px]:!leading-[30px] min-[1025px]:w-[380px] min-[1025px]:h-[87px] min-[1025px]:text-[16px] min-[1025px]:leading-[30px]">Evaluates internal and external networks for vulnerabilities, misconfigurations, and unauthorized access points.</p>
                </div>
                <div className={`${commonIconBoxClass} ${notLargeIconBoxResponsiveClass}`}>
                  <img
                    src="/images/pages/services/serivce-3/icon-3.svg"
                    alt="Network VAPT"
                    className="w-full h-full object-contain"
                  />
                </div>
              </article>

              {/* Card 4: Cloud VAPT */}
              <article className={`${commonCardClass} large-card !rounded-[14.38px] w-full max-w-[727px] h-[334px] bg-[linear-gradient(230.36deg,rgba(135,187,243,0.36)_3.31%,rgba(111,144,180,0.07)_49.84%,rgba(246,248,251,0.49)_95.24%)] !border-none !p-0 max-[1024px]:!w-[384px] max-[1024px]:!h-[503px] max-[1024px]:!bg-[linear-gradient(230.36deg,rgba(135,187,243,0.36)_3.31%,rgba(111,144,180,0.07)_49.84%,rgba(246,248,251,0.49)_95.24%)] max-[1024px]:!relative min-[1025px]:w-[727px] min-[1025px]:h-[334px]`}>
                <div className="z-[2] flex flex-col max-[1024px]:!absolute max-[1024px]:!top-[61px] max-[1024px]:!left-[26px] max-[1024px]:!w-[330px] max-[1024px]:!h-[391.74px] max-[1024px]:!gap-[31px] max-[1024px]:!items-start min-[1025px]:absolute min-[1025px]:top-[86px] min-[1025px]:left-[48px] min-[1025px]:w-[303px] min-[1025px]:h-[162.74px] min-[1025px]:gap-[2.74px]">
                  <div className="flex flex-col max-[1024px]:!w-[330px] max-[1024px]:!h-[162.74px] max-[1024px]:!gap-[2.74px]">
                    <h3 className="m-0 font-sora font-semibold text-[#212121] max-[1024px]:!w-[330px] max-[1024px]:!h-[40px] max-[1024px]:!text-[18px] max-[1024px]:!leading-[39.73px] min-[1025px]:w-[303px] min-[1025px]:h-[40px] min-[1025px]:text-[18px] min-[1025px]:leading-[39.73px]">Cloud VAPT</h3>
                    <p className="m-0 font-manrope font-normal max-[1024px]:!w-[284px] max-[1024px]:!h-[120px] max-[1024px]:!text-[15.07px] max-[1024px]:!leading-[30px] max-[1024px]:!text-[#585858] min-[1025px]:w-[284px] min-[1025px]:max-w-[284px] min-[1025px]:h-[120px] min-[1025px]:text-[15.07px] min-[1025px]:leading-[30px] min-[1025px]:text-[#585858]">Tests cloud environments for misconfigurations, identity weaknesses, and compliance risks to secure cloud workloads.</p>
                  </div>
                  <div className={`${commonIconBoxClass} large-icon-box !bg-transparent !p-0 !rounded-none min-[1025px]:!absolute min-[1025px]:!top-[57px] min-[1025px]:!left-[361px] min-[1025px]:!w-[322px] min-[1025px]:!h-[198px] max-[1024px]:!w-[322px] max-[1024px]:!h-[198px] max-[1024px]:!relative max-[1024px]:!left-[10px]`}>
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
              <article className={`${commonCardClass} ${notLargeCardResponsiveClass} w-full max-w-[394.47px] h-[305.99px] !bg-[#F6F8FB] max-[1024px]:!w-[384px] max-[1024px]:!h-[306px] max-[1024px]:!bg-[#F6F8FB] max-[1024px]:!rounded-[19.35px] min-[1025px]:w-[394.47px] min-[1025px]:h-[305.99px]`}>
                <div className="relative z-[2] flex flex-col max-[1024px]:!absolute max-[1024px]:!top-[36px] max-[1024px]:!left-[24.21px] max-[1024px]:!w-[291px] max-[1024px]:!h-[132.74px] max-[1024px]:!gap-[3.66px] max-[1024px]:!items-start min-[1025px]:absolute min-[1025px]:top-[36px] min-[1025px]:left-[24.21px] min-[1025px]:w-[291px] min-[1025px]:h-[132.74px] min-[1025px]:gap-[3.69px]">
                  <h3 className="m-0 font-sora font-semibold text-[#212121] max-[1024px]:!w-[291px] max-[1024px]:!h-[40px] max-[1024px]:!text-[18px] max-[1024px]:!leading-[39.73px] min-[1025px]:w-[291px] min-[1025px]:h-[40px] min-[1025px]:text-[18px] min-[1025px]:leading-[39.73px]">API Assessment</h3>
                  <p className="m-0 font-manrope font-regular text-[#585858] max-[1024px]:!w-[291px] max-[1024px]:!h-[90px] max-[1024px]:!text-[15.07px] max-[1024px]:!leading-[30px] min-[1025px]:w-[291px] min-[1025px]:h-[90px] min-[1025px]:text-[15.07px] min-[1025px]:leading-[30px]">Identifies security gaps in APIs, including authentication flaws, data exposure, and injection risks.</p>
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
              <article className={`${commonCardClass} ${notLargeCardResponsiveClass} w-full max-w-[394.47px] h-[305.99px] !bg-[#F6F8FB] max-[1024px]:!w-[384px] max-[1024px]:!h-[306px] max-[1024px]:!bg-[#F6F8FB] max-[1024px]:!rounded-[19.35px] min-[1025px]:w-[394.47px] min-[1025px]:h-[305.99px]`}>
                <div className="relative z-[2] flex flex-col max-[1024px]:!absolute max-[1024px]:!top-[36px] max-[1024px]:!left-[22.53px] max-[1024px]:!w-[307px] max-[1024px]:!h-[122.69px] max-[1024px]:!gap-[3.69px] max-[1024px]:!items-start min-[1025px]:absolute min-[1025px]:top-[36px] min-[1025px]:left-[22.53px] min-[1025px]:w-[307px] min-[1025px]:h-[122.69px] min-[1025px]:gap-[3.69px]">
                  <h3 className="m-0 font-sora font-semibold text-[#212121] max-[1024px]:!w-[307px] max-[1024px]:!h-[29px] max-[1024px]:!text-[18px] max-[1024px]:!leading-[29px] min-[1025px]:w-[307px] min-[1025px]:h-[29px] min-[1025px]:text-[18px] min-[1025px]:leading-[29px]">Wireless Assessment</h3>
                  <p className="m-0 font-manrope font-normal text-[#585858] max-[1024px]:!w-[326px] max-[1024px]:!h-[90px] max-[1024px]:!text-[16px] max-[1024px]:!leading-[30px] min-[1025px]:w-[326px] min-[1025px]:h-[90px] min-[1025px]:text-[16px] min-[1025px]:leading-[30px]">Secures wireless networks against unauthorized access, rogue APs, and encryption weaknesses.</p>
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
              <article className={`${commonCardClass} ${notLargeCardResponsiveClass} w-full max-w-[394.47px] h-[305.99px] !bg-[#F6F8FB] max-[1024px]:!w-[384px] max-[1024px]:!h-[306px] max-[1024px]:!bg-[#F6F8FB] max-[1024px]:!rounded-[19.35px] min-[1025px]:w-[394.47px] min-[1025px]:h-[305.99px]`}>
                <div className="relative z-[2] flex flex-col max-[1024px]:!absolute max-[1024px]:!top-[36px] max-[1024px]:!left-[24.47px] max-[1024px]:!w-[331px] max-[1024px]:!h-[131.74px] max-[1024px]:!gap-[2.74px] max-[1024px]:!items-start min-[1025px]:absolute min-[1025px]:top-[36px] min-[1025px]:left-[24.47px] min-[1025px]:w-[331px] min-[1025px]:h-[131.74px] min-[1025px]:gap-[2.74px]">
                  <h3 className="m-0 font-sora font-semibold text-[#212121] max-[1024px]:!w-[331px] max-[1024px]:!h-[40px] max-[1024px]:!text-[18.49px] max-[1024px]:!leading-[39.73px] min-[1025px]:w-[331px] min-[1025px]:h-[40px] min-[1025px]:text-[18.49px] min-[1025px]:leading-[39.73px]">Social Engineering Simulation</h3>
                  <p className="m-0 font-manrope font-normal text-[#585858] max-[1024px]:!w-[308px] max-[1024px]:!h-[89px] max-[1024px]:!text-[15.07px] max-[1024px]:!leading-[29.45px] min-[1025px]:w-[308px] min-[1025px]:h-[89px] min-[1025px]:text-[15.07px] min-[1025px]:leading-[29.45px]">Assess human-layer vulnerabilities through phishing campaigns, pretexting, and other real-world deception techniques.</p>
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
      </section>

      {/* Methodology Section */}
      <section className="w-full flex flex-col items-center relative z-[10] mt-[60px] mb-[0] pb-[0] max-[1024px]:!w-[430px] max-[1024px]:!h-[642px] max-[1024px]:!bg-[linear-gradient(216.84deg,rgba(135,187,243,0.36)_-14.36%,rgba(111,144,180,0.07)_30.97%,rgba(253,253,253,0)_90.28%)] min-[1025px]:-mt-[50px] min-[1025px]:w-full min-[1025px]:h-auto min-[1025px]:pt-[80px] min-[1025px]:pb-[40px] min-[1025px]:bg-[linear-gradient(216.84deg,rgba(135,187,243,0.36)_-14.36%,rgba(111,144,180,0.07)_30.97%,rgba(253,253,253,0)_43.28%)]">
        <div className="flex flex-col items-center min-[1025px]:w-[976.01px] min-[1025px]:h-[586.91px] min-[1025px]:gap-[10px]">
          <div className="flex justify-center min-[1025px]:w-[976.01px] min-[1025px]:h-[49px]">
            <h2 className="font-sora font-semibold text-[#212121] text-center m-0 max-[1024px]:!absolute max-[1024px]:!top-[58px] max-[1024px]:!left-[85px] max-[1024px]:!w-[260px] max-[1024px]:!h-[86px] max-[1024px]:!text-[24px] max-[1024px]:!leading-[43px] min-[1025px]:w-[976.01px] min-[1025px]:h-[49px] min-[1025px]:text-[32px] min-[1025px]:leading-[49px]">
              Offensive Security <span className="text-[#2E5A88]">Methodology</span>
            </h2>
          </div>
          <div className="">
            <img
              src="/images/pages/services/serivce-3/OF-S-M/full-icon.svg"
              alt="Offensive Security Methodology"
              className="hidden min-[1025px]:block min-[1025px]:w-[976.01px] min-[1025px]:h-[504.91px] object-contain"
            />
            <img
              src="/images/pages/services/serivce-3/OF-S-M/section-2-mobile-icon.svg"
              alt="Offensive Security Methodology Mobile"
              className="block min-[1025px]:hidden max-[1024px]:!absolute max-[1024px]:!top-[183px] max-[1024px]:!left-[18px] max-[1024px]:!w-[394px] max-[1024px]:!h-[356.47px] object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
