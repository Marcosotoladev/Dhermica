import React from 'react'
import './Badge.css'
import Iwha from './Iwha.png'
import Chat from './chat.png'

export const Badge = () => {
    return (
        <>
            <div className='badge'>
                <a href="https://wa.me/3513908626">
                    <img className='iwha' src={Iwha} alt="Enlace a Whatsapp" />
                </a>
                <img className='chat' src={Chat} alt="chatea" />
            </div>
        </>
    )
}

export default Badge