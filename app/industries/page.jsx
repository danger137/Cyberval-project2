"use client";

import './industries.css';

export default function Industries() {
  const industryCards = [
    {
      id: 1,
      title: "Financial Services & Fintech",
      desc: "Robust security frameworks to protect high-stakes financial data and transactions.",
      image: "/images/pages/industry/card-image-1.svg",
      icon: "/images/pages/industry/card-icon-1.svg"
    },
    {
      id: 2,
      title: "Healthcare, Pharma & Life Sciences",
      desc: "Ensuring compliance and protecting sensitive patient data and medical records.",
      image: "/images/pages/industry/card-image-2.svg",
      icon: "/images/pages/industry/card-icon-2.svg"
    },
    {
      id: 3,
      title: "Technology, Media & Telecom",
      desc: "Securing modern communication channels and digital content ecosystems.",
      image: "/images/pages/industry/card-image-3.svg",
      icon: "/images/pages/industry/card-icon-3.svg"
    },
    {
      id: 4,
      title: "Energy, Utilities & Infrastructure",
      desc: "Safeguarding critical national infrastructure against sophisticated threats.",
      image: "energy.jpg",
      icon: null
    }
  ];

  return (
    <section className="industries-section">
      <div className="industries-container">
        <div className="industries-header">
          <div className="industries-header-left">
            <span className="industries-badge">INDUSTRIES</span>
            <h2 className="industries-title">Industries we serve</h2>
          </div>
          <div className="industries-header-right">
            <p className="industries-description">
              We provide tailored cybersecurity solutions across diverse sectors, addressing unique challenges and regulatory requirements for each industry.
            </p>
          </div>
        </div>

        <div className="industries-cards-row">
          {industryCards.map((card) => (
            <div key={card.id} className="industry-card">
              <div className="industry-image-wrapper">
                {card.id <= 3 ? (
                  <img src={card.image} alt={card.title} className="industry-main-image" />
                ) : (
                  <div className="industry-image-placeholder"></div>
                )}
                
                {card.icon && (
                  <div className="industry-icon-wrapper">
                    <img src={card.icon} alt="Icon" className="industry-card-icon" />
                  </div>
                )}
              </div>
              <div className="industry-card-content">
                <h3 className="industry-card-title">{card.title}</h3>
                <p className="industry-card-desc">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="industries-dots">
          <div className="slider-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
