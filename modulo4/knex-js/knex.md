### Exercicio 1
a) A resposta recebida não tem nenhum tratamento e é retornada "pura"

b) const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result
}

c) const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `)
  const count = result[0][0].count;
  return count;
}