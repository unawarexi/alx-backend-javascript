
# ES6 Features Overview

## What is ES6?
ES6, also known as ECMAScript 2015, is the sixth edition of the ECMAScript standard. It is a major update to the language, introducing significant new syntax and features to JavaScript.

## New Features introduced in ES6
- Arrow functions
- Classes
- Template literals
- Destructuring assignment
- Default parameters
- Rest parameters
- Spread syntax
- Let and const
- Modules
- Iterators and Generators
- Promises
- Symbols
- Maps and Sets

## Constant vs. Variable
- Constants are declared using the `const` keyword and cannot be reassigned. Variables, declared with `let` or `var`, can be reassigned.

## Block-scoped Variables
Variables declared with `let` and `const` are block-scoped, meaning they are only accessible within the block they are defined in.

## Arrow Functions and Default Function Parameters
Arrow functions are a concise syntax for writing anonymous functions. They can have default parameters, which are used when no argument is provided.

## Rest and Spread Function Parameters
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array. The spread syntax, on the other hand, allows an array expression
 or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

## String Templating in ES6
Template literals provide an easy way to interpolate variables and expressions into strings. They use backticks (``) instead of single or double quotes.

## Object Creation and Properties in ES6
ES6 introduced shorthand property names, computed property names, and method definitions in object literals, making object creation more concise and flexible.

## Iterators and for-of Loops
- Iterators are objects that define a sequence and potentially a return value upon its termination. The `for...of` 
- loop provides a concise way to iterate over iterable objects such as arrays, strings, maps, sets, etc.




# New Features introduced in ES6

### Arrow Functions
- Arrow functions provide a concise syntax for writing function expressions. 
- They have a shorter syntax compared to traditional function expressions and do not bind their own `this`, `arguments`, `super`, or `new.target`. Here's an example:

```javascript
// Traditional function expression
const add = function(a, b) {
  return a + b;
};


// Arrow function
const add = (a, b) => a + b;
```

### Classes
ES6 introduced a new syntax for defining classes in JavaScript, providing a more familiar and cleaner syntax for classical object-oriented programming. Here's an example:

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  
  // Method
  calculateArea() {
    return this.height * this.width;
  }
}

const rectangle = new Rectangle(10, 5);
console.log(rectangle.calculateArea()); // Output: 50
```

### Template Literals
Template literals provide an easier way to work with strings in JavaScript by allowing embedded expressions and multiline strings. Here's an example:

```javascript
const name = 'John';
const greeting = `Hello, ${name}!`;

console.log(greeting); // Output: Hello, John!
```

### Destructuring Assignment
Destructuring assignment allows you to extract values from arrays or objects and assign them to variables in a concise way. Here's an example:

```javascript
// Array destructuring
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a, b, c); // Output: 1 2 3

// Object destructuring
const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(name, age); // Output: John 30
```

### Default Parameters
ES6 allows you to specify default values for function parameters, which are used when the function is called without them. Here's an example:

```javascript
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
```

### Rest Parameters
Rest parameters allow you to represent an indefinite number of arguments `as an array`. Here's an example:

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```
### Spread Syntax
The spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. Here's an example:

```javascript
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];

console.log(newNumbers); // Output: [1, 2, 3, 4, 5, 6]
```

### Let and Const
- let and const are block-scoped variables introduced in ES6. let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used. 
- const declares constants, which cannot be re-assigned. Here's an example:

```javascript
let x = 10;
x = 20;

const y = 100;
// y = 200; // This would throw an error
```
### Modules
ES6 introduced a standardized module format to JavaScript. Modules allow for better code organization and maintainability by encapsulating code and dependencies. Here's a basic example:

```javascript
// file: utils.js
export function square(x) {
  return x * x;
}

// file: main.js
import { square } from './utils.js';
console.log(square(5)); // Output: 25
```
### Iterators and Generators
Iterators and Generators provide a way to iterate over data structures such as arrays, objects, and strings. 
- They offer a simple way to create custom iterators and generators, making it easier to work with collections of data. Here's a simple example of an iterator:

```javascript
const numbers = [1, 2, 3];
const iterator = numbers[Symbol.iterator]();

console.log(iterator.next()); // Output: { value: 1, done: false }
console.log(iterator.next()); // Output: { value: 2, done: false }
console.log(iterator.next()); // Output: { value: 3, done: false }
console.log(iterator.next()); // Output: { value: undefined, done: true }
```
### Promises
Promises provide a cleaner and more flexible alternative to traditional callback-based asynchronous code. 
- They represent the eventual completion (or failure) of an `asynchronous` operation and allow you to `chain multiple asynchronous` operations. Here's an example:

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully');
    }, 2000);
  });
};

fetchData()
  .then(data => {
    console.log(data); // Output: Data fetched successfully
  })
  .catch(error => {
    console.error(error);
  });
```
### Symbols
Symbols are a new primitive data type introduced in ES6. They are unique and immutable values that can be used as property keys for objects. Here's an example:

```javascript
const symbol = Symbol('description');
const obj = {
  [symbol]: 'value'
};

console.log(obj[symbol]); // Output: value
```
### Maps and Sets
Maps and Sets are new built-in data structures introduced in ES6. Maps allow you to store `key-value pairs` where both the key and value can be of any type. 
- Sets are collections of unique values. Here are examples of Maps and Sets:

```javascript
// Map example
const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');

console.log(map.get('key1')); // Output: value1

// Set example
const set = new Set();
set.add(1);
set.add(2);
set.add(2); // Duplicates are ignored in Sets

console.log(set.size); // Output: 2
```



