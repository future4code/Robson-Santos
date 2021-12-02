import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/url"

const PaginaMatch = () => {
    const [perfilCombinado, setPerfilCombinado] = useState([])

    const mostrarMatches = () => {
        axios.get(`${BASE_URL}/matches`)
        .then((response) => {
            setPerfilCombinado(response.data.matches)
        }).catch((error) => {
            console.log(error.data)
        })
    }

    const limparMatches = () => {
        axios.put(`${BASE_URL}/clear`)
        .then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error.data)
        })
    }

        useEffect(() => {
        mostrarMatches()
    }, [])

 

    const mapearMatches = () => {
        perfilCombinado.map((pessoa) => {
            return <div>
                {pessoa.name}
            </div>
        })
    }

    return (
        <div>
            Página Match
            
        </div>
    )
}

export default PaginaMatch