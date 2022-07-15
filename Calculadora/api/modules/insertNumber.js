import {screen} from "../app.js"



export const insertNumber = events => screen.textContent += events;

const screen = document.getElementById('screen');
console.log(screen);
