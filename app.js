import { add, subtract, multiply, divide } from './utils.js';
//addition
const addInputEl1 = document.getElementById('add-input-1');
const addInputEl2 = document.getElementById('add-input-2');
const addButtonEl = document.getElementById('add-button');
const addResultEl = document.getElementById('add-result');
//subtraction
const subInputEl1 = document.getElementById('sub-input-1');
const subInputEl2 = document.getElementById('sub-input-2');
const subButtonEl = document.getElementById('sub-button');
const subResultEl = document.getElementById('sub-result');
//multiplication
const multInputEl1 = document.getElementById('mult-input-1');
const multInputEl2 = document.getElementById('mult-input-2');
const multButtonEl = document.getElementById('mult-button');
const multResultEl = document.getElementById('mult-result');
//division
const divInputEl1 = document.getElementById('div-input-1');
const divInputEl2 = document.getElementById('div-input-2');
const divButtonEl = document.getElementById('div-button');
const divResultEl = document.getElementById('div-result');

//click counters
// const countAddEl = document.getElementById('addButton');


console.log(addInputEl1, addInputEl2, addResultEl, addButtonEl);

addButtonEl.addEventListener('click', () => {
    const x = Number(addInputEl1.value);
    const y = Number(addInputEl2.value);
    const result = add(x, y);
    addResultEl.textContent = result;
}); 

subButtonEl.addEventListener('click', () => {
    const x = Number(subInputEl1.value);
    const y = Number(subInputEl2.value);
    const result = subtract(x, y);
    subResultEl.textContent = result;
});

multButtonEl.addEventListener('click', () => {
    const x = Number(multInputEl1.value);
    const y = Number(multInputEl2.value);
    const result = multiply(x, y);
    multResultEl.textContent = result;
});

divButtonEl.addEventListener('click', () => {
    const x = Number(divInputEl1.value);
    const y = Number(divInputEl2.value);
    const result = divide(x, y);
    divResultEl.textContent = result;
});
//attempt to add count button stretch goal
// countAddEl.addEventListener('click', () => {
//     count++;
//     addButtonEl.innerHTML = count;
// }) 