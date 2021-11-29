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

export default class TelaVisualizarPL extends React.Component {
    state = {
        playlists: [],
        nomeDaMusica: "",
        nomeDoArtista: "",
        endDaURL: ""
    }

    pegarMusicasDaPlaylists = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
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

    onChangeNomeDaMusica = (event) => {
        this.setState({
            nomeDaMusica: event.target.value
        })
    }

    onChangeNomeDoArtista = (event) => {
        this.setState({
            nomeDoArtista: event.target.value
        })
    }

    onChangeURL = (event) => {
        this.setState({
            endDaURL: event.target.value
        })
    }

    adicionarMusica = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = {
            name: this.state.nomeDaMusica,
            artist: this.state.nomeDoArtista,
            url: this.state.endDaURL
        }
        axios.post(url, body, {
            headers: {
            Authorization: "robson-santos-carver"
            }
        }).then(() => {
            alert('Musica adicionada adicionada com sucesso!')
            this.setState({
                nomeDaMusica: "",
                nomeDoArtista: "",
                endDaURL: ""
            })
        }).catch((error) => {
            console.log(error.response)
        })
    }

    componentDidMount() {
        this.pegarMusicasDaPlaylists()
        this.pegarPlaylists()
    }

    render () {
        const listaDePlaylist = this.state.playlists.map((lista) => {
            return <CardPlaylist key={lista.id}> {lista.name} {lista.quantity}
                <div>
                    <input value = {this.state.nomeDaMusica}
                    onChange = {this.onChangeNomeDaMusica}
                    placeholder = "Música"
                    />
                    <input value = {this.state.nomeDoArtista}
                    onChange = {this.onChangeNomeDoArtista}
                    placeholder = "Artista"
                    />
                    <input value = {this.state.endDaURL}
                    onChange = {this.onChangeURL}
                    placeholder = "Endereço da URL"
                    />
                    <button onClick = {this.adicionarMusica(lista.id)}> + </button>
                    {this.pegarMusicasDaPlaylists()}
                </div>
                </CardPlaylist>
            })

        return (
            <TelaCadastroMain>
                <BarraLateral>
                    <button onClick={this.props.irParaLista}> Lista de Playlists</button>
                    <button onClick={this.props.irParaCadastro}> Cadastrar nova Playlist</button>
                </BarraLateral>
                <AreaPrincipal>
                    <h2>Minhas Musicas</h2>
                    <div>
                        {listaDePlaylist}
                    </div>
                </AreaPrincipal>

            </TelaCadastroMain>
        )
    }
}