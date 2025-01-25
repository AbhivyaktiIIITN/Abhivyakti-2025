import React from "react";
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


const EventDetail = (props) => {

    const { id } = useParams();
    console.log(id);
    const eventData = eventDetailData[id];

    const { eventHeaderData, eventIntroData, eventTimelineData, eventRulesAndRegulationData, eventPrizeData, eventFaqData, eventContactData } = eventData;
    console.log(eventData);
    const handleFormSubmit = (formData) => {
        console.log("Form Submitted:", formData);
    };
    return (
        <div
            className="w-full min-h-screen bg-cover bg-no-repeat bg-center"
            style={{
                backgroundImage: `url(${Darkbg})`,
            }}
        >
            <Navbar />
            <EventHeader
                {...eventHeaderData}
            />
            <EventIntro
                {...eventIntroData}
            />

            <EventTimeline {...eventTimelineData} />


            <RulesRegulation {...eventRulesAndRegulationData} />
            <div className="w-full min-h-screen grid grid-cols-1 gap-1 items-center relative ">
                <img
                    src={PurpleDrip}
                    alt="purpledrip"
                    className="absolute w-full h-full opacity-30 object-fill sm:object-fill"
                />
                <PrizePool {...eventPrizeData} />
                <ContactUs
                    {...eventContactData}
                    onSubmit={handleFormSubmit}
                />
                {/* 
                <FAQ items={props.event.eventFaq.faqItems} />
                */}
            </div>
        </div>
    );
};

export default EventDetail;