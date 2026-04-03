// input from user
let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));

// Add
function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division
function divide(a, b) {
    return a / b;
}

// Modulus
function modulus(a, b) {
    return a % b;
}

console.log("Addition:", add(num1, num2));
console.log("Subtraction:", subtract(num1, num2));
console.log("Multiplication:", multiply(num1, num2));
console.log("Division:", divide(num1, num2));
console.log("Modulus:", modulus(num1, num2));
