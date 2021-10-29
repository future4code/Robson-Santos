```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let repetido = 0
  let msg
  
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] === numeroEscolhido) {
      repetido += 1  
    }
  }
  
  if (repetido > 0) {
    msg = (`O número ${numeroEscolhido} aparece ${repetido}x`)
  } else {
    msg = (`Número não encontrado`)
  }
  
  return console.log (msg)
} ```