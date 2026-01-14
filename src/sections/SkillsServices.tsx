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
    { name: 'Flutter', icon: 'devicon-flutter-plain' },
    { name: 'Dart', icon: 'devicon-dart-plain' },
    { name: 'React', icon: 'devicon-react-original' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    { name: 'Express', icon: 'devicon-express-original' },
    { name: 'Firebase', icon: 'devicon-firebase-plain' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain' },
]

const services: Service[] = [
    {
        title: 'App Development',
        description: 'Native-quality Android & iOS apps with Flutter',
    },
    {
        title: 'Web Development',
        description: 'Fully responsive, modern web applications',
    },
    {
        title: 'Web Design',
        description: 'Beautiful, intuitive website designs',
    },
    {
        title: 'UI/UX Design',
        description: 'User-centered interface and experience design',
    },
    {
        title: 'Creative Solutions',
        description: 'Innovative approaches to complex problems',
    },
    {
        title: 'API Development',
        description: 'Robust backend APIs and integrations',
    },
]

// Service icons as SVG components matching the theme
const ServiceIcon = ({ type }: { type: string }) => {
    const icons: Record<string, React.ReactNode> = {
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
        'Web Design': (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
            </svg>
        ),
        'UI/UX Design': (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
            </svg>
        ),
        'Creative Solutions': (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        'API Development': (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
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
