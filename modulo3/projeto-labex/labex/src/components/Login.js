import React, { useEffect } from "react"
import { useHistory } from "react-router"

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
                <div>
                    Olá, {name}
                    <button onClick = {logout}>Logout</button>
                </div>
                :
                <div>
                    Olá, visitante
                    <button onClick = {goToLogin}>Login</button>
                </div>
                
            }
            
        </div>
        
    )
}