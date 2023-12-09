const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const demoModel = require("./models/demo");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://chanamolubhargav:Bhargav%40289232@clustermerry.vhfkqzz.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/login", (req, res) => {
  const { name, password } = req.body;
  demoModel.findOne({ name: name }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Incorrect Password");
      }
    } else {
      res.json("Your are a new user pls regsiter");
    }
  });
});

app.post("/register", (req, res) => {
  demoModel
    .create(req.body)
    .then((demo) => res.json(demo))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is Running");
});
