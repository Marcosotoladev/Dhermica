import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faStore,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"; // Importa el icono de la tienda (faStore)
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [activeIcon, setActiveIcon] = useState("home");

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <>
      <div className="container-nav">
        <nav className="navbar">
          <div>
            <Link
              to="/"
              className={`navbar-item ${activeIcon === "home" ? "active" : ""}`}
              onClick={() => handleIconClick("home")}
            >
              <span className={`text ${activeIcon === "home" ? "active" : ""}`}>
                INICIO
              </span>
              <FontAwesomeIcon
                icon={faHome}
                size="2x"
                className={`icon ${activeIcon === "home" ? "active" : ""}`}
              />
            </Link>
          </div>
          <div>
            <Link
              to="/tratamientos"
              className={`navbar-item ${
                activeIcon === "treatments" ? "active" : ""
              }`}
              onClick={() => handleIconClick("treatments")}
            >
              <span
                className={`text ${
                  activeIcon === "treatments" ? "active" : ""
                }`}
              >
                TRATAMIENTOS
              </span>
              <FontAwesomeIcon
                icon={faBriefcase}
                size="2x"
                className={`icon ${
                  activeIcon === "treatments" ? "active" : ""
                }`}
              />
            </Link>
          </div>
          <div>
            <Link
              to="https://dhermica.mitiendanube.com/"
              className={`navbar-item ${
                activeIcon === "products" ? "active" : ""
              }`}
              onClick={() => handleIconClick("products")}
            >
              <span
                className={`text ${activeIcon === "products" ? "active" : ""}`}
              >
                PRODUCTOS
              </span>
              <FontAwesomeIcon
                icon={faStore} // Reemplaza por el nuevo icono (faStore)
                size="2x"
                className={`icon ${activeIcon === "products" ? "active" : ""}`}
              />
            </Link>
          </div>
          <div>
            <Link
              to="/contacto"
              className={`navbar-item ${
                activeIcon === "contact" ? "active" : ""
              }`}
              onClick={() => handleIconClick("contact")}
            >
              <span
                className={`text ${activeIcon === "contact" ? "active" : ""}`}
              >
                CONTACTO
              </span>
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                className={`icon ${activeIcon === "contact" ? "active" : ""}`}
              />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
