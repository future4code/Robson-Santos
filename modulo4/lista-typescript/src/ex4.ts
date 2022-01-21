enum SETOR {
    FINANCEIRO = 'financeiro',
    MARKETING = 'marketing',
    VENDAS = 'vendas'
}

type colaborador = {
    nome: string,
    salario: number,
    setor: SETOR,
    presencial: boolean
}

const arrayDeFuncionarios: colaborador[] = [
	{ nome: "Marcos", salario: 2500, setor: SETOR.MARKETING, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: SETOR.VENDAS, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "João" ,salario: 2800, setor: SETOR.MARKETING, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: SETOR.VENDAS, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: SETOR.MARKETING, presencial: true }
]

const marketing = arrayDeFuncionarios.filter((setor) => {
    return setor.setor === 'marketing'
})

console.log(marketing)