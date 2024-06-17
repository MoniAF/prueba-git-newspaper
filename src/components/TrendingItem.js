// Cards of trending names
import React from 'react';
import './TrendingItem.css';
import image1 from '../imgs/2.png';
import image2 from '../imgs/4.png';
import image3 from '../imgs/5.png';
import image4 from '../imgs/3.png';

const images = {
  1: image1,
  2: image2,
  3: image3,
  4: image4
};

const TrendingItem = ({ id, title, author , getID}) => {
  return (
    <button onClick={() => getID(id)} className="trending-item">
      <img src={images[id]} alt={title} className="trending-item-image" />
      <div className="trending-item-content">
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
    </button>
  );
};

export default TrendingItem;
