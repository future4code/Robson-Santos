import React, { useEffect, useState} from "react"
import { useHistory } from "react-router"
import useDeleteTrip from '../hooks/useDeleteTrip'
import useGetTrips from '../hooks/useGetTrips'
import Header from "../components/Header"
import styled from "styled-components"

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
        const token = localStorage.getItem('token')
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
        history.replace("/")
    }
    
    //outras variaveis
    const [trip] = useGetTrips()

    //funções
    const loadTrips = trip.map((trip) => {
        return (
            <CardViagens>
                <div key={trip.id} 
                onClick={() => goToTripDetails(trip.id)}>
                {trip.name}
                </div>
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
            <button onClick={goToTripDetails}>Detalhes das viagens</button>
            <button onClick={goBack}>voltar</button>
          </div>          
        </div>
      )

}

export default AdminHomePage