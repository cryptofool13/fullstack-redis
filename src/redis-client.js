const client = require('redis').createClient() // default of createClient() is localhost:6379

client.on('connect', () => {
  console.log('\nconnected to redis')
})

client.on('error', e => {
  console.log(e)
})

module.exports = client
