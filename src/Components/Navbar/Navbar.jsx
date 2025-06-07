import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { BsSearch, BsMoonFill, BsSunFill } from 'react-icons/bs';

const Navbar = ({ theme, setTheme }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="navbar">
      {}
      <div className="navbar-brand">
        <Link to="/" className="logo-link">
          <h1 className="logo-text">FitTutor</h1>
        </Link>
      </div>

      {}
      <ul className="nav-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/workout' ? 'active' : ''}>
          <Link to="/workout">Workout</Link>
        </li>
        <li className={location.pathname.includes('/progress') ? 'active' : ''}>
          <Link to="/progress">Progress</Link>
        </li>
        <li><Link to="/dieting">Dieting</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>

      {}
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