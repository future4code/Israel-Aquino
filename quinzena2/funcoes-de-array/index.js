// -------------------------  Exercícios de escrita de código -------------------
//1 -
// const pets = [
//   { nome: "Lupin", raca: "Salsicha"},
//   { nome: "Polly", raca: "Lhasa Apso"},
//   { nome: "Madame", raca: "Poodle"},
//   { nome: "Quentinho", raca: "Salsicha"},
//   { nome: "Fluffy", raca: "Poodle"},
//   { nome: "Caramelo", raca: "Vira-lata"},
// ]

// //a)
// const nomeDogs = pets.map((inputPets) =>{
//   return inputPets.nome})
  
// console.log(nomeDogs)

// //b)

// const inputSalsicha = (categoria)=>{
//   return categoria.raca === "Salsicha"
//  }

// const salsichaFilter = pets.filter(inputSalsicha)

// const printSalsicha = salsichaFilter.map((inputPrint) =>{
// return inputPrint.nome
// })
// console.log(printSalsicha)

// // c)
// const inputPoodles = (categoria)=>{
//   return categoria.raca === "Poodle"
//  }

// const poodleFilter = pets.filter(inputPoodles)

// const printPoodle = poodleFilter.map((inputPrint,inputPrint2) =>{
// return `Você ganhou um cupom de desconto de 10% para tosar o/a ${inputPrint.nome}`
// })
// console.log(printPoodle)

// 2 - 

// //a)
const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// const inputItem = produtos.map((nome)=>{
// return nome.nome})

// console.log(inputItem)

// //b)
// const inputNovoPreco = produtos.map((nome,indice, array)=>{
//   const desconto = nome.preco - nome.preco / (100 * 0.5) 
//   console.log(`Produt: ${nome.nome}. Preço com 5% de desconto: R$ ${desconto}`)
//   })

  // c) 
  
  // const inputBebidas = produtos.filter((input,valor) => {
  //   if(input.categoria === "Bebidas"){
  //     return true}
  //     else{false}
  //   })

  //   let novoArray = [...inputBebidas]

  // console.log(novoArray)

// d)
const inputYpe = produtos.filter((array) => {
  return array.nome.includes("Ypê")
})

console.log(inputYpe)
