import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/TeamDetails.css';
import leagues from '../Utility/Leagues.json';
import apclLogo from '../assets/apcl-logo.jpg';
import ctclLogo from '../assets/ctcl-logo.jpg';
import lpclLogo from '../assets/lpcl-logo.jpg';

function TeamDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { team } = location.state || {};

  const logos = {
    1: apclLogo,
    2: ctclLogo,
    3: lpclLogo
  }

  if (!team) {
    return <p>No team data found.</p>;
  }

  // Determine the leagues for the team
  const teamLeagues = leagues.filter((league) => league.teams.includes(team.id));

  return (
    <div className="team-details">
      <div className="team-header">
        <img src={team.logo} alt={team.name} className="team-logo" />
        <div className="team-info">
          <h2>{team.name}</h2>
          <p>{team.description}</p>
        </div>
      </div>

      <h3>Participating Leagues</h3>
      <div className="league-grid">
        {teamLeagues.map((league) => (
          <div
            key={league.id}
            className="league-card"
            onClick={() => navigate(`/teams/${team.id}/leagues/${league.id}`, { state: { league, team } })}
          >
            <img src={logos[league.id]} alt={`${league.name} Logo`} className="league-logo" />
            <h4>{league.name}</h4>
            <p>{league.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamDetails;