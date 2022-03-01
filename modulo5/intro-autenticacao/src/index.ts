import app from "./app"
import { createUser } from "./endpoints/createUser"
import { infoUser } from "./endpoints/infoUser"
import { loginUser } from "./endpoints/loginUser"


app.post("/createUser", createUser)
app.post("/user/login", loginUser)
app.get("/user/profile", infoUser)