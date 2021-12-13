import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import Header from "../components/Header"
import { BASE_URL } from "../constants/url"

const LoginPage = () => {
  //history
  const history = useHistory()
  const goBack = () => {
    history.push('/')
  }

  //variáveis
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [nome,setNome] = useState("")

  //funções
  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onChangeNome = (event) => {
    setNome(event.target.value)
  }

  const checkToken = () => {
    const token = localStorage.getItem('token')
    if (token !== null) {
      history.push('/admin')
    }
  }

  useEffect(() => {
    checkToken()
  }, [localStorage.setItem('nome', nome)])

  const onSubmitLogin = (event) => {
    event.preventDefault()
    const body = {
      email: email,
      password: password
    }
    axios.post(`${BASE_URL}/login`, body)
    .then((response) => {
      localStorage.setItem('token', response.data.token)
      history.push('/admin')
    })
    .catch((error) => {
      console.log(error.response)
    })
  }

  return (
    <div>
      <Header/>
      <form onSubmit={onSubmitLogin}>
        Login
          <input 
          placeholder = "nome"
          value = {nome}
          onChange = {onChangeNome}
          />
          <input
          placeholder = "email"
          type = "email"
          value = {email}
          onChange = {onChangeEmail}
          required
          />
          <input
          placeholder = "senha"
          type = "password"
          value = {password}
          onChange = {onChangePassword}
          required
          />
          <button>Enviar</button>
      </form>
        <button onClick={goBack}>voltar</button>
    </div>
  )
}

export default LoginPage