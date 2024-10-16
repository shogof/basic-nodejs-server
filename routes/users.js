const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "Laila" },
  { id: 2, name: "Ahmad" },
];

router.get("/", (req, res) => {
  const name = req.query.name;
  if (name) {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
    return res.json(filteredUsers);
  }
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
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  users[userIndex] = { ...users[userIndex], ...updatedUser };
  res.json(users[userIndex]);
});

router.delete("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  users.splice(userIndex, 1);
  res.json({ message: "User deleted" });
});

module.exports = router;
