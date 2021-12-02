import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/url"

const PaginaInicial = () => {
    const [perfil, setPerfil] = useState([])

    const mostrarPerfil = () => {
        axios.get(`${BASE_URL}/person`)
        .then((response) => {
            console.log(response.data.profile)
            setPerfil(response.data.profile)
        }).catch((error) => {
            console.log(error.data)
        })
    }

    const escolherPessoa = (props) => {
        const body = {
            id: perfil.id,
            choice: props
        }
        axios.post(`${BASE_URL}/choose-person`)
        .then((response) => {
            console.log(response.data)
            mostrarPerfil()
        }).catch((error) => {
            console.log(error.data)
        })
    }

    const like = () => {
        escolherPessoa(true)
        console.log("like")
    }

    const dislike = () => {
        escolherPessoa(false)
        console.log("dislike")
    }

    useEffect(() => {
        mostrarPerfil()
    }, [])

    return (
        <div>
            Página inicial
            <div>
            Nome :{perfil.name}
            </div>
            <div>
                <button onClick={dislike}>X</button>
                <button onClick={like}>V</button>
            </div>
            
        </div>
    )
}

export default PaginaInicial