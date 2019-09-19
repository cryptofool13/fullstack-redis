const client = require('../../redis-client')

const USER_SPACE = 'user::'
const TWEET_SPACE = 'tweets::'
const HOME_FEED = 'home::'
const PERSONAL_FEED = 'personal::'

exports.saveUser = user => {
  client.HMSET(
    `${USER_SPACE}${user._id}`,
    'username',
    `${user.username}`,
    'handle',
    `${user.handle}`
  )
}

exports.isUserSaved = user => {
  return client.exists(`${USER_SPACE}${user._id}`)
}

exports.saveTweetHome = tweet => {
  client.LPUSH(
    `${TWEET_SPACE}${HOME_FEED}${Object.toString(tweet.author)}`,
    Object.toString(tweet._id)
  )
}

exports.saveTweetPersonal = tweet => {
  client.LPUSH(
    `${TWEET_SPACE}${PERSONAL_FEED}${Object.toString(tweet.author)}`,
    Object.toString(tweet._id)
  )
}
