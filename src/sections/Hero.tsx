import PhoneMockup from '../components/PhoneMockup'
import './Hero.css'

const Hero = () => {
    return (
        <section id="hero" className="hero">
            {/* Floating Particles */}
            <div className="particle-grid" aria-hidden="true">
                {Array.from({ length: 6 }).map((_, i) => (
                    <span
                        key={i}
                        className={`particle particle-${i + 1}`}
                    />
                ))}
            </div>

            <div className="hero-container">
                <div className="hero-layout">
                    {/* Text Content */}
                    <div className="hero-content">
                        {/* Simple Greeting */}
                        <span className="hero-greeting">Hi, I'm</span>

                        {/* Name */}
                        <h1 className="hero-name">Gaurav Nepali</h1>

                        {/* Role */}
                        <p className="hero-role">
                            <span className="highlight">Front-end Developer</span> crafting <span className="highlight">beautiful, responsive</span> web experiences with expertise in mobile & QA
                        </p>

                        {/* CTA */}
                        <div className="hero-actions">
                            <a href="#projects" className="btn-primary">View Projects</a>
                            <a href="#contact" className="btn-secondary">Contact Me</a>
                        </div>
                    </div>

                    {/* Phone Mockup */}
                    <div className="hero-phone">
                        <PhoneMockup />
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <span className="scroll-text">scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    )
}

export default Hero
