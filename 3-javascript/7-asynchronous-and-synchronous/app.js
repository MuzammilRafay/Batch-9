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
