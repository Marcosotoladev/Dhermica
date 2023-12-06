import React, { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      await auth.currentUser.updateProfile({ displayName });
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setError(null);
      alert(
        "Se ha enviado un correo electrónico para restablecer tu contraseña. Por favor, revisa tu bandeja de entrada."
      );
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
          <p className="register-olvidar">
            <a href="/" onClick={() => handleForgotPassword()}>
              ¿Olvidaste tu contraseña?
            </a>
          </p>
          <button className="register-button" onClick={handleSignUp}>
            Crear Cuenta
          </button>

        </form>

        <p className="register-tengo">¿Ya tenés una cuenta? <a href="Login">Iniciá Sesión</a></p>

        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Register;
