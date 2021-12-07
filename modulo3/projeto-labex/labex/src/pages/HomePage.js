import React from "react"
import Header from "../components/Header"
import { useHistory } from "react-router"

const HomePage = () => {
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
          <button onClick={goToAdminArea}>admin</button>
          <button onClick={goToTripList}>trips</button>
        </div>
      )
}

export default HomePage