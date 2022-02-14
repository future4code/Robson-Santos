import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import { connection } from '../connection';

const router: Router = express()

router.use(express.json());
router.use(cors())

async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT *
       FROM aula48_exercicio;
    `)
 
    return result[0]
}

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      const users = await selectAllUsers()
 
      if(!users.length) {
         res.statusCode = 404
         throw new Error("Nenhum usuário encontrado!")
      }
 
      res.status(200).send(users)       
    } catch (error) {
      console.log(error)
      res.send(error)
    }
}