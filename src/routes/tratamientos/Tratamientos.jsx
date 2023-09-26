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

