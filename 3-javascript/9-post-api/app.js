const apiBaseUrl = `https://jsonplaceholder.typicode.com/posts`;
const selectTbodyElement = document.querySelector("#todos-listing");
const selectLoader = document.querySelector(".loader-container");
const editTitleInputField = document.querySelector("#edit_post_title");
const editBodyInputField = document.querySelector("#edit_post_body");
const editPostIdHidden = document.querySelector("#edit_post_id");

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
            <a class="btn btn-primary edit-btn"  href="#edit-post" data-post-id="${singleData.id}">Edit</a>
            </td>
            <td>
            <a href="#" class="btn btn-danger delete-btn" data-post-id="${singleData.id}">Delete</a></td>
          </tr>`;
      });
      selectTbodyElement.innerHTML = output;

      selectLoader.style.display = "none";
    })
    .catch((error) => console.error(error));
};

const getPostById = (postId) => {
  selectLoader.style.display = "flex";
  return fetch(`${apiBaseUrl}/${postId}`)
    .then((response) => response.json())
    .then((data) => {
      selectLoader.style.display = "none";
      return data;
    })
    .catch((error) => console.error(error));
};

getPosts();

//bind all click

selectTbodyElement.addEventListener("click", async function (e) {
  e.preventDefault();

  currentElement = e.target;

  //delete btn clicked event listener
  if (
    currentElement.className === "btn btn-danger delete-btn" &&
    confirm("Are you sure")
  ) {
    const postId = currentElement.getAttribute("data-post-id");
    selectLoader.style.display = "flex";
    fetch(`${apiBaseUrl}/${postId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        selectLoader.style.display = "none";
        getPosts();
      })
      .catch((error) => console.error(error));
  }

  //edit btn clicked
  if (currentElement.className === "btn btn-primary edit-btn") {
    const postId = currentElement.getAttribute("data-post-id");

    const singlePostData = await getPostById(postId);

    $("#edit-post").modal("show");

    editTitleInputField.value = singlePostData.title;
    editBodyInputField.value = singlePostData.body;
    editPostIdHidden.value = singlePostData.id;
  }
});

const editForm = document.querySelector("#edit-post-form");

editForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (
    !editTitleInputField.value ||
    !editBodyInputField.value ||
    !editPostIdHidden.value
  ) {
    alert("please fill the input fields");
    return;
  }

  const body = {
    title: editTitleInputField.value,
    body: editBodyInputField.value,
  };

  fetch(`${apiBaseUrl}/${editPostIdHidden.value}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      $("#edit-post").modal("hide");
      getPosts();
    })
    .catch((error) => console.error(error));
});

/*  
Rest Api Pattern

Request Methods

GET	    /posts              (get all posts)
GET	    /posts/1            (get post by id)
GET	    /comments?postId=1  (get post comments by postId)
POST	  /posts              (create post)
PUT	    /posts/1            (update specific post with all data like title,body)
PATCH	  /posts/1            (update specific post partially with some data like only title or body)
DELETE  /posts/1            (delete post by id)

*/
