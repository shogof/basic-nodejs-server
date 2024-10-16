const express = require("express");
const router = express.Router();

let products = [
  { id: 1, name: "Product A" },
  { id: 2, name: "Product B" },
];

router.get("/", (req, res) => {
  res.json(products);
});

router.post("/", (req, res) => {
  const newProduct = req.body;
  newProduct.id = products.length + 1; // Assign a new ID
  products.push(newProduct);
  res.status(201).json(newProduct);
});

router.put("/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const updatedProduct = req.body;
  products = products.map((product) =>
    product.id === productId ? { ...product, ...updatedProduct } : product
  );
  res.json(updatedProduct);
});

router.delete("/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  products = products.filter((product) => product.id !== productId);
  res.json({ message: "Product deleted" });
});

module.exports = router;
