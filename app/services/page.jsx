"use client";

import { useRef, useState, useEffect } from 'react';
import './services.css';

export default function ServicesPage() {
  const scrollRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const serviceCards = [
    {
      id: 1,
      title: "CyberShield Solutions",
      desc: "Building Secure & Resilient IT Infrastructures",
      image: "/images/pages/services/card-image-1.png",
      defaultIcon: "/images/pages/services/icon-navy-blue.svg",
      hoverIcon: "/images/pages/services/icon-white (1).svg"
    },
    {
      id: 2,
      title: "Governance, Risk & Compliance (GRC)",
      desc: "Aligning Cybersecurity with Business Risk and Regulatory Assurance",
      image: "/images/pages/services/card-image-2.png",
      defaultIcon: "/images/pages/services/icon-navy-blue.svg",
      hoverIcon: "/images/pages/services/icon-white (1).svg"
    },
    {
      id: 3,
      title: "Offensive Security",
      desc: "Proactive Threat Simulation & Risk Mitigation",
      image: "/images/pages/services/card-image-3.png",
      defaultIcon: "/images/pages/services/icon-navy-blue.svg",
      hoverIcon: "/images/pages/services/icon-white (1).svg"
    },
    {
      id: 4,
      title: "Awareness & Training",
      desc: "Empower Your People, Strengthen Your First Defense",
      image: "/images/pages/services/card-image-4 .png",
      defaultIcon: "/images/pages/services/icon-navy-blue.svg",
      hoverIcon: "/images/pages/services/icon-white (1).svg"
    },
    {
      id: 5,
      title: "Training & Certifications",
      desc:"Cybersecurity, Al & Digital Transformation, Resilience, GRC, and Privacy",
      image: "/images/pages/services/card-image-5.png",
      defaultIcon: "/images/pages/services/icon-navy-blue.svg",
      hoverIcon: "/images/pages/services/icon-white (1).svg"
    },
    {
      id: 6,
      title: "Managed Cybersecurity as a Service (MCaaS)",
      desc: "Your Unyielding Cybersecurity Ally in the Digital Realm",
      image: "/images/pages/services/card-image-6.png",
      defaultIcon: "/images/pages/services/icon-navy-blue.svg",
      hoverIcon: "/images/pages/services/icon-white (1).svg"
    }
  ];

  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    
    if (scrollWidth <= clientWidth) return;
    
    const maxScroll = scrollWidth - clientWidth;
    const progress = (scrollLeft / maxScroll) * 100;
    setScrollProgress(progress);
    
    // Also update activeDot for the indicators if needed
    const currentDot = Math.round((scrollLeft / maxScroll) * (serviceCards.length - 1));
    setActiveDot(currentDot);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        const isAtStart = el.scrollLeft <= 0 && e.deltaY < 0;
        const isAtEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth && e.deltaY > 0;
        
        if (!isAtStart && !isAtEnd) {
          e.preventDefault();
          el.scrollLeft += e.deltaY;
        }
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  const scrollToDot = (index) => {
    if (!scrollRef.current) return;
    const { scrollWidth, clientWidth } = scrollRef.current;
    
    const maxScroll = scrollWidth - clientWidth;
    const scrollTarget = (maxScroll / (serviceCards.length - 1)) * index;
    
    scrollRef.current.scrollTo({
      left: scrollTarget,
      behavior: 'smooth'
    });
    setActiveDot(index);
  };

  return (
    <div className="services-page-wrapper">
      <section className="services-section">
        <div className="services-container">
          <div className="services-header">
            <div className="services-header-left">
              <span className="services-badge">OUR SERVICES</span>
              <h2 className="services-title">
                Our Commitment to<br/>
                <span className="blue-text">Security and Trust</span>
              </h2>
            </div>
            
            <div className="services-header-right">
              <p className="services-description">
                Comprehensive digital solutions designed to transform your <br className="services-br" /> business and accelerate growth through innovative technology.
              </p>
            </div>
          </div>

          <div className="services-cards-wrapper">
            <div 
              className="services-cards" 
              ref={scrollRef}
              onScroll={handleScroll}
            >
              
              {serviceCards.map((card, index) => (
                <div 
                  className={`service-card ${hoveredIndex === index ? 'card-hovered' : ''}`}
                  key={card.id}
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    setActiveDot(index);
                  }}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div 
                    className="card-hover-bg" 
                    style={{ backgroundImage: `url('${card.image}')` }}
                  ></div>
                                    
                  <div className="card-content">
                    <h3 className="card-title">{card.title}</h3>
                    <div className="card-line"></div>
                    <p className="card-text">{card.desc}</p>
                    
                    <button className="card-btn" aria-label={`Learn more about ${card.title}`}>
                      <img 
                        src={hoveredIndex === index ? card.hoverIcon : card.defaultIcon} 
                        alt="Arrow Icon" 
                        className="card-btn-icon"
                      />
                    </button>
                  </div>
                </div>
              ))}

            </div>
            
            <div className="services-dots">
              <div className="slider-indicator-bar">
                {serviceCards.map((_, i) => (
                  <div 
                    key={i} 
                    className="indicator-segment"
                    onClick={() => scrollToDot(i)}
                  ></div>
                ))}
                <div 
                  className="indicator-active-thumb" 
                  style={{ 
                    left: `${scrollProgress * 0.8}%`, /* Adjusting 100% - width% to stay inside the bar */
                    width: `20%` 
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
