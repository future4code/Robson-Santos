import { textSpanEnd } from "typescript"

export type conta = {
    idade: number,
    nome: string,
    cpf: string | number,
    dataDeNascimento: string | number,
    saldo: number
}

export let usuarios: conta[] = [
    {
        idade: 25,
        nome: 'Teste',
        cpf: '012.345.678-90',
        dataDeNascimento: '09-09-1997',
        saldo: 5000
    }
]