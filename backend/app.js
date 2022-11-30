const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-Parser");
var cors = require("cors");
const Note = require("./Models/note.model");
const { request } = require("express");

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('public'));

//add note
app.post("/", async (req, res) => {
  try {
    const newtodo = new Note({
      title: req.body.title,
      desc: req.body.desc,
    });
    const todo = await Note.find();
    if (todo.length < 10) {
      console.log(todo.length);
      const newnote = await newtodo.save();
    }
    res.status(201).json(todo);
  } catch (error) {
    res.send(error);
  }
});

//get notes
app.get("/", async (req, res) => {
  try {
    const todo = await Note.find();
    res.status(201).json(todo);
  } catch (error) {
    res.send(error);
  }
});

//get note by id
app.get("/show/:id", async (req, res) => {
  try {
    const user = await Note.findById(req.params.id);
    res.status(201).json(user);
  } catch (error) {
    res.send(error);
  }
});
//update
app.post("/edit/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let user = request.body;
    const updateddata = {
      title: req.body.title,
      desc: req.body.desc,
    };
    const updateddata1 = await Note.findByIdAndUpdate(id, updateddata);
    res.status(201).json(updateddata1);
  } catch (error) {
    res.send(error);
  }
});

//delete note by id
app.delete("/delete/:id", async (req, res) => {
  try {
    const onetodo = await Note.findByIdAndDelete(req.params.id);
    const todo = await Note.find();
    res.status(201).json(onetodo);
  } catch (error) {
    res.status(401).json(error);
    console.log(error);
  }
});

//put
// app.put("/edit/:id", async (req, res) => {
//   const updateddata = {
//     title: req.body.title,
//     desc: req.body.desc,
//   };
//   const updateddata1 = await Note.findByIdAndUpdate(req.params.id, updateddata);
//   const id = req.params.id;
//   res.redirect(`/show/${id}`);
// });

//update note by id
// app.get("/edit/:id", async (req, res) => {
//     const todo = await Note.findById(req.params.id);
//     res.render("edit", { todo: todo });
//   });
//   app.post("/edit/:id", async (req, res) => {
//     const updateddata = {
//       title: req.body.title,
//       desc: req.body.desc,
//     };
//     const updateddata1 = await Note.findByIdAndUpdate(req.params.id, updateddata);
//     const id = req.params.id;
//     res.redirect(`/show/${id}`);
//   });

app.listen(PORT, () => {
  console.log(`server is runiing at localhost:${PORT}`);
});
