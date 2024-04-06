// alert("WORKING");

//you can store anything in variable

// DATA TYPES
// there are two data types

// 1-primitive type
// 2-reference type / object type

//Primitive Type
//store directly in the location the variable accesses stored on the stack.

// var store; depcreate (old version)
let store;

store = "something"; // text / string
store = 12345; //number
store = true; //Boolean true = 1
store = false; //Boolean false = 0
store = null; // null = empty value // khali value
store = undefined;
store = Symbol("values of symbol"); //symbol
//computer = binary language

//Reference Type
// Accessed by reference Objects that are stored
// on the heap a pointer to a location in memory.

//Array (you can save multiple values at a time)
store = ["text/string", 123, null, true, false, undefined];
// console.log(store);
// console.log(store[2]); //2 is index
//Object  (you can save multiple values at a time)
store = {
  a: 1,
  b: 2,
  c: 3,
};

// console.log(store);
//Primitive Vs Reference Type

let musaddiq_marks = { math: 80 };
let muzammil_marks = musaddiq_marks; //jo musaddiq ke marks hein wuhi muzammil ke hein
muzammil_marks.math = 70;

console.log(musaddiq_marks, "musaddiq_marks");
console.log(muzammil_marks, "muzammil_marks");
