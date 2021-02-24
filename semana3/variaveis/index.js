//1 Será impresso primeiramente 10 e depois 10 5.
//2 Será impresso 10 10 10.

let nome 
let idade 

console.log (typeof nome, typeof idade)
// pq a variável nao foi preenchida 

nome = prompt("Qual é o seu nome?");
idade = prompt("Qual é a sua idade?");

console.log (typeof nome, typeof idade)

//os dois sao strings

console.log(" Olá ", nome , "voce tem ", idade , "anos" )

let rua = prompt("Qual a sua rua?")
let pets = prompt("Voce tem pets?")
let cor = prompt("Qual a sua cor favorita?")
let cel = prompt ("Qual o numero do seu celular?")
let voo = prompt("Qual o numero do seu voo?")

console.log ("1. Qual a sua rua?", rua)
console.log ("2. Voce tem pets?", pets)
console.log ("3. Qual a sua cor favorita?", cor)
console.log ("4. Qual o numero do seu celular?", cel)
console.log("5. Qual o numero do seu voo", voo)

let comidas = ['sushi', 'chocolate', 'hamburguer', 'shiitake', 'coxinha'] 

console.log (comidas)
console.log ("Essas sao as minhas comidas favoritas: ")
console.log (comidas[0])
console.log (comidas[1])
console.log (comidas[2])
console.log (comidas[3])
console.log (comidas[4])

let comidafav = prompt("Qual a sua comida favorita?")
comidas[1] = comidafav

console.log(comidas)

let perguntas = ['Voce gosta de limao?', 'Voce gosta de viajar?', 'Voce gosta de animais?']
let respostas = [ true, true ,true ]
console.log ( perguntas[0], respostas[0], perguntas[1], respostas[1], perguntas[2], respostas[2])
