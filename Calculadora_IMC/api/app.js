const name = document.getElementById('name')

const height = document.getElementById('height')

const weight = document.getElementById('weight')

const calculate = document.getElementById('button')

const screen = document.getElementById('screen')

const bodyMassIndex = function CalculateIndex (height, weight){
    const imc = weight/((height/100)^2)
    return screen.innerText = imc.toFixed(2)
}

bodyMassIndex(170,80)
// imc = peso/(altura x altura)

