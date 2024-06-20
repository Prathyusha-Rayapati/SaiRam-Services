import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for Navbar styles

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="logo-link">
          SAI RAM SERVICES
        </NavLink>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about-us" className="nav-link" activeClassName="active">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services" className="nav-link" activeClassName="active">
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact-us" className="nav-link" activeClassName="active">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
