"use strict";
// Basic data types
// 1. Implicit Typing
// TypeScript infers the type based on the value assigned.
// You don't write the type explicitly; the compiler guesses it.
// Example:
// let name = "Alice";  // inferred as string
// let age = 30;        // inferred as number
// Here, name is automatically treated as a string, and age as a number.\
// 2. Explicit Typing
// You manually specify the type of a variable.
// Example:
// let name: string = "Alice";
// let age: number = 30;
// string
let firstName = 'Shawon';
// number
let roll = 123;
// boolean
let isAdmin = true;
// undefined
let x = undefined;
// null 
let y = null;
// let d;   //any type but u should not use it means u doing js
// if u write that let d :number;
// then u write d = 123 then if u write d = boolean it won't accept 
let d;
d = 123;
// Array. how to write array
let friends = ['shawon', 'kanij'];
// friends.push(9) Argument of type 'number' is not assignable to parameter of type 'string'.
let rollNumber = [1, 3];
rollNumber.push('shaown');
// tuple --> array --> order --> types of values
let coordinators = [1, 5];
let ageNumber = [28, 'Kanij', true];
ageNumber[0] = 'shawon';
