
import React from "react";
import AlertIcon from "/assets/EventDetail/AlertIcon.png";
import TeamSizeIcon from "/assets/EventDetail/TeamSizeIcon.png";
import FeeIcon from "/assets/EventDetail/FeeIcon.png";
import PrizeIcon from "/assets/EventDetail/PrizeIcon.png";
import grafftiDrip from "/assets/EventDetail/grafftiDrip.png";

const EventIntro = (props) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center relative">
      <img src={grafftiDrip} alt="" className="absolute w-full h-full opacity-30 object-center sm:object-center"/>
      <div className="w-3/4 h-auto z-10 pt-10 sm:pt-0 md:pt-0 lg:pt-0 space-y-10">
        <div className="w-full h-auto flex flex-wrap justify-between z-10 gap-5 md:gap-0 lg:gap-0 sm:gap-0">
          <div className="w-full md:w-1/2 lg:w-1/2 h-auto text-sm md:text-base lg:text-xl flex flex-wrap md:justify-end justify-start lg:justify-end">
            <ul className="w-2/3 h-full flex flex-col justify-between items-start text-white text-base md:text-lg lg:text-lg space-y-5">
              <li className="flex items-center space-x-3">
                <img src={AlertIcon} alt="Deadline" className="w-7 h-7" />
                <div className="flex flex-col space-y-1">
                  <span className="font-semibold">Registration Deadline:</span>
                  <span>{props.deadline}</span>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <img src={TeamSizeIcon} alt="Team Size" className="w-7 h-7" />
                <div className="flex flex-col space-y-1">
                  <span className="font-semibold">Team Size:</span>
                  <span>{props.teamSize}</span>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <img src={FeeIcon} alt="Fee" className="w-7 h-7" />
                <div className="flex flex-col space-y-1">
                  <span className="font-semibold">Registration Fee:</span>
                  <span>{props.fee}</span>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <img src={PrizeIcon} alt="Prize" className="w-7 h-7" />
                <div className="flex flex-col space-y-1">
                  <span className="font-semibold">Prize Pool:</span>
                  <span>{props.prizePoll}</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/2 h-auto px-5 text-white text-base md:text-base lg:text-lg  flex flex-wrpa justify-center items-center">
            <p>{props.description}</p>
          </div>
        </div>

        <div className="w-full h-auto flex flex-row justify-center items-center py-5 gap-5">
          <button className="w-40 h-12 rounded-lg text-white font-semibold bg-custom-gradient border-2 border-white">
            Register
          </button>
          <button className="w-44 h-12 rounded-lg text-white font-semibold border-2 border-white bg-black flex items-center justify-center gap-2 p-2 ">
            <span>
              <img src="/assets/EventDetail/Unstop.png" alt="un logo" className="w-10 h-8 rounded-full object-contain" />
            </span>
            <span className="text-sm sm:text-base">EXPLORE</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventIntro;
