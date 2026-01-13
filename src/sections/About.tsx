import './About.css'

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                {/* Widget Label */}
                <div className="inspector-label">
                    <span>Widget: Bio</span>
                </div>

                <div className="about-widget">
                    {/* Widget Header */}
                    <div className="widget-header">
                        <span className="widget-bracket">&lt;</span>
                        <span className="widget-tag">Bio</span>
                        <span className="widget-bracket">&gt;</span>
                    </div>

                    {/* Content */}
                    <div className="about-content">
                        <div className="about-text">
                            <p className="about-intro">
                                <span className="code-comment">// Who am I?</span>
                            </p>
                            <h2 className="about-title">
                                I craft <span className="highlight">pixel-perfect</span> mobile
                                experiences with <span className="highlight">Flutter</span>
                            </h2>
                            <p className="about-description">
                                A passionate developer focused on building beautiful,
                                performant applications. I believe in clean code,
                                thoughtful architecture, and creating delightful user experiences.
                            </p>

                            {/* Stats */}
                            <div className="about-stats">
                                <div className="stat">
                                    <span className="stat-value">3+</span>
                                    <span className="stat-label">Years Experience</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-value">15+</span>
                                    <span className="stat-label">Projects Built</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-value">100%</span>
                                    <span className="stat-label">Passion</span>
                                </div>
                            </div>
                        </div>

                        {/* Code-style Info */}
                        <div className="about-code">
                            <div className="code-block">
                                <span className="code-line">
                                    <span className="code-keyword">class</span>{' '}
                                    <span className="code-class">Developer</span> {'{'}
                                </span>
                                <span className="code-line indent">
                                    <span className="code-prop">name</span>:{' '}
                                    <span className="code-string">'Your Name'</span>,
                                </span>
                                <span className="code-line indent">
                                    <span className="code-prop">role</span>:{' '}
                                    <span className="code-string">'Flutter Developer'</span>,
                                </span>
                                <span className="code-line indent">
                                    <span className="code-prop">location</span>:{' '}
                                    <span className="code-string">'Remote'</span>,
                                </span>
                                <span className="code-line indent">
                                    <span className="code-prop">skills</span>: [
                                </span>
                                <span className="code-line indent-2">
                                    <span className="code-string">'Flutter'</span>,{' '}
                                    <span className="code-string">'Dart'</span>,
                                </span>
                                <span className="code-line indent-2">
                                    <span className="code-string">'Firebase'</span>,{' '}
                                    <span className="code-string">'Clean Architecture'</span>,
                                </span>
                                <span className="code-line indent">],</span>
                                <span className="code-line">{'}'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Widget Footer */}
                    <div className="widget-footer">
                        <span className="widget-bracket">&lt;/</span>
                        <span className="widget-tag">Bio</span>
                        <span className="widget-bracket">&gt;</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
