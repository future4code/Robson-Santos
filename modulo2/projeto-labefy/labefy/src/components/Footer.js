import React from "react";
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
                <h1>Footer</h1>
            </HeaderPrincipal>
        )
    }
}