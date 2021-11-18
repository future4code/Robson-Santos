import React from "react";
import App from "../App";
import styled from "styled-components";

const HeaderPrincipal = styled.div`
    display: flex;
    background-color: #76e57a;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
`

export default class Header extends React.Component {
    render () {
        return (
            <HeaderPrincipal>
                <h1>Labefy</h1>
                <p> Login </p>
            </HeaderPrincipal>
        )
    }
}