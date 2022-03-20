import connection from "../connection"
import { userTableName, recipesTableName } from '../types'

const createTables = async(): Promise<void> => {
  try {
    await connection.raw(`
      create table ${userTableName} (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
      );

      create table ${recipesTableName} (
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(25555) NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        author_id VARCHAR(255),
        FOREIGN JEY (author_id) REFERENCES ${userTableName} (id)
      )
    `)
  } catch (error) {
    console.log(error)
  }
}


createTables()