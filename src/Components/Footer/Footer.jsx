import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./footer.css";
import "../../css/font.css";

function Footer() {
    const [showMask, setShowMask] = useState(false);
    const [inView, setInView] = useState(false);
    const [copyNotification, setCopyNotification] = useState(false);
    const footerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.5 },
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) observer.unobserve(footerRef.current);
        };
    }, []);

    const handleFooterClick = () => {
        setShowMask(true);
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        if (window.location.pathname !== "/") {
            navigate("/", { state: { scrollToTop: true } });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const copyPhoneNumber = () => {
        const phoneNumber = "+91 7506103104";
        navigator.clipboard.writeText(phoneNumber).then(() => {
            setCopyNotification(true);
            setTimeout(() => {
                setCopyNotification(false);
            }, 4000);
        });
    };

    return (
        <div
            className="footer-container urbanist-font font-normal"
            id="contact"
            ref={footerRef}
            onClick={handleFooterClick}
        >
            <div
                className="footer-animation-section"
                style={{
                    height: "100%",
                    display: "flex",
                    position: "relative",
                }}
            >
                <div
                    className="left-animation-section"
                    style={{
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        width: "30vw",
                        position: "relative",
                        right: "0%",
                    }}
                >
                    <img
                        src="/assets/FooterSection/neptuneStatue.png"
                        alt="Neptune Statue"
                        className="neptune-image"
                        style={{
                            width: "110%",
                            objectFit: "cover",
                            transform: inView
                                ? "translateX(0)"
                                : "translateX(-50%)",
                            opacity: inView ? 1 : 0,
                            transition:
                                "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
                        }}
                    />

                    <img
                        src="/assets/FooterSection/neptuneMask.png"
                        alt="Neptune Mask"
                        className="neptune-mask"
                        style={{
                            width: "110%",
                            objectFit: "cover",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: showMask ? 1 : 0,
                            transition: "opacity 0.5s ease-in-out",
                        }}
                    />
                </div>

                <div className="main-body">
                    <div className="flex flex-col md:flex-row">
                        <div className="logo">
                            <img
                                src="/assets/FooterSection/FooterLogo.png"
                                alt="Footer Logo"
                            />
                        </div>
                        <div className="footer">
                            <div className="quick">
                                <h1>Quick Links</h1>
                                <p>
                                    {" "}
                                    <Link
                                        to="https://unstop.com/college-fests/abhivyakti-2025-indian-institute-of-information-technology-iiit-nagpur-296835"
                                        target="_blank"
                                        className="footer-link"
                                    >
                                        {" "}
                                        Register{" "}
                                    </Link>{" "}
                                </p>
                                <p>
                                    {" "}
                                    <Link to="/event" className="footer-link">
                                        {" "}
                                        Explore{" "}
                                    </Link>{" "}
                                </p>
                                <p>
                                    {" "}
                                    <a
                                        href="#hero"
                                        className="footer-link"
                                        onClick={handleHomeClick}
                                    >
                                        Home
                                    </a>
                                </p>
                                <p>
                                    {" "}
                                    <Link to="/terms" className="footer-link">
                                        {" "}
                                        Terms & Conditions{" "}
                                    </Link>{" "}
                                </p>
                            </div>
                            <div className="contact">
                                <h1>Contact Us</h1>
                                <p>
                                    {" "}
                                    <a
                                        href="mailto:abhivyakti@iiitn.ac.in"
                                        className="footer-link"
                                        target="_blank"
                                    >
                                        {" "}
                                        abhivyakti@iiitn.ac.in{" "}
                                    </a>
                                </p>
                                <p>
                                    {" "}
                                    <a
                                        className="footer-link"
                                        target="_blank"
                                        onClick={copyPhoneNumber}
                                    >
                                        {" "}
                                        +91 7506103104{" "}
                                    </a>
                                    {copyNotification && (
                                        <div className="notification">
                                            Phone number copied!
                                        </div>
                                    )}{" "}
                                </p>
                            </div>
                            <div className="follow">
                                <h1>Follow Us</h1>
                                <p>
                                    <Link
                                        to="https://www.instagram.com/abhivyakti_iiitn?igsh=MWczeWMwa3RyZGQ5NQ=="
                                        className="footer-link"
                                        target="_blank"
                                    >
                                        Instagram
                                    </Link>
                                </p>
                                <p>
                                    <Link
                                        to="https://www.linkedin.com/in/abhivyakti-iiit-nagpur-b12b20260/?trk=public_profile_browsemap&originalSubdomain=in"
                                        className="footer-link"
                                        target="_blank"
                                    >
                                        LinkedIn
                                    </Link>
                                </p>
                                <p>
                                    <Link
                                        to="https://x.com/AIiitn?t=HOLPsW4JHG7oHz5wcK7DnQ&s=09"
                                        className="footer-link"
                                        target="_blank"
                                    >
                                        Twitter
                                    </Link>
                                </p>
                                {/* <p><Link to="https://www.facebook.com/share/1B24yc1Ucv/" className="footer-link" target='_blank'>Facebook</Link></p> */}
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className="student">
                            {" "}
                            Abhivyakti 2025 © All rights reserved.{" "}
                        </div>
                        <div className="student">
                            Developed and Managed by{" "}
                            <Link
                                to="/developers"
                                className="developer"
                                target="_blank"
                            >
                                {" "}
                                Students{" "}
                            </Link>
                        </div>
                    </div>
                </div>

                <div
                    className="right-animation-section"
                    style={{
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        width: "30vw",
                        left: "0%",
                        position: "relative",
                    }}
                >
                    <img
                        src="/assets/FooterSection/davidStatue.png"
                        alt="David Statue"
                        className="david-image"
                        style={{
                            width: "100%",
                            objectFit: "cover",
                            transform: inView
                                ? "translateX(0)"
                                : "translateX(50%)",
                            opacity: inView ? 1 : 0,
                            transition:
                                "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
                        }}
                    />
                    <img
                        src="/assets/FooterSection/davidMask.png"
                        alt="David Mask"
                        className="david-mask"
                        style={{
                            width: "100%",
                            objectFit: "cover",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: showMask ? 1 : 0,
                            transition: "opacity 0.5s ease-in-out",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Footer;
