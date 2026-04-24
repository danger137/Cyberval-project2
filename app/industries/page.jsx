"use client";

import { useRef, useState, useEffect } from 'react';
import './industries.css';

export default function Industries() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const industryCards = [
    {
      id: 1,
      title: "Financial Services & FinTech",
      desc: "Risk-led security, fraud resilience, and compliance support for banks, insurers, asset managers, and payment innovators.",
      image: "/images/pages/industry/card-image-1.svg",
      icon: "/images/pages/industry/card-icon-1.svg"
    },
    {
      id: 2,
      title: "Healthcare, Pharma & Life Sciences",
      desc: "Protecting patient data, clinical systems, and R&D pipelines while meeting HIPAA, privacy, and sector-specific expectations.",
      image: "/images/pages/industry/card-image-2.svg",
      icon: "/images/pages/industry/card-icon-2.svg"
    },
    {
      id: 3,
      title: "Technology, Media & Telecom",
      desc: "Securing product stacks, cloud estates, and customer platforms for fast-moving digital and SaaS organizations.",
      image: "/images/pages/industry/card-image-3.svg",
      icon: "/images/pages/industry/card-icon-3.svg"
    },
    {
      id: 4,
      title: "Energy, Utilities & Critical Infrastructure",
      desc: "Operational technology awareness and controls ensuring reliability in regulated environments.",
      image: "/images/pages/industry/card-image-4.png",
      icon: "/images/pages/industry/card-icon-4.svg"
    },
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    if (scrollWidth <= clientWidth) return;

    const maxScroll = scrollWidth - clientWidth;
    const progress = scrollLeft / maxScroll;
    
    // Calculate which card is most visible (assuming 4 cards total)
    const newIndex = Math.round(progress * (industryCards.length - 1));
    setActiveIndex(newIndex);
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

  useEffect(() => {
    // Initial scroll check if needed
    handleScroll();
  }, []);

  const scrollToDot = (index) => {
    if (!scrollRef.current) return;
    
    const { scrollWidth, clientWidth } = scrollRef.current;
    const isMobile = window.innerWidth <= 425;
    
    let target = 0;
    
    if (isMobile) {
      target = index * clientWidth;
    } else {
      const cardWidthWithGap = 414;
      if (index === 0) target = 0;
      else if (index === 1) target = cardWidthWithGap;
      else if (index >= 2) {
        target = scrollWidth - clientWidth;
      }
    }
    
    scrollRef.current.scrollTo({
      left: target,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  return (
    <section className="industries-section">
      <div className="industries-container">
        <div className="industries-header">
          <div className="industries-header-left">
            <span className="industries-badge">industries</span>
            <h2 className="industries-title">Industries we serve</h2>
          </div>
          <div className="industries-header-right">
            <p className="industries-description">
              From regulated sectors to high-growth digital businesses, we tailor cybersecurity <br className="industries-br" /> and GRC programs to how your industry operates, competes, and earns trust.
            </p>
          </div>
        </div>

        <div className="industries-slider-viewport">
          <div 
            className="industries-cards-row" 
            ref={scrollRef}
            onScroll={handleScroll}
          >
            {industryCards.map((card, index) => (
              <div 
                key={card.id} 
                className="industry-card-wrapper"
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="industry-card">
                  <div className="industry-card-image-area">
                    <div className="industry-image-wrapper">
                      <img src={card.image} alt={card.title} className="industry-main-image" />
                    </div>
                    
                    {card.icon && (
                      <div className="industry-icon-box">
                        <img src={card.icon} alt="Icon" className="industry-card-icon" />
                      </div>
                    )}
                  </div>
                  <div className="industry-card-content">
                    <h3 className="industry-card-title">{card.title}</h3>
                    <p className="industry-card-desc">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="industries-dots">
          <div className="slider-indicator-bar">
            {[0, 1, 2].map((i) => {
              // Map 4 cards to 3 tabs:
              // index 0 -> Card 1
              // index 1 -> Card 2
              // index 2 -> Card 3 & 4
              let isActive = false;
              if (i === 0) isActive = activeIndex === 0;
              else if (i === 1) isActive = activeIndex === 1;
              else if (i === 2) isActive = activeIndex >= 2;

              return (
                <div 
                  key={i} 
                  className={`indicator-segment ${isActive ? 'active' : ''}`}
                  onClick={() => scrollToDot(i)}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
