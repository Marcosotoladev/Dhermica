/* import React from 'react'
import './SolicitarTurno.css'
import TurnosUsuario from './turnosUsuario/TurnosUsuario'
import TurnosDisponibles from './turnosDisponibles/TurnosDisponibles'

const SolicitarTurno = () => {
    return (
        <>
            <h1>Solicitar Turno</h1>
            <TurnosUsuario />
            <TurnosDisponibles />
        </>
    )
}

export default SolicitarTurno; */

import React, { useState } from 'react';

const SolicitarTurno = () => {
  const [selectedCells, setSelectedCells] = useState([]);

  // Función para manejar el cambio en la casilla de verificación
  const handleCheckboxChange = (e, cell) => {
    if (e.target.checked) {
      setSelectedCells([...selectedCells, cell]);
    } else {
      setSelectedCells(selectedCells.filter(selectedCell => selectedCell !== cell));
    }
  };

  // Función para manejar el envío de los datos de las casillas seleccionadas
  const handleEnviarClick = () => {
    console.log('Casillas seleccionadas:', selectedCells);
    // Aquí puedes realizar cualquier acción con los datos, como enviarlos a través de una solicitud HTTP
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>apa1</th>
            <th>apa2</th>
            <th>apa3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>zona1 <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 'zona1')} /></td>
            <td><input type="checkbox" onChange={(e) => handleCheckboxChange(e, 'apa1-zona1')} /></td>
            <td><input type="checkbox" onChange={(e) => handleCheckboxChange(e, 'apa2-zona1')} /></td>
            <td><input type="checkbox" onChange={(e) => handleCheckboxChange(e, 'apa3-zona1')} /></td>
          </tr>
          <tr>
            <td>zona2 <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 'zona2')} /></td>
            <td><input type="checkbox" onChange={(e) => handleCheckboxChange(e, 'apa1-zona2')} /></td>
            <td><input type="checkbox" onChange={(e) => handleCheckboxChange(e, 'apa2-zona2')} /></td>
            <td><input type="checkbox" onChange={(e) => handleCheckboxChange(e, 'apa3-zona2')} /></td>
          </tr>
          <tr>
            <td>zona3 <input type="checkbox" onChange={(e) => handleCheckboxChange(e, 'zona3')} /></td>
            <td><input type="checkbox" onChange={(e) => handleCheckboxChange(e, 'apa1-zona3')} /></td>
            <td><input type="checkbox" onChange={(e) => handleCheckboxChange(e, 'apa2-zona3')} /></td>
            <td><input type="checkbox" onChange={(e) => handleCheckboxChange(e, 'apa3-zona3')} /></td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleEnviarClick}>Enviar</button>
    </div>
  );
};

export default SolicitarTurno;
