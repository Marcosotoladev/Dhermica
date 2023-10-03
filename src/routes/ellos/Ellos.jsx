import React, { useEffect, useState } from "react";
import TreatmentCard from "../tratamientos/components/cardTrata/TreatmentCard";

import "./Ellos.css";

function Ellos() {
  const [ellos, setEllos] = useState([]); // Cambia el nombre de la variable
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerEllos = async () => {
      try {
        const response = await fetch(
          "https://dhermicaestetica-default-rtdb.firebaseio.com/ellos.json" // Cambia la URL para apuntar a la colección "ellos"
        );
        if (!response.ok) {
          throw new Error("No se pudo obtener la información de ellos"); // Cambia el mensaje de error
        }
        const ellosData = await response.json();

        // Convierte los datos de Firebase en un array de objetos
        const ellosArray = Object.keys(ellosData).map((id) => ({
          id,
          ...ellosData[id],
        }));

        setEllos(ellosArray); // Cambia el estado
      } catch (error) {
        console.error("Error al obtener ellos:", error); // Cambia el mensaje de error
        setError("Error al obtener ellos"); // Cambia el mensaje de error
      }
    };

    obtenerEllos();
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          <div className="background-container-ellos">
            <div className="titleEllos">
              PARA ELLOS 
            </div>
            <div className="ellosContainer">
              {ellos.map((ello) => ( // Cambia el nombre de la variable
                <TreatmentCard key={ello.id} tratamiento={ello} /> // Cambia el nombre de la variable
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Ellos;

