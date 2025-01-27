import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./css/app.css";
import Event from "./Pages/Event/Event";
import Team from "./Pages/Team/Team";
import EventDetail from "./Pages/EventDetail/EventDetail";
import Terms from "./Pages/Terms/Terms";
import Developers from "./Pages/Developer/Developers";
import Loader from "./Components/Loader/loader";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/event" element={<Event />} />
                <Route path="/team" element={<Team />} />
                <Route path="/developers" element={<Developers />} />
                <Route path="/events/:id" element={<EventDetail />} />
                <Route
                    path="/eventdetail"
                    element={
                        <EventDetail
                            event={{
                                title: "1",
                                eventheader: {
                                    clubName:
                                        "/assets/EventDetail/estoria/Estoria.png",
                                    eventName:
                                        "/assets/EventDetail/estoria/Monoact.png",
                                    eventDescription:
                                        "/assets/EventDetail/estoria/SoloDrama.png",
                                    ClubLogo:
                                        "/assets/EventDetail/estoria/ClubLogo.png",
                                    bgUrlRight:
                                        "linear-gradient(90deg, #FDFDFB 0%, #9747FF 100%)",
                                    bgUrlLeft:
                                        "url(/assets/EventDetail/estoria/Event-bg.png)",
                                    leftStatueUrl:
                                        "/assets/EventDetail/estoria/statue-left.png",
                                    rightStatueUrl:
                                        "/assets/EventDetail/estoria/statue-right.png",
                                },
                                eventPrize: {
                                    prizeData: [
                                        {
                                            position: "First Place",
                                            prizeAmount: "₹ 25,000",
                                            imageSrc:
                                                "/assets/EventDetail/estoria/First.png",
                                        },
                                        {
                                            position: "Second Place",
                                            prizeAmount: "₹ 15,000",
                                            imageSrc:
                                                "/assets/EventDetail/estoria/Second.png",
                                        },
                                        {
                                            position: "Third Place",
                                            prizeAmount: "₹ 10,000",
                                            imageSrc:
                                                "/assets/EventDetail/estoria/Third.png",
                                        },
                                    ],
                                    additionalPrizes: [
                                        "T-shirts",
                                        "Goodies",
                                        "Swag Pack",
                                        "Certificates",
                                    ],
                                },
                                eventintro: {
                                    deadline: "30 Jan 2023",
                                    teamSize: "1 (solo event)",
                                    fee: "10 Rs/-",
                                    prizePoll: "69Cr",
                                    description:
                                        "Join us for a dance journey where every step is a brushstroke on the canvas of your soul, where the stage is your sanctuary of expression, and where you dance not just with your body, but with your heart and spirit. Don't miss this opportunity to shine and be part of the vibrant cultural tapestry of 'Abhivyakti.'",
                                },
                                eventTimeline: {
                                    events: [
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
                                    ],
                                },
                                eventRulesAndRegulation: {
                                    roundsData: [
                                        {
                                            title: "Round 1:",
                                            rules: [
                                                "Ensure your pre-recorded music is in .mp3 format and adheres to time limits, as violations may lead to penalties.",
                                                "Participants have to submit a video of them performing for 1-1.5 minutes.",
                                                "No props are allowed in this round.",
                                                "The video must be shot on a static camera.",
                                                "The video must not be edited at any point of time.",
                                                "In this round, the costume will be overlooked.",
                                                "The judges' decisions are final, and rule violations can result in disqualification.",
                                            ],
                                        },
                                        {
                                            title: "Round 2:",
                                            rules: [
                                                "Time limit for this round is 4-6 minutes.",
                                                "Participants must prepare their performance with at least 2 distinct props.",
                                                "All dance forms are allowed in this round.",
                                                "Prop usage will be a judging criterion.",
                                            ],
                                            disallowedProps: [
                                                "Fire",
                                                "Blades",
                                                "Sharp Mirrors",
                                                "Scissors",
                                                "Nails",
                                            ],
                                        },
                                    ],
                                    judgingCriteriaData: [
                                        "Choreography",
                                        "Technique",
                                        "Creativity",
                                        "Energy",
                                        "Costume",
                                        "Overall Impact",
                                    ],
                                },

                                eventFaq: {
                                    faqItems: [
                                        {
                                            question:
                                                "What is the event about?",
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
                                            question:
                                                "When is the event scheduled?",
                                            answer: "The event will take place on 10th February 2024.",
                                        },
                                        {
                                            question: "How can I register?",
                                            answer: "You can register on our website by filling out the registration form.",
                                        },
                                    ],
                                },
                                eventContact: {
                                    contacts: [
                                        {
                                            title: "Club Head",
                                            name: "Rahul Gandhi",
                                            phone: "+91 9969496900",
                                            email: "bt96@iiitn.ac.in",
                                        },
                                        {
                                            title: "Contact 2",
                                            name: "John Doe",
                                            phone: "+91 9876543210",
                                            email: "john@iiitn.ac.in",
                                        },
                                        {
                                            title: "Any other Contact",
                                            name: "Jane Smith",
                                            phone: "+91 9123456789",
                                            email: "jane@iiitn.ac.in",
                                        },
                                    ],
                                },
                            }}
                        />
                    }
                />
                <Route path="/terms" element={<Terms />} />
                {/* <Route path="/loading" element={<Loader/>} /> */}
            </Routes>
        </div>
    );
}

export default App;
