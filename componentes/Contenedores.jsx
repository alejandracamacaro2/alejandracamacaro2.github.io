import React from 'react';
import './Contenedores.css';

function Contenedores({color}) {
return (
  <div className="container">
    <button className="boton">
    <img
      src={color}
      className="imagen">
      </img>
  </button>
  </div>
);

}

    export default Contenedores;