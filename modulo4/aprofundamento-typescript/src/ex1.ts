// a) erro. a variável só aceita receber uma string
// b) criando um union type e declarando que ela pode ser number ou string

enum arcoIris {
    vermelho = "vermelho",
    laranja = "laranja",
    amarelo ="amarelo",
    verde = "verde",
    azul = "azul",
    azulescuro = "azul-escuro",
    violeta = "violeta"
}

type person = {
    nome: string,
    idade: number,
    corFavorita: arcoIris
}

const pessoa1: person = {
    nome:"Maria",
    idade:24,
    corFavorita: arcoIris.vermelho
}

const pessoa2: person = {
    nome: "João",
    idade: 27,
    corFavorita: arcoIris.violeta
}

const pessoa3: person = {
    nome: "Pedro",
    idade: 21,
    corFavorita: arcoIris.amarelo
}

console.log(pessoa1, pessoa2, pessoa3)