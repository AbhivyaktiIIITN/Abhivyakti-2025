import React, { useState } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Icon from "/assets/EventDetail/TimelineIcon.png";
import { convertDate } from "./../../../utils/convertDate";
import "../../../css/font.css";

const EventTimeLine = ({ eventTimeline }) => {
    const [activeIndex, setActiveIndex] = useState(-1);
    console.log(eventTimeline);
    for (let i = 0; i < eventTimeline.length; i++) {
        if (
            eventTimeline[i].date.getTime() < new Date().getTime() &&
            activeIndex === -1
        ) {
            setActiveIndex(i);
            break;
        }
    }

    return (
        <div className="w-full min-h-[600px] h-auto flex flex-col items-center justify-center relative urbanist-font">
            <div className="text-white px-6 w-full sm:w-1/2">
                <VerticalTimeline
                    layout="1-column-left"
                    lineColor="#B57DFE"
                    className="w-full"
                >
                    {eventTimeline.map((data, index) => (
                        <VerticalTimelineElement
                            contentStyle={{
                                background: "none",
                                color: "#fff",
                                WebkitBoxShadow: "none",
                                boxShadow: "none",
                                paddingLeft: "7.5px",
                                padding: "0",
                            }}
                            contentArrowStyle={{ borderRight: "none" }}
                            iconStyle={
                                activeIndex === index
                                    ? {
                                          background: "white",
                                          boxShadow: "none",
                                          WebkitBoxShadow: "none",
                                          width: "30px",
                                          height: "30px",
                                          backgroundSize: "contain",
                                          left: "5px",
                                          top: "1px",
                                          backgroundRepeat: "no-repeat",
                                          animation: "pulse1 2s infinite",
                                      }
                                    : {
                                          background: `url('${Icon}')`,
                                          boxShadow: "none",
                                          WebkitBoxShadow: "none",
                                          width: "35px",
                                          height: "30px",
                                          backgroundSize: "contain",
                                          left: "5px",
                                          backgroundRepeat: "no-repeat",
                                      }
                            }
                            key={index}
                        >
                            <h3 className="text-lg font-bold sm:text-3xl">
                                {data.title} |{" "}
                                {data.date2
                                    ? convertDate(data.date) +
                                      " - " +
                                      convertDate(data.date2)
                                    : convertDate(data.date)}
                            </h3>
                            {data.bullets ? (
                                <ul className="list-disc ml-12 mt-9 text-base space-y-4 sm:text-xl">
                                    {data.bullets.map((desc, index) => (
                                        <li key={index}>{desc}</li>
                                    ))}
                                </ul>
                            ) : null}
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default EventTimeLine;
