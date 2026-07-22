// ===============================
// Task 1
// ===============================

function addItem(arr , item){
    return [...arr , item];
}

const original = [1,2,3];

const updated = addItem(original , 4);

console.log(original);
console.log(updated);

console.log(original.length === 3);

// ===============================
// Task 2
// ===============================

function increaseAge(person){
    person.age++;
}

const user = {
    name : "Nikhil",
    age : 22,
};

increaseAge(user);

console.log(user);

// ===============================
// Task 3
// ===============================

const employee = Object.freeze({
  id: 101,
  name: "Alice",
});

employee.name = "Bob";

console.log(employee.name);