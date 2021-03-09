import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="littlecard-container">
            <img src={props.icon} />
            <div>
                <h4>{props.info}</h4>
                <p>{props.infoUsuario}</p>
            </div>
        </div>
    )
}

export default CardPequeno;