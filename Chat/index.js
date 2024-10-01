const express = require("express");
const path = require("path");
const socketIO = require("socket.io");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/", express.static(path.join(__dirname, "public")));

const server = app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT} in ${app.get("env")} mode`);
});

const messages = [];
const MAX_MESSAGES = 100;

const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("New connection");

  socket.emit("update_messages", messages);

  socket.on("new_message", (data) => {
    messages.push(data);
    if (messages.length > MAX_MESSAGES) {
      messages.shift();
    }
    io.emit("update_messages", messages);
  });
});
