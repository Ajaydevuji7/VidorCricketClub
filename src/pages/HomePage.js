import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';
import apclLogo from '../assets/apcl-logo.jpg';
import lpclLogo from '../assets/lpcl-logo.jpg';
import ctclLogo from '../assets/ctcl-logo.jpg';

function HomePage() {
    const navigate = useNavigate();
    const leagues = [
        {
            name: 'Austin Premier Cricket League',
            logo: apclLogo,
            url: 'https://cricclubs.com/APCL/viewTeam.do?teamId=341&clubId=5663',
        },
        {
            name: 'Central Texas Cricket League',
            logo: ctclLogo,
            url: 'https://cricclubs.com/CTCL/viewTeam.do?teamId=930&clubId=54',
        },
        {
            name: 'Lonestar Premier Cricket League',
            logo: lpclLogo,
            url: 'https://cricclubs.com/LPCL/viewTeam.do?teamId=492&clubId=1089463',
        },
    ];

    return (
        <div className="vcc-home-container">
            <section className="vcc-intro-section">
                <div className="vcc-intro-content">
                    <h2 className="vcc-title">Welcome to Vidor Cricket Club</h2>
                    <p className="vcc-description">
                        <strong>Vidor Cricket Club</strong>, Austin's premier cricket club, fostering a love for cricket
                        and excellence on and off the field. Join us to experience unity and unmatched teamwork!
                    </p>
                    <div className="vcc-action-buttons">
                        <button className="vcc-button" onClick={() => navigate('/teams')}>Explore Teams</button>
                        <button className="vcc-button" onClick={() => navigate('/contact')}>Join Us</button>
                    </div>
                </div>
            </section>

            <section className="vcc-leagues-section">
                <div className="vcc-leagues-content">
                    <h2 className="vcc-leagues-title">Our Leagues</h2>
                    <p className="vcc-leagues-description">
                        <strong>Vidor Cricket Club</strong> is the <strong>only club in Austin</strong> proudly participating in
                        <strong> three leather ball leagues</strong>, showcasing our commitment to excellence and love for cricket!
                    </p>
                    <div className="vcc-leagues-grid">
                        {leagues.map((league, index) => (
                            <a
                                key={index}
                                href={league.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="vcc-league-card"
                            >
                                <img src={league.logo} alt={`${league.name} Logo`} className="vcc-league-logo" />
                                <div className="vcc-league-name">{league.name}</div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;