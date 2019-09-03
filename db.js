const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/redis-node', () => console.log('connected to mognodb'))