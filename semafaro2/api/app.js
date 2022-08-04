const imgTraffic = document.getElementById('traffic')

const buttons = document.getElementById('buttons')


const trafficLight = function trafficLight(event) {
    stopAutomatic()
    return lightOn[event.target.id]()
}
let colorIndex = 0
let intervalId = null

const nextIndex = function nextIndex() {
    if (colorIndex < 2) {
        ++colorIndex
    } else {
        colorIndex = 0
    }
}
const automaticLight = function automaticLight() {
    const colorsLight = ['red', 'yellow', 'green']
    const colorLight = colorsLight[colorIndex]
    lightOn[colorLight](),
        nextIndex()
}

const stopAutomatic = function stopAutomatic(){
    clearInterval(intervalId)
}

const lightOn = {
    red: function red() {
        return imgTraffic.src = './imagens/vermelho.png'
    },
    yellow: function yellow() {
        return imgTraffic.src = './imagens/amarelo.png'
    },
    green: function green() {
        return imgTraffic.src = './imagens/verde.png'
    },
    automatic: function automatic() {
        return intervalId = setInterval(automaticLight, 1000)
    }

}


buttons.addEventListener('click', trafficLight)