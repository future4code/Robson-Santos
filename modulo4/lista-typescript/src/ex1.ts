function retornaData (nome: string, data: string) {
    const dataSeparada = data.split('/', 2)
    let mesSeparado
    const anoSeparado = data.split('/', 4)

    switch (dataSeparada[1]) {
        case '01':
            mesSeparado = 'janeiro'
            break
        case '02':
            mesSeparado = 'fevereiro'
            break
        case '03':
            mesSeparado = 'março'
            break
        case '04':
            mesSeparado = 'abril'
            break
        case '05':
            mesSeparado = 'maio'
            break
        case '06':
            mesSeparado = 'junho'
            break
        case '07':
            mesSeparado = 'julho'
            break
        case '08':
            mesSeparado = 'agosto'
            break
        case '09':
            mesSeparado = 'setembro'
            break
        case '10':
            mesSeparado = 'outubro'
            break
        case '11':
            mesSeparado = 'novembro'
            break
        case '12':
            mesSeparado = 'dezembro'
            break
    }

    return `Olá, me chamo ${nome}, nasci no dia ${dataSeparada[0]} do mês de ${mesSeparado} do ano de ${anoSeparado[2]}`
}

console.log(retornaData(process.argv[2], process.argv[3]))