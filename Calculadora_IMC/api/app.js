
const calculate = document.getElementById('button')

const bodyMassIndex = function CalculateIndex() {
    const fullName = document.getElementById('name').value

    const height = document.getElementById('height').value.replace(',','.')

    const weight = document.getElementById('weight').value.replace(',','.')
    const screen = document.getElementById('screen')

    if (fullName !== "" && height !== "" && weight !== "") {
        const imc = (weight / ((height * height))).toFixed(2)
        let classification = ''
        if (imc <= 18.5) {
            classification = 'abaixo do peso.'
        } else if (imc >= 18.6 && imc <= 24.9) {
            classification = 'com peso Normal. Parabéns!'
        } else if (imc >= 25.0 && imc <= 29.9) {
            classification = 'levemente acima do peso.'
        } else if (imc >= 30.0 && imc <= 34.9) {
            classification = 'com Obesidade Grau I.'
        } else if (imc >= 35.0 && imc <= 39.9) {
            classification = 'com Obesidade Grau II.'
        } else if (imc >= 40.0) {
            classification = 'com Obesidade Morbida. Cuidado!!'
        }
        return screen.innerText = `${fullName.toUpperCase()}, seu IMC é ${imc.replace('.', ',')}: Você está ${classification.toUpperCase()}`
    } return screen.innerText = 'Preencha todos os campos!!!'
}

calculate.addEventListener('click', bodyMassIndex)


