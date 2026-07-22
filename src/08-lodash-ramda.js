const _ = require("lodash");
const R = require("ramda");

// ===============================
// Task 1
// ===============================

const employees = [
  { name: "Alice", department: "HR" },
  { name: "Bob", department: "IT" },
  { name: "Charlie", department: "HR" },
];

const grouped = _.groupBy(employees, "department");

console.log(grouped);

// ===============================
// Task 2
// ===============================

const original = {
  name: "Nikhil",
  address: {
    city: "Lucknow",
  },
};

const copied = _.cloneDeep(original);

copied.address.city = "Delhi";

console.log(original.address.city);

console.log(copied.address.city);

// ===============================
// Task 3
// ===============================

const pipeline = R.pipe(
  R.filter((x) => x > 2),
  R.map((x) => x * 2),
  R.sum
);

console.log(pipeline([1, 2, 3, 4, 5]));

// Hand calculation:
// [3,4,5]
// [6,8,10]
// 24