import { connection } from "./connection"
import moment from 'moment'
import express, { Request, Response} from "express"
import cors from "cors"
import { AddressInfo } from "net"

const app = express()

app.use(express.json())
app.use(cors())

//criar usuario
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
                throw new Error("Digite todos os campos solicitados")
            }

        await createUser(name, nickname, email)
        res.status(200).send("Usuário criado com sucesso")
    
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    })

// pegar usuario por id
const getUserById = async (id: string): Promise<any> => {
    const result = await connection('ToDoListUser')
        .select('*')
        .where({ id })

        return result[0]
}

app.get("/user/:id", async (req: Request, res:Response) => {
    try {
        const id: string = req.params.id
        const user = await getUserById (id)

        if (!user) {
            res.status(404).send({ message: "Usuário não encontrado" })
        }

        res.status(200).send({ id: user.id, nickname: user.nickname })
        
    } catch (error: any) {
        res.status(400).send({ message: error.message || error.sqlMessage })
    }
})

// editar usuário
const editUser = async (id: string, name: string, nickname: string): Promise<any> => {
    await connection("ToDoListUser")
    .update({
        name: name,
        nickname: nickname
    })
    .where("id", id)
}

app.put("/user/edit/:id", async (req: Request, res:Response) => {
    try {
        const id: string = req.params.id
        const {name, nickname} = req.body
        if (!name || !nickname) {
            res.statusCode = 422
            throw new Error("Todos os dados precisam ser preenchidos.")
        }

        await editUser(id, name, nickname)
        res.status(200).send("Usuário atualizado")
    } catch (error:any) {
        res.status(400).send(error.message)
    }
})

// criar tarefa
const createTask = async (title: string, description: string, limit_date: any, creator_user_id: string): Promise<any> => {
    await connection("ToDoListTask")
        .insert({
            id: Date.now(),
            title: title,
            description: description,
            status: "to-do",
            limit_date: limit_date,
            creator_user_id: creator_user_id
        })
}

app.post("/task", async (req: Request, res: Response) => {
    try {
        const {title, description, limit_date, creator_user_id} = req.body

        if (!title || !description || !limit_date || !creator_user_id) {
            res.statusCode = 400
            throw new Error("Preencha todos os campos")
        }

        await createTask(title,
            description,
            moment(limit_date, "DD/MM/YYYY").format("YYYY/MM/DD"),
            creator_user_id)

        res.status(200).send("Tarefa criada com sucesso")
    } catch (error:any) {
        res.status(res.statusCode).send(error.message)
    }
})

// pegar todos os usuários
function getAllUsers(): Promise<any> {
    const result = connection('ToDoListUser')
        .select("id", "nickname")
        .from("ToDoListUser")
  
        return result
}

app.get("/user/all", async (req: Request, res:Response) => {
    try {
        const result = await getAllUsers()
    
        res.status(200).send(result);
      } catch (error) {
        res.status(400).send(error);
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