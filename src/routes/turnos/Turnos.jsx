import React, { useState } from "react";
import "./Turnos.css";
import HorariosLuciana from "./HorariosLuciana";
import HorariosGisela from "./HorariosGisela";

// Importa el ícono de calendario de Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const Turnos = () => {
  const [fecha, setFecha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fecha);
  };

  return (
    <div className="turnos">
      <div className="title-turnos">
        <h1>Turnos</h1>
      </div>

      <form onSubmit={handleSubmit} className="formulario-fecha">
        <label htmlFor="fecha">
          <h2>Selecciona una fecha:</h2>
        </label>
        <div className="input-container">
          <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" />
          <input
            type="date"
            id="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
            className="input-date"
          />
        </div>
      </form>

      <div className="horarios-turnos-container">
        <div className="columna">
          <HorariosLuciana fecha={fecha} />
        </div>
        <div className="columna">
          <HorariosGisela fecha={fecha} />
        </div>
      </div>
    </div>
  );
};

export default Turnos;
