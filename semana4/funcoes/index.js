//Exercicio 1--> a) 10 e 50    b)nada

// Exercicio 2--> a)Darvas e Caio  b)Amanda e Caio

//Exercicio 3-->  seleciona os numeros paras da array 
//e armazena eles na arrayfinal multiplicados por 2

//Exercicio 4a
function info (){
    console.log("Eu sou Madu, tenho 25 anos, moro na Alemanha e sou estudante")
}

info()

//Exercicio 4b

function sobre( nome, idade, cidade, questao){
    if(questao == false ){
        estuda = "nao sou"
    }else {
         estuda = "sou"
    }
   console.log("Eu sou", nome , "tenho", idade, "anos, moro na ", cidade, "e", estuda, "estudante" )
}

nomeUsuario = prompt ("Qual o seu nome ?")
idadeUsuario= prompt ("Qual a sua idade?")
cidadeUsuario = prompt("Onde voce mora?")
questaoUsuario =confirm("Voce é estudade?")

sobre (nomeUsuario, idadeUsuario, cidadeUsuario, questaoUsuario)

//Exercicio 5a

function somaDeDoisNumeros(valor1, valor2){
    const soma = valor1+valor2
    return soma
}

const resultado = somaDeDoisNumeros ( 3, 4)
console.log (resultado)

//Exercicio 5b 

function somaDeDoisNumeros2(numero1, numero2){
    if (numero1 > numero2){
        return  true
    }else {
        return  false
    }
}

const resultado2 = somaDeDoisNumeros2( 3, 5)
console.log (resultado2)

//Exercicio 5c

let repeticao 
function mensagem(string){
    for (repeticao = 0; repeticao < 10; repeticao++) {
        console.log(string);
      }
}

stringUsuario = prompt ("Escreva uma frase")
mensagem(stringUsuario)

//Exercicio 6a

function arrayDeNumeros(numeros){
    return numeros.length
}

arrayNumerosUsuario = [5, 6, 7, 8]
console.log (arrayDeNumeros(arrayNumerosUsuario))

//Exercicio 6b

function par (numeroPar){
    if (numeroPar % 2 == 0){
        return true
    }else {
        return false
    }
}

numeroParUsuario = 6
console.log (par(numeroParUsuario))

//Exercicio 6c

let arrayOriginal = [10, 15, 20, 30]
let arrayPar =[]

function verificacaoDePares(item){
 for( numeros of item){
    
 if (numeros % 2 == 0){
        arrayPar.push(numeros)  
   }
}
    return arrayPar.length
}

console.log (verificacaoDePares(arrayOriginal))

//Exercicio 6d

function verificacaoDePares(item){
for( numeros of item){
    
    if (par(numeros) == true) {
        arrayPar.push(numeros)  
    }
}
    return arrayPar.length
}

console.log (verificacaoDePares(arrayOriginal))
