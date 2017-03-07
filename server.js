const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes')
const Guid = require('guid')
const Request = require('request')
const Querystring = require('querystring')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use('/api/v1', router)
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})
app.get('/sendcode', login)

let csrf_guid = Guid.raw()
const api_version = 'v1.1'
const app_id = '1455231231185709'
const app_secret = 'ae0bb1583f4172718c5e9bdf8d329f89'
const me_endpoint_base_url = 'https://graph.accountkit.com/v1.1/me'
const token_exchange_base_url = 'https://graph.accountkit.com/v1.1/access_token'


app.post('/sendcode', function (request, response) {
  // CSRF check
  if (request.body.csrf_nonce === csrf_guid) {
    var app_access_token = ['AA', app_id, app_secret].join('|')
    var params = {
      grant_type: 'authorization_code',
      code: request.body.code,
      access_token: app_access_token
      // appsecret_proof: app_secret
    }

    // exchange tokens
    let token_exchange_url = token_exchange_base_url + '?' + Querystring.stringify(params)
    Request.get({url: token_exchange_url, json: true}, function (err, resp, respBody) {
      console.log(respBody)
      var view = {
        user_access_token: respBody.access_token,
        expires_at: respBody.expires_at,
        user_id: respBody.id
      }
      // get account details at /me endpoint
      let me_endpoint_url = me_endpoint_base_url + '?access_token=' + respBody.access_token
      Request.get({url: me_endpoint_url, json: true }, function (err, resp, respBody) {
        // send login_success.html
        console.log(respBody)
        if (respBody.phone) {
          view.method = 'SMS'
          view.identity = respBody.phone.number
        } else if (respBody.email) {
          view.method = 'Email'
          view.identity = respBody.email.address
        }
        response.send('hello')
      })
    })
  } else {
    // login failed
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end('Something went wrong. :( ')
  }
})

const server = app.listen(process.env.PORT || 3000, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('Server listening at http://%s:%s', host, port)
})
