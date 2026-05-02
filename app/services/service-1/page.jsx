import "./service-1.css";
import ScrollReveal from "../../component/ScrollReveal";

const capabilityCards = [
  {
    id: "network",
    title: "Network Security",
    desc: "Deploy industry-leading firewall, segmentation, and intrusion prevention solutions to secure your infrastructure from unauthorized access and advanced threats.",
    icon: "/images/pages/services/service-1/shield-icon.svg",
    cardClass: "min-[1025px]:!w-[727px] min-[1025px]:!h-[334px]",
    contentClass: "min-[1025px]:!w-[330px] min-[1025px]:!h-[162.74px] min-[1025px]:!gap-[2.74px]"
  },
  {
    id: "email",
    title: "Email Security",
    desc: "Protect your communications using AI-powered email filtering and threat protection to stop phishing, spoofing, and BEC attacks.",
    icon: "/images/pages/services/service-1/icon-1.svg",
    cardClass: "min-[1025px]:!w-[482px] min-[1025px]:!h-[334px]",
    contentClass: "min-[1025px]:!w-[380px] min-[1025px]:!h-[119.69px] min-[1025px]:!gap-[3.69px]"
  },
  {
    id: "endpoint",
    title: "Endpoint Security",
    desc: "Leverage next-gen protection and EDR tools from top vendors to defend endpoints against malware, ransomware, and exploit attempts.",
    icon: "/images/pages/services/service-1/icon-2.svg",
    cardClass: "",
    contentClass: ""
  },
  {
    id: "cloud",
    title: "Cloud Security",
    desc: "Integrate best-in-class CSPM and CWPP tools to continuously monitor cloud environments, enforce policies, and eliminate misconfigurations.",
    icon: "/images/pages/services/service-1/icon-3.svg",
    cardClass: "",
    contentClass: ""
  },
  {
    id: "application",
    title: "Application Security",
    desc: "Implement trusted solutions for code analysis, vulnerability scanning, and DevSecOps integration to secure applications from development to deployment.",
    icon: "/images/pages/services/service-1/icon-4.svg",
    cardClass: "",
    contentClass: ""
  },
  {
    id: "data",
    title: "Data Security",
    desc: "Apply enterprise-grade encryption, DLP, and access control solutions to prevent data leakage and ensure compliance with regulatory requirements.",
    icon: "/images/pages/services/service-1/icon-5.svg",
    cardClass: "",
    contentClass: ""
  },
  {
    id: "iam",
    title: "Identity & Access Management\n(IAM)",
    desc: "Strengthen access security using vendor-validated MFA, SSO, and identity governance solutions based on Zero Trust.",
    icon: "/images/pages/services/service-1/icon-6.svg",
    cardClass: "",
    contentClass: ""
  },
  {
    id: "siem",
    title: "SIEM Solutions",
    desc: "Enable real-time threat visibility and accelerated incident response through scalable SIEM platforms that centralize logs and security insights.",
    icon: "/images/pages/services/service-1/icon-4.svg",
    cardClass: "",
    contentClass: ""
  }
];

const baseCardClass = "bg-[#F6F8FB] rounded-[12px] p-[32px_24px_100px] relative overflow-hidden transition-all duration-300 hover:shadow-lg w-full max-w-full min-[1025px]:max-w-none max-[1024px]:mx-auto max-[1024px]:!pb-[40px] max-[425px]:!px-[20px] max-[375px]:!p-[24px_16px_40px]";
const baseContentClass = "flex flex-col gap-[12px] z-[5] max-[425px]:!gap-[8px]";
const baseTitleClass = "font-sora text-[18px] font-semibold leading-[38px] text-[#212121] max-[1024px]:leading-normal max-[425px]:!text-[18px] max-[375px]:!text-[16px] max-[320px]:!text-[15px] antialiased";
const baseDescClass = "font-manrope text-[18px] font-normal leading-[28px] text-[#585858] max-[1024px]:text-[18px] max-[1024px]:leading-[1.7] max-[425px]:!text-[18px] max-[425px]:!leading-[24px] max-[375px]:!text-[18px] max-[320px]:!text-[18px] antialiased";

