import React, { useEffect, useState } from "react";
import Hero from "../../Components/PageHero/Hero";
import ClubSelector from "../../Components/EventPage/ClubSelector/ClubSelector";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./event.css";
import Loader from "../../Components/Loader/loader";

const Event = () => {
    
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

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
            <Navbar />
            <div className="w-screen h-screen overflow-x-hidden">
                <Hero page={"events"} />
                <ClubSelector />
                <Footer />
            </div>
        </>
    );
};

export default Event;
