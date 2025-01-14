import React from 'react';
import Hero from '../Components/PageHero/Hero';
import ClubSelector from '../Components/EventPage/ClubSelector/ClubSelector';
import '../css/event.css'
import Navbar from '../Components/Navbar/Navbar';

const Event = () => {
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