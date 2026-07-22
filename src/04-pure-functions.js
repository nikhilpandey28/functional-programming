// ===============================
// Task 1
// ===============================

function multiply(a,b){
    return a*b;
}

console.log(multiply(5,4));
console.log(multiply(5,4));

// ===============================
// Task 2
// ===============================

let tax = 0.18;

function calculateTax(amount){
    return amount + amount * tax ;
}

console.log(calculateTax(100));

tax = 0.28;

console.log(calculateTax(100));

// ===============================
// Task 3
// ===============================

function calculatePricePure(amount, taxRate) {
  return amount + amount * taxRate;
}

console.log(calculatePricePure(100, 0.18));
console.log(calculatePricePure(100, 0.18));