import express from "express"
import cors from 'cors'
import { AddressInfo } from "net"
import { isJSDocAuthorTag } from "typescript"

const app = express()

app.use(express.json())
app.use(cors())

// ex2
type user = {
    id: number | string,
    name: string,
    phone: number,
    email: string,
    website: string
}

// ex3
let users: user[] = [
    {
        id: 1,
        name: 'João',
        phone: 5555555,
        email: 'joao@labenu.com',
        website: 'joao.meusite.com'
    },
    {
        id: 2,
        name: 'Maria',
        phone: 99999999,
        email: 'maria@labenu.com',
        website: 'maria.meusite.com'   
    },
    {
        id: 3,
        name: 'Vitória',
        phone: 2222222,
        email: 'vitoria@labenu.com',
        website: 'vitoria.meusite.com'
    }
]

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Rodando em http://localhost:3003`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  })

  app.get('usuarios', (req, res) => {
    return res.send(users)
})