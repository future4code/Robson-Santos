const operacao = process.argv[2]
const valor1 = process.argv[3]
const valor2 = process.argv[4]

switch (operacao) {
    case 'soma':
        console.log('Resposta:', Number(valor1) + Number(valor2))
        break
    case 'subt':
        console.log('Resposta:', Number(valor1) - Number(valor2))
        break
    case 'mult':
        console.log('Resposta:', Number(valor1) * Number(valor2))
        break
    case 'div':
        console.log('Resposta:', Number(valor1) / Number(valor2))
        break
}