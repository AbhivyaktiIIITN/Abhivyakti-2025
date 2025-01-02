import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar-container">
            <div className="logo">
                <img src="https://via.placeholder.com/150" alt="logo" />
                <div className="hamburger" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                        </svg>
                    )}
                </div>
            </div>
            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <Link to="/about" className="nav-item" onClick={toggleMenu}>ABOUT</Link>
                <Link to="/event" className="nav-item" onClick={toggleMenu}>EVENT</Link>
                <Link to="/sponsors" className="nav-item" onClick={toggleMenu}>SPONSORS</Link>
                <Link to="/guests" className="nav-item" onClick={toggleMenu}>GUESTS</Link>
                <Link to="/team" className="nav-item" onClick={toggleMenu}>TEAM</Link>
                <Link to="/contact" className="nav-item" onClick={toggleMenu}>CONTACT</Link>
            </div>
            {/* <div className="reg-log">
                    <Link to="/register" className="btn register">REGISTER</Link>
                    <Link to="/login" className="btn login">LOGIN</Link>
                </div> */}
        </div>
    );
}

export default Navbar;