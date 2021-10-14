/* Exercícios de interpretação de código
    1- a) O código recebe um número e verifica se ele é divisivel por 2
    b) Números pares
    c) Números ímpares

    2- a) O código recebe uma fruta e retorna o preço dela
    b) "O preço da fruta maçã é R$ 2.25"
    c) "O preço da fruta pêra é R$ 5"

    3- a) Recebendo um número digitado pelo usuário
    b) "Esse número passou no teste" e erro para o número 10. Undefinied para -10
    c)  a variavel mensagem é declarada com let e só existe dentro do laço de repetição.
*/

// Exercícios de escrita de código

/*// 1-
const idadeDoMotorista = Number(prompt("Qual a idade do usuário?"))

if (idadeDoMotorista < 18) {
    console.log("Você não pode dirigir")
} else {
    console.log("Você pode dirigir")
}

// 2-
const periodo = prompt("Em qual período você estuda? Digite M, V ou N")
if (periodo == "M"){
    console.log("Bom dia")
} else if (periodo == "V"){
    console.log("Boa tarde")
} else if (periodo == "N"){
    console.log("Boa tarde")
} else {
    console.log("Não é um periodo válido")
}

// 3 -
switch (periodo) {
    case "M":
        console.log("Bom dia")   
        break
    case "V":
        console.log("Boa tarde")
        break
    case "N":
        console.log("Boa noite")
        break
    default:
        console.log("Não é um periodo válido")
        break
}

// 4 e Desafio 1-
const genero = prompt("Qual o gênero do filme?").toLowerCase()
const precoDoIngresso = prompt("Qual o preço do ingresso?")

if (genero === "fantasia" && precoDoIngresso < 15) {
    const lanche = prompt("Qual lanche você vai comprar?")
    console.log("Bom filme!")
    console.log(`Aproveite seu/sua ${lanche}`)
} else {
    console.log("Escolha outro filme :(")
}
*/
// Desafio 2
function imprimirIngresso() {
    const nomeCompleto = prompt("Qual o seu nome?")
    const tipoDeJogo = prompt("Qual o tipo de jogo? IN para internacional e DO para doméstico")
    const etapaDoCampeonato = prompt("SF, DT ou FI?")
    const categoriaArquibancada = Number(prompt("1, 2, 3 ou 4"))
    const quantidadeDeIngressos = Number(prompt("Qual a quantidade de ingressos?"))
    let valorDoIngresso = Number()
    let valorTotal = Number()

    if (tipoDeJogo === "DO"){
        if (etapaDoCampeonato === "SF") {
            if (categoriaArquibancada === 1) {
                valorDoIngresso = 1320
                valorTotal = valorDoIngresso * quantidadeDeIngressos
            }
            else if (categoriaArquibancada === 2) {
                valorDoIngresso = 880
                valorTotal = valorDoIngresso * quantidadeDeIngressos
            }
            else if (categoriaArquibancada === 3) {
                valorDoIngresso = 550
                valorTotal = valorDoIngresso * quantidadeDeIngressos
            }
            else if (categoriaArquibancada === 4) {
                valorDoIngresso = 220
                valorTotal = valorDoIngresso * quantidadeDeIngressos
            }

            console.log(`---Dados da compra---
                        Nome do cliente: ${nomeCompleto}
                        Tipo de jogo: Nacional
                        Etapa do jogo: Semifinal
                        Categoria: ${categoriaArquibancada}
                        Quantidade de ingressos: ${quantidadeDeIngressos}\n
                        ---Valores---
                        Valor do ingresso: R$ ${valorDoIngresso}
                        Valor total: R$ ${valorTotal}`)
        }
        else if (etapaDoCampeonato === "DT") {
            if (categoriaArquibancada === 1) {
                valorDoIngresso = 660
                valorTotal = valorDoIngresso * quantidadeDeIngressos
            }
            else if (categoriaArquibancada === 2) {
                valorDoIngresso = 440
                valorTotal = valorDoIngresso * quantidadeDeIngressos
            }
            else if (categoriaArquibancada === 3) {
                valorDoIngresso = 330
                valorTotal = valorDoIngresso * quantidadeDeIngressos
            }
            else if (categoriaArquibancada === 4) {
                valorDoIngresso = 170
                valorTotal = valorDoIngresso * quantidadeDeIngressos
            }

            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo de jogo: Nacional
            Etapa do jogo: Disputa de Terceiro Lugar
            Categoria: ${categoriaArquibancada}
            Quantidade de ingressos: ${quantidadeDeIngressos}\n
            ---Valores---
            Valor do ingresso: R$ ${valorDoIngresso}
            Valor total: R$ ${valorTotal}`)            
        }
        else if (etapaDoCampeonato === "FI") {
            if (categoriaArquibancada === 1) {
                valorDoIngresso = 1980
                valorTotal = valorDoIngresso * quantidadeDeIngressos
            }
            else if (categoriaArquibancada === 2) {
                valorDoIngresso = 1320
                valorTotal = valorDoIngresso * quantidadeDeIngressos
            }
            else if (categoriaArquibancada === 3) {
                valorDoIngresso = 880
                valorTotal = valorDoIngresso * quantidadeDeIngressos
            }
            else if (categoriaArquibancada === 4) {
                valorDoIngresso = 330
                valorTotal = valorDoIngresso * quantidadeDeIngressos
            }

            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo de jogo: Nacional
            Etapa do jogo: Final
            Categoria: ${categoriaArquibancada}
            Quantidade de ingressos: ${quantidadeDeIngressos}\n
            ---Valores---\n
            Valor do ingresso: R$ ${valorDoIngresso}
            Valor total: R$ ${valorTotal}`)
        }
    } else if (tipoDeJogo === "IN"){
        if (etapaDoCampeonato === "SF") {
            if (categoriaArquibancada === 1) {
                valorDoIngresso = 1320 * 4.10
                valorTotal = valorDoIngresso * quantidadeDeIngressos
            }
            else if (categoriaArquibancada === 2) {
                valorDoIngresso = 880 * 4.10
                valorTotal = valorDoIngresso * quantidadeDeIngressos
            }
            else if (categoriaArquibancada === 3) {
                valorDoIngresso = 550 * 4.10
                valorTotal = valorDoIngresso * quantidadeDeIngressos
            }
            else if (categoriaArquibancada === 4) {
                valorDoIngresso = 220 * 4.10
                valorTotal = valorDoIngresso * quantidadeDeIngressos
            }

            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo de jogo: Internacional
            Etapa do jogo: Semifinal
            Categoria: ${categoriaArquibancada}
            Quantidade de ingressos: ${quantidadeDeIngressos}\n
            ---Valores---
            Valor do ingresso: U$ ${valorDoIngresso.toFixed(2)}
            Valor total: U$ ${valorTotal.toFixed(2)}`)
        }
        else if (etapaDoCampeonato === "DT") {
            if (categoriaArquibancada === 1) {
                valorDoIngresso = 660 * 4.10
                valorTotal = valorDoIngresso * quantidadeDeIngressos
            }
            else if (categoriaArquibancada === 2) {
                valorDoIngresso = 440 * 4.10
                valorTotal = valorDoIngresso * quantidadeDeIngressos
            }
            else if (categoriaArquibancada === 3) {
                valorDoIngresso = 330 * 4.10
                valorTotal = valorDoIngresso * quantidadeDeIngressos
            }
            else if (categoriaArquibancada === 4) {
                valorDoIngresso = 170 * 4.10
                valorTotal = valorDoIngresso * quantidadeDeIngressos
            }

            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo de jogo: Internacional
            Etapa do jogo: Disputa de terceiro lugar
            Categoria: ${categoriaArquibancada}
            Quantidade de ingressos: ${quantidadeDeIngressos}\n
            ---Valores---
            Valor do ingresso: U$ ${valorDoIngresso.toFixed(2)}
            Valor total: U$ ${valorTotal.toFixed(2)}`)
        }
        else if (etapaDoCampeonato === "FI") {
            if (categoriaArquibancada === 1) {
                valorDoIngresso = 1980 * 4.10
                valorTotal = valorDoIngresso * quantidadeDeIngressos
            }
            else if (categoriaArquibancada === 2) {
                valorDoIngresso = 1320 * 4.10
                valorTotal = valorDoIngresso * quantidadeDeIngressos
            }
            else if (categoriaArquibancada === 3) {
                valorDoIngresso = 880 * 4.10
                valorTotal = valorDoIngresso * quantidadeDeIngressos
            }
            else if (categoriaArquibancada === 4) {
                valorDoIngresso = 330 * 4.10
                valorTotal = valorDoIngresso * quantidadeDeIngressos
            }

            console.log(`---Dados da compra---
            Nome do cliente: ${nomeCompleto}
            Tipo de jogo: Internacional
            Etapa do jogo: Final
            Categoria: ${categoriaArquibancada}
            Quantidade de ingressos: ${quantidadeDeIngressos}\n
            ---Valores---
            Valor do ingresso: U$ ${valorDoIngresso.toFixed(2)}
            Valor total: U$ ${valorTotal.toFixed(2)}`)
        }
    } else {
        console.log("Informações inválidas")
    }
}

imprimirIngresso()