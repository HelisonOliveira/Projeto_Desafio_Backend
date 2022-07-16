
const screen = document.getElementById('screen');

const numberKeys = document.querySelectorAll('[id*=key]');

const operatorKeys = document.querySelectorAll('[id*= Operator]')

let newNumber = true
let operator;
let previousNumber;

const pendingOperation = function (){
    return operator !== undefined
}

const calculateOperation = function (){
    if(pendingOperation()){
        const currentNumber = parseFloat(screen.innerText)
        newNumber = true 
        if(operator == '+'){
           return insertNewNumbers(previousNumber + currentNumber)
        }else if (operator == '-'){
           return insertNewNumbers(previousNumber - currentNumber)
        }else if (operator == '*'){
           return insertNewNumbers(previousNumber * currentNumber)
        }else if (operator == '/'){
           return insertNewNumbers(previousNumber / currentNumber)
        }
    }
}

const insertNewNumbers = function (anotherNumberKey){
    if(newNumber){
        return screen.innerText = anotherNumberKey,
        newNumber = false
    } screen.innerText += anotherNumberKey
}
const insertNumbers = function insertNumbers(numberKey){
    return insertNewNumbers(numberKey.target.innerText)   
    
}

numberKeys.forEach(function (numberKey){
    return numberKey.addEventListener('click',insertNumbers)
} )

const performOperation = function performOperation(operatorKey){ 
    if (!newNumber){ 
    calculateOperation()
    newNumber = true,
    operator = operatorKey.target.innerText,
    previousNumber = parseFloat(screen.innerText)
    }
}

operatorKeys.forEach(function(operatorKey){
    return operatorKey.addEventListener('click',performOperation)
})

console.log(numberKeys);
console.log(operatorKeys);
