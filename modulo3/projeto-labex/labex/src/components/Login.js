import React from "react"
import { useHistory } from "react-router"

export const Login = () => {
    const history = useHistory()
    const goToLogin = () => {
        history.replace("/login")
    }

    return (
        <div>
            Olá, visitante
            <button onClick = {goToLogin}>Login</button>
        </div>
    )
}