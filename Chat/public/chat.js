const socket = io("http://localhost:3000");

let user = "Anonimuos";

socket.on("update_messages", (messages) => {
  updateMessages(messages);
});

function updateMessages(messages) {
  const divMessages = document.getElementById("messages");

  let listMessages = "<ul class='list-unstyled'>";
  messages.forEach((message) => {
    listMessages += `
      <li class='mb-2'>
        <div class='p-2 bg-light rounded border text-dark'>
          <strong>${message.user}:</strong> ${message.msg}
        </div>
      </li>`;
  });
  listMessages += "</ul>";

  divMessages.innerHTML = listMessages;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("msgForm");
  const userForm = document.getElementById("userForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = document.forms["msgFormName"]["msg"].value;

    document.forms["msgFormName"]["msg"].value = "";
    socket.emit("new_message", { user: user, msg: message });
    console.log(message);
  });

  userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    user = document.forms["userFormName"]["user"].value || "Anonimuos";
    userForm.parentNode.removeChild(userForm);
  });
});
