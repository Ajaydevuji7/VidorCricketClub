import React, {useEffect} from 'react';
import './Gallery.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function importAll(r) {
  return r.keys().map(r);
}

// Import images dynamically from respective folders
const clubPhotos = importAll(require.context('../assets/gallery/club', false, /\.(png|jpe?g|svg)$/));
const apclPhotos = importAll(require.context('../assets/gallery/apcl', false, /\.(png|jpe?g|svg)$/));
const ctclPhotos = importAll(require.context('../assets/gallery/ctcl', false, /\.(png|jpe?g|svg)$/));
const lpclPhotos = importAll(require.context('../assets/gallery/lpcl', false, /\.(png|jpe?g|svg)$/));

// Responsive settings for react-multi-carousel
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const GallerySection = ({ title, photos }) => (
  <section className="gallery-section">
    <h2>{title}</h2>
    <Carousel
      swipeable={true}
      draggable={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      responsive={responsive}
      showDots={true}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
    >
      {photos.map((photo, index) => (
        <div key={index} className="gallery-photo-container">
          <img
            src={photo}
            alt={`${title} Highlight ${index + 1}`}
            className="gallery-photo"
          />
        </div>
      ))}
    </Carousel>
  </section>
);

function Gallery() {
useEffect(() => {
    document.title = "Gallery | Vidor Cricket Club";
  }, []);
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <p>Explore moments from our club and league teams.</p>

      <GallerySection title="Club Highlights" photos={clubPhotos} />
      <GallerySection title="CTCL Highlights" photos={ctclPhotos} />
      <GallerySection title="LPCL Highlights" photos={lpclPhotos} />
      <GallerySection title="APCL Highlights" photos={apclPhotos} />
    </div>
  );
}

export default Gallery;