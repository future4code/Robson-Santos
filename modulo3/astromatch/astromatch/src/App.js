import React, {useState} from "react"
import PaginaInicial from "./pages/PaginaInicial/PaginaInicial";
import PaginaMatch from "./pages/PaginaMatch/PaginaMatch";

const App = () => {
  const [pagina, setPagina] = useState("inicial")

  return (
    <div>
      <div>
        <button onClick={() => setPagina("matches")}>Ver Matches</button>
        <button onClick={() => setPagina("inicial")}>Página Inicial</button>
      </div>
      {pagina === "inicial" ? <PaginaInicial/> : <PaginaMatch/>} 
    </div>
  )
}

export default App