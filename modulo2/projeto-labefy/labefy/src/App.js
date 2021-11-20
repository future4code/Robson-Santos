import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import TelaCadastro from "./components/TelaCadastro"
import TelaVisualizarPL from "./components/TelaVisualizarPL"
import TelaMusicas from "./components/TelaMusicas"
import styled from "styled-components"

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  background-color: #d9f0ff;
  height: 960px;
`

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro",
  }

trocarTela = () => {
  switch (this.state.telaAtual) {
    case "cadastro":
      return <TelaCadastro irParaLista={this.irParaLista}/>
    case "lista":
      return <TelaVisualizarPL irParaCadastro={this.irParaCadastro}/>
    case "musicas":
      return <TelaMusicas irParaMusicas={this.irParaMusicas}/>
    default:
      return <div> Página não encontrada </div>
  }     
}

irParaMusicas = () => {
  this.setState({
    telaAtual: "musicas"
  })
}

irParaCadastro = () => {
  this.setState({
    telaAtual: "cadastro"
  })
}

irParaLista = () => {
  this.setState({
    telaAtual: "lista"
  })
}

render () {
  return (
    <ContainerPrincipal>
      <Header/>
        {this.trocarTela()}
      <Footer/>
    </ContainerPrincipal>      
    )
  }
}