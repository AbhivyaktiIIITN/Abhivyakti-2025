import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "/assets/logo.png";
import "./navbar.css";
import abhi from "/assets/Navbar/abhi.png";
import date from "/assets/Navbar/2025.png";
import "../../css/font.css";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        if (window.innerWidth <= 768) {
            setIsMenuOpen(!isMenuOpen);
        }
    };

    const smoothScrollOrNavigate = (event, targetId) => {
        event.preventDefault();

        if (location.pathname === "/") {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        } 
        else {
            navigate("/", { state: { scrollTo: targetId } });
        }
        closeMenu();
    };

    const handleLogoClick = (event) => {
        event.preventDefault();

        if (location.pathname === "/") {
            const heroElement = document.getElementById("hero");
            if (heroElement) {
                heroElement.scrollIntoView({ behavior: "smooth" });
            }
        } 
        else {
            navigate("/");
        }
        closeMenu();
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowDetails(true);
            } 
            else {
                setShowDetails(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="navbar-container urbanist-font font-normal">
            <div className="logo flex">
                <a href="/" onClick={handleLogoClick} className="flex">
                    <img src={logo} alt="logo" />
                </a>
                <div
                    className={`flex abhi transition-all duration-500 ${showDetails ? "visible" : "hidden"
                        }`}
                >
                    <img src={abhi} alt="Abhivyakti" className="name slide-in" />
                    <img src={date} alt="2025" className="date slide-in" />
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className={`hamburger-lines ${isMenuOpen ? "open" : ""}`}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>

            </div>
            <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
                <li className="nav-item">
                    <a href="#about" onClick={(e) => smoothScrollOrNavigate(e, "about")}>
                        ABOUT
                    </a>
                </li>
                <li className="nav-item">
                    <Link to="/event" onClick={closeMenu}>
                        EVENT
                    </Link>
                </li>
                <li className="nav-item">
                    <a
                        href="#sponsors"
                        onClick={(e) => smoothScrollOrNavigate(e, "sponsors")}
                    >
                        SPONSORS
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#guests"
                        onClick={(e) => smoothScrollOrNavigate(e, "guests")}
                    >
                        GUESTS
                    </a>
                </li>
                <li className="nav-item">
                    <Link to="/team" onClick={closeMenu}>
                        TEAM
                    </Link>
                </li>
                <li className="nav-item">
                    <a
                        href="#contact"
                        onClick={(e) => smoothScrollOrNavigate(e, "contact")}
                    >
                        CONTACT
                    </a>
                </li>
            </div>
        </div>
    );
}

export default Navbar;