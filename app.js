let listaDeNumerosSorteados = [];
let numeroLimite = 30
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'brazilian portuguese male',
    {rate:1.2});
    
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Gandalf irá advinhar seu número');
    exibirTextoNaTela('p','Escolha um número de 1 a 30');
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Ah, meus parabéns, meu caro!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Sua perspicácia é notável, você descobriu em ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p','O número é menor, meu caro');
        } else {
            exibirTextoNaTela('p','O número é maior, meu caro');
        }
        tentativas++;
       
    }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = []
  }


  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}
function limparCampo() {
    document.querySelector('input').value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(); 
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', 
    true);
}      