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
// console.log(store);
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
store = ["text/string", 123, null, true, false, undefined, [1, 2, 3]];
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

//Reference Type (Array)
let musaddiq_marks = { math: 80 };
let muzammil_marks = musaddiq_marks; //jo musaddiq ke marks hein wuhi muzammil ke hein
// let muzammil_marks = { ...musaddiq_marks }; //spread operator //three dot will create a shallow copy of object
muzammil_marks.math = 70;

console.log(musaddiq_marks, "musaddiq_marks"); // { math: 70 }
console.log(muzammil_marks, "muzammil_marks"); // { math: 70 }

//Reference Type (Object)
let firstValue = [1, 2, 3];
let secondValue = firstValue; //reference
// let secondValue = [...firstValue]; //spread operator (copy of new array)

secondValue.push(4); //push method will add value at the end of array

console.log(firstValue, "first value"); //[1,2,3,4]
console.log(secondValue, "second value"); //[1,2,3,4]

//Primitive Type (Number)

// let oneValue = 1;
// let twoValue = oneValue;

// twoValue = 2;

// console.log(oneValue); //1
// console.log(twoValue); //2

//There are three types of variables
// 1-let
// 2-const
// 3-var (deprecated/ old version)

// {} = scope
// we will see the scope in functions in if else statements

// function name(){

// }

// if(true){

// }

//let variable will work only inside of the scope

{
  let working = "aaa";
  // console.log(working, "working");
}
// console.log(working, "working"); //undefined error

//const variable will work only side of the scope and we cannot re assign the constant variable

{
  const coachingName = "Squad Coders dev";
  // coachingName = "asdasd" //cannot change
  // console.log(coachingName);
  // coachingName = "KKK";
}
// console.log(coachingName); //undefined error

//var

//var will not work in scope except function scope
{
  var headphone = "sony";
}

console.log(headphone); //it will work

function sayMyName() {
  let name = "John";
}

console.log(name);

//developer say that we should not use var in javascript code

//1st priority is const
//2nd is let

//javascript is case sensitive

//variables mein capital or small letter se faraq parta hai = case sensitive
let some = "123123";
let Some = "111";

console.log(some, "some");
console.log(Some, "Some");

//naming of variables
// letters,
// underscore,
// camelcase,
// pascal case

const asdasdasd = "aaaa"; //letters = (a to z and A to Z and 1 to 10)
const company12311212 = "aaaa";

const html_css_javascript_react_react_native = "course"; //underscore
const htmlCssJavascriptReactReactNative = "course"; //camel case
const HtmlCssJavascriptReactReactNative = "course"; //pascal case

//"" = double quote
//'' = single quote

//Type Conversion
// console.log(HtmlCssJavascriptReactReactNative);
// console.log(typeof HtmlCssJavascriptReactReactNative); //iski type kia hai

//convert string to number

const mousePrice = "200"; //type string
const total = parseInt(mousePrice) + 2;
console.log(total);

const keyboardPrice = "2.2";
const keyboardTotal = parseFloat(keyboardPrice) + 2;

console.log(keyboardTotal);

//2nd method to convert from string to number
let testing_variable = new Number(mousePrice);
testing_variable = new Number(true); // 1
testing_variable = new Number(false); // 0
testing_variable = new Number(null); // 0
testing_variable = new Number("hello"); // Nan = Not a Number
testing_variable = new Number([1, 2, 3, 4]); // Nan = Not a Number

console.log(testing_variable, "testing_variable");
