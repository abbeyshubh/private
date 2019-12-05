const express = require("express");
require("./config/db");
var app = express();
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "public/index.html"));
// });

const detailRoutes = require("./routes/detail.route");
app.use("/api/post", detailRoutes);

app.get("/", (req, res) => {
  res.send("<h1></h1>");
});

app.listen(port, () => {
  console.log(`Express Server started at : ${port}`);
});
