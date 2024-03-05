# ES6 Promises

## Promises in JavaScript

## Promises (how, why, and what)
Promises are objects representing the eventual `completion or failure of an asynchronous operation`. They allow you to handle asynchronous operations more effectively, making code cleaner and easier to read.

### Promise Methods in JavaScript and Their Uses

| Method                              | Description                                                                                     |
|-------------------------------------|-------------------------------------------------------------------------------------------------|
| `Promise.all(iterable)`             | Returns a single Promise that resolves when all promises in the iterable have resolved.         |
| `Promise.race(iterable)`            | Returns a Promise that resolves or rejects as soon as one of the promises in the iterable.      |
| `Promise.resolve(value)`            | Returns a Promise object that is resolved with the given value.                                 |
| `Promise.reject(reason)`            | Returns a Promise object that is rejected with the given reason.                                 |
| `Promise.prototype.then(onFulfilled, onRejected)` | Adds fulfillment and rejection handlers to the promise.                                      |
| `Promise.prototype.catch(onRejected)` | Adds a rejection handler callback to the promise.                                              |
| `Promise.prototype.finally(onFinally)` | Adds a handler to be called when the promise is settled, regardless of its outcome.            |

## Uses:

- **`Promise.all(iterable)`**: Useful when waiting for multiple asynchronous tasks to complete before proceeding with the next steps.
- **`Promise.race(iterable)`**: Useful when you need to respond as soon as one of the asynchronous tasks is completed.
- **`Promise.resolve(value)`**: Useful for creating a promise that is already resolved with a certain value.
- **`Promise.reject(reason)`**: Useful for creating a promise that is already rejected with a certain reason.
- **`Promise.prototype.then(onFulfilled, onRejected)`**: Used to handle the fulfillment or rejection of the promise.
- **`Promise.prototype.catch(onRejected)`**: Used to handle errors that occur during the promise chain.
- **`Promise.prototype.finally(onFinally)`**: Used for cleanup operations that should be performed whether the promise is fulfilled or rejected.



## How to use the then, resolve, catch methods
The `then`, `resolve`, and `catch` methods are fundamental to working with promises:

- `then`: Used to handle the fulfillment of the promise. (proceeding with next step based on resolve or rejected)
- `resolve`: Used to fulfill a promise with a given value. (promises)
- `catch`: Used to handle errors that occur during the promise chain.(error handlers)

```javascript
// Example using then, resolve, and catch
const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve('Data successfully fetched');
    } else {
      reject('Error fetching data');
    }
  }, 2000);
});

promise.then(data => {
  console.log(data); // Output: Data successfully fetched
}).catch(error => {
  console.error(error); // Output: Error fetching data
});
```

## How to use every method of the Promise object
The Promise object provides several methods to work with promises, such as `all`, `race`, and `allSettled`. 
- These methods allow you to work with multiple promises simultaneously and handle their results accordingly.

```javascript
// Example using Promise.all
const promise1 = Promise.resolve('Hello');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'Goodbye');
});

Promise.all([promise1, promise2, promise3]).then(values => {
  console.log(values); // Output: ['Hello', 10, 'Goodbye']
});
```

## Throw / Try
The throw keyword is used to throw `exceptions` in JavaScript. The `try...catch` statement is used to handle `exceptions and gracefully recover from errors`.

```javascript
// Example using try...catch
try {
  throw new Error('Something went wrong');
} catch (error) {
  console.error(error.message); // Output: Something went wrong
}
```

## The await operator
The await operator is used to `pause the execution of an async function` until a promise is settled. It can only be used inside an async function.

```javascript
// Example using await
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data fetched successfully');
    }, 2000);
  });
}

async function getData() {
  const data = await fetchData();
  console.log(data); // Output: Data fetched successfully
}

getData();
```

## How to use an async function
Async functions are functions that implicitly return a `promise`. They allow you to write asynchronous code that looks synchronous, making it easier to reason about and maintain.

```javascript
// Example using async function
async function fetchData() {
  return 'Data fetched successfully';
}

fetchData().then(data => {
  console.log(data); // Output: Data fetched successfully
});
```