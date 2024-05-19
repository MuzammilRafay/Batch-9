// Dom stands for document object model

console.log(document); //it will return you all html

const taskBtn = document.querySelector("#task-button");

//task button k click par ye function chalega
taskBtn.addEventListener("click", function (event) {
  // console.log(event.target, "event.target");
  event.preventDefault(); //apni default functionality rukdien
  // console.log("clicked!");

  //agar text Task List ke brabar hai to change hojae warna wapsi Task List hojae

  const selectCardTitle = document.querySelector(".card-title");

  // console.log(selectCardTitle, "selectCardTitle");

  if (selectCardTitle.innerText === "Task List") {
    selectCardTitle.innerText = "It is Changed";
    selectCardTitle.style.color = "yellow";
  } else {
    selectCardTitle.innerText = "Task List";
    selectCardTitle.style.color = "black";
  }
});

let valOfDom;
valOfDom = document;
// console.log(valOfDom);
valOfDom = document.all;
// console.log(valOfDom);
valOfDom = document.body;
// console.log(valOfDom);
valOfDom = document.head;
valOfDom = document.doctype;
valOfDom = document.URL;
valOfDom = document.characterSet;
valOfDom = document.contentType;
valOfDom = document.forms;
valOfDom = document.forms[0];
valOfDom = document.links; // a tags
valOfDom = document.links[0].className; // a ki clases ajayengi
valOfDom = document.images;
valOfDom = document.scripts;
valOfDom = document.scripts[0];
valOfDom = document.scripts[0].getAttribute("src");

const cardTitle = document.querySelector(".card-title");

cardTitle.style.color = "yellow";
cardTitle.style.background = "red";
cardTitle.style.padding = "20px";
cardTitle.style.marginBottom = "20px";
cardTitle.style.display = "none";
cardTitle.style.display = "block";

// console.log(valOfDom, "val of dom");

// const clearTaskBtn = document.querySelector(".clear-tasks");

// // console.log(clearTaskBtn);

// clearTaskBtn.addEventListener("click", function (event) {
//   event.preventDefault();

//   console.log("click is working");
//   // document.querySelector(".collection-item").style.color = "yellow";

//   // if (document.querySelector(".collection-item").style.color === "yellow") {
//   //   document.querySelector(".collection-item").style.color = "red";
//   // } else {
//   //   document.querySelector(".collection-item").style.color = "yellow";
//   // }

//   // const selectAllElement = document.querySelectorAll(".collection-item");

//   const selectAllElement = document.querySelectorAll(
//     ".collection-item:nth-child(even)"
//   );
//   selectAllElement.forEach(function (singleItem) {
//     if (singleItem.style.color === "yellow") {
//       singleItem.style.color = "red";
//     } else {
//       singleItem.style.color = "yellow";
//     }
//   });

//   const selectAllElement2 = document.querySelectorAll(
//     ".collection-item:nth-child(odd)"
//   );
//   selectAllElement2.forEach(function (singleItem) {
//     if (singleItem.style.color === "green") {
//       singleItem.style.color = "purple";
//     } else {
//       singleItem.style.color = "green";
//     }
//   });
// });

//how to select all elements from dom
// const selectAllCollectionItem = document.querySelectorAll(".collection-item"); // it will return an array
// console.log(selectAllCollectionItem, "selectAllCollectionItem");

//how to select one element from all elements
//we will use loop

// console.log(selectAllCollectionItem, "selectAllCollectionItem");
// //[1,2,3,4,5]
// selectAllCollectionItem.forEach(function (singleItem, index) {
//   // console.log(singleItem, "singleItem");
//   // console.log(index, "index");
//   singleItem.style.color = "yellow";
// });

//traversing in dom
//up down jana dom mein

const selectAllCrossBtns = document.querySelectorAll(".delete-item");

// console.log(selectAllCrossBtns, "selectAllCrossBtns");

// selectAllCrossBtns.forEach(function (singleItem) {
//   singleItem.addEventListener("click", function (event) {
//     event.preventDefault();
//     // console.log("cross btn is clicked!");

//     //jis element par click kia hai wuhi element mere pas ajae console me

//     const currentClickedElement = event.target;

