import React, { useEffect} from "react"
import { useHistory } from "react-router"
import useGetTrips from '../hooks/useGetTrips'
import Header from "../components/Header"
import styled from "styled-components"
import axios from "axios"
import { BASE_URL } from "../constants/url"

const CardPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;
    background-color: white;
`

const CardViagens = styled.div`
    margin: 5px;
`

const AdminHomePage = () => {
    //token
    useEffect(() => {
        if (token === null) {
            history.push('/login')
        }
    }, [useGetTrips])

    // history
    const history = useHistory()
    const goToCreateTrip = () => {
        history.push("/create")
    }

    const goToTripDetails = (id) => {
        history.push(`/details/${id}`)
        localStorage.setItem('id', id)
    }

    const goBack = () => {
        history.push("/")
    }
    
    //outras variaveis
    const [trip] = useGetTrips()
    const token = localStorage.getItem('token')

    //funções
    const deleteTrip = (id) => {
        const header = {
            headers: {
                auth: token 
            }
        }
        axios.delete(`${BASE_URL}/trips/${id}`, header)
        .then(() => {
            alert('Viagem apagada com sucesso.')
        })
        .catch((error) => {
            console.log(error.response)
        })
    }

    const loadTrips = trip.map((trip) => {
        return (
            <CardViagens>
                <div key={trip.id} 
                onClick={() => goToTripDetails(trip.id)}>
                {trip.name}
                </div>
                <div onClick={() => deleteTrip(trip.id)}> X </div>
            </CardViagens>
        )
    })

    return (
        <div>
          <Header/>
          <h3>Viagens</h3>
          <CardPrincipal>
            {loadTrips}
          </CardPrincipal>          
          <div>
            <button onClick={goToCreateTrip}>Criar viagem</button>
            <button onClick={goBack}>voltar</button>
          </div>          
        </div>
      )

}

export default AdminHomePage