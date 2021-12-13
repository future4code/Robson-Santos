import React from "react"
import Header from "../components/Header"
import { useHistory } from "react-router"
import Footer from "../components/Footer"

const HomePage = () => {
    //history
    const history = useHistory()
    const goToAdminArea = () => {
        history.push("/admin")
    }

    const goToTripList = () => {
        history.push("/list")
    }

    return (
        <div>
            <Header/>
            <p>HOME</p>
            <button onClick={goToAdminArea}>Área Administrativa</button>
            <button onClick={goToTripList}>Viagens</button>
        </div>
      )
}

export default HomePage