// Intro to Functions

// Quite often we need to perform a similar action in many places of the script.

// For example, we need to show a nice-looking message when a visitor logs in, logs out and maybe somewhere else.

// Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

// Declaring a function
function multiplyBy3(n) {
  console.log(n * 3);
}

multiplyBy3(1);

function multiplyBy4(n) {
  console.log(n * 4);
}

multiplyBy4(1);

const multiplyBy5 = function (n) {
  console.log(n * 5);
}

multiplyBy5(1);

// These functions violate a principle called DRY
// Functions contain block of code/functionality that will be used multiple times

function multiplyByN(m, n) {
  console.log(m * n);
}

// Anatomy of a function

// - function keyword
// - function name
// - add parenthesis which may have parameters
// - curly brackets to form the function body

// Local variables
// A variable declared inside a function is only visible inside that function.

function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  console.log(message);
}

showMessage();

// Outer variables
// A function can access an outer variable as well, for example:

let userName = "John";

function showMessage() {
  let message = "Hello, " + userName;
  console.log(message);
}

showMessage();

// Functions can modify outer variables

let userName1 = "John";

function showMessage() {
  userName1 = "Bob"; // (1) changed the outer variable

  let message = "Hello, " + userName1;
  console.log(message);
}

console.log(userName1); // John before the function call

showMessage();

console.log(userName1);

// If a same-named variable is declared inside the function then it shadows the outer one.

let userName2 = "John";

function showMessage() {
  let userName2 = "Bob"; // declare a local variable

  let message = "Hello, " + userName2; // Bob
  console.log(message);
}

// the function will create and use its own userName
showMessage();

console.log(userName2);

// Parameters

function showMessage(from, text) {
  // parameters: from, text
  console.log(from + ": " + text);
}

// ARGUMENTS
showMessage("Ann", "Hello!"); // Ann: Hello! (*)
showMessage("Ann", "What's up?");

showMessage("Ann");

// A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
// An argument is the value that is passed to the function when it is called (it’s a call time term).

// Default Parameters

function showMessage(from, text = "no text given") {
  console.log(from + ": " + text);
}

showMessage("Ann"); // Ann: no text given

// A function can return a value back into the calling code as the result.

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
console.log(result);

// The directive return can be in any place of the function. When the execution reaches it,
// the function stops, and the value is returned to the calling code (assigned to result above).

// Multiple return statements
function checkAge(age) {
  if (age >= 18) {
    return "Acccess granted";
  } else {
    return "Access denied";
  }
}

let age = checkAge(17);
console.log(age);

// Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, 
// so that someone reading the code gets an indication of what the function does.

// showMessage(..)     // shows a message
// getAge(..)          // returns the age (gets it somehow)
// calcSum(..)         // calculates a sum and returns the result
// createForm(..)      // creates a form (and usually returns it)
// checkPermission(..) // checks a permission, returns true/false

// arguments
function sum() {
    console.log(Array.from(arguments))
}

sum(1,2,3,4,5)