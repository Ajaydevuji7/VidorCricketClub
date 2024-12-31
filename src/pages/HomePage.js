import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import apclLogo from '../assets/apcl-logo.jpg';
import lpclLogo from '../assets/lpcl-logo.jpg';
import ctclLogo from '../assets/ctcl-logo.jpg';

function HomePage() {
  const navigate = useNavigate();
  const leagues = [
    {
      name: 'Austin Premier Cricket League',
      logo: apclLogo,
      url: 'https://cricclubs.com/APCL',
    },
    {
      name: 'Central Texas Cricket League',
      logo: ctclLogo,
      url: 'https://cricclubs.com/CTCL',
    },
    {
      name: 'Lonestar Premier Cricket League',
      logo: lpclLogo,
      url: 'https://cricclubs.com/LPCL',
    },
  ];

  return (
    <div className="home">
      <header className="hero">
        <div className="hero-background">
          <div className="hero-content">
            <h1 className="hero-title">Austin's Premier Cricket Club</h1>
            <p className="hero-subtitle">United, Unmatched, Unstoppable</p>
            <div className="hero-buttons">
              <button className="button" onClick={() => navigate('/teams')}>Explore Teams</button>
              <button className="button" onClick={() => navigate('/contact')}>Join Us</button>
            </div>
          </div>
        </div>
      </header>

      <section className="highlight">
        <h2>Our Leagues</h2>
        <p className="highlight-statement">
          <strong>Vidor Cricket Club</strong> is the <strong>only club in Austin</strong> proudly participating in
          <strong> three leather ball leagues</strong>, showcasing our commitment to excellence and love for cricket!
        </p>
        <div className="leagues">
          {leagues.map((league, index) => (
            <a
              key={index}
              href={league.url}
              target="_blank"
              rel="noopener noreferrer"
              className="league-card"
            >
              <img src={league.logo} alt={`${league.name} Logo`} className="league-logo" />
              <div className="league-name">{league.name}</div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;