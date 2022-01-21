function variavel (x: any) {
    return typeof(x)
}

console.log(variavel(true))

//não é possivel receber esse valor por process.argv, ele só retorna string