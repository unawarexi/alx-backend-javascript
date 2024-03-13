# TypeScript Essentials: A Comprehensive Guide

## Basic Types in TypeScript

TypeScript provides support for various basic types such as number, string, boolean, arrays, tuples, enums, etc. This ensures better type safety and helps catch errors during development.

Example:

```typescript
let age: number = 30;
let name: string = "John";
let isActive: boolean = true;
let numbers: number[] = [1, 2, 3, 4, 5];
```

## Interfaces, Classes, and Functions
Interfaces, classes, and functions are essential building blocks in TypeScript for defining the shape of `objects, creating reusable code, and defining behavior`.

Example:

```typescript
interface Person {
  name: string;
  age: number;
}

class Student implements Person {
  constructor(public name: string, public age: number) {}
}

function greet(person: Person): void {
  console.log(`Hello, ${person.name}!`);
}
```
## Working with the DOM and TypeScript
TypeScript allows you to interact with the DOM (Document Object Model) by providing `type annotations` and `static type checking` for DOM elements and events.

Example:

```typescript
const button = document.querySelector('button') as HTMLButtonElement;
button.addEventListener('click', (event: MouseEvent) => {
  console.log('Button clicked!');
});
```
- #### Additional Info: TypeScript provides `built-in types` for DOM elements such as `HTMLElement, Event, MouseEvent`, etc., ensuring type safety when working with the DOM.

## Generic Types
Generic types in TypeScript allow you to create reusable components that work with a variety of data types, providing flexibility and type safety.

Example:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("hello");
```
- #### Additional Info: Generics enable you to write flexible, reusable functions and classes that can work with any data type, improving code maintainability and readability.

## Namespaces
Namespaces in TypeScript provide a way to organize code and prevent global scope pollution by encapsulating functionality within a named scope.

Example:

```typescript
namespace Math {
  export function add(x: number, y: number): number {
    return x + y;
  }
}
```
- #### Additional Info: Namespaces help organize `large codebases` into manageable modules, preventing naming conflicts and promoting code reusability.

## Merging Declarations
TypeScript allows you to merge declarations from multiple sources, such as interfaces and namespaces, into a single definition, providing a powerful way to extend and augment existing types.

Example:

```typescript
interface Person {
  name: string;
}

interface Person {
  age: number;
}
```
- #### Additional Info: Declaration merging allows you to combine interfaces, functions, enums, and namespaces with the same name, improving code organization and maintainability.

## Using an Ambient Namespace to Import an External Library
An ambient namespace in TypeScript - allows you to declare types for an external library without having access to its source code, enabling seamless integration with third-party libraries.

Example:

```typescript
declare namespace MyLibrary {
  function doSomething(): void;
}
```
- #### Additional Info: Ambient declarations provide type definitions for JavaScript libraries, enabling TypeScript's type checking and auto-completion features when working with external code.

## Basic Nominal Typing with TypeScript
Nominal typing in TypeScript allows you to create types `based on their names rather than their structure`, - providing stronger type safety and preventing unintended type compatibility.

Example:

```typescript
class CustomerId {
  private id: string;
  constructor(id: string) {
    this.id = id;
  }
}

class OrderId {
  private id: string;
  constructor(id: string) {
    this.id = id;
  }
}

function processId(id: CustomerId): void {
  // Process customer ID
}
```