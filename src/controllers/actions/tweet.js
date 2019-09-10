const client = require('../../redis-client')

const userSpace = 'user::'

exports.saveUser = user => {
  client.HMSET(`${userSpace}${user._id}`, 'username', `${user.username}`, 'handle', `${user.handle}`)
}
