//--Exercicio 1
//esta acrescentando +1 ao valor a cada looping , até o i for menor que 5

//--Exercicio 2
//a - vai imprimir todos os numeros maiores que 18
//b - precisaria colocar numeros.push e depois imprimir a array para ver cada elemento 



//--Exercicio 3

let arrayOriginal = [10, 15, 20, 30]
let arrayPar =[]
let maiorNumero=0
let menorNumero=0

console.log(arrayOriginal.length)

for( numeros of arrayOriginal){
    console.log (numeros)//valor arrayOriginal

  
    if (numeros % 2 == 0){
        arrayPar.push(numeros)  // numeros pares array
    }
}


for(numero of arrayOriginal){
    console.log (numero/10) //cada um dos valores da arrayOriginal dividido 10
}

console.log(arrayPar)

for (let i=0; i<arrayOriginal.length; i++){
    console.log("O elemento do index", i, "é:", arrayOriginal[i]) //indice
}

for(let i = 0; i < arrayOriginal.length; i++){
    if(arrayOriginal[maiorNumero] < arrayOriginal[i + 1]){
        maiorNumero = i + 1; // maior
    }
    if(arrayOriginal[menorNumero] > arrayOriginal[i + 1]){
        menorNumero = i + 1; // menor
    }
}

/*segunda solucao menor/maior :
let maiorNumero=0
let menorNumero= array[0]

for(let i = 0; i< arrayOriginal.length; i++){
    if(arrayOriginal[i] > maiorNumero){
        maiorNumer=arrayOriginal[1];
    }else if(arrayOriginal[i] < menorNumero){
        menorNumero=array[i];
    }
}
*/

console.log("Maior Numero:", arrayOriginal[maiorNumero])
console.log("Menor Numero:", arrayOriginal [menorNumero])