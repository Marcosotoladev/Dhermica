import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import "./Recordatorios.css";

export const Recordatorios = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const initialStateValues = {
    data: "",
    name: "",
    descripcion: "",
  };

  const [values, setValues] = useState(initialStateValues);
  const [recordatorios, setRecordatorios] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validateData = (str) => {
    return str === "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateData(values.data)) {
      toast("ERROR: Ingrese una Fecha", {
        type: "error",
        autoClose: 2500,
        position: "top-center",
      });
    } else {
      addOrEditRecordatorio(values);
      setValues(initialStateValues);
      setCurrentId("");
    }
  };

  const addOrEditRecordatorio = async (recordatorioObject) => {
    try {
      if (currentId === "") {
        await db.collection("recordatorios").doc().set(recordatorioObject);

        toast("Recordatorio Agregado", {
          type: "success",
          autoClose: 1000,
          position: "top-center",
        });
      } else {
        await db
          .collection("recordatorios")
          .doc(currentId)
          .update(recordatorioObject);

        toast("Recordatorio Actualizado", {
          type: "info",
          autoClose: 1000,
          position: "top-center",
        });
        setCurrentId("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onDeleteRecordatorio = async (id) => {
    if (window.confirm("¿Desea eliminar el recordatorio?")) {
      await db.collection("recordatorios").doc(id).delete();

      toast("Recordatorio Eliminado", {
        type: "error",
        autoClose: 1000,
        position: "top-center",
      });
    }
  };

  const getRecordatorios = async () => {
    db.collection("recordatorios")
      .orderBy("data", "asc")
      .onSnapshot((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setRecordatorios(docs);
      });
  };

  useEffect(() => {
    getRecordatorios();
  }, []);

  const handleEditReminder = (id) => {
    const reminderToEdit = recordatorios.find(
      (recordatorio) => recordatorio.id === id
    );
    if (reminderToEdit) {
      setValues({
        data: reminderToEdit.data,
        name: reminderToEdit.name,
        descripcion: reminderToEdit.descripcion,
      });
      setCurrentId(id);
    }
  };

  return (
    <>
      <div>
        <div className="custom-container">
          <h1 className="title-recordatorios">Recordatorios</h1>
          <h4 className="custom-heading">Ingresar Recordatorio</h4>
          <form className="custom-form" onSubmit={handleSubmit}>
            <div className="custom-form-group">
              <div className="custom-input-group">
                <div className="custom-input-group-text">
                  <i className="material-icons custom-icon">event</i>
                </div>
                <input
                  type="date"
                  className="custom-form-control"
                  placeholder="Fecha (DD/MM/AAAA)"
                  name="data"
                  onChange={handleInputChange}
                  value={values.data}
                />
              </div>
            </div>

            <div className="custom-form-group">
              <div className="custom-input-group">
                <div className="custom-input-group-text">
                  <i className="material-icons custom-icon">create</i>
                </div>
                <input
                  type="text"
                  className="custom-form-control"
                  name="name"
                  placeholder="Recordatorio"
                  onChange={handleInputChange}
                  value={values.name}
                />
              </div>
            </div>

            <div className="custom-form-group">
              <textarea
                name="descripcion"
                rows="3"
                className="custom-form-control"
                placeholder="Descripción"
                onChange={handleInputChange}
                value={values.descripcion}
              ></textarea>
            </div>
            <div className="btn-container">
              <button className="custom-btn">
                {currentId === "" ? "GUARDAR" : "ACTUALIZAR"}
              </button>
            </div>
          </form>
        </div>

        <div className="custom-container">
          <h4 className="custom-heading">Reporte de Recordatorios</h4>
          {recordatorios.map((recordatorio) => (
            <div className="custom-card" key={recordatorio.id}>
              <div className="custom-card-body">
                <div className="custom-flex">
                  <h4>{recordatorio.data}</h4>
                  <h3 className="custom-text-success">{recordatorio.name}</h3>
                  <div className="btn-i-container">
                    <button className="custom-btn-i">
                      <i
                        className="material-icons custom-text-danger"
                        onClick={() => onDeleteRecordatorio(recordatorio.id)}
                      >
                        delete
                      </i>
                    </button>

                    <button className="custom-btn-i" onClick={scrollToTop}>
                      <i
                        className="material-icons custom-text-success"
                        onClick={() => handleEditReminder(recordatorio.id)}
                      >
                        edit
                      </i>
                    </button>
                  </div>
                </div>

                <p className="custom-paragraph">{recordatorio.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Recordatorios;
