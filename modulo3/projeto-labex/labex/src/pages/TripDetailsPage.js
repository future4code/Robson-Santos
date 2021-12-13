import axios from "axios"
import React, { useEffect, useState} from "react"
import { useHistory } from "react-router"
import Header from "../components/Header"
import { BASE_URL } from "../constants/url"

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
      setCandidates(response.data.candidates)
    })
  }

  const decideCandidate = (choose) => {
    axios.put(`${BASE_URL}/trips/id/candidates/${choose.id}/decide`)
  }

  const candidatesList = () => candidates.map((candidate) => {
    return (
      <div>
        <div key={candidate.id}>
          <div>{candidate.name} - {candidate.age}</div>
          <div>{candidate.country} - {candidate.profession}</div>
          <p>{candidate.applicationText}</p>
          <button onClick={() => decideCandidate(candidate.id)}> V </button>
        </div>
      </div>
    )
  })

  console.log(candidates)
    return (
        <div>
          <Header/>
          <div>
            <p>{trip.name}</p>
            <p>Planeta -  {trip.planet}</p>
            <p>Duração - {trip.durationInDays}</p>
            <p>Data - {trip.date}</p>
            <p> {trip.description}</p>
          </div>
          <div>
            {candidatesList}
          </div>
          <button onClick={goBack}>voltar</button>
        </div>
      )
}

export default TripDetailsPage