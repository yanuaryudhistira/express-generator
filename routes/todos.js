var express = require('express');
var router = express.Router();

module.exports = router;

let todoList = [{
    todo: "join impactbyte coding bootcamp",
  },
  {
    todo: "become a fullstack web developer",
  }
];

//-----------------------------------------------------------------------------

router.get("/search", (req, res) => {
  let keyword = req.query.todo;
  let result = todoList.filter(word =>
    word.todo.toLowerCase().includes(keyword.toLowerCase())
  );
  res.send(result);
});

//-----------------------------------------------------------------------------

router.post("/", (req, res) => {
  let newTodo = {
    todo: req.body.todo,
  };
  todoList.push(newTodo);
  res.send(todoList);
});

//-----------------------------------------------------------------------------

router.get("/", (req, res) => {
  res.send(todoList);
});

router.get("/:id", (req, res) => {
  res.send(todoList[req.params.id]);
});

//-----------------------------------------------------------------------------

router.put("/:id", (req, res) => {
  todoList[req.params.id] = req.body
  res.send(todoList);
});

//-----------------------------------------------------------------------------

router.delete("/:id", (req, res) => {
  todoList.splice(req.params.id, 1);
  res.send(todoList);
});
