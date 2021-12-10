import axios from "axios"
import AdminHomePage from '../pages/AdminHomePage'
import { BASE_URL } from "../constants/url"

const useDeleteTrip = () => {
    const token = localStorage.getItem('token')
    axios.delete(`${BASE_URL}/trips/${id}`, headers = {
       auth: token 
    })
    .then(() => {
        alert('Viagem apagada com sucesso.')
    })
}

export default useDeleteTrip