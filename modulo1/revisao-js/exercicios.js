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
    return array.sort((a, b) => a-b)
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

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}