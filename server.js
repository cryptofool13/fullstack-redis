const User = require('./user')

module.exports = app => {
  app.get('/', (req, res) => {
    res.send('youve reached the redis-node test server')
  })

  app.post('/users', (req, res) => {
    const {name, password} = req.body
    if(name && password){
      const user = new User({name, password}).save().then(doc => {
        res.send(doc)
      })
    }  
  })
}