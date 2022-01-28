import express, { Request, Response } from "express"
import { users, user } from "./data"
import { AddressInfo } from "net"

const app = express()

app.use(express.json())

//ex 1
app.get("/users", (req: Request, res: Response) => {
    const result: user[] = users;
  
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(400).send("not found");
    }
  })

//ex 2
app.get("/user/tipo/:type", (req: Request, res: Response) => {
    let errorCode = 400;
  
    try {
      const result = users.filter(
        (user: user) => user.type === req.params.type.toUpperCase()
      )
  
      if (result.length === 0 || !result) {
        errorCode = 404;
        throw new Error("Nenhum dado foi achado, insira um type válido")
      }
  
      res.status(200).send(result);
    } catch (error) {
      res.status(errorCode)
    }
  })

// a) path params
// b) com filtro para que só os types válidos sejam enviados

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})