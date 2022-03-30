import { Request, Response } from 'express'
import { businessAddTaskResponsible, businessCreateTask, businessGetTaskById, businessGetTasksUserId } from '../business/taskBusiness'
import { selectTaskById } from '../data/taskDatabase'

export const createTask = async (req: Request, res: Response) => {
  try {
    const {title, description, creator_user_id, status} = req.body

    let today = Date.now()
    let dayjs = require("dayjs")
    today = dayjs(today, "x").format("YYYY/MM/DD")

    const newTask = {
      title, 
      description,
      status, 
      limit_date: today, 
      creator_user_id
    }
      
    await businessCreateTask(newTask)
    
    res.status(200).send("Task successfully created!")
  
  } catch (error) {
 
    res.status(400).send(error)
  }
}

export const getTaskById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id 
    const result = await selectTaskById(id)
      
    await businessGetTaskById(result)
    
    res.status(200).send("Task successfully created!")
  
  } catch (error) {
    res.status(400).send(error)
  }
}


export const getAllTasksUser = async (req: Request, res: Response) => {
  try {   
    const user_id : string = req.query.creatorUserId as string
    const tasks = await businessGetTasksUserId(user_id)

    res.status(200).send({tasks})

  } catch (error) {

    res.status(400).send(error)
  }
}


export const addTaskResponsible = async (req: Request, res: Response) => {
  try {
    const result = {
      task_id: req.body.task_id,
      user_id: req.body.user_id
    }

    await businessAddTaskResponsible(result)

    res.status(200).send({ message:`The task ${result.task_id} has been successfully assigned to user ${result.user_id}.`})

  } catch (error) {

    res.status(400).send(error)
  }
}
