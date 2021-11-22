import React from "react";
import styled from "styled-components";
import axios from "axios"

const TelaCadastroMain = styled.div`
display: flex;
justify-items: space-between;
align-items: center;
background-color: #d9f0ff;
color: black;
height: 100vh;
margin: 20px 20px 20px 10px;
`

const BarraLateral = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    height: 100%;
    background-color: #47578f;
    margin: 20px;
    width: 15vw;
    border-radius: 20px;
    padding: 10px;
    justify-content: start;
    align-items: center;
`

const AreaPrincipal = styled.div`
    border: 2px solid black;
`

const CardPlaylist = styled.div`
    border: 2px solid black;
    padding: 5px;
    margin: 5px;
`

const AreaDeCadastro = styled.div`

`

const AreaDasPlayslists = styled.div`
    display: grid;
`

export default class TelaCadastro extends React.Component {
    state = {
        nomeDaPlaylist: "",
        playlists: [],
    }

    pegarPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "robson-santos-carver"
            }
        }).then((response) => {
            this.setState({
                playlists: response.data.result.list
            })
        }).catch((error) => {
            console.log(error.response)
        })
    }

    componentDidMount() {
        this.pegarPlaylists()
    }

    deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "robson-santos-carver"
            }
        }).then(() => {
           alert("Playlist deletada com sucesso")
           this.pegarPlaylists()
        }).catch((error) => {
            console.log(error.response.data)
        })
    }

    passarNomeDaPlaylist = (event) => {
        this.setState({
            nomeDaPlaylist: event.target.value
        })
    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nomeDaPlaylist
        }
        axios.post(url, body, {
            headers: {
            Authorization: "robson-santos-carver"
            }
        }).then(() => {
            alert('Playlist adicionada com sucesso!')
            this.pegarPlaylists()
            this.setState({
                nomeDaPlaylist: ""
            })
        }).catch((error) => {
            console.log(error.response)
        })
    }

    render () {
        const listDePlaylist = this.state.playlists.map((lista) => {
            return <div>
                <CardPlaylist key={lista.id}> {lista.name}
                <button onClick={() => this.deletarPlaylist(lista.id)}> X </button></CardPlaylist>
            </div>
        })

        return (
            <TelaCadastroMain>
                <BarraLateral>
                    <button onClick={this.props.irParaLista}> Lista de Playlists</button>
                    <button onClick={this.props.irParaCadastro}> Cadastrar nova Playlist</button>
                </BarraLateral>
                <AreaPrincipal>
                    <AreaDeCadastro>
                        <h2>Cadastrar nova playlist</h2>
                        <input placeholder={"Nome da Playlist"}
                        value={this.state.nomeDaPlaylist}
                        onChange={this.passarNomeDaPlaylist}
                        />
                        <button onClick={this.fazerCadastro}> Cadastrar </button>
                    </AreaDeCadastro>
                    <AreaDasPlayslists>
                        {listDePlaylist}
                    </AreaDasPlayslists>
                </AreaPrincipal>

            </TelaCadastroMain>
        )
    }
}