const {Schema, model} = require('mongoose')

const User = new Schema({
  username: String,
  password: String,
  followers: {
    default: [],
    type: [String]
  },
  tweets: {
    type: [String],
    default: []
  }
})

module.exports = model('user', User)