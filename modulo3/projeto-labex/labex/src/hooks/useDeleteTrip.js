import axios from "axios"
import AdminHomePage from '../pages/AdminHomePage'
import { BASE_URL } from "../constants/url"

const useDeleteTrip = (id) => {
    const token = localStorage.getItem('token')
    const header = {
        headers: {
            auth: token 
        }
    }
    axios.delete(`${BASE_URL}/trips/${id}`, header)
    .then(() => {
        alert('Viagem apagada com sucesso.')
    })
}

export default useDeleteTrip