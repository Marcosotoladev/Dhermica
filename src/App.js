import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './sections/header/Header.jsx';
import Home from './routes/home/Home.jsx';
import Tratamientos from './routes/tratamientos/Tratamientos.jsx';
import Productos from './routes/productos/Productos.jsx';
import Contacto from './routes/contacto/Contacto.jsx';
import Ellas from './routes/ellas/Ellas.jsx';
import Ellos from './routes/ellos/Ellos.jsx';
import Turnos from './routes/turnos/Turnos.jsx';
import Recordatorios from './routes/recordatorios/Recordatorios.jsx';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './styles/Styles.css';
import './App.css';
import Register from './routes/register/Register.jsx';
import Login from './routes/login/Login.jsx';
import SearchTurnoLu from './routes/turnos/SearchTurnoLu.jsx';
import SearchTurnoGi from './routes/turnos/SearchTurnoGi.jsx';
import Badge from './components/badge/Badge.jsx';
import Footer from './sections/footer/Footer.jsx';
import MiCuenta from './routes/miCuenta/MiCuenta.jsx';
import SolicitarTurno from './routes/solicitarTurno/SolicitarTurno.jsx';




export const App = () => {
  return (
    <>

      <Router>
        <Header />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/tratamientos" element={<Tratamientos />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/ellas" element={<Ellas />} />
          <Route path="/ellos" element={<Ellos />} />
          <Route path="/Turnos" element={<Turnos />} />
          <Route path="/SearchTurnoLu" element={<SearchTurnoLu />} />
          <Route path="/SearchTurnoGi" element={<SearchTurnoGi />} />
          <Route path="/Recordatorios" element={<Recordatorios />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/MiCuenta" element={<MiCuenta />} />
          <Route path="/SolicitarTurno" element={<SolicitarTurno />} />


        </Routes>
        <ToastContainer />
        <Badge />
        <Footer />
      </Router>
    </>


  )
}


export default App;


