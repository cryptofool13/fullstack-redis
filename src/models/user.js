// const { Schema, model } = require('mongoose')

// const User = new Schema({
//   username: {
//     type: String,
//     required: true,
//   },
//   handle: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   followers: {
//     type: [String],
//     default: [],
//   },
//   tweets: {
//     type: [String],
//     default: [],
//   },
// })

// module.exports = model('user', User)

const Sequelize = require('sequelize')
const Model = Sequelize.Model

const sequelize = require('../db')

class User extends Model {}

User.init(
  {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    handle: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'user',
  }
)

User.sync({ force: false }).then(() => {
  console.log('users synced')
})

module.exports = User
