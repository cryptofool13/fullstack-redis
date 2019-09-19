// const mongoose = require('mongoose')

// mongoose.connect(
//   'mongodb://localhost:27017/redis-node',
//   { useNewUrlParser: true },
//   () => console.log('\nconnected to mognodb')
// )

const Sequelize = require('sequelize')

const sequelize = new Sequelize('test', 'mike', 'mikecurry', {
  host: 'localhost',
  dialect: 'mysql',
})

sequelize
  .authenticate()
  .then(() => {
    console.log('connection has been established with db')
  })
  .catch(err => {
    console.error('unable to connect to db: \n', err)
  })

module.exports = sequelize
