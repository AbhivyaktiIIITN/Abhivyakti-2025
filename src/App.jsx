import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './css/app.css'
import Event from './Pages/Event';
import Team from './Pages/Team';
import EventDetail from './Pages/EventDetail';

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/event" element={<Event/>} />
                <Route path="/team" element={<Team />} />
                <Route path="/eventdetail" element={<EventDetail />} />
            </Routes>
        </div>
    )
}

export default App