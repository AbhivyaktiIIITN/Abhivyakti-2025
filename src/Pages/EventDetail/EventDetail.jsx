import React, { useEffect, useState } from "react";
import Darkbg from "/assets/EventDetail/dark-bg.png";
import PurpleDrip from "/assets/EventDetail/purpleDrip.png";
import RulesRegulation from "../../Components/EventDetail/RulesRegulation/RulesRegulation";
import EventHeader from "../../Components/EventDetail/EventHeader/EventHeader";
import EventIntro from "../../Components/EventDetail/EventIntro/EventIntro";
import EventTimeline from "../../Components/EventDetail/Timeline/EventTimeline";
import PrizePool from "../../Components/EventDetail/Prizepool/PrizePool";
import FAQ from "../../Components/EventDetail/FAq/Faq";
import ContactUs from "../../Components/EventDetail/ContactUs/ContactUs";
import Navbar from "../../Components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { eventDetailData } from "../../data/EventsDetail/EventDetail.data";
import Loader from "../../Components/Loader/loader";
import Footer from "../../Components/Footer/Footer";
import { Helmet } from "react-helmet-async";

const EventDetail = () => {
    const { id } = useParams();

    const eventData = eventDetailData[id];

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        document.title = `Abhivyakti | ${eventData.eventHeaderData.eventName}`;
    }, []);

    if (loading) {
        return <Loader />;
    }

    const {
        eventHeaderData,
        eventIntroData,
        eventTimelineData,
        eventRulesAndRegulationData,
        eventPrizeData,
        eventFaqData,
        eventContactData,
    } = eventData;
    console.log(eventData);
    const handleFormSubmit = (formData) => {
        console.log("Form Submitted:", formData);
    };
    return (
        <>
            <Helmet>
                <meta name="description" content={`Abhivyakti | ${eventData.eventHeaderData.eventName} : ${eventData.eventIntroData.description}`} />
                <meta name="canonical" content={`https://abhivyakti.tech/events/${id}`} />
                <meta property="og:title" content={`Abhivyakti | ${eventData.eventHeaderData.eventName}`} />
                <meta property="og:description" content={eventData.eventIntroData.description} />
                <meta property="og:url" content={`https://abhivyakti.tech/events/${id}`} />
                <meta property="og:image" content={eventData.eventHeaderData.eventImage} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@AbhivyaktiTech" />
                <meta name="twitter:title" content={`Abhivyakti | ${eventData.eventHeaderData.eventName}`} />
                <meta name="twitter:description" content={eventData.eventIntroData.description} />
                <meta name="twitter:image" content={eventData.eventHeaderData.eventImage} />
            </Helmet>
            <div
                className="w-full min-h-screen bg-cover bg-no-repeat bg-center overflow-x-hidden"
                style={{
                    backgroundImage: `url(${Darkbg})`,
                }}
            >
                <Navbar />
                <EventHeader {...eventHeaderData} />
                <EventIntro {...eventIntroData} />

                <EventTimeline {...eventTimelineData} />

                <RulesRegulation {...eventRulesAndRegulationData} />
                <div className="w-full min-h-screen grid grid-cols-1 gap-1 items-center relative ">
                    <img
                        // src={PurpleDrip}
                        src={eventRulesAndRegulationData.drip}
                        alt="drip"
                        className="absolute w-full h-full opacity-30 object-fill sm:object-fill"
                    />
                    <PrizePool {...eventPrizeData} />
                    <ContactUs {...eventContactData} onSubmit={handleFormSubmit} />
                    {/* 
                <FAQ items={props.event.eventFaq.faqItems} />
                */}
                    <div className="z-10">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventDetail;
