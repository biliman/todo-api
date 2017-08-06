const Todo = require('../models/Todo')

function createTodo(req, res) {
  Todo.create({
    todo_name: req.body.todo_name,
    tags: req.body.tag,
  })
  .then(log => {
    res.send(log)
  })
  .catch(err => {
    res.send(er)
  })
}

function findTodo(req, res) {
  Todo.findOne({
    _id: req.params.id
  })
  .then(row => {
    res.send(row)
  })
  .catch(err => {
    res.send(err)
  })
}

function deleteTodo(req, res) {
  Todo.deleteOne({
    _id: req.params.id
  })
  .then(log => {
    res.send(log)
  })
  .catch(err => {
    res.send(err)
  })
}

function editTodo(req, res) {
  Todo.where({
    _id: req.params.id
  })
  .update({
    todo_name: req.body.todo_name
  })
  .then(log => {
    res.send(log)
  })
  .catch(err => {
    res.send(err)
  })
}

function getTodo(req, res) {
  Todo.find()
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err.message)
  })
}

function addTag(req, res) {
  Todo.where({
    _id: req.params.id
  })
  .update({
    $push: {
      tags: req.body.tag
    }
  })
  .then(log => {
    res.send(log)
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports ={
  createTodo,
  findTodo,
  deleteTodo,
  editTodo,
  getTodo,
  addTag
}