// ===============================
// Task 1
// ===============================

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

console.log(multiplier(4)(3));

// ===============================
// Task 2
// ===============================

function withLogging(fn) {
  return function (...args) {
    console.log("Arguments:", args);
    return fn(...args);
  };
}

function sum(a, b) {
  return a + b;
}

const loggedSum = withLogging(sum);

console.log(loggedSum(5, 7));

// ===============================
// Task 3
// ===============================

const double = multiplier(2);

const numbers = [1, 2, 3, 4];

console.log(numbers.map(double));