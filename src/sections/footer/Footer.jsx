// Footer.jsx
import React from 'react';
import './Footer.css';
import { FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Diversity3 } from '@mui/icons-material';

const Footer = () => {
    return (
        <>
            <div className="logo-footer">
                <div className='logoContainer-footer'>
                    <span className='enfat'>D</span>
                    <div className="nameF">
                        hermica
                    </div>
                </div>
            </div>
            <footer className="footer-container">

                <div className="contacto">
                    <h2>Contacto</h2>

                    <div className="contacto-item">
                        <div>
                            <FaPhone className="icon-cont" />
                        </div>
                        <div>
                            <span>351 390 8626</span>
                        </div>
                    </div>
                    <div className="contacto-item">
                        <div>
                            <FaMapMarkerAlt className="icon-cont" />
                        </div>
                        <div>
                            <span>Pablo Buitrago 6127, Cordoba</span>
                        </div>
                    </div>
                </div>
                <div className="tratamientos">

                    <h2>Tratamientos</h2>
                    <div className="tratamientos-dropdown">
                        <span className="dropdown-title">ELLAS</span>
                        <div className="dropdown-content">
                            <a href="#">Cejas</a>
                            <a href="#">Corporales</a>
                            <a href="#">Faciales</a>
                            <a href="#">Manos</a>
                            <a href="#">Pestañas</a>
                            <a href="#">Pies</a>
                        </div>
                    </div>

                    <div className="tratamientos-dropdown">
                        <span className="dropdown-title">ELLOS</span>
                        <div className="dropdown-content">
                            <a href="#">Cejas</a>
                            <a href="#">Corporales</a>
                            <a href="#">Faciales</a>
                            <a href="#">Pies</a>
                        </div>
                    </div>
                </div>

                <div className="redes">
                    <h2>Redes Sociales</h2>
                    <div className='redes-icon'>
                        <div>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="icon-red" />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="icon-red" />
                            </a>
                        </div>
                    </div>
                </div>
                
            </footer>
            <div className="titleHome">
                    Salud y Belleza
                </div>
        </>
    );
};

export default Footer;

