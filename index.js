// Exercise 1 : Red Table

let table = document.body.firstElementChild;
// your code
let rows = document.querySelectorAll('tr');
let i;
for(i=1; i <= rows.length; i++){
    let column = document.querySelector(`tr:nth-of-type(${i}) td:nth-of-type(${i})`);
    column.style.backgroundColor = 'red';
}