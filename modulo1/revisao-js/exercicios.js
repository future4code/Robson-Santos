// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let arrayInvertido = []
    while (array.length)    {
        arrayInvertido.push(array.pop());
    }
    
    return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayComPares = []
    for (let i= 0; i < array.length; i++)
    if (array[i] % 2 === 0) {
        arrayComPares.push(array[i])
    }

    return arrayComPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayElevadoA2 = []
    for (let i= 0; i < array.length; i++)
    if (array[i] % 2 === 0) {
        arrayElevadoA2.push(array[i]**2)
    }

    return arrayElevadoA2
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = array[0]
    for (let i= 1; i < array.length; i++) {
        if (maiorNumero < array[i]) {
            maiorNumero = array[i]
        }
    }

    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero
    let maiorDivisivelPorMenor
    let diferenca

    if (num1 > num2) {
        maiorNumero = num1
        if(num1 % num2 === 0) {
            maiorDivisivelPorMenor = true
        } else {
            maiorDivisivelPorMenor = false
        }
        diferenca = num1 - num2
    } else {
        maiorNumero = num2
        if(num2 % num1 === 0) {
            maiorDivisivelPorMenor = true
        } else {
            maiorDivisivelPorMenor = false
        }
        diferenca = num2- num1
    }

    return {maiorNumero, maiorDivisivelPorMenor, diferenca}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let arrayNPares = []
    let numeroPar = 0
    let i = 0
    while (i < n) {
        arrayNPares.push(numeroPar)
        numeroPar += 2
        i++  
    }

    return arrayNPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
        return "Equilátero"
    } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        return "Escaleno"
    } else {
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let arrayComSegundoMaioreMenor = []
    array.sort((a, b) => a-b)
    arrayComSegundoMaioreMenor.push(array[array.length-2])
    arrayComSegundoMaioreMenor.push(array[1])

    return arrayComSegundoMaioreMenor
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let msg = (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`)

    return msg
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const novaPessoa = {
        ...pessoa,
        nome: 'ANÔNIMO'
    }

    return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = pessoas.filter((pessoa) => {
        if (pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
            return pessoa
        }
    })

    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoAutorizadas = pessoas.filter((pessoa) => {
        if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60) {
            return pessoa
        }
    })

    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const ordemAlfabetica = consultas.map((nomes) => {

        return 
    })
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}