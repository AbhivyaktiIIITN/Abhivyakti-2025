import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Icon from "../../../../public/assets/EventDetail/TimelineIcon.png"

const EventTimeLine = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center relative">
      <div className="text-white p-6 w-full sm:w-1/2">
        <VerticalTimeline layout="1-column-left" lineColor="#B57DFE" className="w-full" >
          <VerticalTimelineElement
            contentStyle={{ background: "none", color: "#fff" ,WebkitBoxShadow:"none",boxShadow:"none"}}
            contentArrowStyle={{ borderRight: "none" ,}}
            iconStyle={{ background: `url('${Icon}')`,boxShadow:"none",WebkitBoxShadow:"none",width:"30px",height:"30px", backgroundSize:"contain", left:"5px", } }
           
          >
            <h3 className="text-3xl font-bold">Registrations Open | 15 Jan 2024</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: "none", color: "#fff" ,WebkitBoxShadow:"none",boxShadow:"none"}}
            contentArrowStyle={{ borderRight: "none" ,}}
            iconStyle={{ background: `url('${Icon}')`,boxShadow:"none",WebkitBoxShadow:"none",width:"30px",height:"30px", backgroundSize:"contain", left:"5px", } }
          >
            <h3 className="text-3xl font-bold">Regestrations Closed  |  04 Feb 2024</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: "none", color: "#fff" ,WebkitBoxShadow:"none",boxShadow:"none"}}
            contentArrowStyle={{ borderRight: "none" ,}}
            iconStyle={{ background: `url('${Icon}')`,boxShadow:"none",WebkitBoxShadow:"none",width:"30px",height:"30px", backgroundSize:"contain", left:"5px", } }
          >
            <h3 className="text-3xl font-bold">Round 1 | 10 Feb 2024</h3>
            <ul className="list-disc ml-12 mt-9 text-xl space-y-4">
              <li>1-1.5 minute performance, sans props.</li>
              <li>8-10 outstanding performers selected for finals.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
          contentStyle={{ background: "none", color: "#fff" ,WebkitBoxShadow:"none",boxShadow:"none"}}
          contentArrowStyle={{ borderRight: "none" ,}}
          iconStyle={{ background: `url('${Icon}')`,boxShadow:"none",WebkitBoxShadow:"none",width:"30px",height:"30px", backgroundSize:"contain", left:"5px", } }
          >
            <h3 className="text-3xl font-bold">Round 2 (Finals) | 10 Feb 2024</h3>
             <ul className="list-disc ml-12 mt-9 text-xl space-y-4">
              <li>4-6 minute performance with at least 2 props.</li>
              <li>Props must be used for at least 10 seconds each.</li>
              <li>
                Dangerous props (fire, blades, sharp mirrors, etc.) are not
                allowed.
              </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
           contentStyle={{ background: "none", color: "#fff" ,WebkitBoxShadow:"none",boxShadow:"none"}}
           contentArrowStyle={{ borderRight: "none" ,}}
           iconStyle={{ background: `url('${Icon}')`,boxShadow:"none",WebkitBoxShadow:"none",width:"30px",height:"30px", backgroundSize:"contain", left:"5px", } }
          >
            <h3 className="text-3xl font-bold">Results Announced | 15 Jan 2024</h3>
            
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default EventTimeLine;
