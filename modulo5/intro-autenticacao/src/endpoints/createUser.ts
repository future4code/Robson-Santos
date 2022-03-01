import { Request, Response } from "express"
import { connection } from "../connection"
import { Authenticator } from "../services/authenticator"
import { generateId } from "../services/idCreator"

export const createUser = async (req: Request, res: Response) => {

    try {

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Email invalido")
        }

        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Senha invalida")
        }

        const {email, password} = req.body

        const id: string = generateId()
        
        await connection
        .insert ({
            id,
            email,
            password
        })
        .into ('user_auth')

        const token = new Authenticator().generateToken({id})

        res.status(200).send({message: "Usuario Criado", token})


    } catch (error: any) {
        res.status(500). send({message: error.message})
    }
}