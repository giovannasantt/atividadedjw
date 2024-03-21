// variravel que irá receber um número aleatório
let randomNumber = parseInt(Math.random()*100+1)
//console.log(randomNumber)

// criando variaveis para manipular os elementos html
const submit = document.querySelector('#jogar') // botão
const jogada = document.querySelector('#txtNumero') // caixa de texto
const jogadaAnterior = document.querySelector('.vezes') // jogadas anteriores
const jogadasRestantes = document.querySelector('.numChances') // jogadas restantes
const recomecar = document.querySelector('.resultados') // div
const avisos = document.querySelector('.avisos') // texto informativo

const p = document.createElement('p') // criará um paragrafo para reiniciar o jogo
let numerosJogados = [] // criação de vetor para os numeros jogados
let minhasJogadas = 1 // contador de jogadas
let playGame = true // jogador pode jogar


if(playGame){ // se variavel playGame for true execute
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const tentativa = parseInt(jogada.value)
        validaChances(tentativa) // chamando a função validaChances e enviando tentativa como argumento
    })
}

function validaChances(tentativa){
    if(isNaN(tentativa)){ // se tentativa não for um número
        alert('bota um número ai zé')
        jogada.value = '' // limpando a caixa de texto
        jogada.focus() // setando o focus(cursor) na caixa de texto
    }
    else if(tentativa < 1 || tentativa > 100){
        alert('pode número assim não pae, bote um maior que 0 e menor q 101')
        jogada.value = ''
        jogada.focus()
    }
    else{
        numerosJogados.push(tentativa) // empurrando o valor no vetor
        // se minhasJogadas for igual a 6 vidas e tentativas for diferente do numero aleatorio
        if(minhasJogadas === 6 && tentativa !== randomNumber){
            displayTentativas(tentativa) // chame a função
            msg(`Game Over!! <br> O número correto era ${randomNumber}`)
            fimJogo()
        }
        else{
            displayTentativas(tentativa)
            checarTentativas(tentativa)
        }
    }
}

function checarTentativas(tentativa){
    if(tentativa === randomNumber){
        msg('Parabens você acertou o número')
        fimJogo()
    }
    else if(tentativa < randomNumber){
        msg('Palpite baixo, tente novamente')
    }
    else if(tentativa > randomNumber){
        msg('Palpite alto, tente novamente')
    }
}

/*
vai limpar a caixa de texto para a proxima jogada
inserindo uma informação dentro do elemento html chamado spam
incremento um valor para variavel minhasJogadas
inserindo informações de jogadasRestantes usando innerHTML
*/

function displayTentativas(tentativa){
    jogada.value=''
    jogadaAnterior.innerHTML += `${tentativa} `
    minhasJogadas++
    jogadasRestantes.innerHTML = `${7 - minhasJogadas}`
}

function msg(mensagem){
    avisos.innerHTML = `<h1>${mensagem}</h1>`
}

function fimJogo(){
    
}