const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "Hasti" },
  { id: 2, name: "Niloofar" },
];

router.get("/", (req, res) => {
  res.json(users);
});

router.post("/", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.status(201).json(newUser);
});

router.put("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;
  users = users.map((user) => (user.id === userId ? { ...user, ...updatedUser } : user));
  res.json(updatedUser);
});

router.delete("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter((user) => user.id !== userId);
  res.json({ message: "User deleted" });
});

module.exports = router;