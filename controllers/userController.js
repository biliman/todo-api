const User = require('../models/User')
const jwt = require('jsonwebtoken')
const helper = require('../helpers/registerHelpers')

function signup(req, res) {
  const key = helper.randomKey()
  const pass = helper.hash(req.body.password, key)
  User.create({
    name: req.body.name,
    password: pass,
    email: req.body.email,
    key: key
  })
  .then(log => {
    res.send(log)
  })
  .catch(err => {
    res.send(err)
  })
}

function signin(req, res) {
  User.findOne({
    email: req.body.email
  })
  .then(row => {
    const key = row.key
    const pass = helper.hash(req.body.password, key)
    if (row.password == pass) {
      const token = jwt.sign({
        name: row.name,
        email: row.email,
        todo_list: row.todo_list
      }, 'Bil')
      req.headers.token = token
      res.send(token)
    } else {
      res.send('wrong password')
    }
  })
  .catch(err => {
    res.send(err)
  })
}

function addTodo(req, res) {
  User.where({
    _id: req.params.id
  })
  .update({
    $push: {
      todo_list: req.body.todo_list
    }
  })
  .then(log => {
    res.send(log)
  })
  .catch(err => {
    res.send(err)
  })
}

function removeTodo(req, res) {
  User.findOne({
    _id: req.params.id
  })
  .then(row => {
    const todo = row.todo_list
    for (let i = 0; i < todo.length; i++) {
      if(todo[i] == req.params.idT) {
        task.splice(i, 1)
      }
    }
    User.where({
      _id: req.params.id
    })
    .update({
      todo_list: todo
    })
    .then(log => {
      res.send(log)
    })
    .catch(err => {
      res.send(err)
    })
  })
  .catch(err => {
    res.send(err)
  })
}

function showTodo(req, res) {
  User.findOne({
    _id: req.params.id
  })
  .populate('todo_list')
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  signup,
  signin,
  addTodo,
  removeTodo,
  showTodo
}
