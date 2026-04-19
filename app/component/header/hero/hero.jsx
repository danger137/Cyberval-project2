import "./hero.css"

export default function Hero() {
    return(
        <section className="hero">
            <div className="hero-background-effects">
                <div className="light-beam"></div>
            </div>
            
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-pill-wrapper">
                        <span className="hero-pill">TRANSFORMING RISK INTO RESILIENT GROWTH</span>
                    </div>
                    
                    <h1 className="hero-title">
                        Cybersecurity & Risk <br />
                        Transformation Strategy Company
                    </h1>
                    
                    <p className="hero-description">
                        Welcome to Cybervol, where expertise drives innovation and <br />
                        efficiency. We provide tailored solutions to protect your digital <br />
                        assets and boost security.
                    </p>
                    
                    <div className="hero-actions">
                        <button className="primary-btn">Schedule a Free Consultation</button>
                        <button className="secondary-btn">Learn More</button>
                    </div>
                </div>
                
                <div className="hero-image">
                    <img src="/images/header-items/hero/earth.png" alt="Earth Globe" />
                </div>
            </div>

            <div className="hero-partners">
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
    )
}