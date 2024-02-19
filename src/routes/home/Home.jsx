import React from 'react'
import Slider from '../../components/carousel/carousel/Slider'
import Promos from './components/Promos'
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
      <Promos />
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur laudantium reprehenderit beatae consectetur ut obcaecati voluptates voluptatum ea ipsum impedit! Maiores, architecto. Nam iure ipsum quia assumenda repellendus, itaque ex!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem libero corrupti corporis labore voluptatum doloremque neque cumque quisquam sequi quaerat optio, expedita nobis eius doloribus enim, ea officia numquam quibusdam!
    </>
  )
}

export default Home
