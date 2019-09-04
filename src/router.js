const User = require('./models/user')
const AuthController = require('./controllers/authentication')

module.exports = app => {
  app.get('/', (req, res) => {
    res.send('youve reached the redis-node test server')
  })

  app.post('/users', AuthController.signUp)
}
