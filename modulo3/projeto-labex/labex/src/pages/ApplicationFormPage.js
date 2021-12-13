import axios from "axios"
import React, { useState, useMemo} from "react"
import { useHistory } from "react-router"
import Header from "../components/Header"
import { BASE_URL } from "../constants/url"
import countryList from "react-select-country-list"
import Select from 'react-select'
import useGetTrips from "../hooks/useGetTrips"
import styled from "styled-components"

const AreaPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1vh;
  border: 2px solid black;
  border-radius: 20px 5px;
  padding: 1vh;
  background-color: white;
  width: 60vw;
`

const ApplicationFormPage = () => {
  //history
  const history = useHistory()
  const goBack = () => {
    history.push("/list")
  }

  //outras variaveis
  const [trips] = useGetTrips()
  const [country] = useState('')
  const [form, setForm] = useState({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: ""
  })
  const options = useMemo(() => countryList().getData(), [])

  //funções
  const applyToTrip = (event) => {
    event.preventDefault()
    const {name, value} = event.target
    setForm({
      ...form,
      [name]: value
    })    
  }

  const sendApplication = (event) => {
    event.preventDefault()
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country
    }
    axios.post(`${BASE_URL}/trips/${form.id}/apply`, body)
    .then((response) => {
      alert('Cadastro realizado com sucesso!')
      setForm({
        ...form,
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: ""
      })
    })
    .catch((error) => {
      alert('Verifique seus dados e tente novamente')
    })
  }

  const listTrips = trips.map((trip) => {
    return (
      <option key={trip.id}
      value={trip.id}>
        {trip.name}
      </option>
    )
  })

  const loadCountry = (event) => {
    setForm({
      ...form,
      ["country"]: event.label
    })
  }

  console.log(form)
  console.log(country)

  return (
    <AreaPrincipal>
      <Header/>
        <ContainerPrincipal>
          <h3>Formulário</h3>
          <form onSubmit={sendApplication}>
            <select name="id"
              onChange={applyToTrip}
              required>
              <option defaultValue> Viagens disponíveis</option>
              {listTrips}
            </select>

            <p>Nome</p>
            <input
              value={form.name}
              name="name"
              onChange={applyToTrip}
              required
            />

            <p>Idade</p>
            <input
              value={form.age}
              name="age"
              onChange={applyToTrip}
              required
            />

            <p>Profissão</p>
            <input
              value={form.profession}
              name="profession"
              onChange={applyToTrip}
              required
            />

            <p>País</p>
            <Select 
              options={options} 
              value={form.country}
              name="country" 
              onChange={loadCountry} 
            />

            <p>Motivo da viagem</p>
            <input
              value={form.applicationText}
              name="applicationText"
              onChange={applyToTrip}
              required
            />

            <button>Enviar</button>
            <button onClick={goBack}>voltar</button>
          </form>
        </ContainerPrincipal>
    </AreaPrincipal>
  )
}

export default ApplicationFormPage