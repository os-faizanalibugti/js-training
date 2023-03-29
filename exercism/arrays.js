// Exercise link: https://exercism.org/tracks/javascript/exercises/elyses-enchantments

// Retrieve a card from a stack

let position = 2;

function getItem(array, position) {
  return array[position];
}

getItem([1, 2, 4, 1], position); // 4

// Exchange a card in the stack

position = 2;

const replacementCard = 6;

function setItem(array, position, replacementCard) {
  array[position] = replacementCard;
  console.log(array);
}

setItem([1, 2, 4, 1], position, replacementCard);
// => [1, 2, 6, 1]

// Insert a card at the top of the stack

let newCard = 8;

function insertItemAtTop(array, item) {
  array.push(item);
  console.log(array);
}

insertItemAtTop([5, 9, 7, 1], newCard);
// => [5, 9, 7, 1, 8]

// Remove a card from the stack
position = 2;

function removeItem(array, position) {
  array.splice(position, 1);
  console.log(array);
}

removeItem([3, 2, 6, 4, 8], position);
// => [3, 2, 4, 8]

// Remove the top card from the stack

function removeItemFromTop(array) {
  array.pop();
  console.log(array);
}

removeItemFromTop([3, 2, 6, 4, 8]);
// => [3, 2, 6, 4]

// Insert a card at the bottom of the stack

newCard = 8;

function insertItemAtBottom(array, item) {
  array.unshift(item);
  console.log(array);
}

insertItemAtBottom([5, 9, 7, 1], newCard);
// => [8, 5, 9, 7, 1]

// Remove a card from the bottom of the stack

function removeItemAtBottom(array) {
  array.shift();
  console.log(array);
}

removeItemAtBottom([8, 5, 9, 7, 1]);
// => [5, 9, 7, 1]

// Check the size of the stack

const stackSize = 4;

function checkSizeOfStack(array, size) {
  if (array.length === size) {
    return true;
  } else {
    return false;
  }
}

console.log(checkSizeOfStack([3, 2, 6, 4, 8], stackSize));
// => false
