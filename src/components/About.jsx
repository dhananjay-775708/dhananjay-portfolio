import React from 'react';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        
        <div className="about-grid">
          <div className="about-text animate-fade-in">
            <p>
              I am a passionate Full Stack Web Developer specializing in the MERN stack. My journey in tech is driven by a deep curiosity for building efficient, scalable, and visually engaging web applications.
            </p>
            <p>
              I thrive in collaborative environments and am constantly learning new technologies to stay at the forefront of modern web development. Whether it's designing a seamless user interface or architecting a robust backend, I approach every problem with creativity and analytical thinking.
            </p>
            <p>
              When I'm not coding, you can find me exploring new innovative projects, contributing to open-source, or learning about the latest advancements in AI and web tech.
            </p>
          </div>
          
          <div className="about-stats animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="stat-card">
              <div className="stat-num gradient-text">MERN</div>
              <div className="stat-label">Stack Focus</div>
            </div>
            <div className="stat-card">
              <div className="stat-num gradient-text">100%</div>
              <div className="stat-label">Commitment</div>
            </div>
            <div className="stat-card">
              <div className="stat-num gradient-text">24/7</div>
              <div className="stat-label">Learning</div>
            </div>
            <div className="stat-card">
              <div className="stat-num gradient-text">∞</div>
              <div className="stat-label">Ideas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
