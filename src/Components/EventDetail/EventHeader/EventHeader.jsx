import React from "react";

const EventHeader = (props) => {
  return (
    <div
      className="w-full h-[250px] sm:h-[489px] bg-contain bg-center bg-no-repeat"
      style={{
        background:`${props.bgUrlRight}`,
      }}
    >
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat flex flex-row items-end"
        style={{
          backgroundImage: `${props.bgUrlLeft}`,
        }}
      >
        <img
          src={props.leftStatueUrl}
          alt="Statue Left"
          className="w-1/3 min-w-[100px] h-[80%] sm:h-[90%]"
        />

        <div className="w-1/3 h-2/3 sm:h-full flex flex-col items-center justify-end">
          <div className="w-2/5 absolute sm:h-2/3 flex flex-wrap items-end justify-end content-center">
            <div className="flex justify-start items-end space-x-4 mb-2 w-full">
              <span className="w-2/4 h-[20px] sm:h-[50px] font-bold ">
                <img src={props.clubName} alt="" className="bg-contain bg-no-repeat w-full h-full"/>
              </span>
              <div
                className="w-12 sm:w-20 lg:w-36 h-10 sm:h-20 lg:h-20 bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${props.ClubLogo})`,
                }}
              ></div>
            </div>
            <div className="w-full h-[70px] sm:h-[190px] md:h-[200px] ">
              <img src={props.eventName} alt="eventName" className="bg-contain bg-no-repeat w-full h-full"/>
            </div>
            <div className="w-full h-[20px] sm:h-[50px]">
              <img src={props.eventDescription} alt="eventdescription" className="bg-contain bg-no-repeat w-full h-full"/>
            </div>
          </div>
        </div>

        <img
          src={props.rightStatueUrl}
          alt="Statue Right"
          className="w-1/3 min-w-[100px]  h-[80%] sm:h-[90%]" 
        />
      </div>
    </div>
  );
};

export default EventHeader;
