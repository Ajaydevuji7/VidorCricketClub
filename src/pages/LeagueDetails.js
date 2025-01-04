import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/LeagueDetails.css';
import mobPlayers from '../Utility/mobPlayers.json';
import spartansPlayers from '../Utility/spartansPlayers.json';

function LeagueDetails() {
  const location = useLocation();
  const { league, team } = location.state || {};

  if (!league || !team) {
    return <p>No league or team data found.</p>;
  }

  // Get players based on the team
  const players = team.id === 1 ? mobPlayers : spartansPlayers;

  // Filter players based on the league
  const leaguePlayers = players.filter((player) => player.leagues.includes(league.id)).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="league-details">
      <h2>{league.name}</h2>
      <p>{league.description}</p>

      <h3>Players</h3>
      <div className="player-grid">
        {leaguePlayers.map((player, index) => {
          const leadershipRole = player.leadership?.[league.id];
          return (
            <div key={index} className="player-card">
              <h4>{player.name}</h4>
              <p>Role: {player.primaryRole}</p>
              {leadershipRole && (
                <span
                  className={`player-badge ${
                    leadershipRole === 'Captain' ? 'captain' : 'vice-captain'
                  }`}
                >
                  {leadershipRole === 'Captain' ? 'C' : 'VC'}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LeagueDetails;