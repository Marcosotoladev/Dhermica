import React, { useState } from "react";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBriefcase,
  faClock,
  faHourglass,
} from "@fortawesome/free-solid-svg-icons";
import "./FormularioTurno.css";

const FormularioTurno = ({ profesional, fecha }) => {
  const [nombre, setNombre] = useState("");
  const [servicio, setServicio] = useState("");
  const [hora, setHora] = useState("");
  const [duracion, setDuracion] = useState(1);

  const capitalizeName = (name) => {
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const handleNombreChange = (e) => {
    setNombre(capitalizeName(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const turno = { nombre, servicio, hora, fecha, duracion: Number(duracion) };

    db.collection(`turnos${profesional}`)
      .add(turno)
      .then(() => {
        toast.success("Turno agregado con éxito", {
          position: "top-center",
          autoClose: 2000,
        });

        setNombre("");
        setServicio("");
        setHora("");
        setDuracion(1);
      })
      .catch((error) => {
        console.error("Error al agregar el turno: ", error);

        toast.error("Hubo un error al agregar el turno", {
          position: "top-center",
          autoClose: 2000,
        });
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="formulario-turno">
        <div className="input-container">
          <FontAwesomeIcon icon={faUser} className="input-icon" />
          <input
            type="text"
            value={nombre}
            onChange={handleNombreChange}
            placeholder="Nombre"
            required
            className="input"
          />
        </div>
        <div className="input-container">
          <FontAwesomeIcon icon={faBriefcase} className="input-icon" />
          <input
            type="text"
            value={servicio}
            onChange={(e) => setServicio(e.target.value)}
            placeholder="Tratamiento"
            required
            className="input"
          />
        </div>
        <div className="input-container">
          <FontAwesomeIcon icon={faClock} className="input-icon" />
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            min="07:30"
            max="19:30"
            step="1800"
            required
            className="input"
          />
        </div>
        <div className="input-container">
          <FontAwesomeIcon icon={faHourglass} className="input-icon" />
          <select
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
            required
            className="input"
          >
            <option value="0.5">30 minutos</option>
            <option value="1">1 hora</option>
            <option value="1.5">1 hora y 30 minutos</option>
            <option value="2">2 horas</option>
            <option value="2.5">2 horas y 30 minutos</option>
            <option value="3">3 horas</option>
            <option value="3.5">3 horas y 30 minutos</option>
            <option value="4">4 horas</option>
          </select>
        </div>
        <div>
          <button type="submit" className="submit">
            Agregar turno
          </button>
        </div>
      </form>
    </>
  );
};

export default FormularioTurno;
