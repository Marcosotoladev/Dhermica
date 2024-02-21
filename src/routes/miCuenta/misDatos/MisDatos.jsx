import React, { useState, useEffect } from "react";
import { auth, db } from "../../../firebase";
import './MisDatos.css'; // Importar estilos CSS

const MisDatos = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                cargarDatosUsuario(user.uid);
            } else {
                setUserData(null); // Reiniciar los datos del usuario si no hay usuario autenticado
            }
        });

        return () => unsubscribe();
    }, []);

    const cargarDatosUsuario = async (uid) => {
        try {
            const userDoc = await db.collection("users").doc(uid).get();
            const userData = userDoc.data();
            if (userData) {
                setUserData(userData);
            }
        } catch (error) {
            console.error("Error al cargar los datos del usuario:", error);
        }
    };

    return (
        <div className="mis-datos-container">
            <h1>Mis Datos</h1>
            {userData && (
                <table className="user-data-table">
                    <tbody>
                        <tr>
                            <td>Nombre:</td>
                            <td>{userData.firstName}</td>
                        </tr>
                        <tr>
                            <td>Apellido:</td>
                            <td>{userData.lastName}</td>
                        </tr>
                        <tr>
                            <td>Teléfono:</td>
                            <td>{userData.phone}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{userData.email}</td>
                        </tr>
                        <tr>
                            <td>Cumpleaños:</td>
                            <td>{userData.birthday}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MisDatos;