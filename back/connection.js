require("dotenv").config();
const auth = require("./auth/auth");
const express = require("express");
const connection = require("./conf");
const app = express();
const port = 3010;
const cors = require("cors");
const passport = require("passport");
require("./passport/passport-strategy");

app.use(express.static(__dirname + "/public"));
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api/auth", auth);

app.use(cors());

app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened ...");
  }
  console.log(`Server listened on ${port}`);
});