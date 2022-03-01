import { Request, Response } from "express"
import { connection } from "../connection"
import { Authenticator } from "../services/authenticator"

export const getUserByEmail = async (email: string) : Promise <any> => {

    let result = await connection.raw (`
        SELECT * FROM user_auth 
        WHERE email = '${email}'
        `)
    return result[0][0]
}

export const loginUser = async (req: Request, res: Response) : Promise <any> => {

    try {

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Email invalido");
        }
      
       const userData = {
        email: req.body.email,
        password: req.body.password
       }

       const user = await getUserByEmail(userData.email)

       if (user.password !== userData.password ) {
           throw new Error ('Senha Invalida')
       }

       const token = new Authenticator().generateToken({id: user.id})

       res.status(200).send ({token})
      

    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}