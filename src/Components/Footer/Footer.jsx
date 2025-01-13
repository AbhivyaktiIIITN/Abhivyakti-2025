import React from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from "/assets/FooterLogo.png";
import "./footer.css";

function Footer() {
    return (
        <div className="footer-container" id="contact">
            <div className="main-body">
                <div className="logo">
                    <img src={FooterLogo} alt="Footer Logo" />
                </div>
                <div className="footer">
                    <div className="quick">
                        <h1>Quick Links</h1>
                        <p><Link to="/" className="footer-link" target='blank'>Register</Link></p>
                        <p><Link to="/event" className="footer-link" target='blank'>Explore</Link></p>
                        <p><Link to="/" className="footer-link" target='blank'>Home</Link></p>
                        <p><Link to="/terms" className="footer-link" target='blank'>Terms & Conditions</Link></p>
                    </div>
                    <div className="contact">
                        <h1>Contact Us</h1>
                        <p><Link to="/" className="footer-link" target='blank'>abhivyakti@iiitn.ac.in</Link></p>
                        <p><Link to="/" className="footer-link" target='blank'>+91 6969696969</Link></p>
                    </div>
                    <div className="follow">
                        <h1>Follow Us</h1>
                        <p><Link to="/" className="footer-link" target='blank'>Instagram</Link></p>
                        <p><Link to="/" className="footer-link" target='blank'>LinkedIn</Link></p>
                        <p><Link to="/" className="footer-link" target='blank'>Twitter</Link></p>
                        <p><Link to="/" className="footer-link" target='blank'>Facebook</Link></p>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div>Abhivyakti 2025 © All rights reserved.</div>
                <div>
                    Developed and Managed by <Link to="/developers" className="student" target='blank'>Students</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;