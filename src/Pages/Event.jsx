import React from 'react';
import EventHero from '../Components/EventPage/EventHero/EventHero';
import ClubSelector from '../Components/EventPage/ClubSelector/ClubSelector';
import '../css/event.css'

const Event = () => {
  return (
    <div
      className="w-screen h-screen"
    >
      <EventHero/>
      <ClubSelector />
    </div>
  );
};

export default Event;