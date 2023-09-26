import React, { useEffect, useState } from "react";
import { db } from "../../firebase"; // Asegúrate de importar tu configuración de Firebase

function Tratamientos() {
  const [tratamientos, setTratamientos] = useState([]);

  useEffect(() => {
    // Obtén la colección "tratamientos" desde Firebase Firestore
    const unsubscribe = db.collection("tratamientos").onSnapshot((snapshot) => {
      const tratamientosData = [];
      snapshot.forEach((doc) => {
        // Agrega cada documento de la colección a la matriz de tratamientosData
        tratamientosData.push({ id: doc.id, ...doc.data() });
      });
      // Actualiza el estado con los datos de los tratamientos
      setTratamientos(tratamientosData);

      // Agrega un console.log para verificar los datos
      console.log("Datos de tratamientos:", tratamientosData);
    });

    return () => {
      // Limpia el listener cuando el componente se desmonte
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <h2>Lista de Tratamientos</h2>
      <ul>
        {tratamientos.map((tratamiento) => (
          <li key={tratamiento.id}>
            <strong>Nombre:</strong> {tratamiento.nombre}
            <br />
            <strong>Descripción:</strong> {tratamiento.descripcion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tratamientos;
