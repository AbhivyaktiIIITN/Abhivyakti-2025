import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/HomePage/Hero/Hero'
import EventsSection from '../Components/HomePage/EventSection/EventsSection'
import '../css/home.css'

function Home() {
    return (
        <div className="home-container">
            <Navbar />
            <Hero />
            <EventsSection />
        </div>
    )
}

export default Home