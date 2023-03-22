// Declaring arrays

let fruits = ["apple", "orange", "mango"];

let numberArr = new Array("apple", "banana");

console.log(numberArr);

// Accessing elements of an array using bracket notation

console.log(fruits[0]);

// Replacing elements of an array

fruits[0] = "plum";

fruits[fruits.length - 1] = "strawberry";

console.log(fruits);

// Methods on arrays

fruits.pop();

console.log(fruits);

fruits.push("banana");

console.log(fruits);

// ... shift, unshift and many more

// Iterating over arrays

for (let index = 0; index < fruits.length; index++) {
  const element = fruits[index];
  console.log(element);
}

for (const fruit of fruits) {
  console.log(fruit);
}

fruits.forEach((fruit, index, fruitArr) => {
  console.log(`${index} - ${fruit}`);
});

// Arrays are Objects ???

console.log(typeof fruits);

console.log(Array.isArray(fruits));

// ... show prototype property in DevTools

// The Spread Operator ...

// Concat arrays
let currentStudents = ["Adil", "Zeeshan", "Bilal"];
let previousStudents = ["Faizan", "Ali", "Hamza"];

let allStudents = [...currentStudents, ...previousStudents];

console.log(allStudents);

// More powerful array literal

let updatedCurrentStudents = ["Haris", ...currentStudents];

// Destructuring Arrays

let [a, b, c] = currentStudents;

console.log(a)