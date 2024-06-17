//Main image y main title
import React from 'react';
import './Banner.css';
import bannerImage from '../imgs/1.png';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <section>
          <h2>We are your confidently technology newspaper</h2>
          <p>The Impact of Problems in Technological Advancements</p>
        </section>
      </div>
      <img src={bannerImage} alt="Banner" className="banner-image" />
    </div>
  );
};

export default Banner;
