import "./hero.css";

export default function Hero() {
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
                            <button className="home-hero-primary-btn">Schedule a Free Consultation</button>
                            <button className="home-hero-secondary-btn">Learn More</button>
                        </div>
                    </div>
                </div>

                <div className="home-hero-image anim-globe">
                    <img src="/globe.GIF" alt="Earth Globe" className="anim-float" />
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
        </div>
    );
}
