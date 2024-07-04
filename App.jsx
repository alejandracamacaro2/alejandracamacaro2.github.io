// import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import video from './assets/video.png';
import Card from './componentes/Card';
import Educacion from './componentes/Educacion';
import Texto from './componentes/Texto';
import Pasos from './componentes/Pasos';
import foto from './assets/foto.png'
import Identificar from './componentes/Identificar';
import Foto from './componentes/Foto'
import Contenedores from './componentes/Contenedores';
import verde from './assets/verde.png'
import naranjo from './assets/naranjo.png'
import gris from './assets/gris.png'
import amarillo from './assets/amarillo.png'
import azul1 from './assets/azul1.png'
import Boton from './componentes/Boton'
import ReactPlayer from 'react-player'

function App() {
  const vidUrl="https://www.youtube.com/watch?v=-UFFFUTMlCw"
  
  const [count, setCount] = useState(0)

  return (

    
    <div className="App">
      <Boton />
      <Educacion />
      <div className="player-container">
      <ReactPlayer
      url={vidUrl}
      playimg={`${false}`}
      volumen={0.5}/>
      </div>
      <Texto />
      <Foto imagen={foto} />
      <Pasos /> 
      <Identificar />
      <div className="container d-flex flex">
      <Contenedores color={verde} />
      <Contenedores color={naranjo} />
      <Contenedores color={gris} />
      <Contenedores color={amarillo} />
      <Contenedores color={azul1} />
      </div>
  </div>
    
  
  )
}
export default App
