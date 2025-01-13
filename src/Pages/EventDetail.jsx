import React from "react";
import Darkbg from "../../public/assets/EventDetail/dark-bg.png";
import PurpleDrip from "../../public/assets/EventDetail/purpleDrip.png"
import ClubLogo from "../../public/assets/EventDetail/ClubLogo.png";
import First from "../../public/assets/EventDetail/First.png"
import Second from "../../public/assets/EventDetail/Second.png"
import Third from "../../public/assets/EventDetail/Third.png"
import RulesRegulation from "../Components/EventDetail/RulesRegulation/RulesRegulation"
import EventHeader from "../Components/EventDetail/EventHeader/EventHeader"
import EventIntro from "../Components/EventDetail/EventIntro/EventIntro"
import EventTimeline from "../Components/EventDetail/Timeline/EventTimeline"
import PrizePool from "../Components/EventDetail/Prizepool/PrizePool"
import FAQ from "../Components/EventDetail/FAq/Faq"
import ContactUs from "../Components/EventDetail/ContactUs/ContactUs"

const events = [
  {
    title: "Registrations Open",
    date: "15 Jan 2024",
  },
  {
    title: "Registrations Closed",
    date: "04 Feb 2024",
  },
  {
    title: "Round 1",
    date: "10 Feb 2024",
    bullets: [
      "In this round, participants are required to impress our judges with a 1-1.5 minute performance, sans props.",
      "From this round, 8-10 outstanding performers will be selected for the final round.",
    ],
  },
  {
    title: "Round 2 (Finals)",
    date: "10 Feb 2024",
    bullets: [
      "In the finals, you'll have 4-6 minutes to showcase your skills. This is a prop round where you must incorporate at least two distinct props into your performance for a minimum of 10 seconds each.",
      "All dance forms are welcome, but the effective use of props will be a crucial judging criterion.",
      "Please note that dangerous props like fire, blades, sharp mirrors, scissors, and nails are not allowed, but all other props are permitted.",
    ],
  },
  {
    title: "Results Announce!",
    date: "15 Jan 2024",
  },
];

const prizeData = [
  {
    position: "First Place",
    prizeAmount: "₹ 25,000",
    imageSrc: First,
  },
  {
    position: "Second Place",
    prizeAmount: "₹ 15,000",
    imageSrc: Second,
  },
  {
    position: "Third Place",
    prizeAmount: "₹ 10,000",
    imageSrc: Third,
  },
];

const additionalPrizes = [
  "T-shirts",
  "Goodies",
  "Swag Pack",
  "Certificates",
];

const faqItems = [
  {
    question: "What is the event about?",
    answer: "The event is a competition where participants showcase their skills.",
  },
  {
    question: "Who can participate?",
    answer: "Anyone who registers before the deadline can participate.",
  },
  {
    question: "What is the prize pool?",
    answer: "The total prize pool is ₹50,000 distributed among the top 3 winners.",
  },
  {
    question: "When is the event scheduled?",
    answer: "The event will take place on 10th February 2024.",
  },
  {
    question: "How can I register?",
    answer: "You can register on our website by filling out the registration form.",
  },
];

const EventDetail = () => {
  return (
    <div
    className="w-full min-h-screen bg-cover bg-no-repeat bg-center"
    style={{
      backgroundImage: `url(${Darkbg})`,
    }}
    >
        <EventHeader clubName="ESTORIA" eventName="MONOACT" eventDescription="Solo Drama Competetion" ClubLogo={ClubLogo}/>
        
        <EventIntro deadline="30 Jan 2023" teamSize="1 (solo event)" fee="10 Rs/-" prizePoll="69Cr" description="Join us for a dance journey where every step is a brushstroke on the canvas of your soul, where the stage is your sanctuary of expression, and where you dance not just with your body, but with your heart and spirit. Don't miss this opportunity to shine and be part of the vibrant cultural tapestry of 'Abhivyakti.'"/>
        
        <EventTimeline events={events}/>

        <RulesRegulation />
        <div className='w-full min-h-screen grid grid-cols-1 gap-1 items-center relative '>
            <img src={PurpleDrip} alt="" className="absolute w-full h-full opacity-30"/>
            <PrizePool prizes={prizeData} additionalPrizes={additionalPrizes} />
            <FAQ title="FAQ" items={faqItems}/>
            <ContactUs />
        </div>
      </div>

  );
};

export default EventDetail;
