import React from 'react';
import './Achievements.css';

function Achievements() {
  const leagues = [
    {
      name: 'CTCL',
      achievements: [
        {
          year: '2022',
          season: 'Fall',
          result: '🏅 League #5',
        },
        {
          year: '2023',
          season: 'Spring',
          result: '🥈 Runners',
        },
        {
          year: '2024',
          season: 'Summer T20 Finals',
          result: '🥇 Champions',
        },
      ],
    },
    {
      name: 'APCL',
      achievements: [
        {
          year: '2023',
          season: 'Spring',
          result: '🥈 Runners',
        },
        {
          year: '2024',
          season: 'Spring',
          result: 'Quarter-Finals',
        },
      ],
    },
    {
      name: 'LPCL',
      achievements: [
        {
          year: '2024',
          season: 'Spring',
          result: 'Quarter-Finals',
        },
      ],
    },
  ];

  return (
    <div className="achievements-page">
      <h2>🏏 Achievements - Vidor Cricket Club</h2>
      <div className="leagues-grid">
        {leagues.map((league, index) => (
          <div key={index} className="league-card">
            <h3>{league.name}</h3>
            <div className="achievements-list">
              {league.achievements.map((achievement, i) => (
                <div key={i} className="achievement-card">
                  <h4>{achievement.year}</h4>
                  <p>{achievement.season}</p>
                  <p className="result">{achievement.result}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;