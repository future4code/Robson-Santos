import axios from 'axios'
import connection from '../connection';
import { Address, user } from "../types/Address";

const baseUrl = "https://viacep.com.br/ws"

export const getAddressInfo = async (cep: string): Promise<Address | null> => {
    try {
        const response = await axios.get(`${baseUrl}/${cep}/json/`)
    
        const address: Address = {
            state: response.data.uf,
            city: response.data.localidade,
            neighborhood: response.data.bairro,
            street: response.data.logradouro
        }

        return address

    } catch (error) {
        console.log("Erro no serviço getAddressInfo:", error)
        return null
    }
}