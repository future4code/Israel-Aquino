// ------------- Exercícios de interpretação de código --------
// --- 1---
// a) 10 e 50
// b)Não teria um retorno escrito. Reconheceria como se não tivesse questões a serem impressas.

// -- 2-- 
//a) A função é uma contante que recebe um prompt que retorna impresso em booleano, sendo true sempre que a frase conter a palavra "cenoura"
// b) i - true/ ii - tru/ iii = true


// ------------- Exercícios de escrita de código --------
//-- 1 --
//a) 
function imprimirSobre() {
   console.log("Eu sou Israel, tenho 27 anos, moro em Recife e sou estudante.") 
}
imprimirSobre ()

//b)
function impressaoStrigs(nome,idade,cidade,profissão) {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`)

    }
impressaoStrigs("Israel", 26, "Recife", "Auxiliar administrativo financeiro")

// -- 2 --
function somaNumbers(number1, number2) {
    const resultado = number1 + number2
    return resultado
}

console.log(somaNumbers(9,2))
