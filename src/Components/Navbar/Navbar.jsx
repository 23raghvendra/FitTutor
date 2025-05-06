import React, { useState } from 'react';
import './Navbar.css';
import { BsSearch, BsMoonFill, BsSunFill } from 'react-icons/bs';

const Navbar = ({ theme, setTheme }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="navbar">
      {/* Left - App Name */}
      <div className="navbar-brand">
        <h1>FitTutor</h1>
      </div>

      {/* Middle - Navigation Links */}
      <ul className="nav-links">
        <li>Home</li>
        <li>Workout</li>
        <li>Dieting</li>
        <li>Progress</li>
        <li>Profile</li>
      </ul>

      {/* Right - Search and Theme Toggle */}
      <div className="nav-actions">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <BsSearch className="search-icon" />
        </div>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? <BsMoonFill /> : <BsSunFill />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;