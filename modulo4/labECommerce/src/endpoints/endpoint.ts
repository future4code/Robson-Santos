import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { user, product } from '../types/types'
import { createUser, createProduct, getAllUsers, getAllProducts } from '../queries/query'

const app: Express = express()
app.use(express.json)
app.use(cors())

dotenv.config()

app.post('/user', async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body
        const id = Date.now().toString()
        
        if (!name || !email || !password) {
            throw new Error('Nome, email ou senha não informado')
        }

        const newUser: user = {
            id,
            name: name,
            email: email,
            password: password
        }

        await createUser(newUser)
        res.status(200).send('Usuário cadastrado com sucesso')
    } catch (error) {
        res.status(400).send(error)
    }
})

app.post('/product', async (req: Request, res: Response) => {
    try {
        const { name, price, image_url } = req.body
        const id = Date.now().toString()
        
        if (!name || !price || !image_url) {
            throw new Error('Nome, preço ou imagem não cadastrados')
        }

        const newProduct: product = {
            id,
            name: name,
            price: price,
            image_url: image_url
        }

        await createProduct(newProduct)
        res.status(200).send('Usuário cadastrado com sucesso')
    } catch (error) {
        res.status(400).send(error)
    }
})

app.get('/users', async (req: Request, res: Response) => {
    try {
        const result = await getAllUsers()
        res.status(200).send({users: result})
    } catch (error) {
        res.status(400).send(error)
    }
})

app.get('/products', async (req: Request, res: Response) => {
    try {
        const result = await getAllProducts()
        res.status(200).send({products: result})
    } catch (error) {
        res.status(400).send(error)
    }
})

export default app