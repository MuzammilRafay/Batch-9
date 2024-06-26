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

// console.log(musaddiq_marks, "musaddiq_marks"); // { math: 70 }
// console.log(muzammil_marks, "muzammil_marks"); // { math: 70 }

//Reference Type (Object)
let firstValue = [1, 2, 3];
let secondValue = firstValue; //reference
// let secondValue = [...firstValue]; //spread operator (copy of new array)

secondValue.push(4); //push method will add value at the end of array

// console.log(firstValue, "first value"); //[1,2,3,4]
// console.log(secondValue, "second value"); //[1,2,3,4]

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

// console.log(headphone); //it will work

function sayMyName() {
  let name = "John";
}

// console.log(name);

//developer say that we should not use var in javascript code

//1st priority is const
//2nd is let

//javascript is case sensitive

//variables mein capital or small letter se faraq parta hai = case sensitive
let some = "123123";
let Some = "111";

// console.log(some, "some");
// console.log(Some, "Some");

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
const total = parseInt(mousePrice) + 2; // 202
// console.log(total);

const keyboardPrice = "2.2";
const keyboardTotal = parseFloat(keyboardPrice) + 2;

// console.log(keyboardTotal);

//2nd method to convert from string to number
let testing_variable = new Number(mousePrice);
testing_variable = new Number(true); // 1
testing_variable = new Number(false); // 0
testing_variable = new Number(null); // 0
testing_variable = new Number("hello"); // NaN = Not a Number
testing_variable = new Number([1, 2, 3, 4]); // Nan = Not a Number

// console.log(testing_variable, "testing_variable");

//String Methods
testing_variable = "this is string and string is equal to text";
testing_variable = new String(12121); // "12121"
testing_variable = new String(true); // "true"

//2nd method
let someVariable = 1;
testing_variable = someVariable.toString(); // "1"
testing_variable = (12121).toString();
testing_variable = "asdasdasd".toUpperCase(); //"ASDASDASD"

// Boolean methods
testing_variable = new Boolean(1); //true
testing_variable = new Boolean(0); //false
testing_variable = new Boolean(null); //false
testing_variable = new Boolean(""); //false
testing_variable = new Boolean("asdasdasd"); //true

//consoles methods
// console.log(testing_variable);

testing_variable = {
  name: "Muzammil",
  designation: "Senoir Developer",
  companyName: "Simplifi",
};

// console.log(testing_variable);
// console.table(testing_variable);
// console.warn(testing_variable);
// console.error(testing_variable);
// console.info(testing_variable);

//arthmetic operators in javascript
testing_variable = 5 + 5;
testing_variable = 5 - 5;
testing_variable = 5 / 5;
testing_variable = 5 % 5;
testing_variable = 5 * 5;

//Math Object

testing_variable = Math.PI; // 3.14
testing_variable = Math.E; // 2.7 =  Euler's number
testing_variable = Math.round(2.5); // 3
testing_variable = Math.round(2.4); // 2

// The Math.floor() function returns the largest number less than or equal to a given number.
/*==================================
=            math floor            =
==================================*/
//for positive numbers
testing_variable = Math.floor(2.4); //2
testing_variable = Math.floor(2.3); //2
testing_variable = Math.floor(2.59); //2
testing_variable = Math.floor("2.3"); //2
testing_variable = Math.floor(2); //2

//for negative number
testing_variable = Math.floor(-2.4); //-3
testing_variable = Math.floor(-2.3); //-3
testing_variable = Math.floor(-2.5); //-3
/*=====  End of math floor  ======*/

testing_variable = Math.pow(8, 4); // 8 * 8 * 8 * 8
testing_variable = Math.min(1, 2, 1, 36, 3, 4, 5, 6, 7, 8, 9); //return minimum value
testing_variable = Math.max(1, 2, 1, 36, 3, 4, 5, 6, 7, 8, 9); //return maximum value
testing_variable = Math.random() * 20 + 1;

//String Concatination (text ko jorne ki bat hori hai)
const firstName = "Muzammil";
const lastName = "Mustaqeem";

