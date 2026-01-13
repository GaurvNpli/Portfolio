import './Skills.css'

interface Experience {
    year: string
    title: string
    company: string
    description: string
}

const experiences: Experience[] = [
    {
        year: '2025',
        title: 'Full-Stack Developer',
        company: 'Niko Niko Japanese Language',
        description: 'Built a website and worked as IT technician for a japenese language school.',
    },
    {
        year: '2022',
        title: 'IT and Hardware Technician',
        company: 'Infotech Computers',
        description: 'Started my OnTheJob Training here.',
    },
]

const Skills = () => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <p className="section-subtitle">My professional journey</p>

                {/* Timeline */}
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
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

export default Skills
