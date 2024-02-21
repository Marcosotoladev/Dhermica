import React, { useState, useEffect } from "react";
import './TurnosUsuario.css';
import { db, auth } from "../../../firebase";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faBriefcase,
    faClock,
    faHourglass,
    faCalendar,
    faMoneyBillAlt,
    faUserMd
} from "@fortawesome/free-solid-svg-icons";

const TurnosUsuario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [servicio, setServicio] = useState("");
    const [hora, setHora] = useState("");
    const [fecha, setFecha] = useState("");
    const [duracion, setDuracion] = useState(1);
    const [profesional, setProfesional] = useState("");
    const [precio, setPrecio] = useState("");
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const cargarDatosUsuario = async () => {
        if (auth.currentUser) {
            const userDoc = await db.collection("users").doc(auth.currentUser.uid).get();
            const userData = userDoc.data();
            if (userData) {
                setNombre(userData.firstName || "");
                setApellido(userData.lastName || "");
            }
        }
    };

    useEffect(() => {
        cargarDatosUsuario();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const turno = {
            nombre,
            apellido,
            servicio,
            hora,
            fecha,
            duracion: Number(duracion),
            profesional,
            precio
        };

        db.collection('turnosUsuarios')
            .add(turno)
            .then(() => {
                toast.success("Turno agregado con éxito", {
                    position: "top-center",
                    autoClose: 2000,
                });

                setNombre("");
                setApellido("");
                setServicio("");
                setHora("");
                setFecha("");
                setDuracion(1);
                setProfesional("");
                setPrecio("");
            })
            .catch((error) => {
                console.error("Error al agregar el turno: ", error);
                toast.error("Hubo un error al agregar el turno", {
                    position: "top-center",
                    autoClose: 2000,
                });
            });
    };

    const toggleFormulario = () => {
        setMostrarFormulario(!mostrarFormulario);
        if (!mostrarFormulario) {
            cargarDatosUsuario(); // Cargar datos del usuario cuando se muestra el formulario
        }
    };

    return (
        <>
            <button onClick={toggleFormulario} className="agendar-turno-btn">
                {mostrarFormulario ? "Cerrar Formulario" : "+ Agendar Turno"}
            </button>
            {mostrarFormulario && (
                <form onSubmit={handleSubmit} className="turnos-usuario-container">
                    <div className="input-container">
                        <FontAwesomeIcon icon={faCalendar} className="input-icon" />
                        <input
                            type="date"
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                            required
                            className="input"
                        />
                    </div>
                    <div className="input-container">
                        <FontAwesomeIcon icon={faUserMd} className="input-icon" />
                        <input
                            type="text"
                            value={profesional}
                            onChange={(e) => setProfesional(e.target.value)}
                            placeholder="Profesional"
                            required
                            className="input"
                        />
                    </div>
                    <div className="input-container">
                        <FontAwesomeIcon icon={faClock} className="input-icon" />
                        <input
                            type="time"
                            value={hora}
                            onChange={(e) => setHora(e.target.value)}
                            min="07:30"
                            max="19:30"
                            step="1800"
                            required
                            className="input"
                        />
                    </div>
                    <div className="input-container">
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                        <input
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            placeholder="Nombre"
                            required
                            className="input"
                        />
                    </div>
                    <div className="input-container">
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                        <input
                            type="text"
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)}
                            placeholder="Apellido"
                            required
                            className="input"
                        />
                    </div>
                    <div className="input-container">
                        <FontAwesomeIcon icon={faBriefcase} className="input-icon" />
                        <input
                            type="text"
                            value={servicio}
                            onChange={(e) => setServicio(e.target.value)}
                            placeholder="Tratamiento"
                            required
                            className="input"
                        />
                    </div>
                    <div className="input-container">
                        <FontAwesomeIcon icon={faHourglass} className="input-icon" />
                        <select
                            value={duracion}
                            onChange={(e) => setDuracion(e.target.value)}
                            required
                            className="input"
                        >
                            <option value="0.5">30 minutos</option>
                            <option value="1">1 hora</option>
                            <option value="1.5">1 hora y 30 minutos</option>
                            <option value="2">2 horas</option>
                            <option value="2.5">2 horas y 30 minutos</option>
                            <option value="3">3 horas</option>
                            <option value="3.5">3 horas y 30 minutos</option>
                            <option value="4">4 horas</option>
                        </select>
                    </div>

                    <div className="input-container">
                        <FontAwesomeIcon icon={faMoneyBillAlt} className="input-icon" />
                        <input
                            type="number"
                            value={precio}
                            onChange={(e) => setPrecio(e.target.value)}
                            placeholder="Precio"
                            required
                            className="input"
                        />
                    </div>
                    <div>
                        <button type="submit" className="submit">
                            Agregar turno
                        </button>
                    </div>
                </form>
            )}
        </>
    );
};

export default TurnosUsuario;






