import React, { useEffect, useState } from "react";
import CardUnisex from './components/cardUnisex/CardUnisex'; // Importa el componente TreatmentCard

import "./Tratamientos.css";

function Tratamientos() {
  const [tratamientos, setTratamientos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerTratamientos = async () => {
      try {
        const response = await fetch(
          "https://dhermicaestetica-default-rtdb.firebaseio.com/tratamientos.json"
        ); // Reemplaza con la URL de tu base de datos Firebase
        if (!response.ok) {
          throw new Error("No se pudo obtener la información de tratamientos");
        }
        const tratamientosData = await response.json();

        // Convierte los datos de Firebase en un array de objetos
        const tratamientosArray = Object.keys(tratamientosData).map((id) => ({
          id,
          ...tratamientosData[id],
        }));

        setTratamientos(tratamientosArray);
      } catch (error) {
        console.error("Error al obtener los tratamientos:", error);
        setError("Error al obtener los tratamientos");
      }
    };

    obtenerTratamientos();
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <>
        <div className="background-container">
          <div className="titleTratamientos">
            TRATAMIENTOS
          </div>
          <div className="trataContainer">
            {tratamientos.map((tratamiento) => (
              <CardUnisex key={tratamiento.id} tratamiento={tratamiento} />
            ))}
          </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Tratamientos;
