import React from "react";
import App from "../App";
import styled from "styled-components";

const HeaderPrincipal = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #d26742;
    align-items: center;
    justify-content: center;
`

export default class Header extends React.Component {
    render () {
        return (
            <HeaderPrincipal>
                <h1>Header</h1>
                <p> Login </p>
            </HeaderPrincipal>
        )
    }
}