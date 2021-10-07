// Exercícios de interpretação de código

// 1- a) console.log(10) e console.log(50)
//    b) As funções seriam executadas mas não iriam aprecer no console sem o comando

// 2- a) a função procura se a palavra "cenoura" está na frase e retorna true ou false
//    b) true, true, true

// Exercícios de escrita de código

// 1-

// a)
function darInformacoes() {
    return console.log("Meu nome é Robson, tenho 31 anos, moro em São Paulo e sou estudante")
}

darInformacoes()

// b)
function receberInformacoes(nome, idade, cidade, profissao) {
    const frase = "Meu nome é " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e sou " + profissao
    return console.log(frase)
}

receberInformacoes("Robson", 31, "São Paulo", "estudante")

// 2- a)
function retornarSoma(numero1, numero2) {
    const soma = numero1 + numero2
    return soma
}

console.log(retornarSoma(2, 15))

// b)
function maiorOuIgual(numero1, numero2) {
    const comparar = numero1 >= numero2
    return comparar
}

console.log(maiorOuIgual(2, 15))

// c)
function encontrarPar(numero1) {
    const par = numero1 % 2 === 0
    return par
}

console.log(encontrarPar(11))

// d)
function alterarFrase(frase) {
    const tamanho = frase.length
    const caps = frase.toUpperCase()

    return console.log(tamanho, caps)
}

alterarFrase("É hora do almoço")

// 3-
function somarNumeros(numero1, numero2) {
    const soma = Number(numero1) + Number(numero2)
    return soma
}

function subtrairNumeros(numero1, numero2) {
    const subtracao = Number(numero1) - Number(numero2)
    return subtracao
}

function multiplicarNumeros(numero1, numero2) {
    const multiplicacao = Number(numero1) * Number(numero2)
    return multiplicacao
}

function dividirNumeros(numero1, numero2) {
    const divisao = Number(numero1) / Number(numero2)
    return divisao
}

let primeiroNumero = prompt("Qual o primeiro número?")
let segundoNumero = prompt("Qual o segundo número?")

console.log("Os números inseridos são:", primeiroNumero, " e ", segundoNumero)
console.log("Soma: ", somarNumeros(primeiroNumero, segundoNumero))
console.log("Diferença: ", subtrairNumeros(primeiroNumero, segundoNumero))
console.log("Multiplicação: ", multiplicarNumeros(primeiroNumero, segundoNumero))
console.log("Divisão: ", dividirNumeros(primeiroNumero, segundoNumero))

// Desafios

//1- a)
const imprimir = (frase) => {
    return console.log(frase)
}

const verFrase = imprimir("A hora do almoço já passou")

// b)
const imprimir = (frase) => {
    return console.log(frase)
}

const verFrase = imprimir("A hora do alomoço já passou")
 
 const somarDoisNumeros = (num1, num2) => {
    const soma = Number(num1) + Number(num2)
    const verSoma = imprimir(soma)
}

const verPrint = somarDoisNumeros(2, 8)
