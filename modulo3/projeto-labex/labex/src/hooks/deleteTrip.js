import axios from "axios"
import { BASE_URL } from "../constants/url"

const deleteTrip = (id) => {
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
    .catch((error) => {
        console.log(error.response)
    })
}

export default deleteTrip