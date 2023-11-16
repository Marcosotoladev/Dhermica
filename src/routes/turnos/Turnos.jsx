import React, { useState } from "react";
import "./Turnos.css";
import HorariosLuciana from "./HorariosLuciana";
import HorariosGisela from "./HorariosGisela";

const Turnos = () => {
  const [fecha, setFecha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fecha);
  };

  return (
    <div className="turnos">
      <div className="title-turnos">
        {" "}
        <h1>Turnos</h1>
      </div>

      <form onSubmit={handleSubmit} className="formulario-fecha">
        <label htmlFor="fecha">
          <h2>Selecciona una fecha:</h2>
        </label>
        <input
          type="date"
          id="fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
          className="input-date"
        />
      </form>
      {fecha && (
        <div className="horarios-turnos">
          <HorariosLuciana fecha={fecha} />
          <HorariosGisela fecha={fecha} />
        </div>
      )}
    </div>
  );
};

export default Turnos;
