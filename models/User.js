const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  key: {
    type: String,
    required: true
  },
  todo_list: [{
    type: Schema.Types.ObjectId,
    ref: 'Todo'
  }]
})

const User = mongoose.model('User', userSchema)

module.exports = User