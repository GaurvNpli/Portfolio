import './Hero.css'

const Hero = () => {
    return (
        <section id="hero" className="hero">
            {/* Subtle Particle Grid */}
            <div className="particle-grid" aria-hidden="true">
                {Array.from({ length: 30 }).map((_, i) => (
                    <span
                        key={i}
                        className="particle"
                        style={{
                            '--delay': `${(i % 6) * 0.4}s`,
                            '--x': `${8 + (i % 10) * 9}%`,
                            '--y': `${8 + Math.floor(i / 10) * 28}%`,
                        } as React.CSSProperties}
                    />
                ))}
            </div>

            <div className="hero-content">
                {/* Simple Greeting */}
                <span className="hero-greeting">Hi, I'm</span>

                {/* Name */}
                <h1 className="hero-name">Gaurav Nepali</h1>

                {/* Role */}
                <p className="hero-role">
                    Developer building <span className="highlight">beautiful</span> mobile and web experiences
                </p>

                {/* Brief Bio */}
                <p className="hero-bio">
                    I build seamless digital experiences across every screen. Whether it's a high-fidelity mobile app built with Flutter or a dynamic web application powered by React and Node.js, I focus on clean code, architectural integrity, and user-centric design.
                </p>

                {/* Skills */}
                <div className="hero-skills">
                    <span className="skill-tag primary">Flutter</span>
                    <span className="skill-tag primary">Dart</span>
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">MongoDB</span>
                    <span className="skill-tag">Express</span>
                </div>

                {/* Quick Stats */}
                <div className="hero-stats">
                    <div className="stat">
                        <span className="stat-value">1.5+</span>
                        <span className="stat-label">Years</span>
                    </div>
                    <div className="stat">
                        <span className="stat-value">10+</span>
                        <span className="stat-label">Projects</span>
                    </div>
                </div>

                {/* CTA */}
                <div className="hero-actions">
                    <a href="#projects" className="btn-primary">View Projects</a>
                    <a href="#contact" className="btn-secondary">Contact Me</a>
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
