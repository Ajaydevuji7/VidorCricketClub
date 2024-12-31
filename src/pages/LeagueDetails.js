import React from 'react';
import { useParams } from 'react-router-dom';
import './LeagueDetails.css';
import players from '../Utility/Players.json';
import leagues from '../Utility/Leagues.json';

function LeagueDetails() {
  const { id } = useParams();

  const league = leagues.find((l) => l.id === parseInt(id));
  const leaguePlayers = players.filter((player) => player.leagues.includes(league.id));

  // Find captain and vice-captain details
  const captain = leaguePlayers.find((player) => player.name === league.captain);
  const viceCaptain = leaguePlayers.find((player) => player.name === league.viceCaptain);

  // Categorize players based on primary role
  const keepers = leaguePlayers.filter((player) => player.primaryRole === 'Keeper');
  const batsmen = leaguePlayers.filter((player) => player.primaryRole === 'Batsman');
  const bowlers = leaguePlayers.filter((player) => player.primaryRole === 'Bowler');
  const allRounders = leaguePlayers.filter((player) => player.primaryRole === 'All-Rounder');

  return (
    <div className="league-details">
      <h2>{league.name}</h2>
      <p>{league.description}</p>

      {/* Captains Section */}
      <h3>Leadership</h3>
      <div className="player-grid">
        {captain && (
          <div className="player-card">
            <h4>{captain.name}</h4>
            <p>Role: Captain</p>
            <p>Primary Role: {captain.primaryRole}</p>
          </div>
        )}
        {viceCaptain && (
          <div className="player-card">
            <h4>{viceCaptain.name}</h4>
            <p>Role: Vice Captain</p>
            <p>Primary Role: {viceCaptain.primaryRole}</p>
          </div>
        )}
      </div>

      <div className="player-grid">
        {keepers.map((player, index) => (
          <div key={index} className="player-card">
            <h4>{player.name}</h4>
            <p>Role: Keeper</p>
          </div>
        ))}
      </div>

      <div className="player-grid">
        {batsmen.map((player, index) => (
          <div key={index} className="player-card">
            <h4>{player.name}</h4>
            <p>Role: Batsman</p>
          </div>
        ))}
      </div>

      <div className="player-grid">
        {bowlers.map((player, index) => (
          <div key={index} className="player-card">
            <h4>{player.name}</h4>
            <p>Role: Bowler</p>
          </div>
        ))}
      </div>

      <div className="player-grid">
        {allRounders.map((player, index) => (
          <div key={index} className="player-card">
            <h4>{player.name}</h4>
            <p>Role: All-Rounder</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeagueDetails;