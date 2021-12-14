import axios from "axios"
import React, { useEffect, useState} from "react"
import { useHistory } from "react-router"
import Header from "../components/Header"
import { BASE_URL } from "../constants/url"
import styled from "styled-components"

const Geral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Card = styled.div `
  border: 3px solid black;
  padding: 8px;
`

const CardPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  background-color: white;
  border: 3px solid black;
  border-radius: 10px;
  margin: 5vh;
  padding: 10px;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
`

const TripDetailsPage = () => {
  //history
  const history = useHistory()
  const goBack = () => {
    history.push('/admin')
  }
  
  //outras variaveis
  const token = localStorage.getItem('token')
  const id = localStorage.getItem('id')
  const [trip, setTrip] = useState([])
  const [candidates, setCandidates] = useState([])
  const [approved, SetApproved] = useState([])
  const header = { headers: {
    auth: token
  }}
  
  //token
  useEffect(() => {
    if (token === null) {
      history.push('/login')
    }
    getTripDetail()
  }, [])

  //funções
  const getTripDetail = () => {
    axios.get(`${BASE_URL}/trip/${id}`, header)
    .then((response) => {
      setTrip(response.data.trip)
      setCandidates(response.data.trip.candidates)
      SetApproved(response.data.trip.approved)
    })
  }

  const decideCandidate = (choose) => {
    const body = {
      approve: true
    }
    axios.put(`${BASE_URL}/trips/${id}/candidates/${choose}/decide`, body, header)
    .then(() => {
      alert('Candidato aprovado com sucesso!')
      getTripDetail()
    })
  }

  const candidatesList = candidates.map((candidate) => {
    return (
      <Card>
        <div key={candidate.id}>
          <div>Nome: {candidate.name} - {candidate.age} anos</div>
          <div>País: {candidate.country} - Profissão: {candidate.profession}</div>
          <p> Motivo da viagem: {candidate.applicationText}</p>
          <button onClick={() => decideCandidate(candidate.id)}> Aprovar </button>
        </div>
      </Card>
    )
  })

  const approvedList = approved.map((candidate) => {
    return (
      <Card>
        <p key={candidate.id}>
        {candidate.name}
        </p>
      </Card>
      
    )
  })

    return (
        <Geral>
          <Header/>
            <p>{trip.name}</p>
          <CardPrincipal>            
            <p>Onde? - {trip.planet}</p>
            <p>Por quanto tempo? - {trip.durationInDays}</p>
            <p>Quando? - {trip.date}</p>
            <p> {trip.description}</p>
          </CardPrincipal>
          <CardPrincipal>
            <Title>Lista de candidatos</Title>
              {candidatesList}
          </CardPrincipal>
          <CardPrincipal>
            <Title>Lista de Aprovados</Title>
              {approvedList}
          </CardPrincipal>
          <button onClick={goBack}>voltar</button>
        </Geral>
      )
}

export default TripDetailsPage