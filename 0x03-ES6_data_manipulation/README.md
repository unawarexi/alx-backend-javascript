# Working with Arrays and Typed Arrays

## Using map, filter, and reduce on arrays

JavaScript arrays provide powerful methods like `map`, `filter`, and `reduce` for manipulating array elements.

### Map

The `map` method allows you to transform each element of an array using a callback function and returns a new array with the transformed elements.

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```
## Filter
The filter method creates a new array with all elements that pass the test implemented by the provided function.

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```
## Reduce
The reduce method applies a `function against an accumulator` and `each element in the array` (from left to right) to reduce it to a single value.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15
```

## Typed Arrays
Typed arrays provide a way to work with binary data in JavaScript in a more efficient and controlled manner.

## Set, Map, and WeakMap Data Structures
JavaScript provides Set, Map, and WeakMap data structures for `handling collections` of data.

## Set
A Set is a collection of unique values.

```javascript
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
console.log(mySet); // Output: Set { 1, 2, 3 }
```

## Map
A Map is a collection of key-value pairs where each key is unique.

```javascript
const myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);
console.log(myMap); // Output: Map { 'name' => 'John', 'age' => 30 }
```

## WeakMap
A WeakMap is similar to Map but allows only objects as keys and does not prevent the objects that it references from being garbage-collected.

```javascript
const myWeakMap = new WeakMap();
const key = {};
myWeakMap.set(key, 'value');
console.log(myWeakMap.get(key)); // Output: value
```