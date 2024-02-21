// Promos.jsx
import React from 'react';
import './Promos.css';
import promoDefi from './promoDefi.png';
import promoHifu from './promoHifu.png';
import promoPunta from './promoPunta.png';
import promoSemi from './promoSemi.png';
import promoLipo from './promoLipo.png';


const Promos = () => {
    return (
        <div className="promos-container">
            <div className="promo">
                <img src={promoDefi} alt="Promo 1" />
            </div>
            <div className="promo">
                <img src={promoHifu} alt="Promo 2" />
            </div>
            <div className="promo">
                <img src={promoSemi} alt="Promo 3" />
            </div>
            <div className="promo">
                <img src={promoPunta} alt="Promo 4" />
            </div>
            <div className="promo">
                <img src={promoLipo} alt="Promo 5" />
            </div>
        </div>
    );
}

export default Promos;





