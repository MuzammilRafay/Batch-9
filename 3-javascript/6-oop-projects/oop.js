const tbody = document.querySelector("#book-list");
function bookUi() {}

//adding the methods in prototypes
bookUi.prototype.addBook = function (title, author, isbn) {
  /*
<tr>
          <td>muzammil</td>
          <td>muzammil</td>
          <td>muzammil</td>
          <td><a href="#" class="delete">X<a></td>
        </tr> 
    */
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `<td>${title}</td>
          <td>${author}</td>
          <td>${isbn}</td>
          <td><a href="#" class="delete">X<a></td>`;
  tbody.append(tableRow);
};

bookUi.prototype.removeBook = function (currentElement) {
  currentElement.parentElement.parentElement.remove();
};

// class Somthing {
//     static working(){
//     }
// }

// Somthing.working();
