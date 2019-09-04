const User = require('../models/user')

exports.signUp = (req, res) => {
  const { name, password } = req.body
  if (name && password) {
    const user = new User({ name, password }).save().then(doc => {
      res.send(doc)
    })
  }
}