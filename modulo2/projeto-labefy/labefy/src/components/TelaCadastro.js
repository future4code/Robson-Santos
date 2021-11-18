import React from "react";
import styled from "styled-components";
import Cadastro from "./Cadastro";
import TelaDetalhes from "./TelaDetalhesPL";
import TelaVisualizar from "./TelaVisualizarPL";

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

// trocarTela = () => {
//     switch (this.props.telaAtual) {
//         case "cadastro":
//             return <Cadastro />
//         case "lista":
//             return <TelaDetalhes />
//         default:
//             return <div> Página não encontrada </div>
//     }     
// }

export default class TelaCadastro extends React.Component {
    render () {
        return (
            <TelaCadastroMain>
                <BarraLateral>
                    <button> </button>  
                </BarraLateral>
                <AreaPrincipal>
                    <Cadastro>

                    </Cadastro>
                </AreaPrincipal>

            </TelaCadastroMain>
        )
    }
}