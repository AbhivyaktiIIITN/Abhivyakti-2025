import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/HomePage/Hero/Hero'
import EventsSection from '../Components/HomePage/EventSection/EventsSection'
import GuestSection from '../Components/HomePage/GuestSection/GuestSection'
import SponsorsSection from '../Components/HomePage/SponsorSection/SponsorsSection'
import Footer from '../Components/Footer/Footer'
import '../css/home.css'

function Home() {
    return (
        <div className="home-container">
            <Navbar />
            <Hero />
            <SponsorsSection />
            <GuestSection />
            <EventsSection />
            <Footer />
        </div>
    )
}

export default Home