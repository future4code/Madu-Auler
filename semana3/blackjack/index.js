
//--Exercicio 1
// Ele verifica se a const numero divida por 2 e arredonda da o resto 0 
// ex : 16%5 = 1

//Exercicio 2
//a - para verificar o preco das frutas
//b - 2.25
//c - 5

//Exercicio 3
//a - declarando a const e pedindo que o usario de um valor numerico a ela
//b - Esse numero passou no teste/ Essa mensagem é secreta
//o pai pode ser acessado mas o filho nao, vai dar erro de const nao declarada


//--Exercicio 4

const idade = Number (prompt("Qual a sua idade?"))

if (idade >= 18){
    console.log("Voce pode dirigir")
}else {
    console.log("Voce nao pode dirigir")
}

//--Exercicio 5

const turno = prompt("Digite o turno que voce estuda : M para matutino, V para Vespertino e N para Noturno")

if (turno == 'M'){
    console.log ("Bom dia!")
}else if (turno == "V"){
    console.log("Boa tarde!")
} else if (turno  == "N"){
    console.log ("Boa noite!")
} else{
    console.log("Digite apenas M, V ou N")
}

//--Exercicio 6

const turno = prompt("Digite o turno que voce estuda : M para matutino, V para Vespertino e N para Noturno")

switch (turno){
    case "M":
        console.log ("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log ("Boa Noite!")
        break
    default:
        console.log("Digite apenas M, V ou N") 
}

//--Exercicio 7

const genero = prompt("Qual o genero do filme?")
const valor = prompt("Qual o valor do ingresso?")

if ( genero == "fantasia" && valor < 15){
    console.log("Bom Filme!")
}else {
    console.log("Escolha outro filme ")
}

//--Desafio 1


const genero = prompt("Qual o genero do filme?")
const valor = prompt("Qual o valor do ingresso?")
const snack = prompt("Qual Snack voce vai comprar?")

if ( genero == "fantasia" && valor < 15){
    console.log("Bom Filme! e com", snack)
}else {
    console.log("Escolha outro filme ")
}

//--Desafio 2

const nome = prompt("Digite seu nome:")
const tipo = prompt("IN para internacional ou DO para domestico:")
const etapa = prompt(" SF para semi-final, DT para decisao de terceiro lugar e FI indica final")
const categoria = Number(prompt("Categoria 1,2,3 ou 4?"))
const quantidade = Number(prompt ("Quantos ingressos?"))
let valor = 0

if (tipo == "DO" || "IN"){
    if (etapa == "SF" && categoria == 1){
        valor = 132000
    }else if (etapa == "SF" && categoria == 2){
        valor = 88000
    }else if (etapa == "SF" && categoria == 3){
        valor = 55000
    }else if (etapa == "SF" && categoria == 4){
        valor = 22000
    }

    if (etapa == "DT" && categoria == 1){
        valor = 66000
    }else if (etapa == "SF" && categoria == 2){
        valor = 44000
    }else if (etapa == "SF" && categoria == 3){
        valor = 33000
    }else if (etapa == "SF" && categoria == 4){
        valor = 17000
    }

    if (etapa == "FI" && categoria == 1){
        valor = 198000
    }else if (etapa == "SF" && categoria == 2){
        valor = 132000
    }else if (etapa == "SF" && categoria == 3){
        valor = 88000
    }else if (etapa == "SF" && categoria == 4){
        valor = 33000
    }
    
}

const valorTotal = quantidade * valor 
const valorTotalIN = valorTotal * 4.10 

if ( tipo== "DO"){
    console.log ("--Ddos da Compra--")
    console.log ("Nome do Cliente:", nome)
    console.log ("Tipo do jogo:", tipo)
    console.log ("Etapa do jogo:", etapa)
    console.log ("Categoria:", categoria)
    console.log ("Quantidade dos ingressos:", quantidade)
    console.log ("--Valores--")
    console.log ("Valor do ingresso:   R$", valor)
    console.log ("Valor Total :   R$", valorTotal)
}

if ( tipo == "IN"){
    console.log ("--Ddos da Compra--")
    console.log ("Nome do Cliente:", nome)
    console.log ("Tipo do jogo:", tipo)
    console.log ("Etapa do jogo:", etapa)
    console.log ("Categoria:", categoria)
    console.log ("Quantidade dos ingressos:", quantidade)
    console.log ("--Valores--")
    console.log ("Valor do ingresso:   U$", valor)
    console.log ("Valor Total :   U$", valorTotalIN)
}