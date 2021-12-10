import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../constants/url"

const useGetTrips = () => {
    const [trips, setTrips] = useState([])

    const getTrips = () => {
        axios.get(`${BASE_URL}/trips`)
        .then((response) => {
            setTrips(response.data.trips)
        })
        .catch((error) => {
            console.log((error.response))
        })
    }

    useEffect(() =>{
        getTrips()
    }, [])

    return (
        [trips]
    )
}

export default useGetTrips