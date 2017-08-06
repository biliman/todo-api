
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
mongoose.connect('mongodb://localhost/todo-api')

const cors = require('cors')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.json({type: 'application/*+json'}))
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}))

app.use(cors())

app.get('/', (req,res) => {
  res.send('Welcome this is a TODO api')
})

const Todo = require('./routes/todo')
const User = require('./routes/user')

app.use('/todo', Todo)
app.use('/user', User)

app.listen(3000)