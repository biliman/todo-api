const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  todo_name: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    require: false
  }
},{
  timestamps: {
    createdAt: 'created_at'
  }
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo