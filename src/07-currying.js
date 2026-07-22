// ===============================
// Task 1
// ===============================

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return (...nextArgs) => curried(...args, ...nextArgs);
  };
}

function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3));
console.log(curriedSum(1, 2)(3));
console.log(curriedSum(1)(2, 3));

// ===============================
// Task 2
// ===============================

const add = (a) => (b) => a + b;

const add5 = add(5);

console.log(add5(10));

// ===============================
// Task 3
// ===============================

// Closures allow inner functions to remember previously supplied
// arguments, making currying and partial application possible.