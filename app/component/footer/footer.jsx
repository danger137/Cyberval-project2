import "./footer.css"

export default function Footer() {
    return (
        <footer className="footer">

            {/* Main Footer Section (White Background) */}
            <div className="footer-main-wrapper">
                {/* Large Watermark Background Text */}
                <div className="footer-watermark">Cybervol</div>

                <div className="footer-container">
                    {/* CTA Banner Card Inside footer */}
                    <div className="footer-cta-banner">
                        <div className="footer-cta-content">
                            <h2 className="footer-cta-title">Ready to Secure Your Business?</h2>
                            <p className="footer-cta-desc">
                                Protect your digital assets with expert-driven cybersecurity solutions tailored to your needs.
                            </p>
                        </div>
                        <button className="footer-cta-btn">Talk to Our Experts</button>
                    </div>

                    {/* 4-Column Footer Links */}
                    <div className="footer-content">
                        {/* Company Branding Column */}
                        <div className="footer-col branding">
                            <div className="footer-logo">
                                <img src="/images/footer/icons-logo/logo.svg" alt="Cybervol Logo" />
                            </div>
                            <p className="branding-tagline">
                                Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.
                            </p>
                            <div className="social-links">
                                <a href="#" aria-label="Facebook" className="soc-link">
                                    <img src="/images/footer/icons-logo/icon-1.svg" alt="" />
                                </a>
                                <a href="#" aria-label="Instagram" className="soc-link">
                                    <img src="/images/footer/icons-logo/icon-2.svg" alt="" />
                                </a>
                                <a href="#" aria-label="X / Twitter" className="soc-link">
                                    <img src="/images/footer/icons-logo/icon-3.svg" alt="" />
                                </a>
                                <a href="#" aria-label="LinkedIn" className="soc-link">
                                    <img src="/images/footer/icons-logo/icon-4.svg" alt="" />
                                </a>
                            </div>
                        </div>

                        {/* Company Links Column */}
                        <div className="footer-col">
                            <h3 className="footer-heading">Company</h3>
                            <ul className="footer-links">
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Career</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Webinars</a></li>
                                <li><a href="#">eBooks</a></li>
                                <li><a href="#">Data sheets</a></li>
                            </ul>
                        </div>

                        {/* Services Links Column */}
                        <div className="footer-col">
                            <h3 className="footer-heading">Services</h3>
                            <ul className="footer-links">
                                <li><a href="#">CyberShield Solutions</a></li>
                                <li><a href="#">Governance, Risk & Compliance (GRC)</a></li>
                                <li><a href="#">Offensive Security</a></li>
                                <li><a href="#">Security Awareness & Training</a></li>
                                <li><a href="#">Managed Cybersecurity as a Service (MCaaS)</a></li>
                                <li><a href="#">Training and Certifications</a></li>
                            </ul>
                        </div>

                        {/* Contact Column */}
                        <div className="footer-col contact">
                            <h3 className="footer-heading">Contact Us</h3>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <span className="contact-icon">
                                        <img src="/images/footer/icons-logo/icon-5.svg" alt="" />
                                    </span>
                                    <div className="contact-text">
                                        <p>+1 (469) 488-3005</p>
                                        <p>+234 9137002111</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <span className="contact-icon">
                                        <img src="/images/footer/icons-logo/icon-6.svg" alt="" />
                                    </span>
                                    <p>info@cybervol.com</p>
                                </div>
                                <div className="contact-item address">
                                    <div className="contact-text">
                                        <p className="office-title">Dallas HQ: 1341 W. Mockingbird Lane,</p>
                                        <p>Suite 600W, Dallas, Texas 75247, USA.</p>
                                    </div>
                                </div>
                                <div className="contact-item address">
                                    <div className="contact-text">
                                        <p className="office-title">Lagos Office: 232 Murtala Muhammed Way,</p>
                                        <p>Yaba Lagos 101245 Nigeria.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom Bar */}
                    <div className="footer-bottom">
                        <p>© 2025 Cybervol. All rights reserved.</p>
                        <div className="footer-bottom-links">
                            <a href="#">Privacy Policy</a>
                            <span className="separator">|</span>
                            <a href="#">Terms & conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
