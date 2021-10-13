// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt("Qual a altura do retângulo?")
  const largura = prompt("Qual a largura do retângulo?")
  const area = altura * largura

  return console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("Qual o ano atual?")
  const anoNascimento = prompt("Em qual ano você nasceu?")
  const idade = anoAtual - anoNascimento

  return console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura)

  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual o seu nome?")
  const idadeDoUsuario = prompt("Qual a sua idade?")
  const emailDoUsuario = prompt("Qual o seu e-mail?")

  const fraseUsuario = ("Meu nome é " + nome + ", tenho " + idadeDoUsuario + " anos, e o meu email é " + emailDoUsuario + ".")

  return console.log(fraseUsuario)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const primeiraCor = prompt("Qual sua primeira cor favorita?")
  const segundaCor = prompt("Qual sua segunda cor favorita?")
  const terceiraCor = prompt("Qual sua terceira cor favorita?")  
  
  const coresFavoritas = [primeiraCor, segundaCor, terceiraCor]

  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const paraMaiuscula = string.toUpperCase()

  return paraMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const calculoLucro = custo / valorIngresso

  return calculoLucro
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return (array[0])
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return (array[array.length - 1])
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const ultimoNumero = array[array.length - 1]
  const primeiroNumero = array[0]
  
  const troca = ultimoNumero
  array.pop()
  array.push(array[0])
  array.shift()
  array.unshift(troca)

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase().includes(string2.toLowerCase())
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = prompt("Qual o ano atual?")
  const anoDeNascimento = prompt("Qual o ano de nascimento?")
  const anoEmissao = prompt("Qual o ano de emissão do RG?")

  let menosDe20 = ((anoAtual - anoDeNascimento) <= 20) && ((anoAtual - anoEmissao) >= 5)
  let entre20e50 = (((anoAtual - anoDeNascimento) > 20) || ((anoAtual - anoDeNascimento) <= 50)) && ((anoAtual - anoEmissao) > 10)
  let maisDe50 = ((anoAtual - anoDeNascimento) > 50) && ((anoAtual - anoEmissao) > 15)

  const compararIdades = menosDe20 || entre20e50 || maisDe50
  
return console.log(compararIdades)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const multiplo400 = (ano % 400) === 0
  const multiploDe4 = ((ano % 4) === 0)
  const multiploDe100 = (ano % 100 !== 0)

  const compararMultiplo = (multiplo400 || multiploDe100) &&  multiploDe4

  return compararMultiplo
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maiorDe18 = prompt("Você tem mais de 18 anos?")
  const ensinoMedio = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  const respostas = maiorDe18.includes("sim") && ensinoMedio.includes("sim") && disponibilidade.includes("sim")

  return console.log(respostas)
}