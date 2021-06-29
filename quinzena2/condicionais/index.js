// --------- Exercícios de interpretação de código ---------

// 1 - 
// a) Verifica se o número inserido pelo usuario é par
// b)números que o resto será igual a 0, números pares 
// c) números que terão o resto diferentes de 0

// 2-
// a) Verificar o preço da fruta escolhida pelo usuário 
// b) O preço da fruta Maçã é R$ 2.25
// c) O preço da fruta Pêra é R$ 5

// 3-
// a) solicitando uma entrada do usuário 
// b-1) A mensagem seria impressa normalmente ("Esse número passou no teste")
// b-2) O terminal não entenderia e não seria impresso nada
// c) Haverá um erro na impressão da variável "mensagem", onde está dentro do escopo filho e não tem nenhum valor atribuído a ela para ter um resultado

// --------- Exercícios de escrita de código ---------

// 1-
// const idadeUser = Number(prompt("Me informa tua idade"))

// if (idadeUser >= 18){
//   console.log("Você pode dirigir")
// }else{
//   console.log("Você não pode dirigir.")
// }

// // 2-
// const turnoUser = prompt("Qual o turno que você estuda? Digite M (matutino), V (Vespertino) ou N (Noturno)").toLocaleLowerCase()

// function inputTurno(turno){
//   if (turno === "m"){
//     return "Bom dia, aluno!"
//   } else if  (turno === "v") {
//     return "Boa tarde, aluno!"
//   } else if (turno === "n"){
//     return "Boa noite, aluno!"
//   } else {
//     return "Por favor, aperte F5 e escolha o turno, M (matutino), V (Vespertino) ou N (Noturno)"
//   }
// }

// console.log(inputTurno(turnoUser))

// 3- 
// const turnoUser = prompt("Qual o turno que você estuda? Digite M (matutino), V (Vespertino) ou N (Noturno)").toLocaleLowerCase()

// switch (turnoUser){
//   case 'm':
//     console.log("Bom dia, aluno!")
//     break
//   case "v":
//     console.log("Boa tarde, aluno!")
//     break
//   case "n":
//     console.log("Boa noite, aluno!")
//  break
//  default:
//     console.log("Por favor, aperte F5 e escolha o turno, M (matutino), V (Vespertino) ou N (Noturno)")
//     break  
// }

// // 4-
// const inputGenero = prompt("Qual o genêro que você que ver?").toLocaleLowerCase()
// const inputPreco = Number(prompt("Qual o preço que você quer pagar no ingresso?"))

// if (inputGenero === "fantasia" && inputPreco < 15){
//   console.log("Bom filme!")
// } else {
//   console.log("Escolha outro filme :(")
// }


// -------- desafio -------------

// 1-
// const inputGenero = prompt("Qual o genêro que você que ver?").toLocaleLowerCase()
// const inputPreco = Number(prompt("Qual o preço que você quer pagar no ingresso?"))
// const inputSnack = prompt("Qual snack que você quer comprar? Ex.: (pipoca, chocolate, doces, etc)").toLocaleLowerCase()


// if (inputGenero === "fantasia" && inputPreco < 15){
//   console.log("Bom filme!!", "\nAproveite seu/sua", inputSnack+".")
// } else {
//   console.log("Escolha outro filme :(")
// }

// 2 - 
console.log("Bem vindo a loja Cambista Shop")
console.log(`Valores e categorias, \n \nTipo de jogo: DO(Doméstico)\n \nEtapa de jogo:\nSF(Semifinais): categoria1 - R$ 1.320,00 | categoria2 - R$ 880,00 | categoria3 - R$ 550,00 | categoria4 - R$ 220,00
DT( 3º lugar ): categoria1 - R$ 660,00   | categoria2 - R$ 440,00 | categoria3 - R$ 330,00 | categoria4 - R$ 170,00
FI(  Final   ): categoria1- R$ 1.980,00  | categoria2- R$ 1.320,00| categoria3 - R$ 880,00 | categoria4 - R$ 330,00`)
console.log("Tipo de jogo: IN(Intercacional)", "\nO valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços seram multiplicados por R$4,10")

const nome = prompt("Qual é o seu nome completo?").toLocaleLowerCase()
const tipoJogo = prompt("Escolha o tipo de jogo: IN indica internacional; e DO indica doméstico").toLocaleLowerCase()
const etapaJogo = prompt("Escolha a etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final").toLocaleLowerCase()
const categoria = Number(prompt("Escolha a categoria: pode ser as opções 1, 2, 3 ou 4"))
const quantidaIngressos = Number(prompt("Qual é a quantidade de ingressos?"))

let valorunitario

 switch (etapaJogo === "sf"){ 
 case (categoria === 1):
   valorunitario = 1320 
   break
   case (categoria === 2):
   valorunitario = 880 
   break
   case (categoria === 3):
   valorunitario = 550
   break
   case (categoria === 4):
   valorunitario = 220 
   break
   default:
   'Escolha uma categoria de 1 a 4' 
   break;
  }
  switch (etapaJogo === "dt"){ 
    case (categoria === 1):
      valorunitario= 660 
      break
      case (categoria === 2):
      valorunitario =440 
      break
      case (categoria === 3):
      valorunitario = 330 
      break
      case (categoria === 4):
      valorunitario=  170 
      break
      default:
      'Escolha uma categoria de 1 a 4' 
      break;
     }
     switch (etapaJogo === "fi"){ 
      case (categoria === 1):
        valorunitario = 1980 
        break
        case (categoria === 2):
        valorunitario = 1320
        break
        case (categoria === 3):
         valorunitario = 880 
        break
        case (categoria === 4):
        valorunitario = 330
        break
        default:
        'Escolha uma categoria de 1 a 4' 
        break
       }
      
       if (tipoJogo === "in"){
        valorunitario = valorunitario * 4.10
       }

             
       let inputEtapaJogo
       if (etapaJogo === "sf") {
        inputEtapaJogo = "Semi-Final"}
           else if (etapaJogo === "dt"){
            inputEtapaJogo = "Decisão Terceiro lugar"}
           else if (etapaJogo === "fi"){
            inputEtapaJogo = "Final"}
         else{ 
           console.log("Escolha o tipo do jogo! IN(Intercacional) ou DO(Doméstico)") }

       let inputTipoJogo;
       if (tipoJogo === "do") {
        inputTipoJogo = "Doméstico"
       } else if (tipoJogo === "in") {
        inputTipoJogo =  "Internacional";
       } else {
         console.log("Escolha o tipo do jogo! IN(Intercacional) ou DO(Doméstico)")
       }



  console.log(`---Dados da compra--- 

  Nome do cliente: ${nome}
  Tipo do jogo: ${inputTipoJogo}
  Etapa do jogo: ${inputEtapaJogo}
  Categoria: ${categoria}
  Quantidade de ${quantidaIngressos} ingresso(s) 

  ---Valores--- 

  Valor do ingresso: R$ ${valorunitario}
  Valor total: R$ ${quantidaIngressos * valorunitario}`)
