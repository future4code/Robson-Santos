import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/url"
import './styles.css'

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
        axios.post(`${BASE_URL}/choose-person`, body)
        .then((response) => {
            console.log(response.data)
            if(response.data.isMatch) {
                alert("It's a match!")
            }
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
        <div id="AreaPrincipal">
            <div id="areaDaFoto">
                <img class="imagemDoPerfil" src={perfil.photo}/>
            </div>
            <div>
                <button onClick={dislike}>X</button>
                <button onClick={like}>V</button>
            </div>
            
        </div>
    )
}

export default PaginaInicial