import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TeamDetails.css';
import ctclLogo from '../assets/ctcl-logo.jpg';
import apclLogo from '../assets/apcl-logo.jpg';
import lpclLogo from '../assets/lpcl-logo.jpg';

function TeamDetails() {
  const team = {
    id: 1,
    name: 'The MOB - VCC',
    leagues: [
      { id: 1, name: 'CTCL', logo: ctclLogo },
      { id: 2, name: 'APCL', logo: apclLogo },
      { id: 3, name: 'LPCL', logo: lpclLogo },
    ],
  };

  const navigate = useNavigate();

  return (
    <div className="team-details">
      <h2>{team.name}</h2>
      <p>The MOB - VCC participates in the following leagues:</p>
      <div className="league-grid">
        {team.leagues.map((league) => (
          <div
            key={league.id}
            className="league-card"
            onClick={() => navigate(`/leagues/${league.id}`)}
          >
            <img src={league.logo} alt={league.name} className="league-logo" />
            <h4>{league.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamDetails;