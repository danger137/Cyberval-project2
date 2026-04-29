"use client";

import { useState, useRef, useEffect } from 'react';
import ScrollReveal from '../ScrollReveal';
import Link from 'next/link';
import './Insights.css';

const insightsData = [
  {
    id: 1,
    date: "Jan 10, 2024",
    title: "Top Cybersecurity Trends Every Business Should Know in 2024",
    image: "/images/pages/news-insights/image-1.jpg",
    link: "/resources/Blog/1"
  },
  {
    id: 2,
    date: "Jan 10, 2024",
    title: "Top Cybersecurity Trends Every Business Should Know in 2024",
    image: "/images/pages/news-insights/image-2.jpg",
    link: "/resources/Blog/2"
  },
  {
    id: 3,
    date: "Jan 10, 2024",
    title: "The Future of Cloud Security: Best Practices for Organizations",
    image: "/images/pages/news-insights/image 3.jpg",
    link: "/resources/Blog/3"
  },
  {
    id: 4,
    date: "Feb 05, 2024",
    title: "Protecting Your Assets: A Guide to Modern Data Encryption",
    image: "/images/pages/news-insights/image-1.jpg",
    link: "/resources/Blog/4"
  },
  {
    id: 5,
    date: "Feb 12, 2024",
    title: "Zero Trust Architecture: Why Your Network Needs a New Approach",
    image: "/images/pages/news-insights/image-2.jpg",
    link: "/resources/Blog/5"
  },
  {
    id: 6,
    date: "Mar 01, 2024",
    title: "The Role of AI in Proactive Threat Detection and Response",
    image: "/images/pages/news-insights/image 3.jpg",
    link: "/resources/Blog/6"
  }
];

export default function Insights() {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);

  const checkScrollable = () => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      setIsScrollable(scrollWidth > clientWidth + 1);
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

  return (
    <section className="insights-section">
      <div className="insights-container">
        <ScrollReveal direction="up">
          <div className="insights-header">
            <div className="insights-header-left">
              <span className="insights-badge">NEWS & INSIGHTS</span>
              <h2 className="insights-title">
                Stay Ahead with <span className="highlight">Expert Guidance</span>
              </h2>
            </div>
            <div className="insights-header-right">
              <Link href="/resources/Blog"><button className="view-all-btn">View all news</button></Link>
            </div>
          </div>
        </ScrollReveal>

        <div className="insights-slider-viewport">
          <div 
            className="insights-grid"
            ref={scrollRef}
            onScroll={handleScroll}
          >
            {insightsData.map((item) => (
              <div key={item.id} className="insight-card-wrapper">
                <div className="insight-card">
                  <div className="insight-image-wrapper">
                    <img src={item.image} alt={item.title} className="insight-image" />
                  </div>
                  <div className="insight-content">
                    <span className="insight-date">{item.date}</span>
                    <h3 className="insight-card-title">{item.title}</h3>
                    <Link href={item.link} className="read-more-link">
                      Read More
                      <img src="/images/pages/news-insights/icon.svg" alt="Arrow" className="read-more-icon" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="insights-dots">
          <div className="slider-indicator-bar">
            {[0, 1, 2].map((i) => {
              // Map progress to 3 tabs
              const isActive = 
                (i === 0 && scrollProgress < 33) ||
                (i === 1 && scrollProgress >= 33 && scrollProgress < 66) ||
                (i === 2 && scrollProgress >= 66);

              return (
                <div 
                  key={i} 
                  className={`indicator-segment ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    if (scrollRef.current) {
                      const { scrollWidth, clientWidth } = scrollRef.current;
                      const maxScroll = scrollWidth - clientWidth;
                      scrollRef.current.scrollTo({
                        left: (i / 2) * maxScroll,
                        behavior: 'smooth'
                      });
                    }
                  }}
                ></div>
              );
            })}
          </div>
        </div>


      </div>
    </section>
  );
}
