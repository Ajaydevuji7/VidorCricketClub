import React, {useEffect} from 'react';
import '../styles/Sponsors.css';
import vidorLogo from '../assets/sponsors/vidor sports.jpg';
import alphosoftLogo from '../assets/sponsors/alphosoft.jpg';
import godavariLogo from '../assets/sponsors/godavari.jpg';
import huttuSpiceRouteLogo from '../assets/sponsors/hutto-spice-route.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Sponsors() {
useEffect(() => {
    document.title = "Sponsors | Vidor Cricket Club";
  }, []);

  const sponsors = [
    { id: 1, name: 'AlphoSoft INC', logo: alphosoftLogo, url: 'https://alphosoft.com/' },
    { id: 2, name: 'Godavari', logo: godavariLogo, url: 'https://godavarius.com/austin' },
    { id: 3, name: 'Vidor Sports', logo: vidorLogo, url: '' },
    {id: 4, name: 'Hutto Spice Route', logo: huttuSpiceRouteLogo, url: '' },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
      <div className="sponsors-page">
        <h1>Our Sponsors</h1>
        <p>We are proud to be supported by these amazing organizations!</p>
        <Carousel
          swipeable={true}
          draggable={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={500}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          responsive={responsive}
        >
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              style={{ pointerEvents: sponsor.url ? 'auto' : 'none' }}
              className="sponsor-logo-container"
            >
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} Logo`}
                className="sponsor-logo"
              />
            </a>
          ))}
        </Carousel>
      </div>
    );
  }

export default Sponsors;