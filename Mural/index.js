const express = require("express");
const apiRouter = require("./routes/api");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use("/api", apiRouter);

app.use("/", express.static(path.join(__dirname, "public")));

app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT} in ${app.get("env")} mode`);
});
