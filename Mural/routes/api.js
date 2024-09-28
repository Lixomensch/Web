const express = require("express");
const cors = require("cors");
const posts = require("../model/posts");
const router = express.Router();

const options = {
  origin: "http://localhost:3000",
};
router.use(cors(options));

router.get("/all", (req, res) => {
  res.json(posts.getAll());
});

router.post("/new", express.json(), (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title and description are required." });
  }

  posts.newPost(title, description);

  res.status(201).json({ message: "Post added successfully!" });
});

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const result = posts.deletePost(id);

  if (result) {
    res.status(200).json({ message: "Post deletado com sucesso!" });
  } else {
    res.status(404).json({ message: "Post não encontrado!" });
  }
});

module.exports = router;
