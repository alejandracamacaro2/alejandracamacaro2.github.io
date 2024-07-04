import React from 'react';
import './Card.css';


function Card({imagen = "imagen"}) {
    return (

      <div className="conte">
      <div className="Card">
        <img src={imagen} className="imagen-pequeña" />

          </div>
  </div>
    )}

    export default Card;