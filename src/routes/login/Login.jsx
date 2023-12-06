import React, { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
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
    <>
      <div className="login-container">
        <div className="login-form">
          <h2>Iniciar Sesión</h2>
          <form>
            <div className="login-input-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="login-input-group">
              <label>Contraseña:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="login-olvidar">
              <a href="/" onClick={() => handleForgotPassword()}>
                ¿Olvidaste tu contraseña?
              </a>
            </p>
            <button className="login-button" onClick={handleSignIn}>
              Iniciar Sesión
            </button>
          </form>

          <p className="login-tengo">
            ¿No tenés cuenta? <a href="Register">Crear Cuenta</a>
          </p>

          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </>
  );
};

export default Login;
