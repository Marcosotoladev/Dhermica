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
            <th>Nombre</th> {/* Agregamos la columna del nombre */}
            <th>Servicio</th>
            <th>Duración</th>
          </tr>
        </thead>
        <tbody>
          {turnos.map((turno) => (
            <tr key={turno.id}>
              <td>
                {format(parse(turno.data.fecha, 'yyyy-MM-dd', new Date()), 'dd/MM/yy')}
              </td>
              <td>{turno.data.nombre}</td> {/* Mostramos el nombre del turno */}
              <td>{turno.data.servicio}</td>
              <td>{turno.data.duracion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchTurnos;








