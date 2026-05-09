"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import "./hero.css";

const InlineWidget = dynamic(
    () => import("react-calendly").then((mod) => mod.InlineWidget),
    { ssr: false }
);

export default function Hero() {
    const [isOpen, setIsOpen] = useState(false);
    const [rootElement, setRootElement] = useState(null);

    useEffect(() => {
        // Find a suitable root element for the modal
        setRootElement(document.getElementById("__next") || document.body);
    }, []);

    return (
        <div className="hero-with-nav-wrapper">
            <section className="home-hero">
                <div className="home-hero-bg-overlay"></div>

                <div className="home-hero-container">
                    <div className="home-hero-content">
                        <div className="home-hero-pill-wrapper anim-pill">
                            <span className="home-hero-pill">TRANSFORMING RISK INTO RESILIENT GROWTH</span>
                        </div>

                        <h1 className="home-hero-title anim-title">
                            Cybersecurity & Risk Transformation Strategy Company
                        </h1>

                        <p className="home-hero-description anim-desc">
                            Welcome to Cybervol, where expertise drives innovation and
                            efficiency. We provide tailored solutions to protect your digital
                            assets and boost security.
                        </p>

                        <div className="home-hero-actions anim-actions">
                            <button 
                                className="home-hero-primary-btn"
                                onClick={() => setIsOpen(true)}
                            >
                                Schedule a Free Consultation
                            </button>
                            <Link href="/About2" className="home-hero-secondary-btn">
                                Learn More
                            </Link>
                        </div>
                    </div>

                    <div className="home-hero-image anim-globe">
                        <img src="/globe.GIF" alt="Earth Globe" className="anim-float" />
                    </div>
                </div>

                <div className="hero-partners anim-partner">
                    <p className="partners-title">Technology Partners</p>
                    <div className="partners-slider-container">
                        <div className="partners-slider">
                            <img src="/images/header-items/hero/Property 1=Frame 1171275531.png" alt="Partners" />
                            <img src="/images/header-items/hero/Property 1=Frame 35.png" alt="Partners" />
                            <img src="/images/header-items/hero/Property 1=Frame 1171275531.png" alt="Partners" />
                            <img src="/images/header-items/hero/Property 1=Frame 35.png" alt="Partners" />
                        </div>
                    </div>
                </div>
            </section>
            
            {isOpen && (
                <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6">
                    {/* Dark Glassmorphism Overlay */}
                    <div 
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"
                        onClick={() => setIsOpen(false)}
                    ></div>
                    
                    {/* Modal Content */}
                    <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10" style={{ height: '85vh', maxHeight: '750px' }}>
                        {/* Close Button */}
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 z-20 p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition-all duration-200 shadow-sm"
                            aria-label="Close modal"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                        {/* Calendly Widget */}
                        <div className="flex-1 w-full h-full relative">
                            <InlineWidget 
                                url="https://calendly.com/cybervol-sales/30min"
                                styles={{ height: '100%', width: '100%' }}
                                pageSettings={{
                                    backgroundColor: 'ffffff',
                                    hideEventTypeDetails: false,
                                    hideLandingPageDetails: false,
                                    primaryColor: '00a2ff',
                                    textColor: '4d5055'
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
