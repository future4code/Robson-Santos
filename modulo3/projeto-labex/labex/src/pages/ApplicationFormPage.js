import axios from "axios"
import React, { useState, useMemo} from "react"
import { useHistory } from "react-router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { BASE_URL } from "../constants/url"
import countryList from "react-select-country-list"
import Select from 'react-select'

const ApplicationFormPage = () => {
  //history
  const history = useHistory()
  const goBack = () => {
    history.push("/list")
  }

  //outras variaveis
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

  return (
    <div>
      <Header/>
        <Select 
        options={options} 
        value={country} 
        onChange={changeHandler} />
        <button onClick={goBack}>voltar</button>
      <Footer/>
    </div>
  )
}

export default ApplicationFormPage