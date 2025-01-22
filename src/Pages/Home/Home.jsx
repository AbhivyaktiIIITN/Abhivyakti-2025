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
    )
}

export default Home