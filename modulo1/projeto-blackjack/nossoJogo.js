// Iniciando o jogo
console.log("Boas vindas ao jogo de blackjack!")
if (confirm("Quer iniciar uma nova rodada?") !== true) {
   console.log("O jogo acabou")
} else {

// variáveis
let i= 0
let cartasJogador = []
let cartasComputador = []

// distribuir cartas
while (i < 4) {
   if (i < 2) {
      cartaNova = comprarCarta()
      cartasJogador.push(cartaNova)
   } else {
      cartaNova = comprarCarta()
      cartasComputador.push(cartaNova)
   }
      i++
}

// função para somar valores das cartas
const somaDoArray = (array, campoDoObjeto) => {
   let soma = 0
   array.forEach(elemento => {
      soma += elemento[campoDoObjeto]    
   })
   return soma
}

const somaTextoDoArray = (array, campoDoObjeto) => {
   let letras = ""
   array.forEach(elemento => { 
      letras = letras + " " + elemento[campoDoObjeto]    
   })
   return letras
}

// variaveis para chamar função e separar os valores
const somaDoJogador = somaDoArray(cartasJogador, 'valor')
const somaDoComputador = somaDoArray(cartasComputador, 'valor')
const textoDoJogador = somaTextoDoArray(cartasJogador, 'texto')
const textoDoComputador = somaTextoDoArray(cartasComputador, 'texto')

//imprimir resultados no console
console.log(`Usuário - cartas:${textoDoJogador} - pontos: ${somaDoJogador}`)
console.log(`Computador - cartas:${textoDoComputador} - pontos: ${somaDoComputador}`)

if (somaDoJogador > somaDoComputador) {
   console.log(`O usuário ganhou!`)
} else if (somaDoJogador < somaDoComputador) {
   console.log(`O computador ganhou!`)
} else {
   console.log(`Empate!`)
}
}