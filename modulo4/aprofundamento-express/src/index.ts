import express from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})

// ex. 1
app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})

//ex. 2
type toDo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

// ex. 3
const arrayToDo: any = [
    {
        tarefas: [
            {
                userId: 1,
                id: 1001,
                title: "estudar",
                completed: false
            },
            {
                userId: 2,
                id: 1002,
                title: "trabalho",
                completed: false
            },
            {
                userId: 3,
                id: 1003,
                title: "ler",
                completed: true
            }
        ]
    } 
]

// ex. 4
app.get("/status", (req, res) => {
    const userStatus = arrayToDo.map((status: any) => {
        if (status.tarefas.completed === true)
            return status.tarefas.userId
    }).flat(1)

    res.status(200).send(userStatus)
})