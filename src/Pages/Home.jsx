import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/HomePage/Hero/Hero'
import EventsSection from '../Components/HomePage/EventSection/EventsSection'
import GuestSection from '../Components/HomePage/GuestSection/GuestSection'
import '../css/home.css'

function Home() {
    return (
        <div className="home-container">
            <Navbar />
            <Hero />
            <GuestSection />
            <EventsSection />
        </div>
    )
}

export default Home