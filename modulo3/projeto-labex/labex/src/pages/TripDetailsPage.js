import React from "react"
import { useHistory } from "react-router"
import Header from "../components/Header"

const TripDetailsPage = () => {
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

export default TripDetailsPage