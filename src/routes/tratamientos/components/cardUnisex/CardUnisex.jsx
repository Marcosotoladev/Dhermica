import React from "react";
import "./CardUnisex.css";

const CardUnisex = ({ tratamiento }) => {
  return (
    <div className="card-unisex">
      <a href={tratamiento.route}>
      <div className="card-unisex-header">
        <div className="card-unisex-name">{tratamiento.name}</div>
      </div>
      <div className="card-unisex-body">
        <img src={tratamiento.img} alt={tratamiento.name} />
      </div>
      <div className="card-unisex-footer">
        <a href={tratamiento.route}>Ver Todos</a>
        <p className="description-unisex">{tratamiento.description}</p>
      </div>
      </a>
    </div>
  );
};

export default CardUnisex;
