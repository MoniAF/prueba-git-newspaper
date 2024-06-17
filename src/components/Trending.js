import React from 'react';
import './Trending.css';
import TrendingItem from './TrendingItem';

const Trending = ({getID}) => {
  const items = [
    {
      id: 1,
      title: 'Horror Inside the Internet!',
      author: 'Nashley Cedeño'
    },
    {
      id: 2,
      title: 'Automation and Robotics Have Taken Control over our Lives',
      author: 'Jessica González'
    },
    {
      id: 3,
      title: 'Artificial Intelligences and Copyright',
      author: 'Luana Salas'
    },
    {
      id: 4,
      title: 'Education and Technological Training',
      author: 'Mónica Artavia'
    }
  ];

  return (
    <div className="trending">
      <h2>Trending</h2>
      <div className="trending-items">
        {items.map(({ id, title, author }) => (
          <TrendingItem key={id} id={id} title={title} author={author} getID={getID}/>
        ))}
      </div>
    </div>
  );
};

export default Trending;
