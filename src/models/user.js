const { Schema, model } = require('mongoose')

const User = new Schema({
  username: {
    type: String,
    required: true,
  },
  handle: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  followers: {
    type: [String],
    default: [],
  },
  tweets: {
    type: [String],
    default: [],
  },
})

module.exports = model('user', User)
