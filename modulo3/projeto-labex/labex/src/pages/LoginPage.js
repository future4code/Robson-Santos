import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import Header from "../components/Header"
import { BASE_URL } from "../constants/url"
import styled from "styled-components"

//styled
const AreaPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Form = styled.form`
  display:flex;
  flex-direction: column;
  margin: 5px;
`

const Title = styled.div`
  font-size: 30px;
  margin-top: 5vh;
`

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  background-color: white;
  border: 3px solid black;
  border-radius: 10px;
  margin: 10vh;
  padding: 10px;
`

const Click2 = styled.button`
  height: 40px;
  width: 100px;
  margin: 40px;
`

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
    <AreaPrincipal>
      <Header/>
      <Title>Login</Title>
      <ContainerPrincipal>
        <Form onSubmit={onSubmitLogin}>          
            <input 
            placeholder = "nome"
            value = {nome}
            onChange = {onChangeNome}
            required
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
        </Form>
      </ContainerPrincipal>      
        <Click2 onClick={goBack}>voltar</Click2>
    </AreaPrincipal>
  )
}

export default LoginPage