// export defaut function () {}
const screen = document.getElementById('screen');
const numberKeys = document.querySelectorAll('[id*=tecla]');

const insertNumber = (events) => screen.textContent = events.target.textContent;

numberKeys.forEach(numberKey => numberKey.addEventListener('click', insertNumber));