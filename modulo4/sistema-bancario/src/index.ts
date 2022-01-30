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

//criar conta
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

//pegar saldo
app.get('/conta/saldo', (req: Request, res: Response) => {
    let nome: string = req.query.nome as string
    let cpf: string = req.query.cpf as string

    let indice: number = usuarios.findIndex((conta) => {
        return nome == conta.nome && cpf == conta.cpf
    })
    
    if (indice != -1) {
        res.status(200).send(`O saldo da sua conta é ${usuarios[indice].saldo}`)
    } else {        
        res.status(404).send('Conta não encontrada')
    }
})

//add saldo
app.put('/conta/adc', (req: Request, res: Response) => {
    let nome: string = req.body.nome as string
    let cpf: string = req.body.cpf as string
    let valor: number = req.body.valor as number

    let indice: number = usuarios.findIndex((conta) => {
        return nome == conta.nome && cpf == conta.cpf
    })

    if (indice != -1) {
        let saldoAtualizado: number | undefined | any = 0
        saldoAtualizado = usuarios[indice].saldo
        res.status(200).send(`Valor adicionado com sucesso. Seu novo saldo é ${saldoAtualizado + valor}`)
    } else {
        res.status(404).send('Conta não encontrada')
    }
})

//pagar conta

//transferencia
app.post('/transferencia', (req: Request, res: Response) => {
    let nome: string = req.body.nome as string
    let cpf: string = req.body.cpf as string
    let destinatario: string = req.body.destinatario as string
    let cpfDestinatario: string = req.body.cpfDestinatario as string
    let valorTransferencia: number = req.body.valorTransferencia as number

    let indice: number = usuarios.findIndex((conta) => {
        return nome === conta.nome && cpf === conta.cpf
    })

    let index: number = usuarios.findIndex((conta) => {
        return destinatario === conta.nome && cpfDestinatario === conta.cpf
    })

    if ((indice != -1 || index != -1)) {
        let saldoAtual: number = 0
        saldoAtual = Number(usuarios[indice].saldo)
        let saldoDestinatario: number = 0
        saldoDestinatario = Number(usuarios[index].saldo)

        if (saldoAtual < valorTransferencia) {
          res.status(404).send('Seu saldo não é suficiente para realizar essa transferência')
        }

        saldoAtual -= valorTransferencia
        saldoDestinatario += valorTransferencia
        res.status(200).send(`Transferência realizada com sucesso. Seu novo saldo é ${Number(saldoAtual)}`)
            
    } else {
        res.status(404).send('Conta não encontrada. Verifique os dados e tente novamente')
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