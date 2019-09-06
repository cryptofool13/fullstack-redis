const { verify } = require('jsonwebtoken')

const { User } = require('../models')

function getUserFromToken(token) {
  let id = verify(token, 'averysecretkey').payload

  return User.findById(id)
}

exports.postTweet = (req, res) => {
  let { author, content } = req.body
  let token = req.header('authorization')
  if (!token) {
    res.status(401).send({ error: 'unauthorized access' })
  }
  getUserFromToken(token).then(user => {
    res.send(user)
  })
  // get token from req.header
  // parse token and extract user id
  // get user from db and handle errors
  // get tweet components from req.body
  // handle input errors
  // create tweet and save to db.
  // add tweet id to user.tweets
  // update user document
}
