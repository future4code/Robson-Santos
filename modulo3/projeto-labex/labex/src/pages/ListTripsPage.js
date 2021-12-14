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

const Click2 = styled.button`
  height: 60px;
  width: 150px;
  margin: 40px;
`

const Title = styled.div`
  font-size: 30px;
  margin-top: 5vh;
`

const AreaPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1vh;
    border: 2px solid black;
    border-radius: 20px 5px;
    padding: 1vh;

    &:hover {
        background-color: black;
        cursor: pointer;
    }
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
        <AreaPrincipal>
            <Header/>
            <Title> Viagens Disponíveis</Title>
            <ContainerPrincipal>{showTrips}</ContainerPrincipal>   
            <botaoMenu>
                <Click2 onClick={goToApplicationForm}>Quero me inscrever!</Click2> 
                <Click2 onClick={goBack}>voltar</Click2>
            </botaoMenu>
            
        </AreaPrincipal>
      )
}

export default ListTripsPage