export default function ServiceOnePage() {
  return (
    <div className="w-full bg-[#ffffff]">
      {/* Wrapper to control overall width on tablet */}
      <div className="w-full bg-[#ffffff]">
        {/* Hero Section */}
        <section className="relative w-full min-[1025px]:h-[556px] min-h-[500px] mx-auto flex flex-col justify-center items-center overflow-hidden bg-[url('/images/pages/services/service-1/Frame%209.svg')] max-[1024px]:!bg-[url('/images/pages/services/service-1/mobile-hero-bg.svg')] bg-cover bg-center max-[1024px]:bg-top max-[1024px]:bg-no-repeat min-[1025px]:bg-[#030D1A] opacity-100 p-[100px_20px_60px] max-[1454px]:p-[160px_20px_100px] text-center max-[1024px]:!pt-[140px] max-[1024px]:!pb-[80px] max-[425px]:!pt-[130px] max-[425px]:!pb-[60px] max-[1024px]:px-[24px]">
          <ScrollReveal direction="up">
            <div className="relative w-full max-w-[721px] flex flex-col items-center gap-[21px] z-[5] opacity-100 mx-auto">
              <div className="flex justify-center items-center w-[128px] h-[38px] rounded-[27.61px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] opacity-100 p-[8.12px] gap-[8.12px] max-[425px]:!w-[104px] max-[425px]:!h-[38px] max-[425px]:!p-[8.12px] max-[425px]:!gap-[8.12px]">
                <span className="flex justify-center items-center opacity-100 font-manrope font-semibold text-[14px] w-[75px] h-[37px] leading-[36.54px] tracking-[0.09em] uppercase text-[#FFFFFF] max-[425px]:!w-[65px] max-[425px]:!h-[37px] max-[425px]:!text-[12px] max-[425px]:!font-semibold max-[425px]:!leading-[36.54px] max-[425px]:!tracking-[0.09em] antialiased">SERVICES</span>
              </div>

              <div className="flex flex-col items-center gap-[10px] w-full max-w-[721px] h-auto opacity-100 max-[1024px]:!gap-[21px]">
                <h1 className="font-sora text-[32px] font-semibold text-[#ffffff] w-full max-w-[721px] h-auto opacity-100 leading-[57px] text-center [text-wrap:balance] mx-auto max-[1454px]:w-full max-[1454px]:h-auto max-[1454px]:text-[32px] max-[1454px]:leading-normal max-[1024px]:!w-full max-[1024px]:!h-auto max-[1024px]:!text-[32px] max-[1024px]:!leading-[1.3] max-[1024px]:!text-center max-[1024px]:!mx-0 max-[480px]:!text-[32px] max-[480px]:!leading-[48px] max-[480px]:tracking-[-0.02em] max-[320px]:!text-[32px] max-[320px]:!leading-[1.25]">
                  CyberShield Solutions
                </h1>

                <p className="w-full max-w-[649px] h-auto font-manrope font-normal text-[18px] leading-[30px] text-center text-[#EEEEEE] opacity-100 mx-auto antialiased max-[1454px]:w-full max-[1454px]:h-auto max-[1024px]:!w-full max-[1024px]:!h-auto max-[1024px]:!text-[16px] max-[1024px]:!leading-[1.6] max-[1024px]:!text-center max-[1024px]:!mx-auto max-[480px]:!text-[16px] max-[480px]:!leading-[28px] max-[320px]:!text-[14px]">
                  At Cybervol, we partner with leading cybersecurity vendors to deliver robust, integrated solutions that protect your digital assets, ensure compliance, and build digital trust — all while adapting to an ever-evolving threat landscape.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Capabilities Section */}
        <section className="p-[140px_20px_80px] bg-[#ffffff] max-[1024px]:!p-[80px_24px_60px] max-[425px]:!p-[60px_16px_40px] max-[1024px]:!overflow-hidden">
          <ScrollReveal direction="up">
            <div className="w-full max-w-[1230px] h-auto mx-auto flex flex-col gap-[30px] max-[1024px]:px-0">
              <div className="flex justify-between items-start w-full min-[1025px]:w-[1230px] h-auto opacity-100 max-[1024px]:flex-col max-[1024px]:!w-full max-[1024px]:!gap-[12px] max-[1024px]:!mb-0">
                <h2 className="font-sora text-[32px] font-semibold text-[#212121] w-full min-[1025px]:w-[389px] h-auto leading-[49px] m-0 opacity-100 max-[1024px]:!text-[28px] max-[1024px]:!leading-[40px] antialiased max-[425px]:!text-[26px] max-[425px]:!leading-[36px] max-[375px]:!text-[24px] max-[375px]:!leading-[32px] max-[320px]:!text-[22px] max-[320px]:!leading-[30px]">
                  Our <span className="text-[#2E5A88]">Capabilities</span>
                </h2>
                <p className="font-manrope text-[18px] font-normal leading-[30px] text-[#585858] w-full min-[1025px]:w-[736px] h-auto m-0 opacity-100 max-[1024px]:!w-full max-[1024px]:!h-auto max-[1024px]:!text-[18px] max-[1024px]:!leading-[26px] antialiased max-[320px]:!text-[18px] max-[320px]:!leading-[24px]">
                  At Cybervol, our goal is simple: to fortify your business with elite security. We help plan asset protection, proactive protection, and ensure leaders navigate the digital landscape with confidence.
                </p>
              </div>

              <div className="flex flex-col gap-[20px] w-full min-[1025px]:w-[1230px] h-auto opacity-100 max-[1024px]:!w-full max-[1024px]:!h-auto max-[1024px]:!gap-[24px]">
                {/* Featured Row */}
                <div className="w-full min-[1025px]:w-[1230px] h-auto min-[1025px]:h-[334px] flex flex-col min-[1025px]:flex-row gap-[19px] opacity-100 max-[1024px]:!gap-[24px]">
                  {capabilityCards.slice(0, 2).map((card, idx) => (
                    <article
                      key={card.id}
                      className={`${baseCardClass} ${card.cardClass || ""} ${idx === 0 ? "min-[1025px]:!p-[32px_40px_47px_29px] max-[1024px]:!min-h-0" : "min-[1025px]:!p-[32px_32px_32px_30px] max-[1024px]:!min-h-0"} service-card-anim card-entrance`}
                      style={{ 
                        ...(idx === 0 ? { background: "linear-gradient(230.36deg, rgba(135, 187, 243, 0.36) 3.31%, rgba(111, 144, 180, 0.07) 49.84%, rgba(246, 248, 251, 0.49) 95.24%)" } : {}),
                        animationDelay: `${idx * 0.15}s`
                      }}
                    >
                        {idx === 0 ? (
                          <div className="flex flex-col min-[1025px]:flex-row items-start gap-[35px] w-full min-[1025px]:w-[647px] h-auto min-[1025px]:h-[255px]">
                            <div className={`${baseContentClass} ${card.contentClass || ""} min-[1025px]:!w-[330px] min-[1025px]:!h-[162.74px] min-[1025px]:!gap-[2.74px]`}>
                              <h3 className={`${baseTitleClass} ${card.titleClass || ""}`}>{card.title}</h3>
                              <p className={`${baseDescClass} ${card.descClass || ""}`}>{card.desc}</p>
                            </div>

                            <div className="relative w-full min-[1025px]:w-[282px] h-auto min-[1025px]:h-[255px] max-[1024px]:flex max-[1024px]:justify-center max-[1024px]:mt-[0px]">
                              <img
                                src={card.icon}
                                alt={card.title}
                                className="absolute left-[11.39px] top-0 w-[270.62px] h-[255px] object-contain max-[1024px]:!static max-[1024px]:!w-full max-[1024px]:!max-w-[282px] max-[1024px]:!h-auto"
                              />
                            </div>
                          </div>
                        ) : (
                          <div className={`${baseContentClass} ${card.contentClass || ""} min-[1025px]:!w-[380px] min-[1025px]:!h-[119.69px] min-[1025px]:!gap-[3.69px]`}>
                            <h3 className={`${baseTitleClass} ${card.titleClass || ""} min-[1025px]:!w-[380px] min-[1025px]:!h-[29px] min-[1025px]:!leading-[29px]`}>{card.title}</h3>
                            <p className={`${baseDescClass} ${card.descClass || ""} min-[1025px]:!w-[380px] min-[1025px]:!h-[87px] min-[1025px]:!text-[18px] min-[1025px]:!leading-[30px]`}>{card.desc}</p>
                          </div>
                        )}

                        {idx !== 0 && (
                          <div className="absolute bottom-[24px] right-[24px] w-[52px] h-[52px] flex items-center justify-center z-[10] max-[375px]:bottom-[16px] max-[375px]:right-[16px]">
                            <img
                              src={card.icon}
                              alt={card.title}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                      </article>
                    ))}
                </div>

                {/* Standard Grid */}
                <div className="grid grid-cols-1 min-[1025px]:grid-cols-3 w-full min-[1025px]:w-[1230px] h-auto gap-[24px] min-[1025px]:gap-[19px] opacity-100 max-[1024px]:px-0">
                  {capabilityCards.slice(2).map((card, idx) => (
                    <article
                      key={card.id}
                      className={`${baseCardClass} ${card.cardClass || ""} max-[1024px]:!min-h-[306px] service-card-anim card-entrance`}
                      style={{ animationDelay: `${(idx + 2) * 0.1}s` }}
                    >
                      <div className={`${baseContentClass} ${card.contentClass || ""}`}>
                        <h3 className={`${baseTitleClass} ${card.titleClass || ""}`}>{card.title}</h3>
                        <p className={`${baseDescClass} ${card.descClass || ""}`}>{card.desc}</p>
                      </div>

                      <div className="absolute bottom-[24px] right-[24px] w-[52px] h-[52px] flex items-center justify-center z-[10] max-[375px]:bottom-[16px] max-[375px]:right-[16px]">
                        <img
                          src={card.icon}
                          alt={card.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
