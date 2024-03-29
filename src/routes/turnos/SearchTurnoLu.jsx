import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import "./SearchTurno.css";
import { parse, format } from 'date-fns';

const SearchTurnos = () => {
  const [nombre, setNombre] = useState("");
  const [turnos, setTurnos] = useState([]);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const formatDuracion = (duracion) => {
    const hours = Math.floor(duracion);
    const minutes = Math.round((duracion - hours) * 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (!nombre) {
      setTurnos([]);
      return;
    }

    const unsubscribe = db.collection("turnosLuciana")
      .orderBy("fecha", "desc")
      .onSnapshot((snapshot) => {
        const filteredTurnos = snapshot.docs
          .map((doc) => ({ id: doc.id, data: doc.data() }))
          .filter(turno => turno.data.nombre.toLowerCase().includes(nombre.toLowerCase()));
        setTurnos(filteredTurnos);
      });

    return () => unsubscribe();
  }, [nombre]);

  return (
    <div className="search-turnos-container">
      <h2 className="search-turnos-title">Buscar Turno Luciana</h2>
      <input
        className="search-turnos-input"
        type="text"
        value={nombre}
        onChange={handleNombreChange}
        placeholder="Ingrese nombre..."
      />
      <h3>Resultados para "{nombre}"</h3>
      <table className="search-turnos-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Nombre</th>
            <th>Servicio</th>
            <th>Tiempo</th>
          </tr>
        </thead>
        <tbody>
          {turnos.map((turno) => (
            <tr key={turno.id}>
              <td>
                {format(parse(turno.data.fecha, 'yyyy-MM-dd', new Date()), 'dd/MM/yy')}
              </td>
              <td>{turno.data.hora}</td>
              <td>{turno.data.nombre}</td> 
              <td>{turno.data.servicio}</td>
              <td>{formatDuracion(turno.data.duracion)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchTurnos;








