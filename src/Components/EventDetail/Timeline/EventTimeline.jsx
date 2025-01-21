import React, { useState } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Icon from "/assets/EventDetail/TimelineIcon.png"
import { convertDate } from './../../../utils/convertDate';

const timelineData = [
    {
        title: "Registrations Open",
        date: new Date("15 Jan 2024"),
    },
    {
        title: "Registrations Closed",
        date: new Date("04 Feb 2024"),
    },
    {
        title: "Round 1",
        date: new Date("10 Feb 2024"),
        description: [
            "1-1.5 minute performance, sans props.",
            "8-10 outstanding performers selected for finals.",
        ],
    },
    {
        title: "Round 2 (Finals)",
        date: new Date("10 Feb 2024"),
        description: [
            "4-6 minute performance with at least 2 props.",
            "Props must be used for at least 10 seconds each.",
            "Dangerous props (fire, blades, sharp mirrors, etc.) are not allowed.",
        ],
    },
    {
        title: "Results Announced",
        date: new Date("15 Jan 2024"),
    }

]

const EventTimeLine = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    for (let i = 0; i < timelineData.length; i++) {
        if (timelineData[i].date.getTime() < new Date().getTime() && activeIndex === -1) {
            setActiveIndex(i);
            break;
        }
    };

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center relative mt-10">
            <div className="text-white p-6 w-full sm:w-1/2">
                <VerticalTimeline layout="1-column-left" lineColor="#B57DFE" className="w-full" >
                    {
                        timelineData.map((data, index) => (

                            <VerticalTimelineElement
                                contentStyle={{ background: "none", color: "#fff", WebkitBoxShadow: "none", boxShadow: "none", paddingLeft: "7.5px", padding: "0" }}
                                contentArrowStyle={{ borderRight: "none", }}
                                iconStyle={
                                    activeIndex === index ? { background: "white", boxShadow: "none", WebkitBoxShadow: "none", width: "30px", height: "30px", backgroundSize: "contain", left: "5px", top: "1px", backgroundRepeat: "no-repeat", animation: "pulse1 2s infinite" } :
                                        { background: `url('${Icon}')`, boxShadow: "none", WebkitBoxShadow: "none", width: "35px", height: "30px", backgroundSize: "contain", left: "5px", backgroundRepeat: "no-repeat" }}
                                key={index}

                            >
                                <h3 className="text-lg font-bold sm:text-3xl">{data.title} | {convertDate(data.date)}</h3>
                                {
                                    data.description ? (
                                        <ul className="list-disc ml-12 mt-9 text-base space-y-4 sm:text-xl">
                                            {data.description.map((desc, index) => (
                                                <li key={index}>{desc}</li>
                                            ))}
                                        </ul>
                                    ) : null

                                }
                            </VerticalTimelineElement>
                        ))
                    }

                    {/* <VerticalTimelineElement
            contentStyle={{ background: "none", color: "#fff", WebkitBoxShadow: "none", boxShadow: "none" }}
            contentArrowStyle={{ borderRight: "none", }}
            iconStyle={{ background: `url('${Icon}')`, boxShadow: "none", WebkitBoxShadow: "none", width: "35px", height: "30px", backgroundSize: "contain", left: "5px", backgroundRepeat: "no-repeat" }}

          >
            <h3 className="text-lg font-bold sm:text-3xl">Registrations Open | 15 Jan 2024</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: "none", color: "#fff", WebkitBoxShadow: "none", boxShadow: "none" }}
            contentArrowStyle={{ borderRight: "none", }}
            iconStyle={{ background: `url('${Icon}')`, boxShadow: "none", WebkitBoxShadow: "none", width: "35px", height: "30px", backgroundSize: "contain", left: "5px", backgroundRepeat: "no-repeat" }}
          >
            <h3 className="text-lg sm:text-3xl font-bold">Regestrations Closed  |  04 Feb 2024</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: "none", color: "#fff", WebkitBoxShadow: "none", boxShadow: "none" }}
            contentArrowStyle={{ borderRight: "none", }}
            iconStyle={{ background: `url('${Icon}')`, boxShadow: "none", WebkitBoxShadow: "none", width: "35px", height: "30px", backgroundSize: "contain", left: "5px", backgroundRepeat: "no-repeat" }}
          >
            <h3 className="text-lg sm:text-3xl  font-bold">Round 1 | 10 Feb 2024</h3>
            <ul className="list-disc ml-12 mt-9 text-base space-y-4 sm:text-xl">
              <li>1-1.5 minute performance, sans props.</li>
              <li>8-10 outstanding performers selected for finals.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: "none", color: "#fff", WebkitBoxShadow: "none", boxShadow: "none" }}
            contentArrowStyle={{ borderRight: "none", }}
            iconStyle={{ background: `url('${Icon}')`, boxShadow: "none", WebkitBoxShadow: "none", width: "35px", height: "30px", backgroundSize: "contain", left: "5px", backgroundRepeat: "no-repeat" }}
          >
            <h3 className="text-lg sm:text-3xl font-bold">Round 2 (Finals) | 10 Feb 2024</h3>
            <ul className="list-disc ml-12 mt-9 sm:text-xl text-base space-y-4">
              <li>4-6 minute performance with at least 2 props.</li>
              <li>Props must be used for at least 10 seconds each.</li>
              <li>
                Dangerous props (fire, blades, sharp mirrors, etc.) are not
                allowed.
              </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: "none", color: "#fff", WebkitBoxShadow: "none", boxShadow: "none" }}
            contentArrowStyle={{ borderRight: "none", }}
            iconStyle={{ background: `url('${Icon}')`, boxShadow: "none", WebkitBoxShadow: "none", width: "35px", height: "30px", backgroundSize: "contain", left: "5px", backgroundRepeat: "no-repeat" }}
          >
            <h3 className="text-lg sm:text-3xl font-bold">Results Announced | 15 Jan 2024</h3>

          </VerticalTimelineElement> */}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default EventTimeLine;
