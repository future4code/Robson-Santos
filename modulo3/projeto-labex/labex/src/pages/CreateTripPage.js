import React, { useState } from "react"
import { useHistory } from "react-router"
import Header from "../components/Header"

const CreateTripPage = () => {
  const history = useHistory()
  const goBack = () => {
    history.push('/admin')
  }

  const [form, setForm] = useState({
    name: '',
    description: '',
    planet: '',
    durationInDays: '',
    date: ''
  })

    return (
        <div>
          <Header/>
          <button onClick={goBack}>voltar</button>
        </div>
      )
}

export default CreateTripPage