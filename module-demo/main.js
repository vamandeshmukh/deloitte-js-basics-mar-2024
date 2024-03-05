// main.js
console.log('main.js');

import { add, subtract, multiply, divide } from './math-lib.js';

const resultElement = document.getElementById('result');

// Perform some math operations
const a = 10;
const b = 5;
const sum = add(a, b);
const difference = subtract(a, b);
const product = multiply(a, b);
const quotient = divide(a, b);

// Display results in the HTML
resultElement.textContent = `
    Sum: ${sum}, 
    Difference: ${difference}, 
    Product: ${product}, 
    Quotient: ${quotient}
`;
