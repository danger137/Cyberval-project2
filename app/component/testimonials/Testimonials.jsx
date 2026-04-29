"use client";

import { useState, useRef, useEffect } from 'react';
import ScrollReveal from '../ScrollReveal';
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
  {
    id: 4,
    name: "Sarah",
    designation: "CTO",
    image: "/images/pages/john.jpg",
    text: "Cybervol transformed our security infrastructure completely. Their proactive approach and deep expertise helped us identify vulnerabilities before they became threats. We now operate with full confidence knowing our systems are protected.",
    rating: 5
  },
  {
    id: 5,
    name: "David",
    designation: "SECURITY ANALYST",
    image: "/images/pages/melisa.jpg",
    text: "Cybervol transformed our security infrastructure completely. Their proactive approach and deep expertise helped us identify vulnerabilities before they became threats. We now operate with full confidence knowing our systems are protected.",
    rating: 5
  },
  {
    id: 6,
    name: "Elena",
    designation: "COMPLIANCE OFFICER",
    image: "/images/pages/charlie.jpg",
    text: "Cybervol transformed our security infrastructure completely. Their proactive approach and deep expertise helped us identify vulnerabilities before they became threats. We now operate with full confidence knowing our systems are protected.",
    rating: 5
  }
];

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    
    if (scrollWidth <= clientWidth) return;
    
    // We have 3 dots, each corresponding to a segment of the scroll area
    const maxScroll = scrollWidth - clientWidth;
    const progress = scrollLeft / maxScroll;
    
    if (progress < 0.33) {
      setActiveIndex(0);
    } else if (progress < 0.66) {
      setActiveIndex(1);
    } else {
      setActiveIndex(2);
    }
  };

  useEffect(() => {    
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      // Allow vertical scrolling naturally
      // Only capture if deltaX is zero but we want to convert deltaY to deltaX?
      // Actually standard scroll-snap handles horizontal trackpads nicely.
      // If we want wheel to scroll horizontally:
      if (e.deltaY !== 0 && e.shiftKey === false) {
        // Find if we are fully scrolled horizontally
        const isAtStart = el.scrollLeft <= 0 && e.deltaY < 0;
        const isAtEnd = Math.ceil(el.scrollLeft) >= el.scrollWidth - el.clientWidth && e.deltaY > 0;
        
        if (!isAtStart && !isAtEnd) {
          e.preventDefault();
          el.scrollBy({ left: e.deltaY * 3, behavior: 'smooth' });
        }
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const scrollToDot = (dotIndex) => {
    if (!scrollRef.current) return;
    const { scrollWidth, clientWidth } = scrollRef.current;
    
    if (scrollWidth > clientWidth) {
      const maxScroll = scrollWidth - clientWidth;
      // dotIndex: 0 => 0%, 1 => 50%, 2 => 100%
      const targetScroll = (maxScroll * (dotIndex / 2));
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      setActiveIndex(dotIndex);
    }
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <ScrollReveal direction="up">
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
        </ScrollReveal>

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

        <div className="testimonials-indicators" style={{ position: 'relative', zIndex: 50 }}>
          {[0, 1, 2].map((dot) => {
            return (
              <button 
                key={dot} 
                className={`testimonial-dot ${activeIndex === dot ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToDot(dot);
                }}
                aria-label={`Go to slide ${dot + 1}`}
                style={{ border: 'none', padding: 0 }}
              ></button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
