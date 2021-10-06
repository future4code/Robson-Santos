// Exercícios de interpretação de código

// 1- a. undefined
//  b. null
//  c. 11
//  d. 3
//  e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//  f. 10

//  2- SUBI NUM ONIBUS EM MIRROCOS, 27

// Exercícios de escrita de código

// 1-

let nomeDoUsuario = prompt("Qual o seu nome?")
let emailDoUsuario = prompt("Qual o seu e-mail?")
let fraseBoasVindas = "O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vindo(a) " + nomeDoUsuario + "!"

console.log(fraseBoasVindas)

// 2-
let comidas = ['uva', 'maçã', 'abacaxi', 'pêra', 'laranja']

console.log(comidas)

console.log("Essas são minhas comidas preferidas: ") 
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

comidas[1] = prompt("Qual sua comida preferida?")

console.log("Essas são minhas comidas preferidas: ") 
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

// 3-
let listaDeTarefas = []
let tarefa = prompt("Qual a tarefa?")
listaDeTarefas.push(tarefa)

tarefa = prompt("Qual a tarefa?")
listaDeTarefas.push(tarefa)

tarefa = prompt("Qual a tarefa?")
listaDeTarefas.push(tarefa)

console.log(listaDeTarefas)

let indice = prompt("Qual tarefa já foi realizada? 1, 2 ou 3?")
listaDeTarefas.splice((indice - 1), 1)

console.log(listaDeTarefas)

// Desafios

// 1-

let fraseDoUsuario = prompt("Qual a frase?")
let arrayDaFrase = fraseDoUsuario.split(" ")

console.log(arrayDaFrase);

// 2-

let novasFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

console.log("O indice de abacaxi é", novasFrutas.indexOf("Abacaxi"), "e o tamanho do array é", novasFrutas.length)