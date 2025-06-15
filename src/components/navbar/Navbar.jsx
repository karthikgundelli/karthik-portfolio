import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">MyPortfolio</h1>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`navbar-right ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Summary</Link>
        <Link to="/education" onClick={toggleMenu}>Education</Link>
        <Link to="/experience" onClick={toggleMenu}>Experience</Link>
        <Link to="/skills" onClick={toggleMenu}>Skills</Link>
        <Link to="/projects" onClick={toggleMenu}>Projects</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
