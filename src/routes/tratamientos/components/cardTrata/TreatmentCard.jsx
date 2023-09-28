import React from 'react';
import './TreatmentCard.css';

const TreatmentCard = ({ tratamiento }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="avatar">{tratamiento.avatar}</div>
        <div className="card-name">{tratamiento.name}</div>
      </div>
      <div className="card-body">
        <img src={tratamiento.img} alt={tratamiento.name} />
        <p className="description">{tratamiento.description}</p>
      </div>
      <div className="card-footer">
        <a href={tratamiento.url}>Ver más</a>
      </div>
    </div>
  );
};

export default TreatmentCard;
