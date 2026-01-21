import developerAvatar from '../assets/developer-avatar.png'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './About.css'

const About = () => {
    const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
    const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 })

    return (
        <section id="about" className="about">
            <div className="container">
                <div
                    ref={sectionRef}
                    className={`scroll-animate ${sectionVisible ? 'visible' : ''}`}
                >
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">Get to know me better</p>
                </div>

                <div className="about-content">
                    <div
                        className={`about-text scroll-animate-left ${sectionVisible ? 'visible' : ''}`}
                        style={{ transitionDelay: '0.2s' }}
                    >
                        <p className="about-intro">
                            I'm a <span className="highlight">Front-end Developer</span> based in Nepal,
                            passionate about crafting beautiful and performant web experiences.
                        </p>
                        <p className="about-paragraph">
                            I specialize in building <span className="highlight">modern web applications</span> with React, TypeScript, and Next.js.
                            I also bring experience in <span className="highlight">Flutter</span> for cross-platform mobile development
                            and <span className="highlight">QA Engineering</span> to ensure everything works flawlessly.
                        </p>

                        <p className="about-paragraph">
                            I believe in clean code, pixel-perfect designs, and delivering exceptional user experiences.
                            My diverse background in testing helps me build robust, bug-free applications from the start.
                        </p>
                    </div>

                    {/* Developer Avatar */}
                    <div
                        ref={imageRef}
                        className={`about-illustration scroll-animate-right ${imageVisible ? 'visible' : ''}`}
                    >
                        <img
                            src={developerAvatar}
                            alt="Developer working at computer"
                            className="developer-avatar"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
