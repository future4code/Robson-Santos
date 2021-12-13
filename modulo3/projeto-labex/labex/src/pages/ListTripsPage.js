import React from "react"
import Header from "../components/Header"
import { useHistory } from "react-router"
import useGetTrips from "../hooks/useGetTrips"
import styled from "styled-components"

//styled
const ContainerPrincipal = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: white;
    margin: 6vh 15vw 6vh;
    padding: 15px;
    border: 2px solid black;

    @media(max-width: 815px) {
        display: flex;
        flex-direction: column;
    }
`

const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1vh;
    border: 2px solid black;
    border-radius: 20px 5px;
    padding: 1vh;
`

const Titulo = styled.h3`
    display: flex;
    justify-content: center;
`

const ListTripsPage = () => {
    //outras variaveis
    const [trip] = useGetTrips()

    //history    
    const history = useHistory()

    const goToApplicationForm = () => {
        history.push(`/application`)
    }

    const goBack = () => {
        history.push('/')
    }

    //map
    const showTrips = trip.map((trip) => {
        return <ContainerCard key={trip.id}>
            <Titulo>{trip.name}</Titulo> <p>{trip.description}</p> <p>{trip.planet}</p> <p>{trip.durationInDays}</p> <p>{trip.date}</p>
        </ContainerCard>
    })

    return (
        <div>
            <Header/>
            <ContainerPrincipal>{showTrips}</ContainerPrincipal>   
            <button onClick={goToApplicationForm}>Quero me inscrever!</button> 
            <button onClick={goBack}>voltar</button>
        </div>
      )
}

export default ListTripsPage