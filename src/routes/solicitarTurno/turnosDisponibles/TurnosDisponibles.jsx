import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import "./TurnosDisponibles.css";


const TurnosDisponibles = () => {
  const [fecha, setFecha] = useState("");
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    if (fecha) {
      db.collection("turnosUsuarios")
        .where("fecha", "==", fecha)
        .onSnapshot((snapshot) => {
          setTurnos(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          );
        });
    }
  }, [fecha]);

  const horarios = [];
  for (let i = 7.5; i <= 19.5; i += 0.5) {
    const hora = Math.floor(i);
    const minutos = i % 1 ? "30" : "00";
    horarios.push(`${hora}:${minutos}`);
  }

  const convertirAHora24 = (hora) => {
    const [horas, minutos] = hora.split(":");
    return Number(horas) + Number(minutos) / 60;
  };

  const estaOcupado = (horario) => {
    for (let turno of turnos) {
      const horaTurno = convertirAHora24(turno.data.hora);
      const horaHorario = convertirAHora24(horario);
      if (
        horaHorario >= horaTurno &&
        horaHorario < horaTurno + turno.data.duracion
      ) {
        return turno;
      }
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>

      <div className="turnos-disponibles">
        <div className="title-turnos-disponibles">
          <h2>Turnos Disponibles</h2>
        </div>

        <div className="fecha-input-container">
          <form onSubmit={handleSubmit} className="formulario-fecha">
            <label htmlFor="fecha" className="fecha-label">
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
        </div>

        <div className="horarios-container">
          <table className="horarios-table">
            <thead>
              <tr>
                <th>Hora</th>
                <th>Estado</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Tratamiento</th>
                <th>correo</th>
                <th>profesional</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {horarios.map((horario) => {
                const turno = estaOcupado(horario);
                return (
                  <tr key={horario} className="horario-row">
                    <td>{horario}</td>
                    <td className={`estado ${turno ? "ocupado" : "disponible"}`}>{turno ? "Ocupado" : "Disponible"}</td>
                    <td>{turno ? turno.data.nombre : "-"}</td>
                    <td>{turno ? turno.data.apellido : "-"}</td>
                    <td>{turno ? turno.data.servicio : "-"}</td>
                    <td>{turno ? turno.data.correo : "-"}</td>
                    <td>{turno ? turno.data.profesional : "-"}</td>
                    <td>{turno ? turno.data.precio : "-"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TurnosDisponibles;






