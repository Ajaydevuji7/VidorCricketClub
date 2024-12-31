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

function App() {
  return (
    <Router basename='/VidorCricketClub'>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/about" element={<Achievements />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/teams/:id" element={<TeamDetails />} />
        <Route path="/leagues/:id" element={<LeagueDetails />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;