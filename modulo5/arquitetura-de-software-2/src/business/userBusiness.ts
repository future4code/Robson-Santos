import { insertUser, selectUserById, updateUser } from "../data/userDatabase"
import { signupInputDTO } from "./entities/user"
import { generateToken } from "./services/authenticator"
import { generateId } from "./services/idGenerator"

export const businessCreateUser = async (input: signupInputDTO) => {
    if (!input.name || !input.nickname || !input.email) {    
        throw new Error("Name, Nickname or email not informed!")
    
    }

    const id: string = generateId()
    
    const newUser = {
        id, 
        name: input.name, 
        nickname: input.nickname, 
        email: input.email
    }
    
    await insertUser(newUser)
    const token: string = generateToken({ id })
    return token     
}


export const businessEditUser = async (input: any) => {
    const id: string = input.params.id 
    if (!input.name || !input.nickname) {
        throw new Error("Please fill in the fields correctly.")

    } else {           
        await updateUser(id, input.name, input.nickname)
    }
}



export const businessGetUserById = async (input: any) => {
    const id = input.params.id
    if(!input.params.id) {

      throw new Error("Fill in the ID and try again.")
    } 
    const user = await selectUserById(id)
    
    return user
}