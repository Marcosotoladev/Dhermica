// src/components/Menu.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../../../routes/authForm/AuthContext"; // Importa el contexto
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../../firebase';
import "./Menu.css";

const Menu = () => {
  const user = useAuth(); // Usa el contexto para obtener el usuario
  const [setError] = useState(null);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="menu">
      <div className="menuItem">
        <FontAwesomeIcon icon={faShoppingCart} size="2x" className="menuIcon" />
        <span className="menuText">Carrito</span>
      </div>
      <div className="menuItem">
        <FontAwesomeIcon icon={faUser} size="2x" className="menuIcon" />
        <span className="menuText">
          {user ? (
            <span>Bienvenido, {user.displayName || user.email}!</span>
          ) : (
            <a href="/AuthForm" className="menuText">
              Sesión
            </a>
          )}
        </span>
        <button className="auth-button" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Menu;
