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

const clearTaskBtn = document.querySelector(".clear-tasks");

// console.log(clearTaskBtn);

clearTaskBtn.addEventListener("click", function (event) {
  event.preventDefault();

  console.log("click is working");
  // document.querySelector(".collection-item").style.color = "yellow";

  // if (document.querySelector(".collection-item").style.color === "yellow") {
  //   document.querySelector(".collection-item").style.color = "red";
  // } else {
  //   document.querySelector(".collection-item").style.color = "yellow";
  // }

  // const selectAllElement = document.querySelectorAll(".collection-item");
  const selectAllElement = document.querySelectorAll(
    ".collection-item:nth-child(even)"
  );
  selectAllElement.forEach(function (singleItem) {
    if (singleItem.style.color === "yellow") {
      singleItem.style.color = "red";
    } else {
      singleItem.style.color = "yellow";
    }
  });

  const selectAllElement2 = document.querySelectorAll(
    ".collection-item:nth-child(odd)"
  );
  selectAllElement2.forEach(function (singleItem) {
    if (singleItem.style.color === "green") {
      singleItem.style.color = "purple";
    } else {
      singleItem.style.color = "green";
    }
  });
});

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

//traversing
//up down jana dom mein

const selectAllCrossBtns = document.querySelectorAll(".delete-item");

// console.log(selectAllCrossBtns, "selectAllCrossBtns");

selectAllCrossBtns.forEach(function (singleItem) {
  singleItem.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("cross btn is clicked!");

    //jis element par click kia hai wuhi element mere pas ajae console me

    const currentClickedElement = event.target;

    // console.log(currentClickedElement, "currentClickedElement");
    currentClickedElement.parentElement.parentElement.remove();

    // console.log(
    //   currentClickedElement.parentElement.parentElement,
    //   "current element ke abbu element"
    // );
  });
});

//event bubling agar apne event listener click ka lagaya tu uske sare children par click lag jaega