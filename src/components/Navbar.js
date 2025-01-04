import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import clubLogo from '../assets/vidor-logo.jpg';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleResize = debounce(() => {
        const mobileView = window.innerWidth <= 768;
        setIsMobile(mobileView);
        if (!mobileView) {
            closeMenu();
        }
    }, 200);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Lock scrolling when the mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isMobile && isOpen ? 'hidden' : 'auto';
    }, [isMobile, isOpen]);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                    <img src={clubLogo} alt="Vidor Cricket Club Logo" className="logo-image" />
                    <span>Vidor Cricket Club</span>
                </NavLink>
            </div>
            {isMobile && (
                <div
                    className={`hamburger ${isOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            )}
            <ul className={`navbar-links ${isMobile && isOpen ? 'open' : ''}`}>
                <li>
                    <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
                        About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/achievements" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
                        Achievements
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/teams" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
                        Teams
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/gallery" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
                        Gallery
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sponsors" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
                        Sponsors
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
                        Contact Us
                    </NavLink>
                </li>
            </ul>
            {isMobile && isOpen && <div className="overlay" onClick={closeMenu}></div>}
        </nav>
    );
}

function debounce(func, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
}

export default Navbar;