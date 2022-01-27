import express, { request, Request, Response} from "express"
import { AddressInfo } from "net"
import { arrayDeProduto, produto } from "./data"

const app = express()

app.use(express.json())

app.get("/teste", (req, res) => {          
    res.send("API funcionando")
})

// ex 3
app.post("/produtos", (req: Request, res: Response) => {
    if (!req.body.id && !req.body.name && !req.body.price) {
        throw new Error("Parâmetros inválidos.")
    }

    const novoProduto: produto = {
        id: Date.now(),
        name: req.body.name,
        price: req.body.price
    }

    arrayDeProduto.push(novoProduto)
    res.status(201).send({
        message: "Produto adicionado com sucesso"
    })
})

// ex 4
app.get("/produtos", (req: Request, res: Response) => {
    const carregarProdutos = arrayDeProduto.map((produto) => {
        return (
            {
                id: produto.id,
                name: produto.name,
                price: produto.price
            }
        )
    })
    res.status(200).send(carregarProdutos)
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`)
    } else {
      console.error(`Failure upon starting server.`)
    }
  })