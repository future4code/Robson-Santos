import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import TelaCadastro from "./components/TelaCadastro"
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
    telaAtual: "cadastro"
  }
  render () {
    return (
      <ContainerPrincipal>
        <Header/>
        <TelaCadastro estado ={this.state.telaAtual}>  

        </TelaCadastro>
        <Footer/>
      </ContainerPrincipal>
      
    )
  }
}