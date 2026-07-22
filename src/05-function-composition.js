const double = (x) => x * 2;
const square = (x) => x * x;
const addOne = (x) => x + 1;

// ===============================
// Task 1
// ===============================

const pipe =
  (...fns) =>
  (value) =>
    fns.reduce((acc, fn) => fn(acc), value);

console.log(pipe(double, square)(3));

// ===============================
// Task 2
// ===============================

const compose =
  (...fns) =>
  (value) =>
    fns.reduceRight((acc, fn) => fn(acc), value);

console.log(compose(square, double)(3));

// ===============================
// Task 3
// ===============================

const transform = pipe(addOne, double, square);

console.log(transform(2));

// ((2+1)*2)^2 = 36