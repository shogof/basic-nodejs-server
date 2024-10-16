const express = require("express");
const bodyParser = require("body-parser");
const usersRoute = require("./routes/users");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use("/users", usersRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
