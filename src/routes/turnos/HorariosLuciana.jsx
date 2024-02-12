import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import FormularioTurno from "./FormularioTurno";
import "./HorariosLuciana.css"; // Importar el archivo de estilos
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HorariosLuciana = ({ fecha }) => {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    const profesional = "Luciana";
    db.collection(`turnos${profesional}`)
      .where("fecha", "==", fecha)
      .onSnapshot((snapshot) => {
        setTurnos(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, [fecha]);

  const horarios = [];
  for (let i = 7.5; i <= 19.5; i += 0.5) {
    const hora = Math.floor(i);
    const minutos = i % 1 ? "30" : "00";
    horarios.push(`${hora}:${minutos}`);
  }

  const eliminarTurno = (id) => {
    const profesional = "Luciana";
  
    // Mostrar un cuadro de diálogo de confirmación
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este turno?');

    // Verificar si el usuario confirmó la eliminación
    if (confirmacion) {
      db.collection(`turnos${profesional}`)
        .doc(id)
        .delete()
        .then(() => {
          toast.success('Turno eliminado con éxito', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          });
          console.log("Turno eliminado con éxito");
        })
        .catch((error) => {
          console.error("Error al eliminar el turno: ", error);
        });
    }
  };

  const convertirAHora24 = (hora) => {
    const [horas, minutos] = hora.split(":");
    return Number(horas) + Number(minutos) / 60;
  };

  const estaOcupado = (horario) => {
    for (let turno of turnos) {
      const horaTurno = convertirAHora24(turno.data.hora);
      const horaHorario = convertirAHora24(horario);
      if (
        horaHorario >= horaTurno &&
        horaHorario < horaTurno + turno.data.duracion
      ) {
        return turno;
      }
    }
    return null;
  };

  const redirectToSearchTurno = () => {
    window.location.href = "/SearchTurnoLu";
  };

  return (
    <>
      <ToastContainer />
      <div className="horarios">
        <div className="title-horarios-lu">
          <h2>Luciana</h2>
        </div>
        <div>
          <button id="searchButton" onClick={redirectToSearchTurno}>Buscar Turno</button>
        </div>
        <div className="horarios-container">
          <table className="horarios-table">
            <thead>
              <tr>
                <th>Hora</th>
                <th>Nombre</th>
                <th>Tratamiento</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {horarios.map((horario) => {
                const turno = estaOcupado(horario);
                return (
                  <tr key={horario} className="horario-row">
                    <td>{horario}</td>
                    <td>{turno ? turno.data.nombre : "-"}</td>
                    <td>{turno ? turno.data.servicio : "-"}</td>
                    <td>
                      {turno ? (
                        <button
                          onClick={() => eliminarTurno(turno.id)}
                          className="eliminar"
                        >
                          Eliminar
                        </button>
                      ) : (
                        <span className="disponible">Disponible</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="formulario-turno">
            <FormularioTurno profesional="Luciana" fecha={fecha} />
          </div>
          <div className="title-horarios-lu">
            <h2>Luciana</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorariosLuciana;



