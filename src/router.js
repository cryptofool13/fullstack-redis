const { Auth, Tweet } = require('./controllers')

module.exports = app => {
  app.get('/', (req, res) => {
    res.send('youve reached the redis-node test server')
  })

  app.post('/signin', Auth.signIn)
  app.post('/signup', Auth.signUp)

  app.post('/tweet', Tweet.postTweet)
}
