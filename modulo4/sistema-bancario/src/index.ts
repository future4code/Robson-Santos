import express, { Request, Response} from "express"
import { conta, usuarios } from "./data"
import { AddressInfo } from "net"
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

//ver contas
app.get('/conta', (req: Request, res: Response) => {
  res.send(usuarios)
})

// Criar conta
app.post('/conta', (req: Request, res: Response) => {
    let novaConta: conta = {
        idade: req.body.idade,
        nome: req.body.nome,
        cpf: req.body.cpf,
        dataDeNascimento: req.body.dataDeNascimento,
        saldo: 0
    }
    let compararCPF: boolean = false

    usuarios.map((usuario) => {
      if (novaConta.cpf === usuario.cpf) {
        compararCPF = true
        res.status(409).send('CPF já cadastrado')
      }        
    })

    if(novaConta.idade < 18) {
      res.status(406).send('Usuário menor de idade')
    }

    if(novaConta.idade >= 18 && compararCPF === false) {
        usuarios.push(novaConta)
        res.status(201).send('Conta criada com sucesso')
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})