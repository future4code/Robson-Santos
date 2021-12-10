import React, { useEffect, useState} from "react"
import { useHistory } from "react-router"
import useDeleteTrip from '../hooks/useDeleteTrip'
import useGetTrips from '../hooks/useGetTrips'
import Header from "../components/Header"

const AdminHomePage = () => {
    //token
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token === null) {
            history.push('/login')
        }
    }, [useGetTrips])

    // history
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