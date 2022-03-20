import connection from "../connection/connection"
import { user, product } from "../types/types"

export const createUser = async (user: user): Promise<void> => {
    try {
        await connection("labecommerce_users")
        .insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        })
    } catch (error) {
        console.log(error)
    }
}

export const createProduct = async (product: product): Promise<void> => {
    try {
        await connection("labecommerce_products")
        .insert({
            id: product.id,
            name: product.name,
            price: product.price,
            image_url: product.image_url
        })
    } catch (error) {
        console.log(error)
    }
}

export const getAllUsers = async(): Promise<any> => {
    try {
        const result = await connection.raw(`
            select * from labecommerce_users;
        `)

        return result [0]
    } catch (error) {
        console.log(error)
    }
}

export const getAllProducts = async(): Promise<any> => {
    try {
        const result = await connection.raw(`
            select * from labecommerce_products;
        `)

        return result [0]
    } catch (error) {
        console.log(error)
    }
}