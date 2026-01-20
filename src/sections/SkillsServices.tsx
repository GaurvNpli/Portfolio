import './SkillsServices.css'

interface Technology {
    name: string
    icon: string  // devicon class name
}

interface Service {
    title: string
    description: string
}

const technologies: Technology[] = [
    // Development
    { name: 'Flutter', icon: 'devicon-flutter-plain' },
    { name: 'Dart', icon: 'devicon-dart-plain' },
    { name: 'Postman', icon: 'devicon-postman-plain' },
    { name: 'Selenium', icon: 'devicon-selenium-original' },
    { name: 'React', icon: 'devicon-react-original' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    { name: 'Firebase', icon: 'devicon-firebase-plain' },
]

const services: Service[] = [
    {
        title: 'QA Engineering',
        description: 'Manual & automation testing for reliable, bug-free software',
    },
    {
        title: 'App Development',
        description: 'Native-quality Android & iOS apps with Flutter',
    },
    {
        title: 'Web Development',
        description: 'Fully responsive, modern web applications',
    },
    {
        title: 'Test Automation',
        description: 'Automated testing pipelines with Selenium, Cypress & Jest',
    },
    {
        title: 'UI/UX Design',
        description: 'User-centered interface and experience design',
    },
    {
        title: 'API Testing',
        description: 'Thorough API validation with Postman & automated scripts',
    },
]

// Service icons as SVG components matching the theme
const ServiceIcon = ({ type }: { type: string }) => {
    const icons: Record<string, React.ReactNode> = {
        'QA Engineering': (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12l2 2 4-4" />
                <path d="M12 3a9 9 0 109 9 4.5 4.5 0 00-4.5-4.5" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        ),
        'App Development': (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        'Web Development': (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        'Test Automation': (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.77 3.77z" />
            </svg>
        ),
        'UI/UX Design': (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
            </svg>
        ),
        'API Testing': (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 14.66V20a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h5.34" />
                <polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
            </svg>
        ),
    }
    return icons[type] || null
}

const SkillsServices = () => {
    return (
        <section id="skills" className="skills-services">
            <div className="container">
                <div className="section-header scroll-animate-trigger">
                    <h2 className="section-title">Skills & Services</h2>
                    <p className="section-subtitle">Technologies I work with and services I provide</p>
                </div>

                {/* Technologies */}
                <div className="skills-section">
                    <h3 className="subsection-title">Technologies</h3>
                    <div className="tech-grid">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="tech-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <i className={`tech-icon ${tech.icon}`}></i>
                                <span className="tech-name">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Services */}
                <div className="services-section">
                    <h3 className="subsection-title">Services</h3>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="service-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="service-icon">
                                    <ServiceIcon type={service.title} />
                                </div>
                                <h4 className="service-title">{service.title}</h4>
                                <p className="service-description">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillsServices
