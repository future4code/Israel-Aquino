// -------------- Exercícios de interpretação de código ---------------
// 
// -- 1 -- 
// a) realiza um teste de números que com são divididos por 2, com resto igual a zero. 
// b) No caso todos os números pares. que o resto serão iguais a 0
//c) Números que o resto será diferente de 0, todos os números ímpares.

// -- 2 --
// a) definir o preço de uma fruta  pelo nome de pesquisa
// b) O preço da fruta Maçã é R$ 2.25
//c) O preço da fruta  Pêra  é  R$  5.5

// -- 3 -- 
//a) Pedindo ao usuario digitar um número para testar o programa 
//b) Se o usuário digitar 10, aparecerá a impressão que " Esse número passou no teste", porém imprirá também um erro na tentativa de retorno da variável "mensagem", por não ter um valor definido para retorno  
// caso o digitado for -10, dará um erro pois, não foi implementado a função else
//c) imprirá também um erro na tentativa de retorno da variável "mensagem", pois a mesma não foi definida

// ---------------------- Atividade de escrita de código -------------------------------
// -- 1 -- 
// const idade = Number(prompt("Qual a sua idade?")) 

// if (idade >= 18) {
//     console.log("Pode 18dirigir")}
// else{
//     console.log("Não pode dirigir")
// }

// -- 2 --
// const turno = prompt("Me diz o turno que tu estuda digitando a letra entre as opções: M (matutino) ou V (Vespertino) ou N (Noturno)").toLocaleLowerCase()

// if (turno === "m") { 
//     console.log("Bom dia, cabra da peste!")
// } else if (turno === "v") {
//     console.log(" Boa tarde, Seu lunga!")
// }else if (turno === "n") { 
//     console.log(" Boa noite, cuidado com a cumade fulorzinha")
// } else{ 
//     console.log("EI EI, alternativa não encontrada. Escolhe ai uma letra das opções anteriores: M (matutino) ou V (Vespertino) ou N (Noturno) ")
// }

// -- 3 -- 
// const turno = prompt("Me diz o turno que tu estuda digitando a letra entre as opções: M (matutino) ou V (Vespertino) ou N (Noturno)").toLocaleLowerCase()

// switch (turno) {
//     case "m":
//         console.log("Bom dia, cabra da peste!")
//         break
//         case "v":
//             console.log(" Boa tarde, Seu lunga!")
//             break
//             case"n":
//             console.log(" Boa noite, cuidado com a cumade fulorzinha")
//             break
//             default: 
//             console.log("EI EI, alternativa não encontrada. Escolhe ai uma letra das opções anteriores: M (matutino) ou V (Vespertino) ou N (Noturno) ")
//             break
// }

// -- 4 -- 

const generoFilme = prompt("Qual o gênero de filme que tu vai assistir?").toLocaleLowerCase()
const precoFilme = Number(prompt("Qual é o preço do ingresso?"))

if (generoFilme === "fantasia" && precoFilme < 15) { 
    console.log("Bom filme!")
}else{
    console.log("Escolha outro filme :(")
}