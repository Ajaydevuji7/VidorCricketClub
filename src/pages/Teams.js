import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Teams.css';
import teamLogo from '../assets/mob-vcc-logo.jpg';

function Teams() {
  const teams = [
    {
      id: 1,
      name: 'The MOB - VCC',
      logo: teamLogo,
      description: 'Our flagship team participating in multiple leagues.',
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
            onClick={() => navigate(`/teams/${team.id}`)}
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