import React, { useState } from 'react';
import { db } from '../../firebase';
import './FormularioTurno.css'; // Asegúrate de tener un archivo CSS asociado

const FormularioTurno = ({ profesional, fecha }) => {
  const [nombre, setNombre] = useState('');
  const [servicio, setServicio] = useState('');
  const [hora, setHora] = useState('');
  const [duracion, setDuracion] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const turno = { nombre, servicio, hora, fecha, duracion: Number(duracion) };

    db.collection(`turnos${profesional}`).add(turno)
      .then(() => {
        setNombre('');
        setServicio('');
        setHora('');
        setDuracion(1);
      })
      .catch((error) => {
        console.error("Error al agregar el turno: ", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-turno">
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre del cliente" required className="input" />
      <input type="text" value={servicio} onChange={(e) => setServicio(e.target.value)} placeholder="Servicio solicitado" required className="input" />
      <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} min="07:30" max="19:30" step="1800" required className="input" />
      <select value={duracion} onChange={(e) => setDuracion(e.target.value)} required className="input">
        <option value="0.5">30 minutos</option>
        <option value="1">1 hora</option>
        <option value="1.5">1 hora y 30 minutos</option>
        <option value="2">2 horas</option>
        <option value="2.5">2 horas y 30 minutos</option>
        <option value="3">3 horas</option>
        <option value="3.5">3 horas y 30 minutos</option>
        <option value="4">4 horas</option>
      </select>
      <button type="submit" className="submit">Agregar turno</button>
    </form>
  );
};

export default FormularioTurno;






