//=============Jogo BlackJack==============

if (confirm('Bem-vindo ao jogo de Blackjack!\nQuer iniciar uma nova rodada?')) {

   let recomecaJogada

   do {
      jogar()
      recomecaJogada = (confirm('Quer jogar outra rodada?'))

   } while (recomecaJogada);

   alert('O jogo acabou!')

} else {
   alert('O jogo acabou!')
}



function sorteiaDuasCartas() {
   let primeiraCarta = comprarCarta()
   let segundaCarta = comprarCarta()
   if (primeiraCarta.texto === 'A' && segundaCarta.texto === 'A') {
      primeiraCarta = comprarCarta()
      segundaCarta = comprarCarta()
   }
   return [primeiraCarta, segundaCarta]
}


function jogar() {
   const [carta1, carta2] = sorteiaDuasCartas()
   const [carta3, carta4] = sorteiaDuasCartas()
   let cartaSurpresa
   let respostaUsuario
   let textosCartasUsuarios = [carta1.texto, carta2.texto]
   let textosCartasPc = [carta3.texto, carta4.texto]

   let valorUsuario = carta1.valor + carta2.valor
   let valorComputador = carta3.valor + carta4.valor


   respostaUsuario = (confirm(`Suas cartas são: ${textosCartasUsuarios.join(' ')} . A carta revelada do computador é ${carta3.texto}. Deseja comprar mais uma carta?`))

   while (respostaUsuario) {

      cartaSurpresa = comprarCarta()
      textosCartasUsuarios.push(cartaSurpresa.texto)
      valorUsuario += cartaSurpresa.valor

      if (valorUsuario > 21) {
         break
      }

      respostaUsuario = (confirm(`Suas cartas são: ${textosCartasUsuarios.join(' ')} . A carta revelada do computador é ${carta3.texto}. Deseja comprar mais uma carta?`))

   }

   while (valorUsuario > valorComputador && valorUsuario <= 21) {

      cartaSurpresa = comprarCarta()
      textosCartasPc.push(cartaSurpresa.texto)
      valorComputador += cartaSurpresa.valor
   }

   const vencedor = checaVencedor(valorUsuario, valorComputador)
   alert(`Usuário - Cartas: ${textosCartasUsuarios} - Pontuação: ${valorUsuario}  \nComputador - Cartas: ${textosCartasPc} - Pontuação: ${valorComputador}\n${vencedor}`)
}

function checaVencedor(valorUsuario, valorComputador){
   if ((valorUsuario > valorComputador || valorComputador > 21) && valorUsuario <= 21) {
      return 'Usuário Venceu' 
   } else if ((valorComputador > valorUsuario || valorUsuario > 21) && valorComputador <= 21) {
      return 'Computador Venceu'
   } else {
      return 'Empate'
   }  
}