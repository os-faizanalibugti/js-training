// Primitive Data Types in JavaScript

// Strings
// Number
// Boolean

// Why understanding types is important?
// If you do not know the types of the values you are modifying, you will end up making mistakes
// and functionality will not work as desired
// It sets the stage to working with TypeScript

// typeof is an important JS utility that can be used to determine the type of any  variable

let value = true;
console.log(typeof value);

// This is an explicit coercion
value = String(value);
console.log(typeof value);

// There are many cases where coercion is implicit such as...
// Whenever you use mathematical functions the operands are implicitly converted to Numbers
console.log("6" / "2");
