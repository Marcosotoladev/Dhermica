import React from 'react';
import D from './D.png'
import './CardFull.css';

function Card() {
  return (
    <div className="card">
      <img src={D} alt="Paella dish" />
      <div className="card-content">
        <h1>Shrimp and Chorizo Paella</h1>
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
