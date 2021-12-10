import axios from "axios"
import React, { useState, useMemo} from "react"
import { useHistory } from "react-router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { BASE_URL } from "../constants/url"
import countryList from "react-select-country-list"
import Select from 'react-select'
import useGetTrips from "../hooks/useGetTrips"
import styled from "styled-components"

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1vh;
  border: 2px solid black;
  border-radius: 20px 5px;
  padding: 1vh;
  background-color: white;
`

const ApplicationFormPage = () => {
  //history
  const history = useHistory()
  const goBack = () => {
    history.push("/list")
  }

  //outras variaveis
  const [trips] = useGetTrips()
  const [country, setCountry] = useState('')
  const options = useMemo(() => countryList().getData(), [])
  const [form, setForm] = useState({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: country
})

  //funções
  const changeHandler = (country) => {
    setCountry(country)
  }

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
      console.log(response.data)
      alert('Cadastro realizado com sucesso!')
    })
    .catch((error) => {
      console.log(error.data)
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

  return (
    <div>
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
            value={country} 
            onChange={changeHandler} />
            </form>

            <p>Motivo da viagem</p>
            <input
            value={form.applicationText}
            name="applicationText"
            onChange={applyToTrip}
            required
            />
          <button>Enviar</button>
          <button onClick={goBack}>voltar</button>
        </ContainerPrincipal>
      <Footer/>
    </div>
  )
}

export default ApplicationFormPage