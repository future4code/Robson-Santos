import React, { useEffect, useState} from "react"
import Header from "../components/Header"
import { useHistory } from "react-router"
import axios from "axios"
import { BASE_URL } from "../constants/url"
import Footer from "../components/Footer"
import styled from "styled-components"

//styled
const ContainerPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    margin: 6vw 4vh 5px;
    padding: 15px;
    border: 2px solid black;
`

const ContainerCard = styled.div`
    display: flex;
    margin: 1vh;
    margin: 2px solid black;
`

const ListTripsPage = () => {
    //outras variaveis
    const [trip, setTrip] = useState([])

    //history    
    const history = useHistory()

    const goToApplicationForm = () => {
        history.push(`/application/`)
    }

    const goBack = () => {
        history.goBack()
    }

    //funções
    const getTrips = () => {
        axios.get(`${BASE_URL}/trips`)
        .then((response) => {
            setTrip(response.data.trips)
        })
    }

    useEffect(() =>{
        getTrips()
    }, [])

    //map
    const showTrips = trip.map((trip) => {
        return <ContainerCard key={trip.id}>
            <p>{trip.name}</p> <p>{trip.description}</p> <p>{trip.planet}</p> <p>{trip.durationInDays}</p> <p>{trip.date}</p>
        </ContainerCard>
    })

    return (
        <div>
            <Header/>
            <ContainerPrincipal>{showTrips}</ContainerPrincipal>   
            <button onClick={goToApplicationForm}>Quero me inscrever!</button> 
            <button onClick={goBack}>voltar</button>
            <Footer/>
        </div>
      )
}

export default ListTripsPage