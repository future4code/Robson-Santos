import React from "react"
import { useHistory } from "react-router"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    align-items: center;
`

const Click = styled.button`
    height: 30px;
    width: 60px;
`

const Title = styled.div`
    margin: 10px;
`

export const Login = () => {
    const history = useHistory()
    const goToLogin = () => {
        history.push("/login")
    }

    const logout = () => {
        localStorage.clear('token', 'nome')
        history.push('/')
    }

    const token = localStorage.getItem('token')
    const name = localStorage.getItem('nome')

    return (
        <div>
            {token !== null ?
                <Container>
                    <Title>Olá, {name}</Title>
                    <Click onClick = {logout}>Logout</Click>
                </Container>
                :
                <Container>
                    <Title>Olá, visitante</Title>
                    <Click onClick = {goToLogin}>Login</Click>
                </Container>                
            }
            
        </div>
        
    )
}