import React from "react";
import styled from "styled-components";
import axios from "axios";

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

export default class TelaCadastro extends React.Component {
    state = {
        playlists: [1,2]
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
        }).then((response) => {
           alert("Playlist deletada com sucesso")
           this.pegarPlaylists()
        }).catch((error) => {
            console.log(error.response.data)
        })
    }

    render () {
        const listDePlaylist = this.state.playlists.map((lista) => {
            return <CardPlaylist key={lista.id}> {lista.name} 
            <button onClick={() => this.deletarPlaylist(lista.id)}> X </button></CardPlaylist>
        })

        return (
            <TelaCadastroMain>
                <BarraLateral>
                    <button onClick={this.props.irParaLista}> Lista de Playlists</button>
                    <button onClick={this.props.irParaCadastro}> Cadastrar nova Playlist</button>
                </BarraLateral>
                <AreaPrincipal>
                    <h2>Minhas playlists</h2>
                    {listDePlaylist}
                </AreaPrincipal>

            </TelaCadastroMain>
        )
    }
}