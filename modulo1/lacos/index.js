/* Exercícios de interpretação de código
    1- O código está acrescentando valor a uma variável. Será impresso 5 no console

    2-  a) 19, 21, 23, 25, 27 e 30 em cada linha
        b) Se fosse acrescentado mais uma variável que somasse +1 a cada elemento verificado seria possível.
    3-  Um triangulo formado por asteriscos começado em um e somando mais um a cada linha até 4

*/

// Exercícios de escrita de código

// 1-
const qtdDePets = Number(prompt("Quantos animais de estimação você tem?"))
let arrayDePets = []
let nomeDoPet

if (qtdDePets === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else {
    for(let i= 0; i < qtdDePets; i++) {
        nomeDoPet = prompt("Qual o nome do seu animal de estimação?")
        arrayDePets.push(nomeDoPet)
    }
  console.log(arrayDePets)
}

// 2-
const arrayDeNumeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let numerosPar = []
let indicesDoArray = []
let maiorNumero = Number()
let menorNumero = Number()

function imprimirValor(array) {
    for(let i= 0; i < array.length; i++) {
        console.log(array[i])
    }
}

function dividirPor10(array) {
    for(let i= 0; i < array.length; i++) {
        console.log(array[i] / 10)
    }
}

function separarPar(array) {
    for(let i=0; i< array.length; i++) {
        if (array[i] % 2 === 0) {
            numerosPar.push(array[i])
        }
    }

    console.log(numerosPar)
}

function mostrarIndices(array) {
    for(let i= 0; i < array.length; i++) {
        indicesDoArray.push("O elemento do índex " + i + " é " + array[i])
        console.log(indicesDoArray[i])
    }    
}

function maiorEMenor(array) {
    for(let i= 0; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i]
        } else if (array[i] < menorNumero)
            menorNumero = array[i]
    }
    console.log("O maior número é", maiorNumero, "e o menor número é", menorNumero)
}

imprimirValor(arrayDeNumeros)
dividirPor10(arrayDeNumeros)
separarPar(arrayDeNumeros)
mostrarIndices(arrayDeNumeros)
maiorEMenor(arrayDeNumeros)

// Desafio 1
const numeroPensado = Number(prompt("Qual o número para ser adivinhado?"))
let numeroChutado = Number(prompt("Tente adivinhar o número pensado"))
let tentativas = 1

while (numeroChutado !== numeroPensado) {
    if (numeroChutado > numeroPensado) {
      console.log("O número chutado foi", numeroChutado)
      console.log("Esse número é maior que o número que pensei")
      numeroChutado = prompt("Tente adivinhar o número pensado")
      tentativas ++
    } else if (numeroChutado < numeroPensado) {
      console.log("O número chutado foi", numeroChutado)
      console.log("Esse número é menor que o número que pensei")
      numeroChutado = prompt("Tente adivinhar o número pensado")
      tentativas ++
    }
}

console.log("Parabéns, você acertou! O número era", numeroPensado, "e o número de tentativas foi", tentativas)

// Desafio 2
const numeroPensado = gerarNumero(0, 100)
let numeroChutado = Number(prompt("Tente adivinhar o número pensado entre 0 e 100"))
let tentativas = 1

while (numeroChutado !== numeroPensado) {
    if (numeroChutado > numeroPensado) {
      console.log("O número chutado foi", numeroChutado)
      console.log("Esse número é maior que o número que pensei")
      numeroChutado = prompt("Tente adivinhar o número pensado")
      tentativas ++
    } else if (numeroChutado < numeroPensado) {
      console.log("O número chutado foi", numeroChutado)
      console.log("Esse número é menor que o número que pensei")
      numeroChutado = prompt("Tente adivinhar o número pensado")
      tentativas ++
    }
}

console.log("Parabéns, você acertou! O número era", numeroPensado, "e o número de tentativas foi", tentativas)

function gerarNumero(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

// A biblioteca Math facilita bastante pra quando precisamos realizar testes
// aleatórios ou pra outras equações
