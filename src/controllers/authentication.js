const { sign } = require('jsonwebtoken')

const model = require('../models')
const {
  saveUser,
  isUserSaved,
  saveTweetHome,
} = require('../controllers/actions/tweet')

const generateToken = payload => sign({ payload }, 'averysecretkey')

exports.signUp = (req, res) => {
  let { username, handle, password } = req.body
  if (!username || !handle || !password) {
    res
      .status(400)
      .send({ error: 'must submit a username, handle and password' })
  } else {
    model.User.create({ handle, username, password }).then(user => {
      res.send({ userid: user.id })
    })
    // const newUser = new User({ username, handle, password })
    // newUser.save().then(
    //   user => {
    //     if (!user) {
    //       return res.status(500).send({ error: 'user could not be created' })
    //     }
    //     const token = generateToken(user._id)
    //     return res.send({ token, user: user })
    //   },
    //   err => {
    //     if (err.code == '11000') {
    //       return res
    //         .status(400)
    //         .send({ error: 'There already exists a user with that username.' })
    //     }
    //   }
    // )
  }
}

exports.signIn = (req, res) => {
  let { username, password } = req.body
  if (!username || !password) {
    return res
      .status(400)
      .send({ error: 'must submit a username and a password' })
  } else {
    User.findOne({ username }).then(
      user => {
        if (!user) {
          return res.status(400).send({ error: 'user does not exist.' })
        }
        if (user.password !== password) {
          return res.status(400).send({ error: 'incorrect password' })
        } else {
          const token = generateToken(user._id)
          if (!isUserSaved(user)) {
            saveUser(user)
          }

          return res.send({ token })
        }
      },
      err => res.send(err)
    )
  }
}
