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
    width: 50vw;
    background-color: white;
    border: 3px solid black;
    border-radius: 10px;
    margin: 10vh;
`

const CardViagens = styled.div`
    display: flex;
    padding: 10px;
    margin: 5px;
    justify-content: space-between;

    &:hover {
        background-color: black;
        cursor: pointer;
    }
`

const Geral = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Click = styled.button`
    width: 25px;
    height: 25px;
`

const Click2 = styled.button`
    height: 40px;
    width: 100px;
    margin: 40px;
`

const Title = styled.div`
    font-size: 30px;
    margin-top: 5vh;
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
                <Click onClick={() => deleteTrip(trip.id)}> X </Click>
            </CardViagens>
        )
    })

    return (
        <Geral>
          <Header/>
            <Title>Viagens</Title>
          <CardPrincipal>
            {loadTrips}
          </CardPrincipal>          
          <botaoMenu>
            <Click2 onClick={goToCreateTrip}>Criar viagem</Click2>
            <Click2 onClick={goBack}>voltar</Click2>
          </botaoMenu>          
        </Geral>
      )

}

export default AdminHomePage