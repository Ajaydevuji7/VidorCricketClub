import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Teams from './pages/Teams';
import ContactUs from './pages/ContactUs';
import Achievements from './pages/Achievements';
import TeamDetails from './pages/TeamDetails';
import LeagueDetails from './pages/LeagueDetails';
import Gallery from './components/Gallery';
import AboutUs from './pages/AboutUs';
import Sponsors from './pages/Sponsers';

function App() {
  return (
    <Router basename='/VidorCricketClub'>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/about" element={<AboutUs />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/teams/:teamId" element={<TeamDetails />} />
        <Route path="/teams/:teamId/leagues/:leagueId" element={<LeagueDetails />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/sponsers" element={<Sponsors />} />
      </Routes>
    </Router>
  );
}

export default App;