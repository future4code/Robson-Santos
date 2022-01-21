enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function organizaFilmes (nome: string, ano: number, genero: GENERO, nota?: number) {
    return {
        nome: nome,
        anoLancamento: ano,
        genero: genero,
        pontuacao: nota
    }
}

console.log(organizaFilmes('Duna', 2021, GENERO.ACAO, 74))