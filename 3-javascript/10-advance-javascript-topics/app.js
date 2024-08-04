//var , let & const

// {} = scope

//let variable work in scope
// {}

// {
//     let wwww = "aa";
// }

// console.log(wwww,"wwww"); //error

//const variable work in scope and you cannot reassign/change the variable
const companyName = "xyz";
// companyName = "asdasd"; //error

/*

If you use var outside of a function, it belongs to the global scope.

If you use var inside of a function, it belongs to that function.

If you use var inside of a block, i.e. a for loop, the variable is still available outside of that block.

*/

// var muzammil = "working";

// function nasdasd() {
//   console.log(muzammil);

//   var insideOfVarCustomVariable = "asdasd";
// }

// console.log(insideOfVarCustomVariable); // error

// if (true) {
//   var insideOfVarCustomVariable2 = "asdasd";
// }

// console.log(insideOfVarCustomVariable2); //it will work

//template literal

const firstName = "Muhammad";
const lastName = "Muzammil";

// const fullName = firstName + " " + lastName;
const fullName = `${firstName}

${lastName}`; //line break

//primitive vs reference
//Object & Array are reference type

//problem
// const objectOne = { name: "muzammil" };
// const objectTwo = objectOne;
// objectTwo.name = "musaddiq";

// console.log(objectOne.name); //musaddiq
// console.log(objectTwo.name); //musaddiq

//solution

const objectOne = { name: "muzammil" };
const objectTwo = { ...objectOne }; //with spread operator it will create shallow copy of object
objectTwo.name = "musaddiq";

console.log(objectOne.name); //muzammil
console.log(objectTwo.name); //musaddiq

//primitive type example
const numberOne = 10;
let numberTwo = numberOne;

numberTwo = 20;

console.log(numberOne); //10
console.log(numberTwo); //20

//Spread Operator = ... in array / object

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, 10, 30, ...numbersTwo];
//in dono array ki andar ki values copy hokar numbersCombined variable me ajaegi with spread operator

//with objects

const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const combineObject = { ...myVehicle, ...updateMyVehicle };

// console.log(combineObject, "combineObject");

//Optional chaining '?.'

let user = {}; // a user without "address" property

// console.log(user.address.street); // Error!
console.log(user?.address?.street); // undefined

//Nullish coalescing operator '??'

let userTwo;

let userNewVariable = userTwo ?? "anoymouse";

// console.log(userTwo !== null && userTwo !== undefined ? "anoymouse" : "");

console.log(userNewVariable);

//Comparison with ||

let firstNameTwo = null;
let lastNameTwo = null;
let nickName = "Supercoder";

// // shows the first truthy value:
// alert(firstNameTwo || lastNameTwo || nickName || "Anonymous"); // Supercoder

// height = 0
// alert(height || 100); // 100
// alert(height ?? 100); // 0

// alert(true || true); // true
// alert(false || true); // true
// alert(true || false); // true
// alert(false || false); // false

//phli wali condition true honi chahiey

// alert(true && true); // true
// alert(false && true); // false
// alert(true && false); // false
// alert(false && false); // false

//rest operator

function check(firstParam, ...restParamName) {
  console.log(firstParam, restParamName);
  // return { firstParam, restParamName };
}

check(1, 2, 3, 4, 5, 6, 7, 8);
//   Math.min(1,2,3,5,6,7,8,9,10,)

//destructuring with array

const vehicles = ["mustang", "f-150", "expedition"];
// const car = vehicles[0]; //mustang
// const truck = vehicles[1]; //f150
// const suv = vehicles[2]; //expedition

//short hand
// const [car, truck, suv] = vehicles;
const [car, , suv] = vehicles;

//destructuring with objects

const vehicleOne = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
};

// const { brand, model, type:modelType } = vehicleOne;
const { brand, model, type } = vehicleOne;
