import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/url"
import './matches.css'

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
            props.mostrarPerfil()
        }).catch((error) => {
            console.log(error.data)
        })
    }

        useEffect(() => {
        mostrarMatches()
    }, [])

    const mapearMatches = perfilCombinado.map((pessoa) => {
            return <div key={pessoa.id}>
                <img id="imagemMatch"src={pessoa.photo}/>
                <div>{pessoa.name}, {pessoa.age}</div>
            </div>
        })

    return (
        <div id="AreaMatches">
            <p id="cabecalhoMatch">DEU MATCH!</p>
            <div id="containerMatch">
                <p id="cadaMatch">{mapearMatches}</p>
            </div>            
            <button onClick={limparMatches}>Limpar</button>
        </div>
    )
}

export default PaginaMatch