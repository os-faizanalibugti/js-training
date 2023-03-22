// JS array
//    0          1      2
const fruits1BelongsToWarda = ["apple", "banana", "plum"];

// const fruits2BelongsToHassam = new Array("apple", "banana", "plum");

// // fruits1BelongsToWarda.splice(1, 1);

// // console.log(fruits1BelongsToWarda)

// // fruits1BelongsToWarda.pop()

// // console.log(fruits1BelongsToWarda)

// // fruits1BelongsToWarda.unshift("mango")

// // console.log(fruits1BelongsToWarda)

// fruits1BelongsToWarda.forEach((fruit, index) => {
//   console.log(`${index} - ${fruit}`);
// });

// for (let index = 0; index < fruits1BelongsToWarda.length; index++) {
//   const element = fruits1BelongsToWarda[index];

//   console.log(element);
// }

const numbers = [1, 2, 3];

const copyOfNumbers = [...numbers];


copyOfNumbers.push(100)

console.log(numbers);
console.log(copyOfNumbers);
