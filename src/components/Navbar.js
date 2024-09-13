import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 
import favicon from '../static/favicon.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {}
        <img src={favicon} alt="Volleymeet Logo" className="navbar-favicon" />
        <h2 className="navbar-logo">Volleymeet</h2>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

