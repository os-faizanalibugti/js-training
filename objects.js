// objects are used to store keyed collections of various data and more complex entities

// Declaring objects

// An object can be created with figure brackets {…} with an optional list of properties.
// A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

let user = new Object(); // "object constructor" syntax
let question = {}; // "object literal" syntax

user = {
  // an object
  name: "John", // by key "name" store value "John"
  age: 30, // by key "age" store value 30
};

// Reading properties of an object

console.log(user.name);
console.log(user.age);

// adding properties to user object

user.isAdmin = true;

console.log(user);

// deleting properties

delete user.age;

console.log(user);

// Mulit word property names

user = {
  name: "John",
  age: 30,
  "likes birds": true, // multiword property name must be quoted
};

// Accessing multi word property names
// user.like birds

// Dot notation won't work, use bracket notation insstead

console.log(user["like birds"])

delete user["like birds"]

// Property value shorthand

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

user = makeUser("John", 30);
console.log(user.name); // John

// There’s a minor gotcha with a special property named __proto__. We can’t set it to a non-object value:
let obj = {};
obj.__proto__ = 5; // assign a number
console.log(obj.__proto__);

// Check if property exists in object
user = {};

console.log( user.noSuchProperty === undefined ); // true means "no such property"

user = { name: "John", age: 30 };

    // property name  // object
console.log( "age" in user ); // true, user.age exists
console.log( "blabla" in user ); // false, user.blabla doesn't exist

// Iterate over objects
user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  console.log( key );  // name, age, isAdmin
  // values for the keys
  console.log( user[key] ); // John, 30, true
}

let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}

// Copying object by reference

user = { name: "John" };

let admin = user; // copy the reference

admin.name = 'Pete'; // changed by the "admin" reference

console.log(user.name); // 'Pete', changes are seen from the "user" reference

// Cloning objects
// Method 1 - for -in - Cloning/Copying
user = {
  name: "John",
  age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

console.log( user.name ); // still John in the original object

// Method 2 - Object.assign(), cloning
user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);

console.log(clone.name); // John
console.log(clone.age); // 30

// Merging objects

user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user, permissions1, permissions2)

console.log(user)

// Can't use Object.assign for cloning NESTED objects

user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let copyUser = structuredClone(user)