
const screen = document.getElementById('screen');

const numberKeys = document.querySelectorAll('[id*=key]');

const operatorKeys = document.querySelectorAll('[id*= Operator]')


const insertNumbers = function insertNumbers(numberKey){
    return screen.innerText += numberKey.target.innerText
}

const performOperation = function performOperation(operatorKey){ 
    if(screen !== 0){
    return screen.innerText = operatorKey.target.innerText
    }
}

numberKeys.forEach(function (numberKey){
    return numberKey.addEventListener('click',insertNumbers)
} )

operatorKeys.forEach(function(operatorKey){
    return operatorKey.addEventListener('click',performOperation)
})

console.log(numberKeys);
console.log(operatorKeys);
