console.log("Hello World!!")

// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('2')
  const num2 = prompt('4')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura= Number(prompt("Qual a altura do retângulo?"))
  const largura= Number(prompt("Qual a largura do retângulo?"))
  const área = (altura * largura)

  console.log(área)
}

// Exercício 2
function imprimeIdade() {
  const anoAtual= Number(prompt("Qual é o ano que estamos?"))
  const AnoNascimento= Number(prompt("Qual o ano que você nasceu?"))
  const idade = (anoAtual - AnoNascimento)

  console.log(idade)
}

// Exercício 3
function calculaIMC() {
  // const SuaAltura = Number(prompt("Informe seu peso em kg. Ex.: 75")) 
  // const SeuPeso = Number(prompt("Informe sua altura. Ex.: 1.67"))
  // console.log(SeuPeso / (SuaAltura * SuaAltura)) //não está pegando na testagem, porém não acho o erro

  const peso = Number(prompt("Informe seu peso em kg. Ex.: 75"))
    const altura = Number(prompt("Informe sua altura. Ex.: 1.67"))

    console.log(peso / (altura * altura))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nome = prompt("Informe seu nome e sobrenome")
    const idade = prompt("Informe sua idade")
    const email = prompt("informe seu email")

    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Me diga qual a sua cor favorita")
    const cor2 = prompt("Me diz a tua segunda cor favorita")
    const cor3 = prompt("Me diz a tua terceira cor favorita")
    const array = [cor1,cor2,cor3]

    console.log(array)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const palavraAleatoria = prompt("Escreva uma palavra qualquer com todas as letras minúsculas.")

  console.log(palavraAleatoria.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
const custo = Number(prompt("Qual o custo de um espetáculo de teatro?"))
let ingressos = Number(prompt("Qual o valor unitário do ingresso?"))

console.log(custo / ingressos)

}

// Exercício 8
function checaStringsMesmoTamanho() {
  const string1 = prompt("Escreva o nome de uma fruta")
  const string2 = prompt("Escreva o nome de uma segunda fruta")
  
  console.log(string1.length === string2.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const primeiraString = prompt("Escreva um nome qualquer")
  const segundaString = prompt("Escreva um outro nome")

  console.log(primeiraString.toUpperCase() === segundaString.toUpperCase())
}

// Exercício 10
function checaRenovacaoRG() {
  const anohoje = Number(prompt("Qual é o ano que estamos?"))
  const AnoNascimento1 = Number(prompt("Qual o ano do seu nascimento?"))
  let anoId = Number(prompt("Qual o ano que sua carteira de identidade foi emitida?"))

const idadeAtual = anohoje - AnoNascimento1
const dataID = anohoje - anoId

console.log((idadeAtual <= 20 && dataID >= 5) || (idadeAtual > 20 && idadeAtual <= 50 && dataID >= 10) ||
(idadeAtual > 50 && dataID >= 15 ))

}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
const maiorIdade = prompt("Você tem mais de 18 anos?")
const ensinoMedio = prompt("Você possui ensino médio completo?")
const horarios = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

console.log(maiorIdade == "sim" && ensinoMedio == "sim" && horarios == "sim")
}