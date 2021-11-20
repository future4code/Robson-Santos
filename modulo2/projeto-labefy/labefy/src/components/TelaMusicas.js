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

export default class TelaMusicas extends React.Component {
    render () {
        return (
            <TelaCadastroMain>
                <BarraLateral>
                {/* <button onClick={this.props.irParaLista}> Lista de Playlists</button> */}
                <button onClick={this.props.irParaCadastro}> Cadastrar nova Playlist</button>
                <button onClick={this.props.irParaMusicas}> Ver Músicas</button>
                </BarraLateral>
                <AreaPrincipal>
                    <h2>Minhas playlists</h2>
                </AreaPrincipal>

            </TelaCadastroMain>
        )
    }
}