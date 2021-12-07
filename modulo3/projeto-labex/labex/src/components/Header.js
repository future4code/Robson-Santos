import React from "react"
import styled from "styled-components"

const AreaPrincipal = styled.div`
    display: flex;
    height: 6vh;
    background-color: yellow;
    font-size: 24px;
    align-items: center;
    justify-content: space-around;
`

const Header = () => {
    return (
        <AreaPrincipal>
            Header
        </AreaPrincipal>
    )
}

export default Header