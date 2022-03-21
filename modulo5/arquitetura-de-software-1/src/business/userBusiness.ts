import { hash } from '../business/services/hashManager'
import { generate } from '../business/services/idGenerator'
import { generateToken } from '../business/services/authenticator'
import { authenticationData, User, USER_ROLES } from '../business/entities/user'
import  { insertUser, selectUserByLogin, selectAllUsers, deleteUser }  from '../data/userDatabase'
import { compare } from '../business/services/hashManager'
import { getTokenData } from '../business/services/authenticator'
 
export const businessSignup = async (input: any) => {


    if (!input.name) {

        throw new Error("Please fill in a name.")
    }

    if (!input.email || input.email.indexOf("@") === -1) {

        throw new Error("Invalid email format!")
    }


    if (!input.password || input.password.length < 6) {

        throw new Error("The password must contain more than six digits.")

    }

    if (input.role !== USER_ROLES.ADMIN && input.role !== USER_ROLES.NORMAL) {

        throw new Error(`"role" must be "NORMAL" or "ADMIN"`)
    }


    const id: string = generate()

    const cypherPassword: string = await hash(input.password)

    const newUser: User = {
        id,
        name: input.name,
        email: input.email,
        password: cypherPassword,
        role: input.role
    }

    await insertUser(newUser)

    const token = generateToken({
        id,
        role: input.role
    })

    return token
}

export const businessLogin = async (input: any) => {


    if (!input.email || input.email.indexOf("@") === -1) {
    
        throw new Error("Invalid email format!")
    }
    
    const user = await selectUserByLogin(input.email)
    
    if(!user) {
    
        throw new Error("User not found!")
    }
    
    
    if (!input.password || input.password.length < 6) {
    
        throw new Error("The password must contain more than six digits.")
    }
    
    
    const passwordIsCorrect: boolean = await compare(
        input.password,
        user.password
    )
    
    if (!passwordIsCorrect) {
    
        throw new Error("Senha incorreta!")
    }
    
    const token = generateToken({
        id: user.id,
        role:user.role
    })


    return token
   
} 


export const businessGetAllUsers = async (token: string) => {

   getTokenData(token)

    const users: User[] = await selectAllUsers()

   return users

}


export const businessDeleteUser = async (input: {token: string, id: string}) => {

    const tokenData: authenticationData = getTokenData(input.token)

    if(tokenData.role !== USER_ROLES.ADMIN) {

        throw new Error("Only 'ADMIN' users can delete profiles.")

    } else {

        await deleteUser(input.id)
    }
}
    