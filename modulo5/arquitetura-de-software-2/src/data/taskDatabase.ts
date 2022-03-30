import { connection } from './connection'
import {Task, TaskRelations } from '../business/entities/task'

export const insertTask = async(task: Task): Promise<void> => {

    try {

        await connection.insert({
            id: task.id,
            title: task.title,
            description: task.description,
            limit_date: task.limit_date,
            creator_user_id: task.creator_user_id
        })
        .into("Tasks")

    } catch (error) {

        console.log(error || error)
    }
}

export const selectTaskById = async(id: string): Promise<any> => {

    try{

        const result = await connection.raw(`
            SELECT * FROM Tasks
            WHERE id = '${id}';
        `)

        return result[0]

    }  catch (error) {

        console.log(error || error)
    }

}

export const selectTasksUserId = async (user_id: string): Promise<any> => {

    try {

        const result = await connection.raw(`
            SELECT
                Tasks.id as taskId,
                Tasks.title,
                Tasks.description,
                Tasks.limit_date as limitDate,
                Tasks.status,
                Tasks.creator_user_id as creatorUserId,
                Users.nickname as creatorUserNickname
            FROM Tasks
            LEFT JOIN Users ON Tasks.creator_user_id = Users.id
            WHERE Users.id='${user_id}';
        `)

        return result[0]

    } catch (error) {

        console.log(error || error)
    }
}

export const addResponsibleTask = async (responsible_user_id: TaskRelations): Promise<void> => {

    try {

        await connection.insert({
            task_id: responsible_user_id.task_id,
            user_id: responsible_user_id.user_id
        })
        .into("task_responsable")

    } catch (error) {

        console.log(error || error)
    }


}