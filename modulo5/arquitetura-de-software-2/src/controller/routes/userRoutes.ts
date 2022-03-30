import express from "express";
import { createUser, editUser, getUserById } from "../userController"

export const userRouter = express.Router()

userRouter.post("/createUser", createUser)
userRouter.post("/edit/:id", editUser)
userRouter.get("/:id", getUserById)