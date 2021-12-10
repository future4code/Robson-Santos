import React from "react"
import styled from "styled-components"

const AreaPrincipal = styled.div`
    display: flex;
    height: 6vh;
    background-color: yellow;
    font-size: 24px;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    width: 100%;
`

const Footer = () => {
    return (
        <AreaPrincipal>
            Footer
        </AreaPrincipal>
    )
}

export default Footer