import React from "react";

const EventHeader = (props) => {
  return (
    <div
      className="w-full h-[250px] sm:h-[489px] bg-contain bg-center bg-no-repeat"
      style={{
        background: "linear-gradient(90deg, #FDFDFB 0%, #9747FF 100%)",
      }}
    >
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat flex flex-row items-end"
        style={{
          backgroundImage: `url(/assets/EventDetail/Event-bg.png)`,
        }}
      >
        <img
          src="/assets/EventDetail/statue-left.png"
          alt="Statue Left"
          className="w-1/3 min-w-[100px] h-2/3 sm:h-full"
        />

        <div className="w-1/3 h-2/3 sm:h-full flex flex-col items-center justify-center text-center text-white">
          <div className="w-full space-y-4">
            <div className="flex justify-center items-center space-x-4">
              <span className="text-xl sm:text-2xl lg:text-4xl font-bold">
                {props.clubName}
              </span>
              {props.ClubLogo && (
                <div
                  className="w-12 sm:w-20 lg:w-36 h-12 sm:h-20 lg:h-36 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${props.ClubLogo})`,
                  }}
                ></div>
              )}
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-8xl font-extrabold">
              {props.eventName}
            </h1>
            <p className="text-lg sm:text-2xl lg:text-4xl font-medium">
              {props.eventDescription}
            </p>
          </div>
        </div>

        <img
          src="/assets/EventDetail/statue-right.png"
          alt="Statue Right"
          className="w-1/3 h-2/3 sm:h-full min-w-[100px]"
        />
      </div>
    </div>
  );
};

export default EventHeader;
