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
    history.goBack()
  }

  //outras variaveis
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  //funções
  const applyToTrip = (id) => {
    axios.post(`${BASE_URL}/trips/${id}/apply`)
    .then((response) => {

    })
    .catch((error) => {

    })
  }

  const changeHandler = (value) => {
    setValue(value)
  }

  return (
    <div>
      <Header/>
        <Select 
        options={options} 
        value={value} 
        onChange={changeHandler} />
        <button onClick={goBack}>voltar</button>
      <Footer/>
    </div>
  )
}

export default ApplicationFormPage