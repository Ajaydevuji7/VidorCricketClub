import React from 'react';
import '../styles/Sponsers.css';
import vidorLogo from '../assets/vidor sports.jpg';


function Sponsors() {
  const sponsors = [
    { id: 1, name: 'Vidor Sports', logo: vidorLogo, description: "Austin's own brand" },
  ];

  return (
    <div className="sponsors-page">
      <h1>Our Sponsors</h1>
      <p>We are proud to be supported by these amazing organizations!</p>
      <div className="sponsors-grid">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="sponsor-card">
            <img src={sponsor.logo} alt={`${sponsor.name} Logo`} className="sponsor-logo" />
            <h3>{sponsor.name}</h3>
            <p>{sponsor.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;