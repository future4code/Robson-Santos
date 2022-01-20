function obterEstatisticas(numeros: number[])  {

    const numerosOrdenados: number[] = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: {maior: number, menor: number, media: number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type amostraDeIdades = {
    numeros: number[]
    obterEstatisticas: (numeros: number[]) => {
        maior: number,
        menor: number,
        media: number
    }
}

console.log(obterEstatisticas([36,14,7,92,65,61]))