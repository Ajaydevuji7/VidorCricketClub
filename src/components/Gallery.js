import React from 'react';
import './Gallery.css';
import clubPhoto1 from '../assets/gallery/club/club-photo1.jpg';
import clubPhoto2 from '../assets/gallery/club/club-photo2.jpg';
import ctclPhoto1 from '../assets/gallery/ctcl/ctcl-photo1.jpg';
import apclPhoto1 from '../assets/gallery/apcl/apcl-photo1.jpg';

function Gallery() {
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <p>Explore moments from our club and league teams.</p>

      {/* Club Photos Section */}
      <section className="gallery-section">
        <h2>Club Highlights</h2>
        <div className="gallery-grid">
          <img src={clubPhoto1} alt="Club Highlight 1" className="gallery-photo" />
          <img src={clubPhoto2} alt="Club Highlight 2" className="gallery-photo" />
        </div>
      </section>

      {/* League-Specific Photos Section */}
      <section className="gallery-section">
        <h2>League Photos</h2>

        <div className="league-gallery">
          <h3>CTCL</h3>
          <div className="gallery-grid">
            <img src={ctclPhoto1} alt="CTCL Highlight 1" className="gallery-photo" />
          </div>
        </div>

        <div className="league-gallery">
          <h3>APCL</h3>
          <div className="gallery-grid">
            <img src={apclPhoto1} alt="APCL Highlight 1" className="gallery-photo" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;