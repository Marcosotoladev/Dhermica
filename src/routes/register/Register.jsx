import React, { useState } from "react";
import { auth, db} from "../../firebase"; // Asegúrate de importar el módulo de firestore
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [lastName, setLastName] = useState(""); // Nuevo campo: Apellido
  const [phone, setPhone] = useState(""); // Nuevo campo: Teléfono
  const [birthday, setBirthday] = useState(""); // Nuevo campo: Cumpleaños
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // Crear usuario con email y contraseña
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      // Actualizar perfil con nombre de usuario
      await userCredential.user.updateProfile({ displayName });
      
      // Aquí guardamos los nuevos campos en Firestore
      await db.collection("users").doc(userCredential.user.uid).set({
        firstName: displayName,
        lastName,
        email,
        phone,
        birthday
      });

      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Crear Cuenta</h2>
        <form>
          <div className="register-input-group">
            <label>Nombre:</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>

          <div className="register-input-group">
            <label>Apellido:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="register-input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="register-input-group">
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="register-input-group">
            <label>Teléfono:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="register-input-group">
            <label>Cumpleaños:</label>
            <input
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>

          <button className="register-button" onClick={handleSignUp}>
            Crear Cuenta
          </button>
        </form>

        <p className="register-tengo">
          ¿Ya tenés una cuenta? <a href="Login">Iniciá Sesión</a>
        </p>

        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Register;

