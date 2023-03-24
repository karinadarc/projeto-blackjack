
//EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'


//const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

//console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)


console.log('Bem-vindo(a) ao jogo de blackjack')

if (confirm('Quer iniciar uma nova rodada?')) {
   jogar()
} else {
   console.log('O jogo acabou!')
}

function jogar() {
   const carta1 = comprarCarta()
   const carta2 = comprarCarta()
   const carta3 = comprarCarta()
   const carta4 = comprarCarta()

   const valorUsuario = carta1.valor + carta2.valor
   const valorComputador = carta3.valor + carta4.valor

   console.log(`Usuário - cartas:  ${carta1.texto} ${carta2.texto} - ${valorUsuario}`)
   console.log(`Computador - cartas: ${carta3.texto} ${carta4.texto} - ${valorComputador}`)

   verificaVencedor(valorUsuario, valorComputador)

}

function verificaVencedor(valorUsuario, valorComputador) {
   if ((valorUsuario > valorComputador || valorComputador > 21) && valorUsuario <= 21) {
      console.log('Usúario venceu!')
   } else if ((valorComputador > valorUsuario || valorUsuario > 21) && valorComputador <= 21) {
      console.log('Computador venceu!')
   } else {
      console.log('Empate')

   }
}
