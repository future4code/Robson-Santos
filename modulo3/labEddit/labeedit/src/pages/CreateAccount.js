import React, { useState, useEffect } from "react"
import axios from "axios"
import { baseURL } from "../constants/url"
import { useHistory } from "react-router-dom"

const CreateAccount = () => {
    //history
    const history = useHistory()
    const goToHome = () => {
        history.push("/")
    }

    //variáveis
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    })
    const body = {
        username: form.username,
        email: form.email,
        password: form.password
    }

    //funções
    const sendRegisterDetails = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const signup = () => {
        axios.post(`${baseURL}/users/signup`, body)
        .then((response) => {
            localStorage.setItem('token', response.data.token)
            history.push("/feed")
        })
        .catch((error) => {
            console.log(error.response)
        })
    }

    return (
        <div>
            <div>
                <form onSubmit={signup}>
                    <input 
                        value = {form.username}
                        name = 'username'
                        onChange = {sendRegisterDetails}
                        required                    
                    />
                    <input 
                        value = {form.email}
                        name = 'email'
                        onChange = {sendRegisterDetails}
                        required                    
                    />
                    <input 
                        value = {form.password}
                        name = 'password'
                        onChange = {sendRegisterDetails}
                        required                    
                    />
                        <button> Enviar </button>        
                </form>
            </div>
            <button onClick={goToHome}> Voltar </button>
        </div>
    )
}

export default CreateAccount