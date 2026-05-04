const Navbar = () => {
  return (
    <nav className="navbar animate-fade-in">
      <div className="container">
        <a href="#" className="nav-logo gradient-text">DS.</a>

        <ul className="nav-links">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>

        <button className="mobile-menu-btn">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
