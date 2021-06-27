// ----------------- Exercícios de escrita de código -----------------

// 1) 
// a)
// const pessoa = {
//   nome: "Israel", 
// apelidos:["Isra", "Rael", "Preto"]
// };

// function personData (person){
//   console.log("Eu sou", person.nome, "mas pode me chamar de:", person.apelidos[0]+', '+person.apelidos[1]+' ou '+ person.apelidos[2]+".")
// }

// personData(pessoa)


// // b)
// const inputNovaPessoa = {
//   ...pessoa,
//   apelidos:["Carteira Vazia", "Liso", "Muito Liso"]
// }
// personData(inputNovaPessoa)

// 2)
// a - 
// const inputUm = {
//   nome: "Clark Kent",
//   idade:"35", 
//   profissão:"Repórter"
// }
// const inputDois = {
//   nome: "Bruce Wayne",
//   idade:"32", 
//   profissão:"Milionário"
// }

// b)
// function personData(person) {
// console.log([person.nome, person.nome.length, person.idade,  person.idade.length, person.profissão, person.profissão.length])
// }
// personData(inputUm)
// personData(inputDois)

// 3)
// a - 
let carrinho = []

// // b -
const frutaUm = {
  nome: "Banana", disponivel:true 
};
const frutaDois = {
  nome: "Maçã", disponivel:true 
};
const frutaTres = {
  nome: "Melão", disponivel:true 
}

// // c - 
function fruta(input1, input2, input3) {
carrinho.push(input1, input2, input3)
console.log(carrinho)
}

// // d- 
fruta(frutaUm,frutaDois,frutaTres)

// ------- Desafio --------------
// 1)

// const nome = prompt("Qual é o seu nome?")
// const idade = Number(prompt("Qual é a sua idade"))
// const job = prompt("Qual é a sua profissão?")

// function inputData (input1, input2, input3) {
//   const inputFinal = {
//     nome: input1,
//     idade:input2,
//     profissão: input3
//   }
//   console.log(inputFinal)
//   console.log(typeof inputFinal)
// }
// inputData(nome,idade,job)

// 2)
// function movies(){
//   const filmeUm ={
//     nome: "Harry Potter e a Pedra Filosofal",
//     "Ano Lançamento": 2001
//   };
//   const filmeDois = {
//     nome: "O Senhor dos Anéis: As Duas Torres",
//     "Ano Lançamento": 2002
//   }
//   console.log("Primeiro Filme:", filmeUm.nome +'.'+ "\nAno de lançamento:",filmeUm["Ano Lançamento"])
//   console.log("Primeiro Filme:", filmeDois.nome +'.'+ "\nAno de lançamento:", filmeDois["Ano Lançamento"])
//   console.log("O primeiro filme foi lançado antes do segundo?", filmeUm["Ano Lançamento"] < filmeDois["Ano Lançamento"])
//   console.log("O primeiro filme foi lançado no mesmo ano do segundo?", filmeUm["Ano Lançamento"] === filmeDois["Ano Lançamento"])
// }
// movies()

// 3)
function inputDisponibilidade(fruit){
const disponibilidade ={
  ...fruit,
  disponivel: !fruit.disponivel
}
return disponibilidade
}

console.log(inputDisponibilidade(frutaUm))
