import React from "react"
import Header from "../components/Header"
import { useHistory } from "react-router"
import styled from "styled-components"

const AreaPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Click2 = styled.button`
  height: 50px;
  width: 150px;
  margin: 40px;
`


const Title = styled.div`
  font-size: 30px;
  margin-top: 5vh;
`

const HomePage = () => {
    //history
    const history = useHistory()
    const goToAdminArea = () => {
        history.push("/admin")
    }

    const goToTripList = () => {
        history.push("/list")
    }

    return (
        <AreaPrincipal>
            <Header/>
            <Title>Vamos Viajar?</Title>
            <botaoMenu>
                <Click2 onClick={goToAdminArea}>Área Administrativa</Click2>
                <Click2 onClick={goToTripList}>Viagens</Click2>
            </botaoMenu>
            
        </AreaPrincipal>
      )
}

export default HomePage