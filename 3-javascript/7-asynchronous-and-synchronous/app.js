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
