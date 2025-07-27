import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header className="header">
      <div className="logo">Portfolio</div>
      <button className="menu-toggle" onClick={handleMenuToggle}>
        ☰
      </button>
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" className="nav-link" onClick={handleMenuToggle}><i className="bi bi-house-door"></i> Home</NavLink>
        <NavLink to="/about" className="nav-link" onClick={handleMenuToggle}><i className="bi bi-person-fill"></i> About</NavLink>
        <NavLink to="/projects" className="nav-link" onClick={handleMenuToggle}><i className="bi bi-code-slash"></i> Projects</NavLink>
        <NavLink to="/resume" className="nav-link" onClick={handleMenuToggle}><i className="bi bi-file-earmark-text-fill"></i> Resume</NavLink>
      </nav>
    </header>
  );
};

export default Header;
