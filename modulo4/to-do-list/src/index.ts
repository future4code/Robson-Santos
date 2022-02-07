import { connection } from "./connection"
import { user } from "./types"
import express, { Request, Response} from "express"
import cors from "cors"
import { AddressInfo } from "net"

const app = express()

app.use(express.json())
app.use(cors())

const createUser = async (name: string, nickname: string, email: string): Promise<any> => {
    await connection("ToDoListUser")
        .insert({
            id: Date.now(),
            name: name,
            nickname: nickname,
            email: email
        })
    }

app.post("/user", async (req: Request, res: Response) => {
    try {
        const { name, nickname, email } = req.body
    
        if (!name || !nickname || !email) {
            res.statusCode = 406
                throw new Error("Digite todos os campos solicitados.")
            }

        await createUser(name, nickname, email)
        res.status(200).send("Usuário criado com sucesso!")
    
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    })

export const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})
