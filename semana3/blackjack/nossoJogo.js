/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 console.log("Bem vindo ao jogo Blackjack!")

 
 if(confirm("Quer iniciar uma nova rodada?")){
   const usuario1 = comprarCarta();
   console.log("Jogador 1:", usuario1.texto , "Pontuacao:", usuario1.valor)
   const computador1 = comprarCarta();
   console.log("Computador:", computador1.texto , "Pontuacao:", computador1.valor)
   const usuario2 = comprarCarta();
   console.log("Jogador 1:", usuario2.texto , "Pontuacao:", usuario2.valor)
   const computador2 = comprarCarta();
   console.log("Computador:", computador2.texto , "Pontuacao:", computador2.valor)

   usuarioTotal = usuario1.valor + usuario2.valor
   computadorTotal = computador1.valor + computador2.valor
  
   }else{
    console.log("O jogo acabou")
 }


if (usuarioTotal>computadorTotal){
   console.log("Jogador 1 Venceu!")
}else if (computadorTotal > usuarioTotal){
   console.log("Computador Venceu!")
}else if (computadorTotal == usuarioTotal){
   console.log ("Empate!")
}
 
 