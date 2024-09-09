import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import "./SearchTurno.css";
import { parse, format } from 'date-fns';

const SearchTurnos = () => {
  const [nombre, setNombre] = useState("");
  const [turnos, setTurnos] = useState([]);
  const [buscar, setBuscar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleBuscarClick = () => {
    setBuscar(true);
    setIsLoading(true);
    setNoResults(false);
  };

  const formatDuracion = (duracion) => {
    const hours = Math.floor(duracion);
    const minutes = Math.round((duracion - hours) * 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (!nombre || !buscar) {
      setTurnos([]);
      setIsLoading(false);
      setNoResults(false);
      return;
    }

    const unsubscribe = db.collection("turnosLuciana")
      .where("nombre", ">=", nombre)
      .where("nombre", "<=", nombre + '\uf8ff')
      .orderBy("nombre")
      .onSnapshot((snapshot) => {
        const fetchedTurnos = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));

        // Ordenar manualmente por fecha en el frontend
        const sortedTurnos = fetchedTurnos.sort((a, b) => 
          new Date(b.data.fecha) - new Date(a.data.fecha)
        );

        setTurnos(sortedTurnos);
        setIsLoading(false);
        setNoResults(sortedTurnos.length === 0);
      }, (error) => {
        console.error("Error al buscar turnos:", error);
        setIsLoading(false);
        setNoResults(true);
      });

    return () => unsubscribe();
  }, [nombre, buscar]);

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
      <button onClick={handleBuscarClick} className="search-turnos-button">Buscar</button>
      {isLoading ? (
        <div className="loading-indicator">Cargando resultados...</div>
      ) : noResults ? (
        <div className="no-results">No se encontraron resultados para "{nombre}"</div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default SearchTurnos;









