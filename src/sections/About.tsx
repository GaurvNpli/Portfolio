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
                            I'm a <span className="highlight">Flutter Developer</span> based in Nepal,
                            with a focus on crafting beautiful, performant digital experiences.
                        </p>
                        <p className="about-paragraph">
                            I specialize in <span className="highlight">Flutter</span> for cross-platform mobile development
                            and the <span className="highlight">MERN stack</span> for full-stack web applications. I believe
                            in clean code, thoughtful architecture, and the power of continuous learning.
                        </p>

                        <p className="about-paragraph">
                            I enjoy tackling complex problems and turning them into simple, elegant solutions.
                            My goal is to build apps & sites that not only works flawlessly but also provides an exceptional user experience.
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
