const { verify } = require('jsonwebtoken')

const { saveTweetHome } = require('./actions/tweet')
const { User, Tweet } = require('../models')

function getUserFromToken(token) {
  let id
  try {
    id = verify(token, 'averysecretkey').payload
  } catch (err) {
    return { error: err }
  }

  return id
}

exports.postTweet = (req, res) => {
  let token = req.header('authorization')
  if (!token) {
    return res.status(401).send({ error: 'unauthorized access' })
  }
  let userId = getUserFromToken(token)
  if (userId.error) {
    return res.status(401).send({ error: 'authorization failed' })
  }

  User.findById(userId).then(
    user => {
      if (!user) {
        return res.status(500).send({ error: 'user not found' })
      }
      let { content } = req.body
      if (!content) {
        return res
          .status(401)
          .send({ error: 'tweet must have author and content' })
      }
      const tweet = new Tweet({ content, author: userId })
      tweet.save().then(
        newTweet => {
          // tweet saved
          let tweetId = newTweet._id
          saveTweetHome(newTweet)
          User.findByIdAndUpdate(user._id, {
            tweets: user.tweets.concat(tweetId),
          }).then(() => {
            res.send({ message: 'tweet posted' })
          })
        },
        err => {
          res.status(500).send({ error: err.message })
        }
      )
    },
    err => {
      return res.status(401).send({ error: err.message })
    }
  )
}
