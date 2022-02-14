import connection from "../connection"

const createTable = async(): Promise<void> => {
    try {
        await connection.raw(`
            CREATE TABLE aula_servicos_backend(
            id INT PRIMARY KEY,
            CEP INT NOT NULL,
            street VARCHAR(255) NOT NULL,
            number INT NOT NULL,
            complement VARCHAR(255) NOT NULL,
            neighbourhood VARCHAR(255) NOT NULL,
            city VARCHAR(255) NOT NULL,
            state VARCHAR(255) NOT NULL
            )
        `)
    } catch (error) {
        console.log(error)
    }  
} 

createTable()