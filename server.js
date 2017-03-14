const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes')
const session = require('express-session')
const uuid = require('node-uuid')
const redis = require('redis')
const redisStore = require('connect-redis')(session)
const app = express()
const client = redis.createClient()
const utils = require('./utils')

app.use(session({
  genid: function (req) {
    return uuid.v4()
  },
  secret: '123',
  store: new redisStore({host: 'localhost', port: 6379, client: client, ttl: 260}),
  saveUninitialized: false,
  resave: false
}))

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use('/api/v1', router)
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', utils.init)
app.post('/sendcode', utils.login)
app.get('/logout', utils.logout)

const server = app.listen(process.env.PORT || 3000, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('Server listening at http://%s:%s', host, port)
})
