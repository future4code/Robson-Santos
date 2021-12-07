import React from "react"
import Header from "../components/Header"
import { useHistory } from "react-router"

const ListTripsPage = () => {
    const history = useHistory()
    const goToApplication = () => {
        history.push("/application")
    }
    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <Header/>
            <button onClick={goToApplication}>Se inscrever</button>
            <button onClick={goBack}>voltar</button>
        </div>
      )
}

export default ListTripsPage