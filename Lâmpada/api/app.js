const lightOn = document.getElementById('lightOn')

const lightOff = document.getElementById('lightOff')

const imgLightOff = document.getElementById('imgLightOff')

const toExchange = document.getElementById('toExchange')

//ligar a lâmpada
const on = function on(){
    if(!isBroken()){
    return imgLightOff.src = '../imagens/lampada_acesa.jpg'
}
}
//desligar a lâmpada
const off = function off(){
    if(!isBroken()){
    return imgLightOff.src = '../imagens/lampada_apagada.jpg'
}
}
//quebrar a lâmpada

const broken = function broken(){
    return imgLightOff.src = '../imagens/lampada_quebrada.jpg',
    toExchange.style.display =' inline-block' 
}

//saber se a lãmpada está quebrada

const isBroken = function isBroken(){
    return imgLightOff.src.indexOf('quebrada') > -1
}

//trocar a lâmpada

const Exchange = function Exchange(){
    return imgLightOff.src = '../imagens/lampada_apagada.jpg',
    toExchange.style.display ='none'
}

lightOn.addEventListener('click', on)

lightOff.addEventListener('click', off)

imgLightOff.addEventListener('dblclick', broken)

toExchange.addEventListener('click', Exchange)

imgLightOff.addEventListener('mouseover', on)
imgLightOff.addEventListener('mouseleave', off)


