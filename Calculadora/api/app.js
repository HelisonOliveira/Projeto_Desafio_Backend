
const screen = document.getElementById('screen');

const numberKeys = document.querySelectorAll('[id*=key]');

const operatorKeys = document.querySelectorAll('[id*= Operator]')

let newNumber = true

const insertNewNumbers = function (anotherNumberKey) {
    if (newNumber) {
        return screen.innerText = anotherNumberKey.toLocaleString('BR'),
            newNumber = false
    } screen.innerText += anotherNumberKey.toLocaleString('BR')
}
const insertNumbers = function insertNumbers(numberKey) {
    return insertNewNumbers(numberKey.target.innerText)
}

numberKeys.forEach(function (numberKey) {
    return numberKey.addEventListener('click', insertNumbers)
})

let operator;
let previousNumber;

const performOperation = function performOperation(operatorKey) {
    if (!newNumber) {
        calculateOperation()
        newNumber = true,
            operator = operatorKey.target.innerText,
            previousNumber = parseFloat(screen.innerText.replace(',','.'))
    }
}

operatorKeys.forEach(function (operatorKey) {
    return operatorKey.addEventListener('click', performOperation)
})

const pendingOperation = function () {
    return operator !== undefined
}

// achei melhor não optar pelo {EVAL} por motivos de problemas futuros na aplicação
const calculateOperation = function () {
    if (pendingOperation()) {
        const currentNumber = parseFloat(screen.innerText.replace(',','.'))
        newNumber = true
        if (operator == '+') {
            return insertNewNumbers(previousNumber + currentNumber)
        } else if (operator == '-') {
            return insertNewNumbers(previousNumber - currentNumber)
        } else if (operator == '*') {
            return insertNewNumbers(previousNumber * currentNumber)
        } else if (operator == '/') {
            return insertNewNumbers(previousNumber / currentNumber)
        }
    }
}

const activateEqual = function activateEqual() {
    return calculateOperation(),
        operator = undefined
}
document.getElementById('equal').addEventListener('click', activateEqual)

const activeCleanScreen = function activeCleanScreen() {
    return screen.innerText = '',
        newNumber = true
}
document.getElementById('cleanScreen').addEventListener('click', activeCleanScreen)

const deleteNumber = function deleteNumber() {
    return screen.innerText = screen.innerText.slice(0, -1),
        newNumber = true
}
document.getElementById('deleteNumber').addEventListener('click', deleteNumber)

const hasNumberDecimal = function hasNumberDecimal(){
    return screen.innerText.indexOf(',') !== -1
}

const hasNumber = function hasNumber(){
    return screen.innerText.length > 0
}
const numberDecimal = function numberDecimal() {
    if (!hasNumberDecimal()) {
        if (hasNumber()) {
           return insertNewNumbers(',')
        } else {
            return insertNewNumbers('0,')
        }
    }
}

document.getElementById('decimal').addEventListener('click', numberDecimal)