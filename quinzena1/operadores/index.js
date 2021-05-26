/*  ------------- Exercícios de interpretação de código ---------------

-- 1 --.

a. false
b. false
c. true
d. Boolean

-- 2 --

primeiroNumerosegundoNumero

-- 3 --

Converter as strings para Número, pois a operação : 
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!")) */



// ------------- Exercícios de escrita de código ---------------
console.log ("--Hello Labenu--")

// -- 1 --

let idade = Number(prompt ("Qual a sua idade?"))
let Bestfriend = Number(prompt ("Qual a idade do seu melhor Amigo(a)"))

console.log ("Sua idade é maior do que a do seu melhor amigo?", idade>Bestfriend)

let diferença = idade - Bestfriend
console.log ("A diferença de idade é de", diferença, "anos")

// -- 2 --

//a 
const a = Number(prompt ("Insira um número par"))
b = 2 
//b 
const Divisão = a % b
console.log ("Resto da divisão é", Divisão) // O resto dos números pares sempre é igual a 0 

//c 
// Resto dos números impares sempre são 1

// -- 3 --

let Idade = Number (prompt("Me diga qual a sua idade"))

const idadeMeses = Idade * 12
const idadeDias = Idade * 360
const idadeHoras = Idade * 8760

console.log ("Você tem", idadeMeses, "meses na terra.")
console.log ("Você tem ", idadeDias, "dias na terra.")
console.log ("Você tem", idadeHoras, "horas na terra.")

// -- 4 --
let numero1 = Number(prompt("digite um número"))
let numero2 = Number(prompt("agora digita outro número ai")) 

console.log("O primeiro número é maior que o segundo?", numero1 > numero2)
console.log("O primeiro número é igual ao segundo", numero1 == numero2)
console.log("O primeiro número é divisível pelo segundo?", (numero1 % numero2) == 0)
console.log("O segundo numero é divisível pelo primeiro?", (numero2 % numero1) ==0)
