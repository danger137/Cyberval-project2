"use client";

import { useState, useRef, useEffect } from 'react';
import './Testimonials.css';

const testimonialData = [
  {
    id: 1,
    name: "John",
    designation: "IT DIRECTOR",
    image: "/images/pages/john.jpg",
    text: "Cybervol transformed our security infrastructure completely. Their proactive approach and deep expertise helped us identify vulnerabilities before they became threats. We now operate with full confidence knowing our systems are protected.",
    rating: 5
  },
  {
    id: 2,
    name: "Melisa",
    designation: "IT DIRECTOR",
    image: "/images/pages/melisa.jpg",
    text: "Cybervol transformed our security infrastructure completely. Their proactive approach and deep expertise helped us identify vulnerabilities before they became threats. We now operate with full confidence knowing our systems are protected.",
    rating: 5
  },
  {
    id: 3,
    name: "Charlie",
    designation: "PRODUCT MANAGER",
    image: "/images/pages/charlie.jpg",
    text: "Cybervol transformed our security infrastructure completely. Their proactive approach and deep expertise helped us identify vulnerabilities before they became threats. We now operate with full confidence knowing our systems are protected.",
    rating: 5
  },
 

];

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);

  const checkScrollable = () => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      setIsScrollable(scrollWidth > clientWidth);
    }
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    if (scrollWidth <= clientWidth) return;
    
    const maxScroll = scrollWidth - clientWidth;
    const progress = (scrollLeft / maxScroll) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    
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
    return () => {
      el.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', checkScrollable);
    };
  }, []);

  const scrollToPercent = (percent) => {
    if (!scrollRef.current) return;
    const { scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    scrollRef.current.scrollTo({
      left: (maxScroll * percent) / 100,
      behavior: 'smooth'
    });
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <div className="testimonials-badge-wrapper">
             <span className="testimonials-badge">TESTIMONIALS</span>
          </div>
          <h2 className="testimonials-title">
            Trusted by teams who <span className="highlight">lead people</span>
          </h2>
          <p className="testimonials-subtitle">
            Real experiences from organizations benefiting from our cybersecurity expertise.
          </p>
        </div>

        <div className="testimonials-slider-viewport">
          <div 
            className="testimonials-cards-row"
            ref={scrollRef}
            onScroll={handleScroll}
          >
            {testimonialData.map((item) => (
              <div key={item.id} className="testimonial-card-wrapper">
                <div className="testimonial-card">
                  <div className="testimonial-user-info">
                    <img src={item.image} alt={item.name} className="testimonial-avatar" />
                    <div className="testimonial-user-details">
                      <h4 className="testimonial-user-name">{item.name}</h4>
                      <p className="testimonial-user-designation">{item.designation}</p>
                    </div>
                  </div>
                  <p className="testimonial-text">{item.text}</p>
                  <div className="testimonial-rating">
                    {[...Array(item.rating)].map((_, i) => (
                      <svg key={i} className="star-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FBBF24" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {isScrollable && (
          <div className="testimonials-indicators">
            <div className="slider-indicator-bar">
               <div 
                  className="indicator-active-thumb" 
                  style={{ 
                    left: `${scrollProgress * (1 - (44 / 180))}%`,
                    width: `44px` 
                  }}
                ></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
