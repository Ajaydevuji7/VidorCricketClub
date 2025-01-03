import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Teams.css';
import mobLogo from '../assets/mob-vcc-logo.jpg';
import spartansLogo from '../assets/spartans-vcc.jpg';

function Teams() {
  const teams = [
    {
      id: 1,
      name: 'The MOB - VCC',
      logo: mobLogo,
      description: 'Our flagship team participating in multiple leagues.',
    },
    {
      id: 2,
      name: 'Spartans - VCC',
      logo: spartansLogo,
      description: 'Our second flagship team participating in multiple leagues.',
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="teams-page">
      <h2>Our Teams</h2>
      <div className="team-grid">
        {teams.map((team) => (
          <div
            key={team.id}
            className="team-card"
            onClick={() => navigate(`/teams/${team.id}`, { state: { team } })}
          >
            <img src={team.logo} alt={team.name} className="team-logo" />
            <h3>{team.name}</h3>
            <p>{team.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;