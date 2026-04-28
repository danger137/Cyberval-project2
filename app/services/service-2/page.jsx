"use client";
import "./service-2.css";

const capabilityCards = [
  {
    id: "cyber-program",
    title: "Cybersecurity Program",
    desc: "Establish and manage a strategic cybersecurity program aligned with business goals, risk tolerance, and regulatory expectations to ensure continuous protection and improvement",
    icon: "/images/pages/services/service-2/icon-1.svg",
    cardClass: "min-[1025px]:!w-[379px] min-[1025px]:!h-[292px] max-[1024px]:!w-[384px] max-[1024px]:!h-[292px] max-[1024px]:!rounded-[20px] max-[1024px]:!p-[34px_28px]",
    contentClass: "min-[1025px]:w-[323px] min-[1025px]:h-[150px] max-[1024px]:!w-[328px] max-[1024px]:!h-[150px]",
    innerParentClass: "min-[1025px]:w-[323px] min-[1025px]:h-[233px] flex flex-col justify-between max-[1024px]:!w-[328px] max-[1024px]:!h-[233px]"
  },
  {
    id: "compliance",
    title: "Security & Privacy Compliance",
    desc: "Achieve and sustain compliance with key standards and frameworks including NIST, ISO 27001, HITRUST, SOC 2, GDPR, NDPR, and PCI-DSS, through well-defined security and privacy controls.",
    icon: "/images/pages/services/service-2/icon-3.svg",
    cardClass: "min-[1025px]:!w-[379px] min-[1025px]:!h-[292px] max-[1024px]:!w-[384px] max-[1024px]:!h-[292px] max-[1024px]:!rounded-[20px] max-[1024px]:!p-[34px_28px]",
    contentClass: "max-[1024px]:!w-[328px] max-[1024px]:!h-[150px]",
    innerParentClass: "min-[1025px]:w-[323px] min-[1025px]:h-[234px] flex flex-col justify-between max-[1024px]:!w-[328px] max-[1024px]:!h-[234px]"
  },
  {
    id: "continuity",
    title: "Business Continuity",
    desc: "Develop and implement continuity plans that ensure mission-critical operations remain functional during disruptions with recovery strategies that minimize downtime and data loss.",
    icon: "/images/pages/services/service-2/icon-2.svg",
    cardClass: "min-[1025px]:!w-[379px] min-[1025px]:!h-[292px] max-[1024px]:!w-[384px] max-[1024px]:!h-[292px] max-[1024px]:!rounded-[20px] max-[1024px]:!p-[34px_28px]",
    contentClass: "max-[1024px]:!w-[328px] max-[1024px]:!h-[150px]",
    innerParentClass: "min-[1025px]:w-[323px] min-[1025px]:h-[233px] flex flex-col justify-between max-[1024px]:!w-[328px] max-[1024px]:!h-[233px]"
  },
  {
    id: "maturity",
    title: "Cyber Maturity & Risk Assessment",
    desc: "Evaluate your organization's cybersecurity maturity, identify control gaps, and prioritize risk mitigation strategies to enhance resilience and reduce exposure.",
    icon: "/images/pages/services/service-2/icon-4.svg",
    cardClass: "min-[1025px]:!w-[379px] min-[1025px]:!h-[292px] max-[1024px]:!w-[384px] max-[1024px]:!h-[292px] max-[1024px]:!rounded-[20px] max-[1024px]:!p-[34px_28px]",
    contentClass: "max-[1024px]:!w-[328px] max-[1024px]:!h-[150px]",
    innerParentClass: "min-[1025px]:w-[323px] min-[1025px]:h-[233px] flex flex-col justify-between max-[1024px]:!w-[328px] max-[1024px]:!h-[233px]"
  },
  {
    id: "third-party",
    title: "Third Party Risk Assessment",
    desc: "Assess, monitor, and mitigate risks associated with vendors, suppliers, and other third parties to ensure security and compliance across your extended ecosystem.",
    icon: "/images/pages/services/service-1/icon-1.svg", 
    cardClass: "min-[1025px]:!w-[428px] min-[1025px]:!h-[608px] min-[1025px]:!rounded-[20px] bg-[url('/images/pages/services/service-2/right-card-image.svg')] bg-cover bg-center !p-0 !border-none max-[1024px]:!w-[384px] max-[1024px]:!h-[608px] max-[1024px]:!rounded-[20px] max-[1024px]:!p-0", 
    contentClass: "absolute min-[1025px]:top-[383px] min-[1025px]:left-[15px] min-[1025px]:w-[397px] min-[1025px]:h-[209px] p-[24px_16px] min-[1025px]:!p-[28px_24px] bg-[#FFFFFF1A] backdrop-blur-[16px] min-[1025px]:rounded-[20px] flex items-start justify-start max-[1024px]:top-[394px] max-[1024px]:left-[15px] max-[1024px]:!w-[353px] max-[1024px]:!h-[198px] max-[1024px]:!rounded-[20px] max-[1024px]:!p-[24px] max-[1024px]:!gap-[10px]",
    innerParentClass: "min-[1025px]:w-[341px] min-[1025px]:h-auto flex flex-col min-[1025px]:gap-[4px] items-start justify-start text-left max-[1024px]:!w-[317px] max-[1024px]:!h-[150px]",
    titleClass: "!text-white",
    descClass: "!text-white"
  }
];

const baseCardClass = "bg-[#F6F8FB] rounded-[12px] p-[32px_24px_100px] min-[1025px]:!p-[34px_28px] min-[1025px]:!rounded-[20px] relative overflow-hidden transition-all duration-300 hover:shadow-lg max-[1024px]:w-full max-[1024px]:max-w-[425px] max-[1024px]:mx-auto max-[425px]:!w-full max-[425px]:!px-[20px] max-[375px]:!p-[24px_16px_80px]";
const baseContentClass = "flex flex-col gap-[12px] min-[1025px]:!gap-[10px] z-[5] max-[425px]:!gap-[8px]";
const baseTitleClass = "font-sora text-[18px] font-semibold leading-[38px] text-[#212121] max-[1024px]:leading-normal max-[425px]:!text-[18px] max-[375px]:!text-[16px] max-[320px]:!text-[15px] antialiased";
const baseDescClass = "font-manrope text-[18px] font-normal leading-[28px] text-[#585858] max-[1024px]:text-[18px] max-[1024px]:leading-[1.7] max-[425px]:!text-[18px] max-[425px]:!leading-[24px] max-[375px]:!text-[18px] max-[320px]:!text-[18px] antialiased";

export default function ServiceTwoPage() {
  return (
    <div className="w-full bg-[#ffffff]">
      <div className="w-full max-[1024px]:max-w-[440px] max-[1024px]:mx-auto bg-[#ffffff]">
        {/* Hero Section */}
        <section className="relative min-[1025px]:w-[1440px] min-[1025px]:h-[556px] h-[733px] mx-auto flex flex-col justify-center items-center overflow-hidden bg-[url('/images/pages/services/service-2/service-2-hero-bg.svg')] max-[1024px]:!bg-[url('/images/pages/services/service-2/mobile-view-hero-bg%20.svg')] bg-cover min-[1025px]:bg-center max-[1024px]:bg-top max-[1024px]:bg-no-repeat min-[1025px]:bg-[#030D1A] max-[1024px]:bg-white opacity-100 p-[100px_20px_60px] max-[1454px]:p-[160px_20px_100px] text-center max-[1024px]:!text-center max-[1024px]:!w-[440px] max-[1024px]:!h-[733px] max-[1024px]:!pt-[75px] max-[1024px]:!pb-[60px] max-[425px]:!pt-[60px] max-[425px]:!pb-[40px] max-[1024px]:!px-[24px]">
          <div className="absolute min-[1025px]:top-[184px] min-[1025px]:left-1/2 min-[1025px]:-translate-x-1/2 min-[1025px]:w-[795px] min-[1025px]:h-[216px] flex flex-col items-center min-[1025px]:gap-[21px] z-[5] opacity-100 max-[1024px]:!relative max-[1024px]:!w-full max-[1024px]:!h-auto max-[1024px]:!top-0 max-[1024px]:!left-0 max-[1024px]:!gap-[21px] max-[1024px]:!items-center max-[1024px]:!mx-auto max-[1024px]:!mt-0">
            <div className="flex justify-center items-center w-[128px] h-[38px] rounded-[27.61px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] opacity-100 p-[8.12px] gap-[8.12px] max-[425px]:!w-[104px] max-[425px]:!h-[38px] max-[425px]:!p-[8.12px] max-[425px]:!gap-[8.12px]">
              <span className="flex justify-center items-center opacity-100 font-manrope font-semibold text-[14px] w-[75px] h-[37px] leading-[36.54px] tracking-[0.09em] uppercase text-[#FFFFFF] max-[1024px]:!text-[12px] max-[425px]:!w-[65px] max-[425px]:!h-[37px] max-[425px]:!font-semibold max-[425px]:!leading-[36.54px] max-[425px]:!tracking-[0.09em] antialiased">SERVICES</span>
            </div>

            <div className="flex flex-col items-center min-[1025px]:gap-[10px] min-[1025px]:w-[795px] h-auto opacity-100 max-[1454px]:w-full max-[1454px]:h-auto max-[1024px]:!gap-[21px] hero-reveal">
              <h1 className="font-sora text-[32px] font-semibold text-[#ffffff] min-[1025px]:w-[795px] h-auto opacity-100 min-[1025px]:leading-[57px] text-center [text-wrap:balance] mx-auto max-[1024px]:!w-full max-[1024px]:!h-auto max-[1024px]:!text-[32px] max-[1024px]:!leading-[1.3] max-[1024px]:!text-center max-[1024px]:!mx-0 max-[480px]:!text-[32px] max-[480px]:!leading-[48px] max-[480px]:tracking-[-0.02em] max-[320px]:!text-[32px] max-[320px]:!leading-[1.25] antialiased">
                Governance, Risk & Compliance (GRC)
              </h1>

              <p className="min-[1025px]:w-[795px] h-auto font-manrope font-normal text-[18px] leading-[30px] text-center text-[#EEEEEE] opacity-100 mx-auto antialiased max-[1024px]:!w-full max-[1024px]:!h-auto max-[1024px]:!text-[16px] max-[1024px]:!leading-[1.6] max-[1024px]:!text-center max-[1024px]:!mx-auto max-[480px]:!text-[16px] max-[480px]:!leading-[28px] max-[320px]:!text-[14px]">
                At Cybervol, we partner with leading cybersecurity vendors to deliver <br className="hidden min-[1025px]:block" /> robust, integrated solutions that protect your digital assets, ensure compliance, and <br className="hidden min-[1025px]:block" /> build digital trust — all while adapting to an ever-evolving threat landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="p-[140px_20px_120px] bg-[#ffffff] max-[1024px]:!p-[60px_24px_10px] max-[425px]:!p-[40px_20px_10px] max-[1024px]:!overflow-hidden">
          <div className="w-[1230px] h-auto mx-auto flex flex-col gap-[30px] max-[1024px]:w-full max-[1024px]:max-w-[440px] max-[1024px]:px-0 max-[1024px]:mx-auto">
            <div className="flex justify-between items-start w-full min-[1025px]:w-[1230px] h-auto opacity-100 max-[1024px]:flex-col max-[1024px]:!w-full max-[1024px]:!gap-[12px] max-[1024px]:!mb-0">
              <h2 className="font-sora text-[32px] font-semibold text-[#212121] w-full min-[1025px]:w-[311px] h-auto leading-[49px] m-0 opacity-100 max-[1024px]:!text-[28px] max-[1024px]:!leading-[40px] antialiased max-[425px]:!text-[26px] max-[425px]:!leading-[36px] max-[375px]:!text-[24px] max-[375px]:!leading-[32px] max-[320px]:!text-[22px] max-[320px]:!leading-[30px]">
                Empowering Your <br /> <span className="text-[#2E5A88]">Security Journey</span>
              </h2>
              <p className="font-manrope text-[18px] font-normal leading-[30px] text-[#585858] w-full min-[1025px]:w-[676px] h-auto m-0 opacity-100 max-[1024px]:!w-full max-[1024px]:!h-auto max-[1024px]:!text-[18px] max-[1024px]:!leading-[26px] antialiased max-[320px]:!text-[18px] max-[320px]:!leading-[24px]">
                Our holistic approach covers everything from initial risk assessments to ensuring ongoing compliance and maintaining business continuity, all within a unified strategic framework.
              </p>
            </div>

            <div className="flex flex-col min-[1025px]:flex-row gap-[24px] min-[1025px]:gap-[20px] w-full min-[1025px]:w-[1230px] h-auto opacity-100 max-[1024px]:w-[384px] max-[1024px]:h-[1868px] max-[1024px]:!gap-[23px] max-[1024px]:!items-center">
              {/* Column 1 (2 Cards) */}
              <div className="flex flex-col gap-[24px] w-full min-[1025px]:w-[379px] h-auto min-[1025px]:h-[608px]">
                {capabilityCards.slice(0, 2).map((card, idx) => (
                  <article
                    key={card.id}
                    className={`${baseCardClass} ${card.cardClass || ""} service-card-anim card-entrance`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className={card.innerParentClass || "h-full flex flex-col justify-between"}>
                      <div className={`${baseContentClass} ${card.contentClass || ""}`}>
                        <h3 className={`${baseTitleClass} ${card.titleClass || ""}`}>{card.title}</h3>
                        <p className={`${baseDescClass} ${card.descClass || ""}`}>{card.desc}</p>
                      </div>

                      <div className="absolute bottom-[24px] right-[24px] w-[52px] h-[52px] flex items-center justify-center z-[10] max-[1024px]:bottom-[24px] max-[1024px]:right-[24px] max-[425px]:bottom-[16px] max-[425px]:right-[16px]">
                        <img
                          src={card.icon}
                          alt={card.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Column 2 (2 Cards) */}
              <div className="flex flex-col gap-[24px] w-full min-[1025px]:w-[379px] h-auto min-[1025px]:h-[608px]">
                {capabilityCards.slice(2, 4).map((card, idx) => (
                  <article
                    key={card.id}
                    className={`${baseCardClass} ${card.cardClass || ""} service-card-anim card-entrance`}
                    style={{ animationDelay: `${(idx + 2) * 0.1}s` }}
                  >
                    <div className={card.innerParentClass || "h-full flex flex-col justify-between"}>
                      <div className={`${baseContentClass} ${card.contentClass || ""}`}>
                        <h3 className={`${baseTitleClass} ${card.titleClass || ""}`}>{card.title}</h3>
                        <p className={`${baseDescClass} ${card.descClass || ""}`}>{card.desc}</p>
                      </div>

                      <div className="absolute bottom-[24px] right-[24px] w-[52px] h-[52px] flex items-center justify-center z-[10] max-[1024px]:bottom-[24px] max-[1024px]:right-[24px] max-[425px]:bottom-[16px] max-[425px]:right-[16px]">
                        <img
                          src={card.icon}
                          alt={card.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Column 3 (1 Big Card) */}
              <div className="w-full min-[1025px]:w-[428px] relative">
                <article
                  className={`${baseCardClass} ${capabilityCards[4].cardClass || ""} min-[1025px]:!h-[608px] service-card-anim card-entrance`}
                  style={{ animationDelay: '0.4s' }}
                >
                  <div className={`${capabilityCards[4].contentClass || ""}`}>
                    <div className={capabilityCards[4].innerParentClass}>
                      <h3 className={`${baseTitleClass} ${capabilityCards[4].titleClass || ""}`}>{capabilityCards[4].title}</h3>
                      <p className={`${baseDescClass} ${capabilityCards[4].descClass || ""}`}>{capabilityCards[4].desc}</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