const fullName = firstName + " " + lastName;

// const testString = 'Hello, World my name is \'Muzammil Mustaqeem and my age \'is 26';

//line break chahiye text mein

//wrong way
// const testString =
// "Hello, World my name
// is'Muzammil Mustaqeem and my age 'is 26";

//correct way
// const testString =
//   "Hello, World my name \n \n is'Muzammil Mustaqeem and my age 'is 26";

testing_variable =
  "Hello, World my name \n \n is'" + fullName + " and my age 'is 26";

// Template Literal

// `` = back tag
// ${} = interpolation

testing_variable = `Hello, World my name 

is' ${fullName} and my age 'is 26`;

//concat = jornaa
testing_variable = testing_variable.concat(
  " new thing",
  " one more thing",
  " one more thing"
);

testing_variable = testing_variable.replace(
  "Muzammil Mustaqeem",
  "Abdul Wasey"
);

// console.log(testing_variable);

//check exist text
// testing_variable = testString.includes("Abdul Wasey"); //true

// COMPARISON

const productName = "Briyani"; //string
// const customerLocation = "North Karachi";
const customerLocation = "Nazimabad";
// const customerLocation = "Orangi Town";
let deliveryCharges = 0;

// == equal to

// if = agar asa ho to
if (customerLocation == "North Karachi") {
  deliveryCharges = 90;
} else if (customerLocation == "Orangi Town") {
  deliveryCharges = 300;
} else {
  deliveryCharges = 200;
}

// === three equal to / it will check data type also

//customerLocation = string
//"Orangi Town" = string
//dono ki type string honi chahiye
// if (customerLocation === "Orangi Town") {

// 1 === "1" //1 is number and "1" is string it will return false
// 1 == "1" //1 is number and "1" is string it will return true
if (1 === "1") {
  // false
  // if (1 == "1") {
  // true
  deliveryCharges = 310;
}

// if (false) {
//   console.log("it will work");
// }

// console.log(deliveryCharges);
// console.log(productName);
// console.log(customerLocation);

//not equal to  !=

const mobile = "iphone";
// const mobile = "china";

// if (mobile != "china") {
//   console.log("mobile is not from china");
// } else {
//   console.log("your mobile is from china");
// }

//not equal !== / so it will check the both type

// if (1 != "1") { // false

// if (1 !== "1") {
//   // true
//   console.log("condition is  true");
// } else {
//   console.log("condition is false");
// }

// GREATER OR LESS THAN

// > greater than
// < less than

8 > 10; // false
8 < 10; // true

let id = 100;

// if (id < 40) {
//   console.log("id is less than from 40");
// }

// if (id > 40) {
//   console.log("id is greater than from 40");
// }

//Logicl Operator

// && AND = both condition should be true
// || OR  = one condition should be true

const laptop = "lenovo";
const ram = "8gb";

// if (laptop == "hp" && ram == "8gb") {
//   console.log("i will purchase this laptop");
// } else {
//   console.log("i will not purchase this laptop");
// }

// if (laptop == "hp" || laptop == "dell") {
//   console.log("i will purchase this laptop");
// }

//Ternary Operator
//single line if else condition

// if (laptop == "hp") {
//   console.log("i will purchase this laptop");
// } else {
//   console.log("i will not purchase this laptop");
// }

laptop == "hp"
  ? console.log("i will purchase this laptop")
  : console.log("i will not purchase this laptop");

laptop == "hp"
  ? console.log("i will purchase this laptop")
  : laptop == "dell"
  ? console.log("i will purchase dell laptop")
  : laptop == "asus"
  ? console.log("i will purchase asus laptop")
  : console.log("i will not purchase this laptop");

if (id == 101) {
  // console.log("101 is true");
} else if (id == 100) {
  // console.log("100 is true");
} else if (id == 102) {
  // console.log("102 is true");
} else if (id == 103) {
  // console.log("103 is true");
} else if (id == 104) {
  // console.log("104 is true");
} else if (id == 105) {
  // console.log("105 is true");
} else if (id == 106) {
  // console.log("106 is true");
} else if (id == 107) {
  // console.log("107 is true");
} else {
  // console.log("not match any conditions");
}

