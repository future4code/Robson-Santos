import React from "react"
import { useHistory } from "react-router"
import Header from "../components/Header"

const AdminHomePage = () => {
    const history = useHistory()
    const goToCreateTrip = () => {
        history.push("/create")
    }

    const goToTripDetails = () => {
        history.push("/details")
    }

    const goBack = () => {
        history.replace("/")
    }

    return (
        <div>
          <Header/>
          <button onClick={goToCreateTrip}>Criar viagem</button>
          <button onClick={goToTripDetails}>Detalhes das viagens</button>
          <button onClick={goBack}>voltar</button>
        </div>
      )

}

export default AdminHomePage