import { connection } from './connection'
import { User } from '../business/entities/user'


export const insertUser = async (user: User) => {

    await connection.insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role
    }).into('Users_Cookenu')
}


export const selectUserByLogin = async (email: string) => {
    
    try {

        const result = await connection
        .select("*")
        .from("Users_Cookenu")
        .where({ email })
  
        return result[0]

    } catch (error) {
      console.log(error)
    }
}

export const selectAllUsers = async (): Promise<any> => {

    try {

        const result = await connection
        .select("id", "name", "email", "role")
        .from("Users_Cookenu")

        return result

    }  catch (error) {
      console.log(error)
    }

}


export const deleteUser = async (id: string) => {

    await connection("Users_Cookenu")
         .where({ id })
         .del()

}