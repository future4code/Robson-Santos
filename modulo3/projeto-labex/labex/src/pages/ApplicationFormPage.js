import axios from "axios"
import React from "react"
import { useHistory } from "react-router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { BASE_URL } from "../constants/url"

const ApplicationFormPage = (props) => {
  //history
  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }

  //funções
  const applyToTrip = (id) => {
    axios.post(`${BASE_URL}/trips/${id}/apply`)
    .then((response) => {

    })
    .catch((error) => {

    })
  }

  return (
    <div>
      <Header/>
      <button onClick={goBack}>voltar</button>
      <Footer/>
    </div>
  )
}

export default ApplicationFormPage