//Exercício 1

function inverteArray(array) {
  return array.reverse()
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
  let arrayPar=[]
  for(number of array){
     if(number%2==0){
        number=number*number
        arrayPar.push(number)
     }
   }
   return arrayPar
}

//Exercício 3

function retornaNumerosPares (array) {
   arrayPar =[]
   for( numeros of array){
      if (numeros % 2 == 0){
          arrayPar.push(numeros)  
      }
  }
  return arrayPar
}

//Exercício 4

function retornaMaiorNumero(array) {
   let maiorNumero = 0
   for(let i = 0; i< array.length; i++){
      if(array[i] > maiorNumero){
          maiorNumero=array[i];
      }
   }   
   return maiorNumero
}

//Exercício 5

function retornaQuantidadeElementos (array) {
  return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2 
   const booleano4 = !booleano3 
   const respostas = []

   if (booleano1 && booleano2 && !booleano4){
      respostas.push(true)
   } else{
      respostas.push(false)
   } 
   if ( (booleano1 && booleano2) || !booleano3){
      respostas.push(true) 
   }else{
      respostas.push(false)
   } 
   if ((booleano2 || booleano3) && (booleano4 || booleano1) ){
      respostas.push(true)
   }else{
      respostas.push(false)
   }  
   if (!(booleano2 && booleano3) || !(booleano1 && booleano3) ){
      respostas.push(true)
   } else{
      respostas.push(false)
   } 
   if (!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)){
      respostas.push(true)
   }else{
      respostas.push(false)
   }
   return respostas
}

//Exercício 7

function retornaNNumerosPares(n) {
   let numerosPares = []
   let num
   for( i=0; i<n; i++){
      num =(i*2)
      numerosPares.push(num)
   }
   return numerosPares 
}

// Exercício 8

function checaTriangulo(a, b, c) {
  let triangulos = ""
  
   if (a == b & b == c){
     triangulos = "Equilátero"
  }else if ( a == b & b!=c | b==c & a!=b| c==a & a!=b){
     triangulos = "Isósceles"
  }else if (a != b & b!=c & c!=a ){
     triangulos ="Escaleno"
  }
  return triangulos 
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let menorNumero=0

  objeto={
     maiorNumero :0,
     maiorDivisivelporMenor: 0,
     diferenca: 0
  }

  if (num1>num2){
     objeto.maiorNumero = num1
     menorNumero = num2
  } else {
     objeto.maiorNumero = num2
     menorNumero = num1
  }
 
  if ((objeto.maiorNumero % menorNumero) ==  0){
     objeto.maiorDivisivelporMenor = true
  }else{
     objeto.maiorDivisivelporMenor = false
  }

  objeto.diferenca = objeto.maiorNumero - menorNumero
  

return objeto
}

// Exercício 10

function segundoMaiorEMenor(array) {
 const maior = Math.max.apply(null, array );
  const menor = Math.min.apply(null, array );
  array.splice(menor) // por alguma razao esse splice nao ta funcionando ! 
  array.splice(maior)
  const novoMaior = Math.max.apply(null, array );
  const novoMenor = Math.min.apply( null, array );
  const novaArray= [novoMaior,novoMenor] 
  return novaArray
}

//Exercício 11

function ordenaArray(array) {
   array.sort(function(a,b){
      return a - b
   })
   
   return array
}

// Exercício 12

function filmeFavorito() {
   filme = {
      nome: "O Diabo Veste Prada",
      ano : 2006,
      diretor: "David Frankel",
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return filme 
}

// Exercício 13

function imprimeChamada() {
   filme = {
      nome: "O Diabo Veste Prada",
      ano : 2006,
      diretor: "David Frankel",
      atores: "Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci"
   }
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`  
}

// Exercício 14

function criaRetangulo(lado1, lado2) {

objeto = {
   largura: lado1,
   altura: lado2,
   perimetro: 2 *(lado1 + lado2),
   area: lado1*lado2
}
return objeto
}



// Exercício 15

function anonimizaPessoa(pessoa) {
   const pessoas = {
      nome: "Astrodev",
      idade: 25,
      email: "astrodev@future4.com.br",
      endereco: "Rua do Futuro, 4"
   }

   pessoas.nome = "ANÔNIMO"
   return pessoas
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]




// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   const novoArray = arrayDePessoas.filter((num) =>{
      if (num.idade >= 18){
         return true 
      }
      return false
   })
   return novoArray
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   const novoArray = arrayDePessoas.filter((num) =>{
      if (num.idade < 18){
         return true 
      }
      return false
   })
   return novoArray
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   const novoArray = array.map((num) =>{
      return (num*2)
   })
   return novoArray
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   const novoArray = array.map((num) =>{
      return String(num*2)
   })
   return novoArray
}

// Exercício 17, letra C

function verificaParidade(array) {
   const novoArray = array.map((num) => {
      if (num % 2 === 0) {
        return `${num} é par`
      } else {
        return `${num} é ímpar`
      }
    })
  
    return novoArray
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   const novoArray = pessoas.filter((num) =>{
      if (num.idade > 14 & num.idade <60 & num.altura >1.5){
         return true 
      }
      return false
   })
   return novoArray
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   const novoArray = pessoas.filter((num) =>{
      if (num.idade < 14 | num.idade >60 | num.altura <1.5){
         return true 
      }
      return false
   })
   return novoArray
}

//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: false, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: true, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: false, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: true, dataDaConsulta: "04/11/2019" }
 ]

function retornaEmailConsulta() {
   return consultas.map((consulta) => {
      let emailFinal = "Olá, "
  
      if (!consulta.cancelada) {
        if (consulta.genero === "feminino") {
          emailFinal += "Sra. "
        } else {
          emailFinal += "Sr. "
        }
  
        emailFinal += consulta.nome + ". "
        emailFinal += "Estamos enviando esta mensagem para "
  
        if (consulta.genero === "feminino") {
          emailFinal += "lembrá-la "
        } else {
          emailFinal += "lembrá-lo "
        }
  
        emailFinal += "da sua consulta no dia " + consulta.dataDaConsulta + ". "
        emailFinal += "Por favor, acuse o recebimento deste-email."
      } else {
        if (consulta.genero === "feminino") {
          emailFinal += "Sra. "
        } else {
          emailFinal += "Sr. "
        }
  
        emailFinal += consulta.nome + ". "
        emailFinal += "Infelizmente sua consulta marcada para o dia "
        emailFinal += consulta.dataDaConsulta + " foi cancelada. "
        emailFinal += "Se quiser, pode entrar em contato conosco para remarcá-la."
      }
      return emailFinal
    });
   
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
 contas.forEach((conta) =>{
    let totalCompras = 0
    for(i=0;i<conta.compras.length;i++){
       totalCompras += Number(conta.compras[i])
    }
    conta.saldoTotal -= totalCompras
 })
 return contas
}