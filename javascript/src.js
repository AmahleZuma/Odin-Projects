// Assignment

// 1. Adding two numbers together
console.log(10+2);

// 2. Adding a sequence of 6 numbers together
console.log(1+2+3+4+5+6);

// 3. Sum
console.log((4+6+9)/77);

// 4. Using variables

let a = 10;
console.log(a);
console.log(9*a);
let b = 7*a;
console.log(b);

// 5. Using const
const max = 57;
const actual = max - 13;
const percentage = actual/max;

// String methods

const text = "You are a massive idiot";

// Checking length
console.log(text.length);
// Looking for a specific word
console.log(text.charAt(2));
// Looking for a UTF-8 Code
console.log(text.charCodeAt(2));
// Trying out ES2022 feature: Apparently this is more succinct and readable
const text1 = text.at(2);
console.log(text1)
//Another way of looking
const msg = text;
console.log(msg[2]);
console.log(text);

// Looking at slicing. Basically "cuts" out the string of characters you want and puts them forward, ignoring the rest
const fruits = "Apple, Banana, Kiwi";
const sliced_fruit = fruits.slice(7, 13);
console.log(sliced_fruit);
const sliced_fruits = fruits.slice(7);
console.log(sliced_fruits);

// Will continue tomorrow