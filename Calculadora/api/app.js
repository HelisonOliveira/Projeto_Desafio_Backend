// import {insertNumber} from './modules/insertNumber'

export const screen = document.getElementById('screen');

export const numberKeys = document.querySelectorAll('[id*=key]');

const updateScreen = (key) => screen.textContent += key 

const insertNumbers = insertNumber => updateScreen  (insertNumber.target.textContent)

numberKeys.forEach(numberKey => numberKey.addEventListener('click', insertNumbers));