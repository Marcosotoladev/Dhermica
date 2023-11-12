// Header.js
import React from "react";
import "./Header.css";
import Logo from "./components/logo/Logo";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-item-1">
          <div className="name">
            <Logo />
          </div>
        </div>
        <div className="header-item-2">
          {" "}
          <Navbar />
        </div>
        <div className="header-item-3">
          {" "}
          <Menu />
        </div>
      </div>
      <div className="header-item-4">
        <a href="/Turnos"><span className="menuText">Turnos</span></a>
      </div>
    </div>
  );
};

export default Header;
