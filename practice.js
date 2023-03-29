"use strict";
// Create R Update Delete
let user = {
  name: "Bilal",
  isPresent: true,
};

user.name;

// user.isPresent = false

// console.log(user)

// delete user.name;

// console.log(user)

// let object1 = {
//   question: "What is the capital of UK?",
//   difficulty: "easy",
//   answers: ["London", "Manchester", "Birmingham"],
// };

// let object2 = object1;

// // console.log(object1, object2);

// object2.difficulty = "medium";

// console.log(object2);

// console.log(object1);

// Copy / Cloning objects

let object1 = {
  question: "What is the capital of UK?",
  difficulty: "easy",
  answers: ["London", "Manchester", "Birmingham"],
};

let copy = {};

for (let key in object1) {
  copy[key] = object1[key];
}

// console.log(copy)

copy.difficulty = "hard";

console.log(object1, copy);
