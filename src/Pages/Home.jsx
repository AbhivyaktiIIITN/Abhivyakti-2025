import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/HomePage/Hero/Hero'
import EventsSection from '../Components/HomePage/EventSection/EventsSection'
import GuestSection from '../Components/HomePage/GuestSection/GuestSection'
import SponsorsSection from '../Components/HomePage/SponsorSection/SponsorsSection'
import Footer from '../Components/Footer/Footer'
import '../css/home.css'
import Speaker from '../Components/Speaker/speaker'
import AboutSection from '../Components/HomePage/AboutSection/AboutSection'

function Home() {
    return (
        <div className="home-container">
            <Navbar />
            <Hero />
            <AboutSection />
            <SponsorsSection />
            <GuestSection />
            <EventsSection />
            <Speaker/>
            <Footer />
        </div>
    )
}

export default Home