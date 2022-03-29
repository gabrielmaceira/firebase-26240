import React from 'react';
import { Link } from 'react-router-dom';

export const Character = ({ id, name, category, image }) => {
  return (
    <Link to={`/character/${id}`} className="item_card_container">
      <div className={`item_card ${category}-category`}>
        <span>{name}</span>
        <span>Cat: {category}</span>
        <span>
          <img src={image} alt={name} className={'small-img'} />
        </span>
      </div>
    </Link>
  );
};
