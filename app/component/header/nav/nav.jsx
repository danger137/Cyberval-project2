"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import "./nav.css"

export default function Nav() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    const closeAll = () => {
        setIsMenuOpen(false);
        setActiveDropdown(null);
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
            if (isMenuOpen || activeDropdown) {
                closeAll();
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMenuOpen, activeDropdown]);

    useEffect(() => {
        closeAll();
    }, [pathname]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) {
            setActiveDropdown(null); 
        }
    };

    const toggleDropdown = (e, name) => {
        e.preventDefault();
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    const isBlogDetail = pathname.startsWith("/resources/Blog/") && pathname !== "/resources/Blog";
    const isServiceOrResource = pathname.startsWith("/services/") || pathname.startsWith("/resources/");

    const isActive = (path) => pathname === path;

    return (
        <nav className={`nav ${isMenuOpen ? 'mobile-nav-active' : ''} ${isBlogDetail ? 'blog-detail-nav' : ''} ${scrolled ? 'nav-scrolled' : ''}`}>
            <div className="nav-container max-[1024px]:max-w-[440px] max-[1024px]:mx-auto">
                <div className="logo">
                    <img src={isBlogDetail ? "/images/header-items/nav/Group 1.svg" : "/images/header-items/header-logo.svg"} alt="Cybervol" />
                    {!isBlogDetail && (
                        <div className="logo-text">
                            <span className="brand-name">Cybervol</span>
                            <span className="tagline">by Rotvol Solutions</span>
                        </div>
                    )}
                </div>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    {/* Mobile Header - Logo and Close Icon */}
                    <div className="mobile-menu-header">
                        <div className="logo">
                            <img src="/images/header-items/nav/Group 1.svg" alt="Cybervol" className="mobile-logo-img-full" />
                        </div>
                        <div className="close-menu-icon" onClick={closeAll}>
                            <img src="/images/header-items/nav/Vector.svg" alt="Close" />
                        </div>
                    </div>

                    <li><Link href="/" className={isActive('/') ? 'active' : ''} onClick={closeAll}>Home</Link></li>
                    <li><Link href="/About2" className={isActive('/About2') ? 'active' : ''} onClick={closeAll}>About us</Link></li>
                    <li className={`dropdown ${activeDropdown === 'services' ? 'open' : ''} ${pathname.startsWith('/services') ? 'active' : ''}`}>
                        <div className="dropdown-trigger" tabIndex="0" onClick={(e) => toggleDropdown(e, 'services')}>
                            Services <img src="/images/header-items/nav/dropdown-menu-icon.svg" alt="" className="arrow mobile-arrow" />
                        </div>
                        <div className="mega-menu">
                            {/* Mobile Simple List */}
                            <div className="mobile-dropdown-content">
                                <Link href="/services/service-1" onClick={closeAll}>CyberShield Solutions</Link>
                                <Link href="/services/service-2" onClick={closeAll}>Governance, Risk & Compliance (GRC)</Link>
                                <Link href="/services/service-3" onClick={closeAll}>Offensive Security</Link>
                                <Link href="/services/service-4" onClick={closeAll}>Security Awareness & Training</Link>
                                <Link href="/services/service-5" onClick={closeAll}>Managed Cybersecurity as a Service (MCaaS)</Link>
                                <Link href="/services/service-6" onClick={closeAll}>Training and Certifications</Link>
                            </div>
                            
                            {/* Desktop Mega Menu content */}
                            <div className="mega-left desktop-only">
                                <p className="mega-heading">OUR SERVICES</p>
                                <div className="mega-grid">
                                    <Link href="/services/service-1" className="mega-item" onClick={closeAll}>
                                        <div className="mega-icon">
                                            <img src="/images/header-items/services-icons/service-menu-icon-1.svg" alt="" />
                                        </div>
                                        <div className="mega-item-text">
                                            <h4>CyberShield Solutions</h4>
                                        </div>
                                    </Link>
                                    <Link href="/services/service-4" className="mega-item" onClick={closeAll}>
                                        <div className="mega-icon">
                                            <img src="/images/header-items/services-icons/service-menu-icon-2.svg" alt="" />
                                        </div>
                                        <div className="mega-item-text">
                                            <h4>Security Awareness & Training</h4>
                                        </div>
                                    </Link>
                                    <Link href="/services/service-2" className="mega-item" onClick={closeAll}>
                                        <div className="mega-icon">
                                            <img src="/images/header-items/services-icons/service-menu-icon-3.svg" alt="" />
                                        </div>
                                        <div className="mega-item-text">
                                            <h4>Governance, Risk & Compliance (GRC)</h4>
                                        </div>
                                    </Link>
                                    <Link href="/services/service-5" className="mega-item" onClick={closeAll}>
                                        <div className="mega-icon">
                                            <img src="/images/header-items/services-icons/service-menu-icon-4.svg" alt="" />
                                        </div>
                                        <div className="mega-item-text">
                                            <h4>Managed Cybersecurity as a Service (MCaaS)</h4>
                                        </div>
                                    </Link>
                                    <Link href="/services/service-3" className="mega-item" onClick={closeAll}>
                                        <div className="mega-icon">
                                            <img src="/images/header-items/services-icons/service-menu-icon-5.svg" alt="" />
                                        </div>
                                        <div className="mega-item-text">
                                            <h4>Offensive Security</h4>
                                        </div>
                                    </Link>
                                    <Link href="/services/service-6" className="mega-item" onClick={closeAll}>
                                        <div className="mega-icon">
                                            <img src="/images/header-items/services-icons/service-menu-icon-6.svg" alt="" />
                                        </div>
                                        <div className="mega-item-text">
                                            <h4>Training and Certifications</h4>
                                        </div>
                                    </Link>
                                </div>
                                <div className="mega-footer">
                                    <div className="mega-footer-text">
                                        <h2>Contact Us Today</h2>
                                        <p>Ready to strengthen your cybersecurity posture? <br /> Get in touch and we'll help you find the right solution.</p>
                                    </div>
                                    <Link href="/Contact" onClick={closeAll}>
                                        <button className="mega-contact-btn">Contact Us</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="mega-right desktop-only">
                                <img src="/images/header-items/services-icons/nav-card-1.jpg" alt="" className="services-img" />
                                <h3 className="services-title">Strengthen Your Cyber Resilience</h3>
                                <ul className="services-bullets">
                                    <li>Protection Against Evolving Threats</li>
                                    <li>Scalable & Tailored Solutions</li>
                                    <li>Expert-Led Security Guidance</li>
                                </ul>
                                <Link href="/Contact" onClick={closeAll}>
                                    <button className="talk-btn">Talk to Experts</button>
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className={`dropdown ${activeDropdown === 'resources' ? 'open' : ''} ${pathname.startsWith('/resources') ? 'active' : ''}`}>
                        <div className="dropdown-trigger" tabIndex="0" onClick={(e) => toggleDropdown(e, 'resources')}>
                            Resources <img src="/images/header-items/nav/dropdown-menu-icon.svg" alt="" className="arrow mobile-arrow" />
                        </div>
                        <div className="mega-menu resources-menu">
                            <div className="mobile-dropdown-content">
                                <Link href="/resources/Blog" onClick={closeAll}>Blogs</Link>
                                <Link href="/resources/Webinars" onClick={closeAll}>Webinar</Link>
                                <Link href="/resources/Ebooks" onClick={closeAll}>Ebooks</Link>
                                <Link href="/resources/DataSheet" onClick={closeAll}>Data Sheets</Link>
                            </div>

                            <div className="mega-left desktop-only">
                                <p className="mega-heading">RESOURCES</p>
                                <div className="mega-grid resources-grid">
                                    <Link href="/resources/Blog" className="mega-item resource-item" onClick={closeAll}>
                                        <div className="mega-icon">
                                            <img src="/images/header-items/resources-icons/icon-1.svg" alt="Blogs" />
                                        </div>
                                        <div className="mega-item-text">
                                            <h4>Blogs</h4>
                                            <p>Browse our latest blog content and open each item to read the full detail page.</p>
                                        </div>
                                    </Link>
                                    <Link href="/resources/Ebooks" className="mega-item resource-item" onClick={closeAll}>
                                        <div className="mega-icon">
                                            <img src="/images/header-items/resources-icons/icon-2.svg" alt="Ebooks" />
                                        </div>
                                        <div className="mega-item-text">
                                            <h4>Ebooks</h4>
                                            <p>Browse our latest Ebook content and open each item to read the full detail page.</p>
                                        </div>
                                    </Link>
                                    <Link href="/resources/Webinars" className="mega-item resource-item" onClick={closeAll}>
                                        <div className="mega-icon">
                                            <img src="/images/header-items/resources-icons/icon-3.svg" alt="Webinar" />
                                        </div>
                                        <div className="mega-item-text">
                                            <h4>Webinar</h4>
                                            <p>Browse our latest webinar content and open each item to read the full detail page.</p>
                                        </div>
                                    </Link>
                                    <Link href="/resources/DataSheet" className="mega-item resource-item" onClick={closeAll}>
                                        <div className="mega-icon">
                                            <img src="/images/header-items/resources-icons/icon-4.svg" alt="Data Sheets" />
                                        </div>
                                        <div className="mega-item-text">
                                            <h4>Data Sheets</h4>
                                            <p>Browse our latest Datasheets content and open each item to read the full detail page.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="mega-footer">
                                    <div className="mega-footer-text">
                                        <h2>Contact Us Today</h2>
                                        <p>Ready to strengthen your cybersecurity posture? <br /> Get in touch and we'll help you find the right solution.</p>
                                    </div>
                                    <Link href="/Contact" onClick={closeAll}>
                                        <button className="mega-contact-btn">Contact Us</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="mega-right desktop-only">
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
                    
                    {/* Mobile Footer - Contact Button */}
                    <div className="mobile-menu-footer">
                        <Link href="/Contact" onClick={closeAll} className="mobile-contact-btn-link">
                            <button className="mobile-contact-btn">Contact us</button>
                        </Link>
                    </div>
                </ul>

                <div className="nav-right">
                    <div className="nav-cta">
                        <Link href="/Contact" onClick={closeAll}>
                            <button className="contact-btn">Contact us</button>
                        </Link>
                    </div>
                    <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    );
}
