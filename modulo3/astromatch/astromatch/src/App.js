import React, {useState} from "react"
import PaginaInicial from "./pages/PaginaInicial/PaginaInicial";
import PaginaMatch from "./pages/PaginaMatch/PaginaMatch";
import 'animate.css'
import './styles.css'
import naoTinder from './assets/naoTinder.png'
import conversa from './assets/conversa.png'

const App = () => {
  const [pagina, setPagina] = useState("inicial")

  return (
    <div id="AreaGeral">
      <div id="cabecalho">
      <div onClick={() => setPagina("inicial")}><img id="naoTinderIcon" src={naoTinder}/>DinteR</div>
        <div onClick={() => setPagina("matches")}><img id="conversaIcon"src={conversa}/></div>        
      </div>
      {pagina === "inicial" ? <PaginaInicial/> : <PaginaMatch/>} 
    </div>
  )
}

export default App