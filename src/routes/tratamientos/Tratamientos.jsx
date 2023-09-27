
/*
import React, { useEffect, useState } from 'react';
import CardTrata from './components/cardTrata/CardTrata'; // Asegúrate de que la ruta sea correcta
import { db } from '../../firebase'; // Asegúrate de que la ruta sea correcta
import './Tratamientos.css';

export default function Tratamientos() {
  const [tratamientos, setTratamientos] = useState([]);

  useEffect(() => {
    // Obtén una referencia a la colección 'tratamientos' en Firestore
    const tratamientosRef = db.collection('tratamientos');

    // Consulta todos los tratamientos
    tratamientosRef.get()
      .then((querySnapshot) => {
        const tratamientosData = [];
        querySnapshot.forEach((doc) => {
          tratamientosData.push(doc.data());
        });
        setTratamientos(tratamientosData);
      })
      .catch((error) => {
        console.error('Error al obtener tratamientos de Firestore:', error);
      });
  }, []);

  return (
    <div className='trataContainer'>
      {tratamientos.map((tratamiento, index) => (
        <CardTrata key={index} tratamientoData={tratamiento} />
      ))}
    </div>
  );
}

*/

import React, { useEffect, useState } from 'react';
import TreatmentCard from './components/cardTrata/TreatmentCard'; // Importa el componente TreatmentCard

function Tratamientos() {
  const [tratamientos, setTratamientos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerTratamientos = async () => {
      try {
        const response = await fetch('https://dhermicaestetica-default-rtdb.firebaseio.com/tratamientos.json'); // Reemplaza con la URL de tu base de datos Firebase
        if (!response.ok) {
          throw new Error('No se pudo obtener la información de tratamientos');
        }
        const tratamientosData = await response.json();

        // Convierte los datos de Firebase en un array de objetos
        const tratamientosArray = Object.keys(tratamientosData).map((id) => ({
          id,
          ...tratamientosData[id],
        }));

        setTratamientos(tratamientosArray);
      } catch (error) {
        console.error('Error al obtener los tratamientos:', error);
        setError('Error al obtener los tratamientos');
      }
    };

    obtenerTratamientos();
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          <h1>Tratamientos</h1>
          <div className="cards-container">
            {tratamientos.map((tratamiento) => (
              <TreatmentCard key={tratamiento.id} tratamiento={tratamiento} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Tratamientos;

