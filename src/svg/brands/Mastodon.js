import React from 'react';
import svg from '../../assets/mastodon.svg';

const Mastodon = ({ className, linkTo }) => (
    <a
        title="Follow me on Mastodon"
        className={className}
        href={linkTo}
        target="_blank"
        rel="noopener noreferrer"
    >
        <img className="w-5" src={svg} alt="Mastodon profile" />
    </a>
);

export default Mastodon;
