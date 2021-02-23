// false, false, true, boolean
//undefined, null, 11, 3, array[11], 9



let idade = prompt("Qual a sua idade?")
let idadeAmigo = prompt("Qual a idade do seu amigo?")
console.log ("Sua idade é maior que a do seu amigo?", idade>idadeAmigo)
console.log("A diferenca de idade é:", idade-idadeAmigo)

let par= prompt("Insira um numero par:")
console.log (par/2)
// devolve numeros quebrados tbm ex 3.5
let listaDeTarefas = []
listaDeTarefas[0] = prompt ("Primeira Tarefa:")
listaDeTarefas[1] = prompt ("Segunda Tarefa:")
listaDeTarefas[2] = prompt ("Terceira Tarefa:")
console.log(listaDeTarefas)

let indice = prompt ("Qual tarefa voce ja realizou, 0 1 ou 2?")
listaDeTarefas.splice(indice, 1)
console.log(listaDeTarefas)


let nome = prompt("Qual o seu nome?")
let email = prompt("Qual o seu Email?")
console.log ("O seu e-mail", email , "foi cadastrado com sucesso. Seja bem-vindo(a)", nome)

