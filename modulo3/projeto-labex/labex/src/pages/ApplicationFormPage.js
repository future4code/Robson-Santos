import axios from "axios"
import React, { useState, useMemo} from "react"
import { useHistory } from "react-router"
import Header from "../components/Header"
import { BASE_URL } from "../constants/url"
import countryList from "react-select-country-list"
import Select from 'react-select'
import useGetTrips from "../hooks/useGetTrips"
import styled from "styled-components"

//styled
const AreaPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  background-color: white;
  border: 3px solid black;
  border-radius: 10px;
  margin: 10vh;
  padding: 10px;
`

const Card = styled.div`
  display: flex;
  margin: 10px;  
`

const Title = styled.div`
  font-size: 30px;
  margin-top: 5vh;
`

const Click2 = styled.button`
  height: 40px;
  width: 100px;
  margin: 40px;
`

const Form = styled.form`
  display:flex;
  flex-direction: column;
  margin: 5px;
`
const botaoMenu = styled.div`
  display: flex;
  align-items: center;
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
    .then(() => {
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
    .catch(() => {
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
      <Title>Formulário</Title>
        <ContainerPrincipal>          
          <Form onSubmit={sendApplication}>
            <select name="id"
              onChange={applyToTrip}
              required>
              <option defaultValue> Viagens disponíveis</option>
              {listTrips}
            </select>

            <Card>
            <p>Nome</p>
            <input
              value={form.name}
              name="name"
              onChange={applyToTrip}
              required
            />
            </Card>
            
            <Card>
              <p>Idade</p>
              <input
                value={form.age}
                name="age"
                onChange={applyToTrip}
                type="number"
                required
              />
            </Card>
            
            <Card>
              <p>Profissão</p>
              <input
                value={form.profession}
                name="profession"
                onChange={applyToTrip}
                required
              />
            </Card>
            
            <Card>
              <p>País</p>
              <Select 
                options={options} 
                value={form.country}
                name="country" 
                onChange={loadCountry} 
              />
            </Card>
            
            <Card>
              <p>Motivo da viagem</p>
              <input
                value={form.applicationText}
                name="applicationText"
                onChange={applyToTrip}
                required
              />
            </Card>
            <botaoMenu>
              <Click2 onClick={goBack}>Voltar</Click2>
              <Click2>Enviar</Click2>
            </botaoMenu>                     
          </Form>
        </ContainerPrincipal>        
    </AreaPrincipal>
  )
}

export default ApplicationFormPage