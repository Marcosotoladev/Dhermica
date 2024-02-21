import React from 'react';
import './MiCuenta.css';
import MisDatos from './misDatos/MisDatos';
import TurnosUsuario from './turnosUsuario/TurnosUsuario';
import MisTurnos from './misTurnos/MisTurnos';


export const MiCuenta = () => {
    return (
        <>
            <h1>MiCuenta</h1>
            <MisDatos />
            <TurnosUsuario />
            <MisTurnos />
        </>
    )
}

export default MiCuenta;
