const express = require('express')
const bodyParser =require('body-parser')

const db = require('./db')
const server = require('./server')

const app = express()
app.use(bodyParser.json())

server(app)

app.listen(3000, () => {
  console.log('redis-node server listening on port 3000')
})