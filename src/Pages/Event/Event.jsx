import React, { useEffect } from 'react';
import Hero from '../../Components/PageHero/Hero';
import ClubSelector from '../../Components/EventPage/ClubSelector/ClubSelector';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './event.css'

const Event = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <>
            <Navbar />
            <div
                className="w-screen h-screen"
            >
                <Hero page={"events"} />
                <ClubSelector />
            </div>
        </>
    );
};

export default Event;