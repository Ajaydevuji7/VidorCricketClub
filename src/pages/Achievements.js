import React from 'react';
import '../styles/Achievements.css';
import lpclImage from '../assets/lpcl-logo.jpg';
import apclImage from '../assets/apcl-logo.jpg';
import ctclImage from '../assets/ctcl-logo.jpg';

function Achievements() {
  const majorAchievements = [
    {
      name: 'APCL',
      image: apclImage,
      achievements: [
        { year: '2023', season: 'Spring', result: '🥈 Runners' },
      ],
    },
    {
      name: 'CTCL',
      image: ctclImage,
      achievements: [
        { year: '2023', season: 'Spring', result: '🥈 Runners' },
        { year: '2024', season: 'Spring', result: '🥈 Runners' },
        { year: '2024', season: 'Fall', result: '🏆 Winners' },
      ],
    },
  ];

  const otherAchievements = [
    {
      name: 'APCL',
      image: apclImage,
      achievements: [
        { year: '2023', season: 'Fall', result: 'Playoffs' },
        { year: '2024', season: 'Spring', result: 'Playoffs' },
      ],
    },
    {
      name: 'LPCL',
      image: lpclImage,
      achievements: [
        { year: '2024', season: 'Spring', result: 'Playoffs' },
      ],
    },
  ];

  return (
    <div className="achievements-page">
      <h2 className="achievements-title">🏏 Achievements - Vidor Cricket Club</h2>

      <h3 className="achievements-subtitle">Major Achievements</h3>
      <div className="achievements-grid">
        {majorAchievements.map((league) => (
          <div key={league.name} className="achievement-card">
            <div
              className="achievement-image"
              style={{ backgroundImage: `url(${league.image})` }}
            ></div>
            <div className="achievement-content">
              <h3 className="achievement-league">{league.name}</h3>
              <ul className="achievement-list">
                {league.achievements.map((achievement, idx) => (
                  <li key={idx} className="achievement-item">
                    <strong>{achievement.year}:</strong> {achievement.season} -{' '}
                    <span className="achievement-result">{achievement.result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <h3 className="achievements-subtitle">Other Achievements</h3>
      <div className="achievements-grid">
        {otherAchievements.map((league) => (
          <div key={league.name} className="achievement-card">
            <div
              className="achievement-image"
              style={{ backgroundImage: `url(${league.image})` }}
            ></div>
            <div className="achievement-content">
              <h3 className="achievement-league">{league.name}</h3>
              <ul className="achievement-list">
                {league.achievements.map((achievement, idx) => (
                  <li key={idx} className="achievement-item">
                    <strong>{achievement.year}:</strong> {achievement.season} -{' '}
                    <span className="achievement-result">{achievement.result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;