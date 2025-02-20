import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/HomePage/Hero/Hero";
import EventsSection from "../../Components/HomePage/EventSection/EventsSection";
import GuestSection from "../../Components/HomePage/GuestSection/GuestSection";
import SponsorsSection from "../../Components/HomePage/SponsorSection/SponsorsSection";
import Footer from "../../Components/Footer/Footer";
import SpeakerHorizontalScrollCarousel from "../../Components/HomePage/SpeakerSection/speakerHorizontalScroll";
import AboutSection from "../../Components/HomePage/AboutSection/AboutSection";
import Loader from "../../Components/Loader/loader";
import "./home.css";

function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [shouldScroll, setShouldScroll] = useState(false);

    useEffect(() => {
        if (location.pathname === "/" && location.state?.scrollToTop) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
        document.title = "Abhivyakti";
    }, []);

    useEffect(() => {
        if (location.state?.scrollTo) {
            setShouldScroll(true);
        }
    }, [location]);

    useEffect(() => {
        if (!loading && shouldScroll) {
            setTimeout(() => {
                const targetElement = document.getElementById(location.state.scrollTo);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                    navigate(location.pathname, { replace: true, state: {} });
                }
                setShouldScroll(false);
            }, 100);
        }
    }, [loading, shouldScroll, navigate, location.pathname]);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="home-container">
            <Navbar />
            <Hero />
            <AboutSection />
            <SponsorsSection />
            <GuestSection />
            <EventsSection />
            <SpeakerHorizontalScrollCarousel />
            <Footer />
        </div>
    );
}

export default Home;