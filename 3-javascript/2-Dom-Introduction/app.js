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

  if (document.querySelector(".collection-item").style.color === "yellow") {
    document.querySelector(".collection-item").style.color = "red";
  } else {
    document.querySelector(".collection-item").style.color = "yellow";
  }
});
