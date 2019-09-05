const { model, Schema } = require('mongoose')

const Post = new Schema({
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date().getTime(),
    required: true,
  },
  content: {
    type: String,
    required: true,
    maxlength: 140,
  },
})

module.exports = model('post', Post)
