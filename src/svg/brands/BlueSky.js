import React from 'react';
import svg from '../../assets/bluesky.svg';

const BlueSky = ({ className, linkTo }) => (
  <a
    title="Follow me on BlueSky"
    className={className}
    href={linkTo}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img className="w-5" src={svg} alt="BlueSky profile" />
  </a>
);

export default BlueSky;
