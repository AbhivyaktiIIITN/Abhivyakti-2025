import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./footer.css";

function Footer() {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.getElementById('contact');
            const footerPosition = footer.getBoundingClientRect();
            if (footerPosition.top <= window.innerHeight && footerPosition.bottom >= 0) {
                setIsInView(true);
            } else {
                setIsInView(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="footer-container" id="contact" style={{ height: '60vh' }}>
            <div
                className="footer-animation-section"
                style={{
                    height: '100%',
                    display: 'flex',
                    position: 'relative',
                }}
            >
                {/* Left Section with Neptune Statue */}
                <div
                    className="left-animation-section"
                    style={{
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        height: '110%',
                        width: '40vw',
                        transform: isInView ? 'translateX(0)' : 'translateX(-100vw)',
                        transition: 'transform 1.5s ease-in-out',
                        position: 'relative',
                    }}
                >
                    <img
                        src="/assets/neptuneStatue.png"
                        alt="Neptune Statue"
                        style={{
                            width: '110%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </div>

                {/* Main Content Section */}
                <div className="main-body" style={{ height: '100%' }}>
                    <div className="logo">
                        <img src="/assets/FooterLogo.png" alt="Footer Logo" />
                    </div>
                    <div className="footer">
                        <div className="quick">
                            <h1>Quick Links</h1>
                            <p><Link to="/event" className="footer-link">Register</Link></p>
                            <p><Link to="/event" className="footer-link">Explore</Link></p>
                            <p><Link to="/" className="footer-link">Home</Link></p>
                            <p><Link to="/terms" className="footer-link">Terms & Conditions</Link></p>
                        </div>
                        <div className="contact">
                            <h1>Contact Us</h1>
                            <p><Link to="/" className="footer-link" target='_blank'>abhivyakti@iiitn.ac.in</Link></p>
                            <p><Link to="/" className="footer-link" target='_blank'>+91 6969696969</Link></p>
                        </div>
                        <div className="follow">
                            <h1>Follow Us</h1>
                            <p><Link to="/" className="footer-link" target='_blank'>Instagram</Link></p>
                            <p><Link to="/" className="footer-link" target='_blank'>LinkedIn</Link></p>
                            <p><Link to="/" className="footer-link" target='_blank'>Twitter</Link></p>
                            <p><Link to="/" className="footer-link" target='_blank'>Facebook</Link></p>
                        </div>
                    </div>
                </div>

                {/* Right Section with David Statue */}
                <div
                    className="right-animation-section"
                    style={{
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        height: '110%',
                        width: '47vw',
                        transform: isInView ? 'translateX(0)' : 'translateX(100vw)',
                        transition: 'transform 1.5s ease-in-out',
                        position: 'relative',
                    }}
                >
                    <img
                        src="/assets/davidStatue.png"
                        alt="David Statue"
                        style={{
                            width: '90%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </div>
            </div>

            <div className="copyright" style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '100%',
                padding: '20px',
                textAlign: 'center',
                color: 'white',
                fontSize: '1.2rem',
                borderRadius: '8px',
                marginBottom: '0',
                top: '40vh',
            }}>
                <div style={{ marginBottom: '10px' }}>Abhivyakti 2025 © All rights reserved.</div>
                <div>
                    Developed and Managed by <Link to="/developers" className="student" target='_blank' style={{ color: '#fff', textDecoration: 'underline' }}>Students</Link>
                </div>
            </div>

        </div>
    );
}

export default Footer;
