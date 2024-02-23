import React from 'react';
import './MiCuenta.css';
import MisDatos from './misDatos/MisDatos';
import MisTurnos from './misTurnos/MisTurnos';


export const MiCuenta = () => {
    return (
        <>
            <h1>MiCuenta</h1>
            <MisDatos />
            <MisTurnos />
        </>
    )
}

export default MiCuenta;
