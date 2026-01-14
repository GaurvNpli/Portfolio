import { useState } from 'react'
import './Projects.css'

interface Project {
    id: number
    title: string
    description: string
    tech: string[]
    link?: string
}

const projects: Project[] = [
    {
        id: 1,
        title: 'KhojSewa',
        description: 'a Centralized platform for lost and found items.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB'],
        link: 'https://github.com/GaurvNpli/KhojSewa--A-Smart-Lost-and-found-System',
    },
    {
        id: 2,
        title: 'OmniReader',
        description: 'a Flutter app that brings news and books together in one place.',
        tech: ['Flutter', 'Riverpod', 'SQLite'],
        link: 'https://github.com/GaurvNpli/Omni_Reader',
    },
    {
        id: 3,
        title: 'Task Manager',
        description: 'Productivity app with kanban boards and team collaboration.',
        tech: ['Flutter', 'BLoC', 'GraphQL'],
        link: '#',
    },
    {
        id: 4,
        title: 'Social Platform',
        description: 'Community app with real-time chat and content sharing.',
        tech: ['Flutter', 'Firebase', 'WebSocket'],
        link: '#',
    },
]

const Projects = () => {
    const [activeCard, setActiveCard] = useState<number | null>(null)
    const [showCode, setShowCode] = useState<number | null>(null)

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <p className="section-subtitle">Some things I've built</p>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`project-card ${activeCard === project.id ? 'inspecting' : ''}`}
                            onMouseEnter={() => setActiveCard(project.id)}
                            onMouseLeave={() => setActiveCard(null)}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            {/* Inspector Tooltip */}
                            <div className="card-inspector-label">
                                ProjectCard
                            </div>

                            {/* Card Content or Code View */}
                            <div className={`card-content ${showCode === project.id ? 'show-code' : ''}`}>
                                {showCode === project.id ? (
                                    <div className="code-view">
                                        <pre className="project-code">
                                            {`ProjectCard(
  title: '${project.title}',
  tech: [${project.tech.map(t => `'${t}'`).join(', ')}],
  onTap: () => launchUrl(),
)`}
                                        </pre>
                                    </div>
                                ) : (
                                    <div className="live-view">
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-description">{project.description}</p>
                                        <div className="project-tech">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="tech-tag">{t}</span>
                                            ))}
                                        </div>
                                        {project.link && project.link !== '#' && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link"
                                            >
                                                View Project →
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Toggle Code Button */}
                            <button
                                className="toggle-code-btn"
                                onClick={() => setShowCode(showCode === project.id ? null : project.id)}
                            >
                                {showCode === project.id ? '◀ View' : 'Code ▶'}
                            </button>

                            {/* Padding Indicator */}
                            <div className="padding-indicator"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
