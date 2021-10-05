/* Exercícios de interpretação de código

1- a. false
   b. false
   c. true
   d. boolean

2- as variáveis recebidas serão do tipo string e vão ser concatenadas ao invés
de serem somadas

3- Basta alterar para const soma = Number(primeiroNumero) + Number(segundoNumero) 
para resolver */

// Exercícios de escrita de código
// Programa 1

let idade = prompt("Qual a sua idade?")
let idadeDoAmigo = prompt("Qual a idade do seu melhor amigo?")

console.log("Sua idade é maior que a do seu amigo?", Number(idade) > Number(idadeDoAmigo))
console.log("A diferença de idades é", Number(idade) - Number(idadeDoAmigo), "anos")

// Programa 2

let numeroPar = prompt("Insira um número par")
Number(numeroPar)

console.log("O resto da divião é", numeroPar % 2)
// Toda divisão de número par vai ter resto 0
//Se o número digitado for ímpar, o resto vai ser 1

// Programa 3

let idadeAtual = prompt("Qual sua idade?")
Number(idadeAtual)

let meses = idadeAtual * 12
let dias = idadeAtual * 365
let horas = idadeAtual * 8760

console.log("A idade em meses é", meses, "meses, em dias é", dias, " dias e em horas é", horas)

// Programa 4

let primeiroNumero = prompt("Qual o primeiro número?")
let segundoNumero = prompt("Qual o segundo número?")

Number(primeiroNumero)
Number(segundoNumero)

let maior = primeiroNumero > segundoNumero
console.log("O primeiro número é maior que o segundo?", maior)

let igual = primeiroNumero === segundoNumero
console.log("O primeiro número é igual ao segundo?", igual)

let divisivel = primeiroNumero % segundoNumero === 0
console.log("O primeiro número é divisível pelo segundo?", divisivel)

let divInvertida = segundoNumero % primeiroNumero === 0
console.log("O segundo número é divisivel pelo segundo?", divInvertida)

// Desafios
// Desafio 1

let grausKelvin = ((77 - 32) * (5/9)) + 273.15
console.log("77°F é igual a", grausKelvin, "°K")

let grausFahrenheit = (80 * (9/5) + 32)
console.log("80°C é igual a", grausFahrenheit, "°F")

grausFahrenheit = (30 * (9/5) + 32)
console.log("30°C é igual a", grausFahrenheit, "°F")

grausKelvin = 30 + 273.15
console.log("30°C é igual a", grausKelvin, "°K")

let userCelsius = prompt("Qual temperatura em Celsius você deseja converter?")

grausFahrenheit = (Number(userCelsius) * (9/5) + 32)
grausKelvin = Number(userCelsius) + 275.15

console.log("A temperatura em Celsius é", userCelsius, "em Fahrenheit é", grausFahrenheit, "e em Kelvin é", grausKelvin)

// Desafio 2

let contaDeLuz = 280 * 0.05
console.log("O valor a ser pago é", contaDeLuz, "reais")

contaDeLuz = (280 * 0.05) - ((280 * 0.05) * 0.15)
console.log("O valor a ser pago com desconto é", contaDeLuz, "reais")

// Desafio 3

let libra = 20 / 2.205
console.log("20lb equivalem a", libra, "kg")

let onca = 10.5 / 35.274
console.log("10.5oz equivalem a", onca, "kg")

let milha = 100 * 1609
console.log("100mi equivalem a", milha, "metros")

let feet = 50 / 3.281
console.log("50ft equivalem a", feet, "metros")

let galao = 103.56 * 3.79
console.log("103.56gal equivalem a", galao, "l")

let xicara = 450 * 0.24
console.log("450xic equivalem a", xicara, "l")