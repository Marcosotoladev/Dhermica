import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <div className="menuItem">
        <FontAwesomeIcon icon={faShoppingCart} size="2x" className="menuIcon" />
        <span className="menuText">Carrito</span>
      </div>
      <div className="menuItem">
        <FontAwesomeIcon icon={faUser} size="2x" className="menuIcon" />
        <span className="menuText">Sesión</span>
      </div>
    </div>
  );
};

export default Menu;

