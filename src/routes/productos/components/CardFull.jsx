import React from 'react';
import D from './D.png'
import './CardFull.css';

function Card() {
  return (
    <div className="card">
      <img src={D} alt="Paella dish" />
      <div className="card-content">
        <h2>Shrimp and Chorizo Paella</h2>
        <p className="subheader">September 14, 2016</p>
        <p>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </p>
        <div className="card-actions">
          <button className="favorite-button">Favorite</button>
          <button className="share-button">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
