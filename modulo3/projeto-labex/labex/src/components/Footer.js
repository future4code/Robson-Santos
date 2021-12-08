import React from "react"
import styled from "styled-components"

const AreaPrincipal = styled.div`
    display: flex;
    height: 6vh;
    background-color: yellow;
    font-size: 24px;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    left:0;
    bottom:0;
    right:0;
`

const Footer = () => {
    return (
        <AreaPrincipal>
            Header
        </AreaPrincipal>
    )
}

export default Footer