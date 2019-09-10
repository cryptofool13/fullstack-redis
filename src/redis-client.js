const client = require('redis').createClient() // default of createClient() is localhost:6379
const { promisify } = require('util')

client.on('connect', () => {
  console.log('\nconnected to redis')
})

client.on('error', e => {
  console.log(e)
})

exports.getAsync = promisify(client.get).bind(client)

module.exports = client
