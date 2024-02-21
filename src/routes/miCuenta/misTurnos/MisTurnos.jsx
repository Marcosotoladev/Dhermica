import React, { useState, useEffect, useRef } from "react";
import { db, auth } from "../../../firebase";
import "./MisTurnos.css"; 

const MisTurnos = () => {
    const [turnos, setTurnos] = useState([]);
    const currentUserRef = useRef(auth.currentUser);

    useEffect(() => {
        const fetchTurnos = async () => {
            if (currentUserRef.current) {
                const currentUserEmail = currentUserRef.current.email;

                // Consulta de los turnos filtrando por correo electrónico del usuario
                const turnosRef = db.collection("turnosUsuarios");
                const turnosSnapshot = await turnosRef
                    .where("correo", "==", currentUserEmail)
                    .get();
                const turnosData = turnosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                console.log("Turnos recuperados de la base de datos:", turnosData);
                console.log("Cantidad de turnos recuperados:", turnosData.length);
                setTurnos(turnosData);
            }
        };

        fetchTurnos();

        // Agregar observador de cambios de autenticación
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                currentUserRef.current = user;
                fetchTurnos();
            }
        });

        // Devolver una función de limpieza para cancelar la suscripción al observador
        return () => unsubscribe();
    }, []);

    return (
        <div className="mis-turnos-container">
            <h1 className="mis-turnos-title">Mis Turnos</h1>
            <table className="mis-turnos-table">
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


















