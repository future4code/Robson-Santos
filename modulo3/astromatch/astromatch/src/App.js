import React from "react"
import PaginaInicial from "./pages/PaginaInicial/PaginaInicial";
import PaginaMatch from "./pages/PaginaMatch/PaginaMatch";

export default class App extends React.Component {
  state = {
    tela: "inicial"
  }

  escolherTela = () => {
    switch (this.state.tela) {
      case "inicial":
        return <PaginaInicial />
      case "match":
        return <PaginaMatch />
      default:
        return <PaginaInicial /> 
    }
  }

  render() {
    return (
      <div>
        {this.escolherTela()}        
      </div>
    )
  }
}