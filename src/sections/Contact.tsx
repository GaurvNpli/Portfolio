import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const { ref: sectionRef, isVisible } = useScrollAnimation()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert('Message sent! (Demo)')
    }

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div
                    ref={sectionRef}
                    className={`scroll-animate ${isVisible ? 'visible' : ''}`}
                >
                    <h2 className="section-title">Get in Touch</h2>
                    <p className="section-subtitle">
                        Have a project in mind? Let's work together.
                    </p>
                </div>

                <div className={`contact-container scroll-animate ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-field">
                            <label className="field-label">Name</label>
                            <input
                                type="text"
                                className="field-input"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>

                        <div className="form-field">
                            <label className="field-label">Email</label>
                            <input
                                type="email"
                                className="field-input"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>

                        <div className="form-field">
                            <label className="field-label">Message</label>
                            <textarea
                                className="field-input field-textarea"
                                placeholder="Tell me about your project..."
                                rows={5}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                            />
                        </div>

                        <button type="submit" className="submit-btn">
                            Send Message
                        </button>
                    </form>

                    <div className="contact-info">
                        <h3 className="info-title">Let's connect</h3>
                        <div className="info-links">
                            <a
                                href="mailto:gauravnepal5157@gmail.com"
                                className="info-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="link-icon">
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                </span>
                                gauravnepal5157@gmail.com
                            </a>
                            <a href="https://github.com/GaurvNpli" target="_blank" rel="noopener" className="info-link">
                                <span className="link-icon">
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                </span>
                                github.com/GauravNpli
                            </a>
                            <a href="https://www.linkedin.com/in/gauravnepali/" target="_blank" rel="noopener" className="info-link">
                                <span className="link-icon">
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </span>
                                linkedin.com/in/gauravnepali/
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
