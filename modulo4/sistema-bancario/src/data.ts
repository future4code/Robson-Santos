export type conta = {
    idade: number,
    nome: string,
    cpf: string,
    dataDeNascimento: string,
    saldo: number | undefined
}

export let usuarios: conta[] = [
    {
        idade: 25,
        nome: 'Teste',
        cpf: '012.345.678-90',
        dataDeNascimento: '09-09-1997',
        saldo: 5000
    },
    {
        idade: 32,
        nome: 'Rob',
        cpf: '987.654.321-09',
        dataDeNascimento: '25-01-1990',
        saldo: 1000
    }
]