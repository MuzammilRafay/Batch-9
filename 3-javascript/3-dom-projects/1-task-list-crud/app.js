const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const collection = document.querySelector(".collection");
const clearTaskBtn = document.querySelector(".clear-tasks");

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputValue = taskInput.value;
  //agar ye input value mujood na ho

  if (!inputValue) {
    alert("please fill the input field");
    return;
  }

  /*
create this type of element in dom

<li class="collection-item">
                  List Item
                  <a href="#" class="delete-item secondary-content">
                    <i class="fa fa-remove"></i>
                  </a>
                </li>
  */

  const liElement = document.createElement("li");
  liElement.className = "collection-item";
  liElement.innerHTML = `${inputValue}
  <a href="#" class="delete-item secondary-content">
    <i class="fa fa-remove"></i>
  </a>`;

  collection.appendChild(liElement);

  taskInput.value = "";

  //   console.log(liElement);
});

/*

Flexibility
appendChild: Only a single DOM node.
append: Multiple DOM nodes and text strings.


Return Value:
appendChild returns the appended node.
append does not return anything.

*/

clearTaskBtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (confirm("Are you sure ?")) {
    collection.innerHTML = "";
  }
});

collection.addEventListener("click", function (event) {
  event.preventDefault();
  const currentElement = event.target;

  if (currentElement.className === "fa fa-remove") {
    if (confirm("Are you sure ?")) {
      currentElement.parentElement.parentElement.remove();
    }
  }
});

//localstorage vs session storage
