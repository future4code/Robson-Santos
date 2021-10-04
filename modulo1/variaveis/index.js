/* Exercícios de interpretação de código

1. Será impresso 10 no primeiro console.log e 10, 5 no segundo

2. Serão impressos 10, 10, 10

3.  let horasDeTrabalho = ("Quantas horas você trabalha por dia?")
    let salarioPorDia = prompt("Quanto você recebe por dia?") */

// Exercícios de escrita de código

// 1.
let nome
let idade

console.log(typeof nome, typeof idade)
// variáveis do tipo undefined pq não foi atribuido valores a ela

nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")

console.log(typeof nome, typeof idade)
console.log("Olá", nome, "você tem", idade, "anos.")

//2.
let agua = "sim"
let aula = "sim"
let pipoca = "não"

console.log("Você já tomou água hoje?", agua, "\nVocê já assistiu a aula de hoje?", aula,
 "\nVocê gosta de pipoca?", pipoca)

 //3.
let a = 10
let b = 25

let c

c = b
b = a
a = c

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b)

//Opcional
let primeiroNumero = prompt("Qual o primeiro número?")
let segundoNumero = prompt("Qual o segundo número?")

let soma = Number(primeiroNumero) + Number(segundoNumero)
console.log("O primeiro número somado ao segundo número resulta em:", soma)

let multiplicacao = Number(primeiroNumero) * Number(segundoNumero)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", multiplicacao)
