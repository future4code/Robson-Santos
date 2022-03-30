import express from "express";
import { addTaskResponsible, createTask, getAllTasksUser, getTaskById } from "../taskController";

export const taskRouter = express.Router()

taskRouter.post("/createTask", createTask)
taskRouter.post("/task/responsible", addTaskResponsible)
taskRouter.get("/:id", getTaskById)
taskRouter.get("/all", getAllTasksUser)