const gif = document.getElementById('gif')

const buttonGreen = document.getElementById('button')

const start = document.getElementById('start')

const restarte = document.getElementById('restart')

const gifStart = function gifStart(){
    return gif.src = '../imagens/inicio.gif',
    start.style.display = 'none',
    restarte.style.display = 'none',
    midlleGif()
    }

const midlleGif = function midlleGif (){ 
    return (setTimeout((changeGif),6500))
}
const changeGif =  function changeGif (){
        return gif.src = '../imagens/meio.gif',
        buttonGreen.style.display = 'block'
}

const halfGif = function halfGif(){
    return gif.src = '../imagens/fim.gif',
    buttonGreen.style.display = 'none',
    rest()
}

const rest = function rest() {
    return (setTimeout((restart),11800))
}  

const restart = function restart(){
    return restarte.style.display = 'block',
    gif.src = '../imagens/starte.gif'
}

start.addEventListener('click', gifStart)

restarte.addEventListener('click', gifStart)

buttonGreen.addEventListener('click', halfGif)