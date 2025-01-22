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
        <div className="footer-container" id="contact" style={{}}>
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
                        height: '38vh',
                        width: '50vw',
                        transform: isInView ? 'translateX(0)' : 'translateX(-100vw)',
                        transition: 'transform 1.5s ease-in-out',
                        position: 'relative',
                        right:'-6%'
                    }}
                >
                    <img
                        src="/assets/neptuneStatue.png"
                        alt="Neptune Statue"
                        style={{
                            width: '110%',
                            objectFit: 'cover',
                        }}
                    />
                </div>

                {/* Main Content Section */}
                <div className="main-body" style={{ height: '100%' }}>
                    <div className="flex flex-col md:flex-row">
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
                    <div className="copyright" >
                <div style={{ marginBottom: '10px' }} className="student">Abhivyakti 2025 © All rights reserved.</div>
                <div className='student'>
                    Developed and Managed by <Link to="/developers" className="student" target='_blank' style={{ color: '#fff', textDecoration: 'underline' }}>Students</Link>
                </div>
            </div>
                </div>

                {/* Right Section with David Statue */}
                <div
                    className="right-animation-section"
                    style={{
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        height: '38vh',
                        width: '50vw',
                        left:'-9%' ,
                        transform: isInView ? 'translateX(0)' : 'translateX(100vw)',
                        transition: 'transform 1.5s ease-in-out',
                        position: 'relative',
                    }}
                >
                    <img
                        src="/assets/davidStatue.png"
                        alt="David Statue"
                        style={{
                            width: '150%',
                            
                            // height: '10%',
                            objectFit: 'cover',
                        }}
                    />
                </div>

            </div>
            </div>
    );
}

export default Footer;