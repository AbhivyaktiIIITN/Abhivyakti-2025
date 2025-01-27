import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/HomePage/Hero/Hero";
import EventsSection from "../../Components/HomePage/EventSection/EventsSection";
import GuestSection from "../../Components/HomePage/GuestSection/GuestSection";
import SponsorsSection from "../../Components/HomePage/SponsorSection/SponsorsSection";
import Footer from "../../Components/Footer/Footer";
import SpeakerHorizontalScrollCarousel from "../../Components/HomePage/SpeakerSection/speakerHorizontalScroll";
import AboutSection from "../../Components/HomePage/AboutSection/AboutSection";
import "./home.css";
import Loader from "../../Components/Loader/loader";

function Home() {
    const location = useLocation();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (location.pathname === "/" && location.state?.scrollToTop) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);

    useEffect(() => {
        if (location.state?.scrollTo) {
            const scrollTarget = location.state.scrollTo;

            setTimeout(() => {
                const targetElement = document.getElementById(scrollTarget);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
    }, [location]);

    useEffect(() => {
        window.addEventListener("DOMContentLoaded", () => {
            setLoading(false)
        })
    }, [])
    if (loading) {
        return (
            <Loader />
        )
    }

    return (
        <>
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
        </>
    );
}

export default Home;
