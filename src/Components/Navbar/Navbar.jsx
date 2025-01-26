import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "/assets/logo.png";
import "./navbar.css";
import "../../css/font.css";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        } else {
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
        } else {
            navigate("/");
        }
        closeMenu();
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="navbar-container urbanist-font font-normal">
            <div className="logo">
                <a href="/" onClick={handleLogoClick}>
                    {" "}
                    <img src={logo} alt="logo" />{" "}
                </a>
                <div className="hamburger" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                            />
                        </svg>
                    )}
                </div>
            </div>
            <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
                <li className="nav-item">
                    <a
                        href="#about"
                        onClick={(e) => smoothScrollOrNavigate(e, "about")}
                    >
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
