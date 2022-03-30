import { STATUS, Task } from '../business/entities/task'
import { addResponsibleTask, insertTask, selectTaskById, selectTasksUserId } from '../data/taskDatabase'
import { generateId } from './services/idGenerator'

export const businessCreateTask = async (input: any) => {
  if (!input.body.title || !input.body.description || !input.body.limit_date || !input.body.creator_user_id || !input.body.status) {
    throw new Error("Title, description, due date, status or id of creator not informed!")
  }

  if (input.status !== STATUS.TODO && input.status !== STATUS.DOING && input.status !== STATUS.DONE) {
    throw new Error(`Please fill in a status valid:"TODO", "DOING" or "DONE"`)
  }

  const id: string = generateId()

  const newTask: Task = {
    id,
    title: input.title,
    description: input.description,
    limit_date: input.limit_date,
    creator_user_id: input.creator_user_id,
    status: input.STATUS
  }

  await insertTask(newTask)
}

export const businessGetTaskById = async (id: string) => {
  const result = await selectTaskById(id)

  if (!result) {
    throw new Error("Tarefa não encontrada!")
  } else {
    return result
  }
}


export const businessGetTasksUserId = async (input: any) => {
  const user_id: string = input.query.creatorUserId as string
  if (!input.query.creatorUserId) {
    throw new Error("Fill in the ID and try again.")
  }

  const tasks = await selectTasksUserId(user_id)
  if (tasks === undefined) {
    throw new Error("ID not found. Enter a valid ID.")
  }
}


export const businessAddTaskResponsible = async (input: any) => {

  const result = {
    task_id: input.body.task_id,
    user_id: input.body.user_id
  }

  const keys = Object.keys(input.body)

  for (const key of keys) {
    if (input.body[key] == "")
      throw new Error("Please fill in all fields correctly!")
  }

  await addResponsibleTask(result)

}
