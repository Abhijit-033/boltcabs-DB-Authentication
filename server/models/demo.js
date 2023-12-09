const mongoose = require("mongoose");

const demoSchema = new mongoose.Schema({
  name: String,
  password: String,
});

const demoModel = mongoose.model("userCollection", demoSchema);
module.exports = demoModel;
