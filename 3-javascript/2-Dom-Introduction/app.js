// Dom stands for document object model

console.log(document); //it will return you all html

const taskBtn = document.querySelector("#task-button");

taskBtn.addEventListener("click", function (event) {
  event.preventDefault(); //apni default functionality rukdien
  console.log("clicked!");

  const selectCardTitle = document.querySelector(".card-title");
  if (selectCardTitle.innerText === "Task List") {
    selectCardTitle.innerText = "It is Changed";
    selectCardTitle.style.color = "red";
  } else {
    selectCardTitle.innerText = "Task List";
    selectCardTitle.style.color = "black";
  }
});

let valOfDom;
valOfDom = document;
valOfDom = document.all;
valOfDom = document.body;
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

console.log(valOfDom, "val of dom");
