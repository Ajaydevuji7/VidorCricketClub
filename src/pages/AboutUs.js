import React from 'react';
import '../styles/AboutUs.css';
import sriramImage from '../assets/sriram.JPG';
import maniImage from '../assets/mani.jpg';
import shivamImage from '../assets/shivam-image.jpg'

function AboutUs() {
  const leaders = [
    { name: 'Sriram Devata', role: 'President', image: sriramImage },
    { name: 'Manikanta Chowdary', role: 'Treasurer', image: maniImage }, 
    { name: 'Shivam Gautam', role: 'Secretary', image: shivamImage }, 
  ];

  return (
    <div className="about-us-page">
      <section className="club-info">
        <h2>About Vidor Cricket Club</h2>
        <p>
          Welcome to <strong>Vidor Cricket Club</strong>, Austin’s premier cricket team! Our mission is to foster a love for cricket 
          and promote teamwork and excellence in the sport. We are proud to participate in three leather ball leagues: 
          <strong>CTCL</strong>, <strong>APCL</strong>, and <strong>LPCL</strong>.
        </p>
        <p>
          Since our establishment, we have been committed to building a strong cricketing community and achieving excellence both 
          on and off the field.
        </p>
      </section>

      <section className="leadership">
        <h2>Meet Our Leaders</h2>
        <div className="leaders-grid">
          {leaders.map((leader, index) => (
            <div key={index} className="leader-card">
              <img 
                src={leader.image} 
                alt={leader.image ? leader.name : `${leader.role}`} 
                className="leader-image" 
              />
              <h3>{leader.name}</h3>
              <p>{leader.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutUs;