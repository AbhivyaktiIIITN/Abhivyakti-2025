import React from "react";
import Darkbg from "/assets/EventDetail/dark-bg.png";
import PurpleDrip from "/assets/EventDetail/purpleDrip.png";
import RulesRegulation from "../Components/EventDetail/RulesRegulation/RulesRegulation";
import EventHeader from "../Components/EventDetail/EventHeader/EventHeader";
import EventIntro from "../Components/EventDetail/EventIntro/EventIntro";
import EventTimeline from "../Components/EventDetail/Timeline/EventTimeline";
import PrizePool from "../Components/EventDetail/Prizepool/PrizePool";
import FAQ from "../Components/EventDetail/FAq/Faq";
import ContactUs from "../Components/EventDetail/ContactUs/ContactUs";


const EventDetail = (props) => {

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
            <EventHeader

                clubName={props.event.eventheader.clubName}
                eventName={props.event.eventheader.eventName}
                eventDescription={props.event.eventheader.eventDescription}
                ClubLogo={props.event.eventheader.ClubLogo}
                bgUrlRight={props.event.eventheader.bgUrlRight}
                bgUrlLeft={props.event.eventheader.bgUrlLeft}
                leftStatueUrl={props.event.eventheader.leftStatueUrl}
                rightStatueUrl={props.event.eventheader.rightStatueUrl}
            />

            <EventIntro
                deadline={props.event.eventintro.deadline}
                teamSize={props.event.eventintro.teamSize}
                fee={props.event.eventintro.fee}
                prizePoll={props.event.eventintro.prizePoll}
                description={props.event.eventintro.description}
            />

            <EventTimeline events={props.event.eventTimeline.events}
            />

            <RulesRegulation rounds={props.event.eventRulesAndRegulation.roundsData} judgingCriteria={props.event.eventRulesAndRegulation.judgingCriteriaData} />
            <div className="w-full min-h-screen grid grid-cols-1 gap-1 items-center relative ">
                <img
                    src={PurpleDrip}
                    alt="purpledrip"
                    className="absolute w-full h-full opacity-30 object-fill sm:object-fill"
                />
                <PrizePool prizes={props.event.eventPrize.prizeData} additionalPrizes={props.event.eventPrize.additionalPrizes} />
                <FAQ items={props.event.eventFaq.faqItems} />
                <ContactUs
                    contacts={props.event.eventContact.contacts}
                    onSubmit={handleFormSubmit}
                />
            </div>
        </div>
    );
};

export default EventDetail;
