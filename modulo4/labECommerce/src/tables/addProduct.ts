import connection from "../connection/connection"

const createTable = async() : Promise<any> => {
    try {
        await connection.raw(`
        create table labecommerce_users (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL
        )`)

        await connection.raw(`
        create table labecommerce_products (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price FLOAT NOT NULL,
            image_url VARCHAR(255) NOT NULL
        )`)
    } catch (error) {
        console.log(error)
    }
}

createTable()