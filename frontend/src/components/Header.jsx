import React from 'react';
import { NavLink } from 'react-router-dom'; // 1. Import NavLink instead of Link
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* The logo should now link to the homepage */}
        <NavLink to="/" className="logo">Satyajit</NavLink>
        <nav>
          <ul>
            {/* 2. Replace all <a> tags with NavLink and href with to */}
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/experience">Experience</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;