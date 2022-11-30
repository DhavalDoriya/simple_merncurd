const mongoose = require("mongoose");
const conn = require("../connection");

const todoSchema = new mongoose.Schema({
  title: String,
  desc: String,
  image: String,
});

const Todo = mongoose.model("todo", todoSchema);
module.exports = Todo;
