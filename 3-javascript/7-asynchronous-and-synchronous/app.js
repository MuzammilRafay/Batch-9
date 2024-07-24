//Syncronous = execute code line by line
console.log("html css");
console.log("js");
// asdasdasdasd;
console.log("react js");
console.log("react native");

//asynchronous programming
//we have to wait some thing in code

//settimeout is asyncronous function so this line will execute in end
console.log("html css");

setTimeout(function () {
  //   asdasdasdasd;
  console.log("js");
}, 0);
console.log("react js");
console.log("react native");

//html css, react js, react native, js

//is js is asyncronous by default ?
//answer is no

//thread = how much task that will handle in js

//javascript is single thread

//Event Loop

//binary code = 0101010101010101

//compiler/translator
//it will convert our javascript code in to binary code then browser will understand

// COMPILERS NAMES
//chrome = v8 engine
//internet explorer = chakra engine
//firefox = spidermonkey

//Web APis
//browser have multiple function and in that function they are handling asyncronous behavior with other languages such as csharp.

//normal code -> stack (if it is not web api related code execute it) other wise go to -> webapi -> callback-queues (it will run event loop when our stack is free it will put that code in our stack after executing it will delete the code froms stack)

//how we can convert our normal syncrhronous code to asynchronous
//we have three methdos for that purpose

// 1-Callback/functions (Web Api Callback)
// 2-Promise
// 3-Async Await

//1- Callback example

setTimeout(function () {
  console.log("asdasdasd");
}, 0);

//2-Promise

//Creating the promise function
const doSomething = new Promise(function (resolve, reject) {
  const success = 0;

  if (success == 1) {
    resolve("your code is resolved");
  }

  if (success == 0) {
    reject("your code is rejected");
  }
});

//Using the promise function

//then = resolve wala code
//catch = reject wala code

doSomething
  .then(function (data) {
    console.log(data, "[resolve message parameter]");
  })
  .catch(function (data) {
    console.log(data, "[reject message parameter]");
  });

//fetch method is used for getting the api response
//fetch method is promise
fetch("https://jsonplaceholder.typicode.com/todos")
  .then(function (resolveParameter) {
    return resolveParameter.json(); //
    console.log(resolveParameter, "[fetch method resolve]");
  })
  .then(function (afterReturnResponse) {
    console.log(afterReturnResponse, "[afterReturnResponse]");
  })

  // .then(async function (response) {
  //   const convertedJsonData = await response.json();
  //   console.log(convertedJsonData, "convertedJsonData");
  // })
  .catch(function (rejectParameter) {
    console.log(rejectParameter, "[reject parameter reject]");
  });

//3. Async Await
// you can handle multiple promises from async await method

const getTodosData = function () {
  //you are returning the promise
  return (
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(function (resolve) {
        return resolve.json();
      })
      //chaining in promise
      .then(function (resolve) {
        return resolve;
      })
      .catch(function (reject) {
        console.log(reject);
      })
  );
};

const doSomethingAsyncMethod = async function () {
  const dataOne = await getTodosData(); //  ka matlab wait karo jab tak promise resolve nai hojata
  const dataTwo = await getTodosData();
  const dataThree = await getTodosData();
  console.log(dataOne, "dataOne async method");
  console.log(dataTwo, "dataTwo async method");
  console.log(dataThree, "dataThree async method");
};
doSomethingAsyncMethod();

//Another Topic
//Arrow function

// const hello = function() {
// return "Hello World";
// }

const hello = () => {
  return "Hello World!";
};

// function name(){
//   return 'asdasd'
//   asdasd

//   asdasdasd
//   as
//   DataTransferd
// }

// const ww = name();
// console.log(ww) //asdasd

// Arrow Functions Return Value by Default:
hello = () => "Hello World!";

// Arrow Function Without Parentheses if you have only one param:

// hello = (parameter) => "Hello " + parameter;
// hello = parameter => "Hello " + parameter;
// hello("asdasd"); // Hello asdasd

//arrow function issue with this

// function name(){
//   this.method(); // it will work
// }

// const name =  () => {
//   this.method(); // it will not work
// }

//this = current thing

// JSON VS XML
// Both are format and use send & recieve data asyncronusly

// JSON Example
// {
//   "employees":[
//       { "firstName":"John", "lastName":"Doe" },
//       { "firstName":"Anna", "lastName":"Smith" },
//       { "firstName":"Peter", "lastName":"Jones" }
//   ]
// }

// XML Example
{
  /* <employees>
  <employee>
   <lastName>Doe</lastName  <firstName>John</firstName>
  </employee>
  <employee>
    <firstName>Anna</firstName> <lastName>Smith</lastName>
  </employee>
  <employee>
    <firstName>Peter</firstName> <lastName>Jones</lastName>
  </employee>
</employees> */
}

// AJAX STANDS FOR Asynchronous Javascript AND Xml

// Set of Web Technologies
// Send & Receive Data asynchronously
// Does not interfere with the current
// Json has replaced XML for the most part

//API
// Application programming interface

//get data from url & send data from url

// Popular tools for ajax

// Fetch Api
// Axios
// Superaragent
// JQuery
// Node Http

/*
REQUEST METHODS

GET = get data
POST = store/create data   
PUT = update data
PATCH = partially update date
DELETE = delete data 

*/

/*
REQUEST STATUS CODE

Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)

*/

//Types of Promises

// Promise.all
// Promise.allSettled
// Promise.race
// Promise.any

//Promise all
//it will wait for all promises and if any one of promise is
// reject it will reject the whole promise

Promise.all([
  new Promise(function (resolve) {
    setTimeout(() => resolve(1), 3000);
  }), // 1
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
])
  .then(function (resolve) {
    // alert(resolve);
    console.log(resolve, "resolve");
  })
  .catch(function (error) {
    console.log(error, "error");
  }); // 1,2,3 when promises are ready: each promise
// contributes an array member

//Promise.allSettled
//it will not reject the whole promise if anyone promise is rejected

Promise.allSettled([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Whoops!")), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
])
  .then((resolve) => console.log(resolve))
  .catch(alert); // Error: Whoops!

//Promise.race
//phle aye phle payye

//jo phle resolve hua hai wuhi ayega

Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Whoops!")), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(function (param) {
  alert(param);
}); // 1

//Promise.any
//it will resolve first promise and reject other promises (return promise resolve)

Promise.any([
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Whoops!")), 1000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
])
  .then(alert)
  .catch((rejectedPromises) => console.error(rejectedPromises)); // 1
