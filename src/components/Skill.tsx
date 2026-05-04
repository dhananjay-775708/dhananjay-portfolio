interface Skill {
  name: string;
  icon: string;
}

const Skill = () => {
  const skills: Skill[] = [
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Express.js', icon: '🚂' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'TypeScript', icon: '🟦' },
    { name: 'HTML5', icon: '🟠' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'Tailwind', icon: '💨' },
    { name: 'Git', icon: '🔧' },
  ];

  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>

        <div className="skills-container animate-fade-in">
          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
