import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./css/app.css";
import Event from "./Pages/Event/Event";
import Team from "./Pages/Team/Team";
import EventDetail from "./Pages/EventDetail/EventDetail";
import Terms from "./Pages/Terms/Terms";
import Developers from "./Pages/Developer/Developers";
import Loader from "./Components/Loader/loader";
import { HelmetProvider } from "react-helmet-async";

function App() {
    return (
        <HelmetProvider>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/event" element={<Event />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/developers" element={<Developers />} />
                    <Route path="/events/:id" element={<EventDetail />} />
                    <Route path="/terms" element={<Terms />} />
                    {/* <Route path="/loading" element={<Loader/>} /> */}
                </Routes>
            </div>
        </HelmetProvider>
    );
}

export default App;
