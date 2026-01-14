import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Experience.css'

interface ExperienceItem {
    year: string
    title: string
    company: string
    description: string
}

const experiences: ExperienceItem[] = [
    {
        year: '2025',
        title: 'Full-Stack Developer',
        company: 'Niko Niko Japanese Language',
        description: 'Built a website and worked as IT technician for a Japanese language school.',
    },
    {
        year: '2022',
        title: 'IT and Hardware Technician',
        company: 'Infotech Computers',
        description: 'Started my On-The-Job Training here.',
    },
]

const Experience = () => {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section id="experience" className="experience">
            <div className="container">
                <div
                    ref={ref}
                    className={`scroll-animate ${isVisible ? 'visible' : ''}`}
                >
                    <h2 className="section-title">Experience</h2>
                    <p className="section-subtitle">My professional journey</p>
                </div>

                {/* Timeline */}
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`timeline-item scroll-animate-left ${isVisible ? 'visible' : ''}`}
                            style={{ transitionDelay: `${0.2 + index * 0.2}s` }}
                        >
                            <div className="timeline-node">
                                <span className="node-dot"></span>
                                <span className="node-line"></span>
                            </div>
                            <div className="timeline-content">
                                <span className="timeline-year">{exp.year}</span>
                                <h3 className="timeline-title">{exp.title}</h3>
                                <span className="timeline-company">@ {exp.company}</span>
                                <p className="timeline-description">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
