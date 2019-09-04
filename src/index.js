const app = require('./app')
const db = require('./db')
const router = require('./router')

router(app)

app.listen(3000, () => {
  console.log('-'.repeat(80), '\nredis-node server listening on port 3000')
})
