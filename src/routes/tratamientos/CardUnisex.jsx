import React from 'react';
import './CardUnisex.css';

const CardUnisex = ({ tratamiento }) => {
  return (
    <div className="card-unisex">
      <div className="card-unisex-header">
        <div className="card-unisex-name">{tratamiento.name}</div>
      </div>
      <div className="card-unisex-body">
        <img src={tratamiento.img} alt={tratamiento.name} />
        <p className="description-unisex">{tratamiento.description}</p>
      </div>
      <div className="card-unisex-footer">
        <a href={tratamiento.url}>Ver más</a>
      </div>
    </div>
  );
};

export default CardUnisex;
