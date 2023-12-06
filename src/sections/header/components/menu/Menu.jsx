import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../../../routes/authForm/AuthContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../firebase";
import "./Menu.css";

const Menu = () => {
  const user = useAuth();
  const [setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Actualizar el estado de isLoggedIn cuando el usuario cambia
    setIsLoggedIn(!!user);
  }, [user]);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="menu">

        <div className="menuItem">
          <FontAwesomeIcon icon={faUser} size="2x" className="menuIcon" />
          <div className="auth">
            <div>
              <span>
                {isLoggedIn ? (
                  <span>Hola {user?.displayName || user?.email}!</span>
                ) : (
                  <a href="/Register" className="menuText">
                    Crear Cuenta
                  </a>
                )}
              </span>
            </div>
            <div>
              <span>
                {isLoggedIn ? (
                  <a href="/" className="logout" onClick={handleSignOut}>
                    Cerrar Sesión
                  </a>
                ) : (
                  <a href="Login" className="menuText">
                    Iniciar Sesión
                  </a>
                )}
              </span>
            </div>
          </div>
          
        </div>
        <div className="menuItem">
          <FontAwesomeIcon
            icon={faShoppingCart}
            size="2x"
            className="menuIcon"
          />
          <span className="menuText">Carrito</span>
        </div>
      </div>
    </>
  );
};

export default Menu;
