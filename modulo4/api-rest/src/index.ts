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

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})