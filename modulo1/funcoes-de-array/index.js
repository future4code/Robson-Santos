// /* Exercícios de interpretação de código
//     1- Será impresso um array contendo nome, indice e apelido de cada um elemento do array usuarios

//     2- Será impresso um array contendo o nome de cada elemento presente em usuários

//     3- Será retornado todos os elementos em que Chijo não é um dos apelidos
// */

// // Exercícios de escrita de código

// // 1- 
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const nomeDosPets = pets.map((dogs) => {
//      return dogs.nome
//  })

//  const apenasSalsicha = pets.filter((dogs) =>{
//      return dogs.raca === "Salsicha"
//  })

//  const apenasPoodle = pets.filter((dogs) => {
//      return dogs.raca === "Poodle"
//  })

//  const msgParaPoodle = apenasPoodle.map((nomeDoDog) => {
//      let msg = console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${nomeDoDog.nome}!`)
//      return msg
//  })

//  console.log(nomeDosPets)
//  console.log(apenasSalsicha)
//  console.log(msgParaPoodle)

 // 2-
 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const nomeDosProdutos = produtos.map((produto) => {
    return produto.nome
 })
 
 const valorDosProdutos = produtos.map((produto) => {
   const msg = (`nome: ${produto.nome}, preço: ${Number(produto.preco * 0.95).toFixed(2)}`) 
   return msg
 })

const bebidas = produtos.filter((produto) => {
    return produto.categoria === "Bebidas"
})

const apenasYpe = produtos.filter((produto) => {
    return produto.nome.includes("Ypê")
}) 

const fraseComYpe = apenasYpe.map((produto) => {
    const msg = (`Compre ${produto.nome} por ${produto.preco}`)
    return msg
})

console.log(nomeDosProdutos)
console.log(valorDosProdutos)
console.log(bebidas)
console.log(apenasYpe)
console.log(fraseComYpe)

// Desafio 1
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

const ordemAlfabetica = pokemons.map((pokemon) => {
    return pokemon.nome
 })

console.log(ordemAlfabetica.sort())

// Desafio 2
const tiposDePokemon = pokemons.map((pokemon) => {
    return pokemon.tipo
})

const removerIguais = [... new Set(tiposDePokemon)]
console.log(removerIguais)