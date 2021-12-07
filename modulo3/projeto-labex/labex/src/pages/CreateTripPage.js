import React from "react"
import { useHistory } from "react-router"
import Header from "../components/Header"

const CreateTripPage = () => {
  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }

    return (
        <div>
          <Header/>
          <button onClick={goBack}>voltar</button>
        </div>
      )
}

export default CreateTripPage