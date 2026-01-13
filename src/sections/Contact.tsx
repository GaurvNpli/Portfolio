import { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert('Message sent! (Demo)')
    }

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Get in Touch</h2>
                <p className="section-subtitle">
                    Have a project in mind? Let's work together.
                </p>

                <div className="contact-container">
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
                            <a href="mailto:gauravnepal5157@gmail.com" className="info-link">
                                <span className="link-icon">✉</span>
                                gauravnepal5157@gmail.com
                            </a>
                            <a href="https://github.com/GaurvNpli" target="_blank" rel="noopener" className="info-link">
                                <span className="link-icon">⌘</span>
                                github.com/GauravNpli
                            </a>
                            <a href="https://www.linkedin.com/in/gauravnepali/" target="_blank" rel="noopener" className="info-link">
                                <span className="link-icon">◉</span>
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
