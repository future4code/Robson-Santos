import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/url"
import './styles.css'
import naoOM from '../../assets/naoOM.png'
import simOM from '../../assets/simOM.png'
import reload from '../../assets/reload.png'

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
        <div id ="AreaPrincipal">
            {perfil ?
            <div>            
            <div id="areaDaFoto">
                <img class="imagemDoPerfil" src={perfil.photo}/>
            </div>
            <div>
               <p id="nomeDescricao"> {perfil.name}, {perfil.age} </p>
               <p id="nomeDescricao1">{perfil.bio}</p>
            </div>
            <div id="botoesLikeDislike">
                <div id="disLike" onClick={dislike}><img src={naoOM}></img></div>
                <div id="disLike" onClick={like}><img src={simOM}></img></div>
            </div>     
        </div>
        :
            <div>
                <div>
                    <p>Sem novas pessoas na sua área! Recarregue e tente novamente</p>
                </div>
            </div>
        }
        </div>
    )
}

export default PaginaInicial