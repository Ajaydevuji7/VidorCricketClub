import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import clubLogo from '../assets/vidor-logo.jpg';

function Navbar() {

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                    <img src={clubLogo} alt="Vidor Cricket Club Logo" className="logo-image" />
                    <span>Vidor Cricket Club</span>
                </NavLink>
            </div>
            <ul className="navbar-links">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/achievements" className={({ isActive }) => isActive ? 'active' : ''}>Achievements</NavLink>
                </li>
                <li>
                    <NavLink to="/teams" className={({ isActive }) => isActive ? 'active' : ''}>Teams</NavLink>
                </li>
                <li>
                    <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active' : '')}>Gallery</NavLink>
                </li>
                <li>
                    <NavLink to="/sponsers" className={({ isActive }) => isActive ? 'active' : ''}>Sponsors</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;