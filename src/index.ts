import {concat} from './test'

const btn = document.querySelector('button')!;
const num1 = document.querySelector('#num1')!;
const num2 = document.querySelector('#num2')!;


if (btn && num1 && num2) {
    btn.addEventListener('click', ()=> {
        concat(num1.value, num2.value)
    })
}
