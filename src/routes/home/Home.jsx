import React from 'react'
import Slider from '../../components/carousel/carousel/Slider'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className="titleHome">
        Salud y Belleza
      </div>
      <div className='slider-container'>
        <Slider />
      </div>
      <div className='textHome'>
        <p className='text-home'>
          Contamos con un </p>
        <strong className='bold'>
          equipo profesional altamente capacitado
        </strong>
        <p className="text-home">y especializado en tratamientos estéticos y dermatológicos. Brindamos un servicio personalizado para cada uno de nuestros pacientes.
        </p>
      </div>
      <h1 className='sub-title'>
        <span  className='subtitle'>Nuestras Promos</span>
      </h1>
    </>
  )
}

export default Home
