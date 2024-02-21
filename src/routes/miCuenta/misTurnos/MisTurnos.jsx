import React, { useState, useEffect } from "react";
import { db, auth } from "../../../firebase";


const MisTurnos = () => {
    const [turnos, setTurnos] = useState([]);

    useEffect(() => {
        const fetchTurnos = async () => {
            if (auth.currentUser) {
                const turnosRef = db.collection("turnosUsuarios");
                const snapshot = await turnosRef.where("nombre", "==", auth.currentUser.displayName).get();
                const turnosData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setTurnos(turnosData);
            }
        };

        fetchTurnos();
    }, []);

    return (
        <div>
            <h1>Mis Turnos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Profesional</th>
                        <th>Hora</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Servicio</th>
                        <th>Duración</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {turnos.map(turno => (
                        <tr key={turno.id}>
                            <td>{turno.fecha}</td>
                            <td>{turno.profesional}</td>
                            <td>{turno.hora}</td>
                            <td>{turno.nombre}</td>
                            <td>{turno.apellido}</td>
                            <td>{turno.servicio}</td>
                            <td>{turno.duracion}</td>
                            <td>{turno.precio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MisTurnos;











