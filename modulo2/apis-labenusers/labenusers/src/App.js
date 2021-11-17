import React from "react";
import axios from "axios";

export default class App extends React.Component {
  state = {
    nomeUser: "",
    emailUser: "",
    listaDeUsers: []
  }

  enviarDados = () => {
    const body = {
      name: this.state.nomeUser,
      email: this.state.emailUser
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
        Authorization: "robson-santos"
      }
    }).then(() => {
      this.setState({
        nomeUser: "",
        emailUser: ""
      })
      this.mostrarLista()
    }).catch((error) => {
      console.log(error.response.data)
    })
  }

  mostrarLista = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "robson-santos"
      }
    }).then((res) => {
      this.setState({
        listaDeUsers: res.data.result
      })
    })
  }

  onChangeNome = (event) => {
    this.setState({nomeUser: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({emailUser: event.target.value})
  }

  render() {
    const listaDeNomes = this.state.listaDeUsers.map((nomes) => {
      return <div>
        <p>{nomes.nomeUser}</p>
        <p>{nomes.emailUser}</p>
      </div>
    })
    return (
      <div>
        <h1>Cadastro de Usuários</h1>
        <p>Nome -
        <input value = {this.state.nomeUser} onChange={this.onChangeNome} /></p>
        <p>e-mail -
        <input value = {this.state.emailUser} onChange={this.onChangeEmail} /></p>
        <button onClick = {this.enviarDados}> Enviar </button>
        <ul> {listaDeNomes} </ul>
      </div>
    )
  }
}