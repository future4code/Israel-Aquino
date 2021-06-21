// EXERCÍCIO 01
function inverteArray(array) {
  const invertendoArray = array.map((valor, i) =>
  array[array.length - i - 1])
return invertendoArray
}


// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const pares = array.filter((resultado) => {
    return resultado % 2 === 0
  })
  const inputElevados = pares.map((resultado) => {
    if (resultado % 2 === 0) {
      return resultado * resultado
    }
  })

  return inputElevados

}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const pares1 = array.filter((inputArray) => {
    return inputArray % 2 === 0
  })
  return pares1

}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {

}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
 const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3

  const cond1 = booleano1 && booleano2 && !booleano4
  const cond2 = (booleano1 && booleano2) || !booleano3
  const cond3 = (booleano2 || booleano3) && (booleano4 || booleano1)
  const cond4 = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  const cond5 = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

  const inputNovoArray = [cond1, cond2, cond3, cond4, cond5]
  return inputNovoArray
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let inputPares = []
  for (let i = 0; i < n; i++) {
    inputPares.push(i * 2)
  }
  return inputPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a === b && b === c) {
    return "Equilátero"
  } else if (a === b || b === c || c === a) {
    return "Isósceles"
  } else {
    return ("Escaleno")
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const inputRetangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }
  return inputRetangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

    const pessoaNova = {
      ...pessoa,
      nome: 'ANÔNIMO'
    }
    return pessoaNova
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
