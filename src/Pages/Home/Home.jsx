import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/HomePage/Hero/Hero'
import EventsSection from '../../Components/HomePage/EventSection/EventsSection'
import GuestSection from '../../Components/HomePage/GuestSection/GuestSection'
import SponsorsSection from '../../Components/HomePage/SponsorSection/SponsorsSection'
import Footer from '../../Components/Footer/Footer'
import SpeakerHorizontalScrollCarousel from '../../Components/Speaker/speakerHorizontalScroll'
import AboutSection from '../../Components/HomePage/AboutSection/AboutSection'
import './home.css'

function Home() {
    const location = useLocation();

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
    )
}

export default Home