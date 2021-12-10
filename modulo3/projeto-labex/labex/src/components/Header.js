import React from "react"
import styled from "styled-components"
import { Login } from "./Login"

//styled components
const AreaPrincipal = styled.div`
    display: flex;
    height: 10vh;
    background-color: yellow;
    font-size: 24px;
    align-items: center;
    justify-content: space-around;
    width:100vw;
`

const Header = () => {
    return (
        <AreaPrincipal>
            LabeX
            <Login/>
        </AreaPrincipal>
    )
}

export default Header