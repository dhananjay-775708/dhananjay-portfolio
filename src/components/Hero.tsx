const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-glow"></div>
      <div className="container">
        <div className="hero-content animate-fade-in">
          <h2>Full Stack Web Developer</h2>
          <h1>Hi, I'm <span className="gradient-text">Dhananjay</span><br />Suradkar</h1>
          <p>
            I specialize in the MERN stack (MongoDB, Express, React, Node.js).
            I build modern, scalable web applications and I'm always open to collaborate on innovative projects.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="https://github.com/dhananjay-775708" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub Profile</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
