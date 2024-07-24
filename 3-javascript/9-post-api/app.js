const apiBaseUrl = `https://jsonplaceholder.typicode.com/posts`;
const selectTbodyElement = document.querySelector("#todos-listing");
const selectLoader = document.querySelector(".loader-container");

const getPosts = () => {
  selectLoader.style.display = "flex";
  fetch(apiBaseUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data, "data");
      let output = "";
      data.forEach((singleData) => {
        output += `<tr>
            <td>${singleData.id}</td>
            <td>${singleData.userId}</td>
            <td>${singleData.title}</td>
            <td>
            <a class="btn btn-primary edit-btn"  href="#edit-post" >Edit</a>
            </td>
            <td>
            <a href="#" class="btn btn-danger delete-btn" >Delete</a></td>
          </tr>`;
      });
      selectTbodyElement.innerHTML = output;

      selectLoader.style.display = "none";
    })
    .catch((error) => console.error(error));
};

getPosts();
