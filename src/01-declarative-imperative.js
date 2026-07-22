// ===============================
// Task 1 - Imperative Programming
// ===============================

const words = ["hi" , "hello" , "hey"];
const lengthImperative = [];

for(let i = 0; i<words.length ; i++)
{
    lengthImperative.push(words[i].length);
}

console.log("Imperative:", lengthImperative);

// ===============================
// Task 2 - Declarative Programming
// ===============================

const lengthDeclarative = words.map(word => word.length);

console.log("Declarative:", lengthDeclarative);

// ===============================
// Task 3
// ===============================

// Imperative loops are preferable when an early exit (break/continue)
// or fine-grained performance optimization is required.