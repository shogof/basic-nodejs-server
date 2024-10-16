const express = require("express");
const router = express.Router();

let products = [
  { id: 1, name: "Product A:)" },
  { id: 2, name: "Product B:(" },
];

router.get("/", (req, res) => {
  res.json(products);
});

router.post("/", (req, res) => {
  const newProduct = req.body;
  newProduct.id = products.length + 1;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

router.put("/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const updatedProduct = req.body;
  const productIndex = products.findIndex(
    (product) => product.id === productId
  );

  if (productIndex === -1) {
    return res.status(404).json({ error: "Product not found" });
  }

  products[productIndex] = { ...products[productIndex], ...updatedProduct };
  res.json(products[productIndex]);
});

router.delete("/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex(
    (product) => product.id === productId
  );

  if (productIndex === -1) {
    return res.status(404).json({ error: "Product not found" });
  }

  products.splice(productIndex, 1);
  res.json({ message: "Product deleted" });
});

module.exports = router;