//     // console.log(currentClickedElement, "currentClickedElement");
//     currentClickedElement.parentElement.parentElement.remove();

//     // console.log(
//     //   currentClickedElement.parentElement.parentElement,
//     //   "current element ke abbu element"
//     // );
//   });
// });

//event bubling agar apne event listener click ka lagaya tu uske sare children par click lag jaega

// document.querySelector("body").addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log(event.target);
// });

//event delegation
document
  .querySelector(".collection")
  .addEventListener("click", function (event) {
    console.log(event.target, "ye wala console yee");
    //jis element par click karo wuhi ajae
    const currentElement = event.target;

    if (currentElement.className === "fa fa-remove") {
      //apne delete btn par click kia hai
      event.preventDefault();
      currentElement.parentElement.parentElement.remove();
    }
  });

//event stop propagation

// agar parent ka click buble hote we ara hai or ksi specific child par click nai lagana us par event.stopPropagation() dedenge

/*
<div id="outer">
  <div id="inner">Click me!</div>
</div>

document.getElementById('outer').addEventListener('click', function() {
  console.log('Outer div clicked');
});

document.getElementById('inner').addEventListener('click', function(event) {
  event.stopPropagation();
  //event bubling wala click jo parent se ara hai use rukne k liye ap stopPropogation dete hein
  console.log('Inner div clicked');
});

*/

//nextElementSibling
//previousElementSibling
//closest

//Create Element in Dom

const h1Element = document.createElement("h1"); // <h1></h1>
h1Element.innerText = "My name is muzammil"; //<h1>My name is muzammil</h1>
// h1Element.className = "";
h1Element.setAttribute("id", "asdasdasd"); //<h1 id="asdasdasd">My name is muzammil</h1>
h1Element.setAttribute("class", "asdasdasdasdasd"); //<h1 id="asdasdasd" class="asdasdasdasdasd">My name is muzammil</h1>

console.log(h1Element);

const collectionElement = document.querySelector(".collection");

console.log(collectionElement, "collectionElement");

collectionElement.append(h1Element); //add kardo html dom me last me
// collectionElement.prepend(h1Element); //add kardo html dom me shuru me

// h1Element.click()
// h1Element.remove()
//Event Listner

/* In JavaScript, an event listener is a function that waits for a specific event to occur 
and then responds to that event. Events can be various user interactions with a web page, 
such as clicking a button, moving the mouse, pressing a key, submitting a form, etc. */

const clearBtn = document.querySelector(".clear-tasks");
// clearBtn.addEventListener("click", runEventFunction);
// clearBtn.addEventListener("dblclick", runEventFunction);
// clearBtn.addEventListener("mousedown", runEventFunction);
// clearBtn.addEventListener("mouseup", runEventFunction);
// clearBtn.addEventListener("mouseenter", runEventFunction);
// clearBtn.addEventListener("mouseleave", runEventFunction);
// clearBtn.addEventListener("mouseover", runEventFunction);

/*
mouseover vs mouseenter
The mouseover event triggers when the mouse pointer enters the div element, 
and its child elements. The mouseenter event is only triggered 
when the mouse pointer enters the div element.

*/

// console.log(clearBtn, "clearBtn");

// https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg

// https://www.w3schools.com/tags/att_a_download.asp
//click
//dom me a ka tag create karo
// <a href="https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg" download>
// is a ko click ka function kardo run
//remove kardo phr is a ko

//input field events

const taskInput = document.querySelector("#task");

// taskInput.addEventListener("input", runEventFunction);
// taskInput.addEventListener("keyup", runEventFunction);
// taskInput.addEventListener("keydown", runEventFunction);
// taskInput.addEventListener("keypress", runEventFunction);
// taskInput.addEventListener("focus", runEventFunction);
// taskInput.addEventListener("blur", runEventFunction);
// taskInput.addEventListener("cut", runEventFunction);
// taskInput.addEventListener("copy", runEventFunction);
// taskInput.addEventListener("paste", runEventFunction);

function runEventFunction(event) {
  event.preventDefault();
  console.log(`Event Type ${event.type}`);
}

const selectDropdown = document.querySelector("#abc-dropdown");
selectDropdown.addEventListener("change", function (e) {
  e.preventDefault();

  console.log(e.target.value, "selected dropdown value");
});
