export enum STATUS {
  TODO = "to_do",
  DOING = "doing",
  DONE = "done"
}


export type Task = {
  id: string,
  title: string,
  description: string,
  status: STATUS,
  limit_date: number,
  creator_user_id: string,
}

export type TaskRelations = {
  task_id: number,
  user_id: number
} 