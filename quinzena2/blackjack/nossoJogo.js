/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * console.log("Bem vindo ao jogo de Blackjack!")
 *
 * 
// //  **/
    console.log("Bem vindo ao jogo Blackjack")

   
    let blackJack = confirm("Quer iniciar um novo jogo?")
    const nome = prompt("Informe o nome do player")
      
    while (blackJack) {
       if (blackJack) {
       let userCard1 = comprarCarta()
       let userCard2 = comprarCarta()
       let pcCard1 = comprarCarta()
       let pcCard2 = comprarCarta()

       let userPoints = userCard1.valor + userCard2.valor
       let pcPoints = pcCard1.valor + pcCard2.valor

       console.log(`${nome} suas cartas são: ${userCard1.texto} ${userCard2.texto}. \nSua pontuação foi: ${userPoints}\n`)
       console.log(`As cartas do segundo player são: ${pcCard1.texto} ${pcCard2.texto}. \nA pontuação foi: ${pcPoints}\n`)

       if (userPoints > pcPoints) {
          console.log(`${nome}, você ganhou!`)
       } else if (pcPoints > userPoints) {
          console.log("O segundo player ganhou!")
       } else if (userPoints === pcPoints){
          console.log("Empate!")}
          else{}
blackJack = confirm ("Deseja jogar novamente?") 
if (confirm !== confirm ){(blackJack)
}else {console.log("O jogo acabou, obrigado por jogar!")}
   }}


