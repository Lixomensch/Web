const url = "http://192.168.56.1:3000/api";

document.addEventListener("DOMContentLoaded", () => {
  updatePosts();
});

function updatePosts() {
  fetch(url + "/all")
    .then((res) => res.json())
    .then((posts) => {
      printPosts(posts);
    })
    .catch((err) => console.error("Error fetching posts:", err));
}

function newPost() {
  let title = document.getElementById("title").value;
  let description = document.getElementById("desc").value;

  let post = { title, description };
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  };

  fetch(url + "/new", options)
    .then((res) => res.json())
    .then(() => {
      updatePosts();
      document.getElementById("title").value = "";
      document.getElementById("desc").value = "";
    })
    .catch((err) => console.error("Error adding new post:", err));
}

function deletePost(id) {
  const options = {
    method: "DELETE",
  };

  fetch(`${url}/delete/${id}`, options)
    .then((res) => res.json())
    .then(() => {
      updatePosts();
    })
    .catch((err) => console.error("Error deleting post:", err));
}

function printPosts(posts) {
  let postsElements = "";

  posts.forEach((post) => {
    let postElement = `
      <div id=${post.ID} class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h5>${post.title}</h5>
          <button class="btn btn-danger btn-sm" onclick="deletePost('${post.ID}')">Deletar</button>
        </div>
        <div class="card-body">
          <div class="card-text">${post.description}</div>
        </div>
      </div>`;

    postsElements += postElement;
  });

  document.getElementById("posts").innerHTML = postsElements;
}
