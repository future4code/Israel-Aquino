// -------------- Exercícios de interpretação de código ----------
// -- 1-- 
// O código está somando o valor de "i", a variavel "let valor" tem 0 de valor inicial e a cada vez que o código é refeito soma o valor de "i". E o que vai ser impresso será 10.
// 
// -- 2-- 
// a) o números impressos serão - 19, 21, 23, 25, 27, 30, todos os maiores que 18
// b) 

// -- 3 --


// -------------- Exercícios de escrita de código --------------------
//1)

// let animaisEstimacao = Number(prompt("Quantos animais domésticos você tem?"))
// let pets = []

// if(animaisEstimacao === 0){
//     console.log("Que pena! Você pode adotar um pet!")
// }else {
//         for (let i = 0; i < animaisEstimacao; i++){
//         let nomes = prompt("Digite o nome do seu pet ou pets.")
//         pets.push(nomes)
//     }
//     }

// console.log(pets)

let animaisEstimacao = Number(prompt("Quantos bichos você tem?"))
let pets = []


if(animaisEstimacao === 0){
    console.log("Que pena! Você pode adotar um pet!")}else {
        for (let i = 0; i < animaisEstimacao; i++){
        let nomes = prompt("Digite o(s) nome(s) do seu pet ou pets")
        pets.push(nomes)
    }
    }
console.log(pets)


// até o momento só consegui fazer uma pois ainda estou revisando a aula e o assunto 