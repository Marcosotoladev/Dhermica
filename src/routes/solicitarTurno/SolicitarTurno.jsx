import React from 'react'
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

export default SolicitarTurno;