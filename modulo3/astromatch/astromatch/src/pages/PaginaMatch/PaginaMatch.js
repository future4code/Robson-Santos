import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/url"

const PaginaMatch = () => {
    const [perfilCombinado, setPerfilCombinado] = useState([])

    const mostrarMatches = () => {
        axios.get(`${BASE_URL}/matches`)
        .then(() => {
            setPerfilCombinado()
        }).catch((error) => {
            console.log(error.data)
        })
    }

    const mapearMatches = () => {
        perfilCombinado
    }

    return (
        <div>
            Página Match
        </div>
    )
}

export default PaginaMatch