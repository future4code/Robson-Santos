import { connection } from '../connection'

const createTables = async (): Promise<any> => {

  try {
   
    await connection.raw(`
      CREATE TABLE Users (
        id VARCHAR(255) PRIMARY KEY, 
        name VARCHAR(255) NULL, 
        nickname VARCHAR(255) UNIQUE NOT NULL, 
        email VARCHAR(255) UNIQUE NOT NULL
      );
    `)

    await connection.raw(`
      CREATE TABLE Tasks (           
        id VARCHAR(255) PRIMARY KEY, 
        title VARCHAR(255) NOT NULL, 
        description TEXT NOT NULL, 
        status VARCHAR(255) NOT NULL DEFAULT "to_do",
        limit_date DATE NOT NULL,
        creator_user_id varchar(255) NOT NULL,
        FOREIGN KEY (creator_user_id) REFERENCES Users(id)
      );
    `)
    
    await connection.raw(`
      CREATE TABLE AccountableTask (
        task_id VARCHAR(255),
        responsible_user_id VARCHAR(255),
        FOREIGN KEY (task_id) REFERENCES Tasks(id),
        FOREIGN KEY (responsible_user_id) REFERENCES Users(id)
        ); 
    `)

    console.log("Tabelas criadas com sucesso!")

    connection.destroy()
  
  } catch (error) {

      console.log(error || error)

      connection.destroy()
  }

} 
createTables()
