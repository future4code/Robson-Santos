import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/url"

const PaginaInicial = () => {
    const [perfil, setPerfil] = useState([])

    const pegarTodosOsPerfis = () => {
        axios.get(`${BASE_URL}/person`)
        .then((res) => {
            console.log(res.data.profile)
            setPerfil(res.data.profile)
        })
        .catch((error) => {
            console.log(error.data)
        })
    }

    useEffect(() => {
        pegarTodosOsPerfis()
    }, [])

    return(
        <div>
            <div>{() => perfil.map(pessoa => {
                return (
                    <div>
                        {pessoa.name}
                    </div>
                )
            })}
            </div>
           
        </div>
    )    
}

export default PaginaInicial