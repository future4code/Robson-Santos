import axios from "axios"
import React, { useState, useEffect } from "react"
import { useHistory } from "react-router"
import Header from "../components/Header"
import { BASE_URL } from "../constants/url"

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
        <div>
          <Header/>
          <div>
            <h3>Criar Viagem</h3>
            <div>
              <form onSubmit={createTrip}>
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
              </form>
            </div>
          </div>
          <button onClick={goBack}>voltar</button>
        </div>
      )
}

export default CreateTripPage