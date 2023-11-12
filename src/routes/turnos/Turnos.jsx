
import React, { useState } from 'react';
import './Turnos.css';
import Horarios from './Horarios';
import FormularioTurno from './FormularioTurno';

const Turnos = () => {
  const [fecha, setFecha] = useState(new Date().toISOString().substr(0, 10));

  return (
    <div className="turnos">
      <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} className="date-picker" />
<div className='profesionales'>
      <div className="profesional">
        <h1>Luciana</h1>
        <Horarios profesional="Luciana" fecha={fecha} />
        <FormularioTurno profesional="Luciana" fecha={fecha} />
      </div>
      <div className="profesional">
        <h1>Gisela</h1>
        <Horarios profesional="Gisela" fecha={fecha} />
        <FormularioTurno profesional="Gisela" fecha={fecha} />
      </div>
    </div>
    </div>
  );
};

export default Turnos;
