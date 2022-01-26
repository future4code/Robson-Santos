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

