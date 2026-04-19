"use client";
import Link from "next/link";
import { useState } from "react";
import "./nav.css"

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) {
            setActiveDropdown(null); 
        }
    };

    const toggleDropdown = (e, name) => {
      
        if (window.innerWidth <= 768) {
            e.preventDefault();
            setActiveDropdown(activeDropdown === name ? null : name);
        }
    };

    return (
        <nav className={`nav ${isMenuOpen ? 'mobile-nav-active' : ''}`}>
            <div className="nav-container">
                <div className="logo">
                    <img src="/images/header-items/header-logo.svg" alt="Cybervol" />
                    <div className="logo-text">
                        <span className="brand-name">Cybervol</span>
                        <span className="tagline">by Rotvol Solutions</span>
                    </div>
                </div>

                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><Link href="/" className="active" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                    <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>About us</Link></li>
                    <li className={`dropdown ${activeDropdown === 'services' ? 'active' : ''}`}>
                        <Link href="/" onClick={(e) => toggleDropdown(e, 'services')}>Services <span className="arrow">▾</span></Link>
                        <div className="mega-menu">
                            <div className="mega-left">
                                <p className="mega-heading">OUR SERVICES</p>
                                <div className="mega-grid">
                                    <div className="mega-item">
                                        <div className="mega-icon">
                                            <img src="/images/header-items/services-icons/service-menu-icon-1.svg" alt="" />
                                        </div>
                                        <div className="mega-item-text">
                                            <h4>CyberShield Solutions</h4>
                                        </div>
                                    </div>
                                    <div className="mega-item">
                                        <div className="mega-icon">
                                            <img src="/images/header-items/services-icons/service-menu-icon-2.svg" alt="" />
                                        </div>
                                        <div className="mega-item-text">
                                            <h4>Security Awareness & Training</h4>
                                        </div>
                                    </div>
                                    <div className="mega-item">
                                        <div className="mega-icon">
                                            <img src="/images/header-items/services-icons/service-menu-icon-3.svg" alt="" />
                                        </div>
                                        <div className="mega-item-text">
                                            <h4>Governance, Risk & Compliance (GRC)</h4>
                                        </div>
                                    </div>
                                    <div className="mega-item">
                                        <div className="mega-icon">
                                            <img src="/images/header-items/services-icons/service-menu-icon-4.svg" alt="" />
                                        </div>
                                        <div className="mega-item-text">
                                            <h4>Managed Cybersecurity as a Service (MCaaS)</h4>
                                        </div>
                                    </div>
                                    <div className="mega-item">
                                        <div className="mega-icon">
                                            <img src="/images/header-items/services-icons/service-menu-icon-5.svg" alt="" />
                                        </div>
                                        <div className="mega-item-text">
                                            <h4>Offensive Security</h4>
                                        </div>
                                    </div>
                                    <div className="mega-item">
                                        <div className="mega-icon">
                                            <img src="/images/header-items/services-icons/service-menu-icon-6.svg" alt="" />
                                        </div>
                                        <div className="mega-item-text">
                                            <h4>Training and Certifications</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="mega-footer">
                                    <div className="mega-footer-text">
                                        <h2>Contact Us Today</h2>
                                        <p>Ready to strengthen your cybersecurity posture? <br /> Get in touch and we'll help you find the right solution.</p>
                                    </div>
                                    <button className="mega-contact-btn">Contact Us</button>
                                </div>
                            </div>
                            <div className="mega-right">
                                <img src="/images/header-items/services-icons/nav-card-1.jpg" alt="" className="services-img" />
                                <h3 className="services-title">Strengthen Your Cyber Resilience</h3>
                                <ul className="services-bullets">
                                    <li>Protection Against Evolving Threats</li>
                                    <li>Scalable & Tailored Solutions</li>
                                    <li>Expert-Led Security Guidance</li>
                                </ul>
                                <button className="talk-btn">Talk to Experts</button>
                            </div>
                        </div>
                    </li>
                    <li className={`dropdown ${activeDropdown === 'resources' ? 'active' : ''}`}>
                        <Link href="/" onClick={(e) => toggleDropdown(e, 'resources')}>Resources <span className="arrow">▾</span></Link>
                        <div className="mega-menu resources-menu">
                            <div className="mega-left">
                                <p className="mega-heading">RESOURCES</p>
                                <div className="mega-grid resources-grid">
                                    <div className="mega-item resource-item">
                                        <div className="mega-icon">
                                            <img src="/images/header-items/resources-icons/icon-1.svg" alt="Blogs" />
                                        </div>
                                        <div className="mega-item-text">
                                            <h4>Blogs</h4>
                                            <p>Browse our latest blog content and open each item to read the full detail page.</p>
                                        </div>
                                    </div>
                                    <div className="mega-item resource-item">
                                        <div className="mega-icon">
                                            <img src="/images/header-items/resources-icons/icon-2.svg" alt="Ebooks" />
                                        </div>
                                        <div className="mega-item-text">
                                            <h4>Ebooks</h4>
                                            <p>Browse our latest Ebook content and open each item to read the full detail page.</p>
                                        </div>
                                    </div>
                                    <div className="mega-item resource-item">
                                        <div className="mega-icon">
                                            <img src="/images/header-items/resources-icons/icon-3.svg" alt="Webinar" />
                                        </div>
                                        <div className="mega-item-text">
                                            <h4>Webinar</h4>
                                            <p>Browse our latest webinar content and open each item to read the full detail page.</p>
                                        </div>
                                    </div>
                                    <div className="mega-item resource-item">
                                        <div className="mega-icon">
                                            <img src="/images/header-items/resources-icons/icon-4.svg" alt="Data Sheets" />
                                        </div>
                                        <div className="mega-item-text">
                                            <h4>Data Sheets</h4>
                                            <p>Browse our latest Datasheets content and open each item to read the full detail page.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mega-footer">
                                    <div className="mega-footer-text">
                                        <h2>Contact Us Today</h2>
                                        <p>Ready to strengthen your cybersecurity posture? <br /> Get in touch and we'll help you find the right solution.</p>
                                    </div>
                                    <button className="mega-contact-btn">Contact Us</button>
                                </div>
                            </div>
                            <div className="mega-right">
                                <p className="mega-heading">UPCOMING WEBINAR</p>
                                <div className="webinar-card">
                                    <div className="webinar-img-wrapper">
                                        <img src="/images/header-items/resources-icons/card-image.jpg" alt="Webinar" className="webinar-img" />
                                    </div>
                                    <div className="webinar-content">
                                        <div className="webinar-meta">
                                            <span className="meta-item"><i className="date-icon">📅</i> Tue 16, 2026</span>
                                            <span className="meta-item"><i className="time-icon">🕒</i> 45 minutes</span>
                                        </div>
                                        <h3 className="webinar-title">Stay Ahead of Cyber Threats</h3>
                                        <p className="webinar-desc">Join our webinar for attack scenarios, prevention, and security best practices.</p>
                                        <div className="speaker-profile">
                                            <img src="/images/header-items/resources-icons/john-image.png" alt="John Smith" className="speaker-img" />
                                            <div className="speaker-info">
                                                <p className="speaker-name">John Smith</p>
                                                <p className="speaker-title">Chief Technology Officer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

                <div className="nav-cta">
                    <button className="contact-btn">Contact us</button>
                </div>
            </div>
        </nav>
    );
}
