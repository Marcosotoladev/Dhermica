import React, { useEffect, useState } from "react";
import TreatmentCard from "../tratamientos/components/cardTrata/TreatmentCard";

import "./Ellas.css";

function Ellas() {
  const [ellas, setEllas] = useState([]); // Cambia el nombre de la variable
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerEllas = async () => {
      try {
        const response = await fetch(
          "https://dhermicaestetica-default-rtdb.firebaseio.com/ellas.json" // Cambia la URL para apuntar a la colección "ellas"
        );
        if (!response.ok) {
          throw new Error("No se pudo obtener la información de ellas"); // Cambia el mensaje de error
        }
        const ellasData = await response.json();

        // Convierte los datos de Firebase en un array de objetos
        const ellasArray = Object.keys(ellasData).map((id) => ({
          id,
          ...ellasData[id],
        }));

        setEllas(ellasArray); // Cambia el estado
      } catch (error) {
        console.error("Error al obtener ellas:", error); // Cambia el mensaje de error
        setError("Error al obtener ellas"); // Cambia el mensaje de error
      }
    };

    obtenerEllas();
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <>
        <div className="background-container-ellas">
          <div className="titleEllas">
           PARA ELLAS {/* Cambia el título */}
          </div>
          <div className="ellasContainer">
            {ellas.map((ella) => ( // Cambia el nombre de la variable
              <TreatmentCard key={ella.id} tratamiento={ella} /> // Cambia el nombre de la variable
            ))}
          </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Ellas;

