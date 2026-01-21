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
    // Front-end (Primary)
    { name: 'React', icon: 'devicon-react-original' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'HTML5', icon: 'devicon-html5-plain' },
    { name: 'CSS3', icon: 'devicon-css3-plain' },
    { name: 'Next.js', icon: 'devicon-nextjs-plain' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain' },
    // Mobile & QA (Secondary)
    { name: 'Flutter', icon: 'devicon-flutter-plain' },
    { name: 'Selenium', icon: 'devicon-selenium-original' },
    { name: 'Postman', icon: 'devicon-postman-plain' },
]

const services: Service[] = [
    {
        title: 'Web Development',
        description: 'Fully responsive, modern web applications with React & Next.js',
    },
    {
        title: 'UI/UX Design',
        description: 'User-centered interface and experience design',
    },
    {
        title: 'Front-end Engineering',
        description: 'Clean, performant code with TypeScript & modern frameworks',
    },
    {
        title: 'App Development',
        description: 'Cross-platform Android & iOS apps with Flutter',
    },
    {
        title: 'QA Engineering',
        description: 'Manual & automation testing for reliable software',
    },
    {
        title: 'Test Automation',
        description: 'Automated testing with Selenium, Cypress & Jest',
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
        'Front-end Engineering': (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8" />
                <path d="M12 17v4" />
                <path d="M7 8l3 3-3 3" />
                <path d="M14 14h3" />
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
