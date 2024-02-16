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
    </>
  )
}

export default Home
