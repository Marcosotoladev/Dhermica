import React from 'react'
import Slider from '../../components/carousel/carousel/Slider'
import Marcas from './Marcas.png'
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
      <div className="horario">
        Martes a Viernes de 7:30 a 19:30
      </div>
      <h1 className='sub-title'>
        <span className='subtitle'>Nuestras Promos</span>
      </h1>

      <h1 className='sub-title'>
        <span className='subtitle'>Ubicanos</span>
      </h1>
      <div className="maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.439479316814!2d-64.27614212540101!3d-31.346849592891363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329e9df2d1ee0f%3A0x6b08198d72db19df!2sPablo%20Buitrago%206127%2C%20X5021DEC%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1708296695707!5m2!1ses-419!2sar"
          title='maps'
          width="90%"
          height="auto"
          className='maps'
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">

        </iframe>
      </div>
      <div className='textHome'>
      <p>
        Contamos con un <strong>equipo profesional altamente capacitado</strong> y especializado en tratamientos estéticos y dermatológicos.
      </p>
    </div>

    <img className='img-marcas' src={Marcas} alt="Marcas" />

    </>
  )
}

export default Home
