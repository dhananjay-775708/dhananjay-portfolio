interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

const Project = () => {
  const projects: Project[] = [
    {
      title: 'Bughunter AI',
      description: 'An AI-powered application designed to intelligently detect, analyze, and suggest fixes for software bugs. Built to streamline the debugging process for developers.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1740&q=80',
      tags: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
      github: 'https://github.com/dhananjay-775708/bughunter-ai',
      demo: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my skills, projects, and professional background. Built with modern React and custom CSS animations for a premium feel.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1730&q=80',
      tags: ['React', 'Vite', 'Vanilla CSS'],
      github: 'https://github.com/dhananjay-775708/dhananjay-portfolio',
      demo: '#',
    },
    {
      title: 'MERN E-Commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, product management, shopping cart functionality, and secure checkout integration.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1932&q=80',
      tags: ['MongoDB', 'Express', 'React', 'Node.js'],
      github: 'https://github.com/dhananjay-775708',
      demo: '#',
    },
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className="project-card animate-fade-in"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    Code
                  </a>
                  {project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