// you can define conditions without braces
if (id === 100) console.log("id is 100");

//switch statement
const color2 = "blue";
if (color2 == "red") {
  console.log("color is red");
} else if (color2 == "blue") {
  console.log("color is blue");
} else {
  console.log("color is not red nor blue");
}

switch (color2) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;

  default:
    console.log("color is not red nor blue");
    break;
}

//Date Object

const today = new Date();

// let birthday = new Date("9-10-1981");
// let birthday = new Date("November 27 1996"); // month date year
let birthday = new Date("11/27/1996"); // month date year

// console.log(birthday);

let dateValue = today.getMonth() + 1;
// dateValue = today.getFullYear();
// dateValue = today.getMinutes();
dateValue = today.getHours();
dateValue = today.getSeconds();
dateValue = today.getMilliseconds();
dateValue = today.getTime();
dateValue = today.getDay();

// console.log(today, "date value");
// console.log(dateValue, "date value");
// today.setMonth(1); // -1
// today.setDate(2); // -1
// today.setDate(2); // -1
// today.setFullYear(1985);
// today.setHours(3);
// today.setMinutes(22);
// today.setSeconds(25);

// console.log(today, "date value");

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}

// console.log(day, "day");

//Functions

//A function is simply a “chunk” of code that
//you can use over and over again, rather
//than writing it out multiple times.Functions
// enable programmers to break down or decompose
//a problem into smaller chunks, each of which performs a particular task.

function normalFunction() {
  console.log(`normal function`);
}

normalFunction(); //callback

//pass parameter
function printMyName(myName) {
  console.log(`My name is ${myName}`);
}

printMyName("Abdul wasay");
printMyName("Ali khan");
printMyName("Saad");

function printFullName(firstName, lastName) {
  console.log(`My full name is ${firstName} ${lastName}`);
}

printFullName("Abdul", "Wasay");

function infiniteParameterFunction(firstParam, secondParam, ...restParams) {
  console.log(firstParam, "first name");
  console.log(secondParam, "second name");
  console.log(restParams, "rest params"); //rest operator
}

infiniteParameterFunction(1, 2, 3, 4, 5, 6, 7, 8, 9);

//we can return things from functions

function checkCondition() {
  return false;
  // return "abdul wasay";
  // return [1, 2, 4, 5, 6];
}

const checkConditionVariable = checkCondition(); //checkCondition = false

// console.log(checkCondition(), "checkCondition()");

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// jQuery
// (function(){
// })(jQuery);

(function () {
  console.log("foran call hojao");
})();

const variableNeedHai = "one";
const variableNeedHai2 = "two";

(function (firstParam, secondParam) {
  console.log(`foran call hojao ${firstParam} ${secondParam}`);
})(variableNeedHai, variableNeedHai2);

//default parameters
function printFullName2(firstName = "John", lastName = "Doe") {
  console.log(`My full name is ${firstName} ${lastName}`);
}

printFullName2("abdul", "wasay");
printFullName2();

//Closures

//Global Scope Variable
//scope = {}
let a = 4;
function myFunction() {
  return a * a;
}

console.log(myFunction()); // 16
a = 8;
console.log(myFunction()); // 64

//local scope
//scope = {}
function myFunction2() {
  let b = 4;
  return b * b;
}

console.log(myFunction2()); //16

//counter function

let counter = 0;
console.log(counter);

function add() {
  counter += 1;
  console.log(counter);
}

add(); //1
add(); //2
add(); //3
add(); //4

counter = 1000;
add(); // 1001

//iska solution kia hai isko ap scope me rakhein

function add2() {
  let counter = 0;
  return counter + 1;
}

console.log(add2()); // 1
console.log(add2()); // 1
console.log(add2()); // 1
console.log(add2()); // 1

//clousure
//iffe ke function k andar function hoga

const add3 = (function () {
  let counter = 0;

  return function () {
    return (counter += 1);
  };
})();

console.log(add3());
console.log(add3());
console.log(add3());
