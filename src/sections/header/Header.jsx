import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo from "./components/logo/Logo";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import { auth } from '../../firebase'; // Asegúrate de importar la instancia de auth

const Header = () => {
  const [user, setUser] = useState(null);
  const allowedUserIds = ["9IrqQ1yarpaXSjlV0rhWoaabhQ63", "P3K1Ogb0MLdTNZuXgKKQptaPKHH3"]; // Agrega más IDs de usuarios autorizados según sea necesario

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const isUserAuthorized = user && allowedUserIds.includes(user.uid);

  return (
    <div>
      <div className="header">
        <div className="header-item-1">
          <div className="name">
            <Logo />
          </div>
        </div>
        <div className="header-item-2">
          <Navbar />
        </div>
        <div className="header-item-3">
          <Menu />
        </div>
      </div>

      {isUserAuthorized && (
        <>
          <div className="solapa">
            <div className="header-item-4">
              <a href="/Turnos">
                <span className="menuText">Turnos</span>
              </a>
            </div>
            <div className="header-item-4">
              <a href="/Recordatorios">
                <span className="menuText">Recordatorios</span>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;


