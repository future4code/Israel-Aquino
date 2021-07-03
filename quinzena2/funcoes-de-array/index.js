//------------ Exercícios de interpretação de código --------
// 1 - O codigo faz 5 contagens, somando os antigos 
// resultados da variavel valor, com o novoresultado. E será impresso no console o valor 10

// 2 - 
// a) os números que são maiores que 18 no array
// b) Sim. Basta tirar o "if" do código e deixar apenas o numero of lista com o console.log na variável numero

//3- ***




// ----------- Exercícios de escrita de código -------------

//1 - a) / b) / c)
// let userPets = Number(prompt("Quantos pets você tem?")) // tentei com if else no meio do código, porém não consegui fazer imprimir o array em uma linha só. 
// //Ele sempre imprimia o primeiro input do úsuario e depois o array com todos os outros
// console.log(userPets)

// if(userPets === 0){  
//   console.log("Que pena! Você pode adotar um pet!")
// }

// if(userPets > 0){  
//   let array = []
//     for(let i=0; i < userPets; i++){   
//   array.push(prompt("Quais os nomes dos seus pets?"))
     
//   }
//   console.log(array)
// }else{}

//2 

let arrayOriginal = [10,20,35,40,69]

// a - 
function print1 (arrayOriginal){
  for(let input of arrayOriginal){
    console.log("a:",input)
      }
      
}
print1(arrayOriginal)

//b -
function print2 (arrayOriginal){
  for(let input of arrayOriginal){
    console.log("b:",input/10)
      }
      
}
print2(arrayOriginal)

//c -
function print3 (arrayOriginal){
  let inputPar = []
    for(let input of arrayOriginal){
      if(input % 2 ===0){
        inputPar.push(input)}
      }
      console.log("c:",inputPar)
}
print3(arrayOriginal)

// d - 
function print4(arrayOriginal){
    let array = []
    let i = 0
    for(let valor of arrayOriginal){
      array.push(`O elemento do índex ${i} é: ${valor}`)
      i++
    }
    console.log("d:", array)
  }
  print4(arrayOriginal)