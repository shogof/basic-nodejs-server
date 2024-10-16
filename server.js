const express = require("express");
const bodyParser = require("body-parser");
const usersRoute = require("./routes/users");
const productsRoute = require("./routes/products");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(express.static("public"));

app.use((req, res, next) => {
  console.log(`${req.method} request made to: ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use("/users", usersRoute);
app.use("/products", productsRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
