import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';

const Horarios = ({ profesional, fecha }) => {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    db.collection(`turnos${profesional}`)
      .where('fecha', '==', fecha)
      .onSnapshot((snapshot) => {
        setTurnos(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
      });
  }, [profesional, fecha]);

  const horarios = [];
  for (let i = 7.5; i <= 19.5; i += 0.5) {
    const hora = Math.floor(i);
    const minutos = i % 1 ? '30' : '00';
    horarios.push(`${hora}:${minutos}`);
  }

  const eliminarTurno = (id) => {
    db.collection(`turnos${profesional}`).doc(id).delete()
      .then(() => {
        console.log("Turno eliminado con éxito");
      })
      .catch((error) => {
        console.error("Error al eliminar el turno: ", error);
      });
  };

  const convertirAHora24 = (hora) => {
    const [horas, minutos] = hora.split(':');
    return Number(horas) + Number(minutos) / 60;
  };

  const estaOcupado = (horario) => {
    for (let turno of turnos) {
      const horaTurno = convertirAHora24(turno.data.hora);
      const horaHorario = convertirAHora24(horario);
      if (horaHorario >= horaTurno && horaHorario < horaTurno + turno.data.duracion) {
        return turno;
      }
    }
    return null;
  };

  return (
    <div className="horarios">
      {horarios.map((horario) => {
        const turno = estaOcupado(horario);
        return (
          <div key={horario} className="horario">
            <span className="hora">{horario}</span>
            {turno ? (
              <div className="turno">
                <span className="datos">{`${turno.data.nombre} - ${turno.data.servicio}`}</span>
                <button onClick={() => eliminarTurno(turno.id)} className="eliminar">Eliminar</button>
              </div>
            ) : (
              <span className="disponible">Disponible</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Horarios;