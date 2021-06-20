// ------------- Exercícios de interpretação de código --------
// --- 1---
// a) 10 e 50
// b)Não aconteceria nada, pois não teve a ação de imprimir no console 

// -- 2-- 
//a) A função verifica em booleano se a string cenoura está inclusa na frase q será inserida pelo usuário, com um retonro em booleano
// b) i - true/ ii - tru/ iii = true


// ---- Exercícios de escrita de código -----
//-- 1 --
// //a)
// function inputImpressao() {
// console.log("Eu sou Israel, tenho 26 anos, e moro em Recife, Permanbuco. E também sou estudante.")
// }
// inputImpressao()

// //b)
// function inputParametros(name,idade,city,job){
// console.log(`Eu sou ${name}, tenho ${idade} anos, moro em ${city} e sou ${job}.`)
// }
// inputParametros("Israel", 26, "Recife", "Administrador Financeiro" )

// //-- 2 --
// //a)
// function somaDoisNumeros(number1, number2){
//   const soma = number1 + number2
//   return soma
// }
// console.log("Soma de 10 e 10", somaDoisNumeros(10,10))

// //b)
// function inputBooleano (number1, number2){
//   const boolean = number1 >= number2
//   return boolean
// }
// console.log("Verificando se o número 5 é maior ou igual a 23",inputBooleano(5,23))

// //c)
// function inputPar (number1){
//   const par = (number1 %2) === 0
//   return par
// }
// console.log("Verificando se o número 5 é par",  inputPar(5))

// //d)
// function inputString(string1){
// console.log("Tamanho da mensage:", string1.length)
// console.log("To UpperCase", string1.toUpperCase())
// }
// inputString("Olá meu nome é Israel")

// //-- 3 -- 

// let input1 = Number(prompt("Insira um número"))
// let input2 = Number(prompt("Insira um outro número"))

// function somar(input1, input2) {
// let soma = input1 + input2
// return soma
// }
// function subtracao(input1, input2){
// let subtrair = input1 - input2
// return subtrair
// }
// function multiplicacao(input1, input2){
//   let multiplicar = input1 * input2
//   return multiplicar
//   }
// function divisao(input1, input2){
//   let dividir = input1 / input2
//   return dividir
//   }
  
// console.log("Números inseridos:", input1+" e "+ input2)
//   console.log("Soma:", somar(input1,input2))
//   console.log("Subtração:", subtracao(input1,input2))
//   console.log("Multiplicação:", multiplicacao(input1,input2))
//   console.log("Divisão:", divisao(input1,input2))


 // ---- desafio ----
 // -- 1 --
 // a)
 const primeiroInput = (parametro ) =>{
	console.log("Soma:", parametro)
   }
  
   //b)
   let segundoInput = (valor1,valor2) =>{
	soma = valor1 + valor2
  primeiroInput(soma)
   }
  segundoInput(5,9)