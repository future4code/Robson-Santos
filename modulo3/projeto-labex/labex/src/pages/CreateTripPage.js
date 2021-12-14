import axios from "axios"
import React, { useState, useEffect } from "react"
import { useHistory } from "react-router"
import Header from "../components/Header"
import { BASE_URL } from "../constants/url"
import styled from "styled-components"

//styled
const AreaPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.div`
  font-size: 30px;
  margin-top: 5vh;
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

const Form = styled.form`
  display:flex;
  flex-direction: column;
  margin: 5px;
`

const Click2 = styled.button`
  height: 40px;
  width: 100px;
  margin: 40px;
`

const CreateTripPage = () => {
  //history
  const history = useHistory()
  const goBack = () => {
    history.push('/admin')
  }

  //outras variaveis
  const [form, setForm] = useState({
    name: '',
    description: '',
    planet: '',
    durationInDays: '',
    date: ''
  })
  const token = localStorage.getItem('token')
  const header = { headers: {
    auth: token
  }}

  //funções
  const createTrip = (event) => {
    event.preventDefault()
    axios.post(`${BASE_URL}/trips`, form, header)
    .then(() => {
      alert('Viagem criada com sucesso!')
      setForm({
        ...form,
        name: '',
        description: '',
        planet: '',
        durationInDays: '',
        date: ''
      })
    })
    .catch(() => {
      alert('Verifique os dados e tente novamente')
    })
  }

  const tripForm = (event) => {
    event.preventDefault()
    const {name, value} = event.target
    setForm({
      ...form,
      [name]: value
    })    
  }

  useEffect(() => {
    if (token === null) {
      history.push('/login')
    }
  }, [])
  console.log(form)

    return (
        <AreaPrincipal>
          <Header/>
          <div>
            <Title>Criar Viagem</Title>
            <ContainerPrincipal>
              <Form onSubmit={createTrip}>
                <p>Nome </p>
                <input
                  value={form.name}
                  name="name"
                  onChange={tripForm}
                  required
                />
                <p>Planeta </p>
                <input
                  value={form.planet}
                  name="planet"
                  onChange={tripForm}
                  required
                />
                <p>Duração da Viagem </p>
                <input
                  value={form.durationInDays}
                  name="durationInDays"
                  onChange={tripForm}
                  required
                />
                <p>Data </p>
                <input
                  value={form.date}
                  name="date"
                  type="date"
                  onChange={tripForm}
                  required
                />
                <p>Descrição </p>
                <input
                  value={form.description}
                  name="description"
                  onChange={tripForm}
                  required
                />
                <button> Enviar Dados</button>
              </Form>
            </ContainerPrincipal>
          </div>
          <Click2 onClick={goBack}>voltar</Click2>
        </AreaPrincipal>
      )
}

export default CreateTripPage