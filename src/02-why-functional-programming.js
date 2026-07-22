// ===============================
// Task 1 - Memoize
// ===============================

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log("Cache Hit:", key);
      return cache.get(key);
    }

    console.log("Computed:", key);

    const result = fn(...args);

    cache.set(key, result);

    return result;
  };
}

// ===============================
// Task 2
// ===============================

let counter = 0;

function square(num) {
  counter++;
  return num * num;
}

const memoizedSquare = memoize(square);

console.log(memoizedSquare(5));
console.log(memoizedSquare(5));
console.log(memoizedSquare(6));
console.log(memoizedSquare(6));
console.log(memoizedSquare(5));

console.log("Actual Computations:", counter);

// Should be 2

// ===============================
// Task 3
// ===============================

// Memoizing an impure function is unsafe because its output may depend
// on external state that can change even when the input stays the same.