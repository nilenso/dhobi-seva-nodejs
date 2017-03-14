const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes')
const Guid = require('guid')
const Request = require('request')
const Querystring = require('querystring')
const session = require('express-session')
const uuid = require('node-uuid')
const Mustache = require('mustache')
const fs = require('fs')
const db = require('./db/db_initialise')
const admin = require('./config/admin')
const redis = require('redis')
const redisStore = require('connect-redis')(session)
const app = express()
const client = redis.createClient()

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

let csrf_guid = Guid.raw()
const api_version = 'v1.0'
const app_id = '354578414912778'
const app_secret = '95bf1f8379d7cd0bf5fb8a9c62416a37'
const me_endpoint_base_url = 'https://graph.accountkit.com/v1.1/me'
const token_exchange_base_url = 'https://graph.accountkit.com/v1.1/access_token'

function loadLogin () {
  return fs.readFileSync('views/login.html').toString()
}

function loadLoginSuccess () {
  return fs.readFileSync('views/home.html').toString()
}

app.get('/', function (request, response) {
  console.log(request.session)
  if (request.session.user) {
    let html = Mustache.to_html(loadLoginSuccess())
    response.send(html)
  } else {
    var view = {
      appId: app_id,
      csrf: csrf_guid,
      version: api_version
    }
    let html = Mustache.to_html(loadLogin(), view)
    response.send(html)
  }
})

app.post('/sendcode', function (request, response) {
  if (request.body.csrf_nonce === csrf_guid) {
    var app_access_token = ['AA', app_id, app_secret].join('|')
    var params = {
      grant_type: 'authorization_code',
      code: request.body.code,
      access_token: app_access_token
    }

    let token_exchange_url = token_exchange_base_url + '?' + Querystring.stringify(params)
    Request.get({url: token_exchange_url, json: true}, function (err, resp, respBody) {
      var view = {
        user_access_token: respBody.access_token,
        expires_at: respBody.expires_at,
        user_id: respBody.id
      }

      let me_endpoint_url = me_endpoint_base_url + '?access_token=' + respBody.access_token
      Request.get({url: me_endpoint_url, json: true}, function (err, resp, respBody) {
        request.session.admin = respBody.phone.national_number === admin.admin_id
        if(request.session.admin) {
          request.session.user = respBody.id
          var html = Mustache.to_html(loadLoginSuccess(), view)
          response.send(html)
        } else {
        db.init(function (ob) {
          ob.Users.findAll({where: {user_id: respBody.phone.national_number}}).then(function (user) {
            if (user.length > 0) {
              request.session.user = respBody.id
              view.method = 'SMS'
              view.identity = respBody.phone.number
              var html = Mustache.to_html(loadLoginSuccess(), view)
              response.send(html)
            } else {
              console.log('Unauthorised user')
              response.send('Unauthorised user')
            }
          })
        })
      }
      })
    })
  } else {
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end('Something went wrong. :( ')
  }
})

app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) console.log(err)
    else res.redirect('/')
  })
})

const server = app.listen(process.env.PORT || 3000, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('Server listening at http://%s:%s', host, port)
})
