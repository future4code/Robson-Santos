import { User } from "../business/entities/user"
import { connection } from "./connection"

export const insertUser = async(user: User): Promise<any> => {

    try {

        await connection.insert({
            id: user.id,
            name: user.name,
            nickname: user.nickname,
            email: user.email
          })
          .into("Users")

    } catch (error) {

        console.log(error || error)
    }
}



export const updateUser = async (id: string, name: string, nickname: string) => {

    try {
        
        await connection('Users')
        .where('user_id', id)
        .update({
            name: name,
            nickname: nickname
        })

    } catch (error) {

        console.log(error || error)
    }
} 


export const selectUserById = async(id: string): Promise<any> => {

    try {

        const result = await connection.raw(`
            SELECT * FROM Users
            WHERE id = '${id}';
        `)

        return result[0]

    } catch (error) {

        console.log(error || error)
    }

}