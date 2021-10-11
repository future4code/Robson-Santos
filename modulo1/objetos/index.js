// Exercícios de interpretação de código

// 1- a) Matheus Nachtergaele
//       Virginia Cavendish
//       Globo, 14h

// 2- a) nome: Juca
//       idade: 3
//       raca: SRD
//      
//       nome: Juba
//       idade: 3
//       raca: SRD
//      
//       nome: Jubo
//       idade: 3
//       raca: SRD
//
//      b) Importa o objeto anterior

// 3- a) false
//       undefined

//    b) a função recebe apenas os parametros para procurar no objeto já criado. A segunda opção não existe, então retorna um indefinido

// Exercícios de escrita de código

// 1-
const pessoa = {
    nome: "Ronaldo",
    apelidos: ["Ronaldinho", "Bruxo", "R10"]
}

function imprimirApelidos (objeto) {
    return console.log(`Eu sou ${objeto.nome}, mas pode me chamar de:
    ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)    
}

imprimirApelidos(pessoa)

const novosApelidos = {
    ...pessoa,
    apelidos: ["rei do dibre", "Dinho", "rei dos rolês aleatórios"]
}

imprimirApelidos(novosApelidos)

// 2-
const futebol = {
    nome: "Lionel Messi",
    idade: 34,
    profissao: "Jogador de futebol"
}

const automobilismo = {
    nome: "Lewis Hamilton",
    idade: 36,
    profissao: "Piloto de F1"
}

function imprimirInformacoes(objeto) {
    const tamanhoNome = objeto.nome
    const tamanhoProfissao = objeto.profissao
    const novoArray = [objeto.nome, tamanhoNome.length, objeto.idade, objeto.profissao, tamanhoProfissao.length]
    return console.log(novoArray)
}

imprimirInformacoes(futebol)
imprimirInformacoes(automobilismo)

// 3-
let carrinho =[]

const laranja = {
    nome: "laranja",
    disponibilidade: true
}

const uva = {
    nome: "uva",
    disponibilidade: true
}

const melancia = {
    nome: "melancia",
    disponibilidade: true
}

function adicionarFrutas(fruta) {
    carrinho.push(fruta)
    return carrinho
}

adicionarFrutas(laranja)
adicionarFrutas(uva)
adicionarFrutas(melancia)

console.log(carrinho)

// Desafios
// 1-
function adicionaInformacoes() {
    const informacoes = {
        nome: prompt("Qual o seu nome?"),
        idade: prompt("Qual sua idade?"),
        profissao: prompt("Qual sua profissão?")
    }
    return console.log(informacoes, typeof informacoes)
}

adicionaInformacoes()

// 2-
const casinoRoyale = {
    nome: "Casino Royale",
    anoDeLancamento: 2006
}

const skyfall = {
    nome: "Skyfall",
    anoDeLancamento: 2012
}

function compararDatas (filme1, filme2) {
    const antes = filme1.anoDeLancamento > filme2.anoDeLancamento
    const mesmoAno = filme1.anoDeLancamento === filme2.anoDeLancamento

    return console.log(`O primeiro filme foi lançado antes do segundo? ${antes}
O primeiro filme foi lançado no mesmo ano do segundo? ${mesmoAno}`)
}

compararDatas(casinoRoyale, skyfall)

// 3-
function disponiblidadeDeFrutas(fruta) {
    fruta.disponibilidade = !fruta.disponibilidade
    return fruta
}

disponiblidadeDeFrutas(uva)
console.log(uva)