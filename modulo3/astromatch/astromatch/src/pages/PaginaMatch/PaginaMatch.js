import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/url"
import './matches.css'
import lixeira from '../../assets/lixeira.png'

const PaginaMatch = (props) => {
    const [perfilCombinado, setPerfilCombinado] = useState([])

    const mostrarMatches = () => {
        axios.get(`${BASE_URL}/matches`)
        .then((response) => {
            console.log(response.data.matches)
            setPerfilCombinado(response.data.matches)
        }).catch((error) => {
            console.log(error)
        })
    }

    const limparMatches = (props) => {
        axios.put(`${BASE_URL}/clear`)
        .then((response) => {
            console.log(response.data)
            if (response.data.message === "Success") {
                alert('Seus matches foram excluidos com sucesso. Volte a página inicial para obter novos matches.')
            }
            props.mostrarPerfil()    
        }).catch((error) => {
            console.log(error.data)
        })
    }

        useEffect(() => {
        mostrarMatches()
    }, [])

    const mapearMatches = perfilCombinado.map((pessoa) => {
            return <div id="cadaMatch" key={pessoa.id}>
                <img id="imagemMatch"src={pessoa.photo}/>
                <div id="textoMatch">{pessoa.name}, {pessoa.age}</div>
            </div>
        })

    return (
        <div id="principal">
            <div id="AreaMatches">
            <p id="cabecalhoMatch">DEU MATCH!</p>
            <div id="containerMatch">
                <p>{mapearMatches}</p>
            </div>   
        </div>                 
            <div id="lixeira"onClick={limparMatches}><img id="apagarMatchIcon" src={lixeira}/>Apagar Matches</div>
        </div>
    )
}

export default PaginaMatch