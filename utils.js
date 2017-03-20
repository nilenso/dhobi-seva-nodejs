const Request = require('request')
const Querystring = require('querystring')
const Mustache = require('mustache')
const fs = require('fs')
const Guid = require('guid')
const db = require('./db/db_initialise')
const admin = require('./config/admin')
const account_kit = require('./config/account_kit.json')


let csrf_guid = Guid.raw()
const app_id = account_kit.app_id
const app_secret = account_kit.app_secret
const api_version = account_kit.version

const me_endpoint_base_url = 'https://graph.accountkit.com/v1.1/me'
const token_exchange_base_url = 'https://graph.accountkit.com/v1.1/access_token'

function loadLogin () {
  return fs.readFileSync('views/login.html').toString()
}

function loadLoginSuccess () {
  return fs.readFileSync('views/home.html').toString()
}

exports.init = (req, res) => {
  console.log(req.session)
  if (req.session.user) {
    let html = Mustache.to_html(loadLoginSuccess())
    res.send(html)
  } else {
    var view = {
      appId: app_id,
      csrf: csrf_guid,
      version: api_version
    }
    let html = Mustache.to_html(loadLogin(), view)
    res.send(html)
  }
}

exports.login = (req, res) => {
  if (req.body.csrf_nonce === csrf_guid) {
    var app_access_token = ['AA', app_id, app_secret].join('|')
    var params = {
      grant_type: 'authorization_code',
      code: req.body.code,
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
        req.session.admin = respBody.phone.national_number === admin.admin_id
        if (req.session.admin) {
          req.session.user = respBody.id
          var html = Mustache.to_html(loadLoginSuccess(), view)
          res.send(html)
        } else {
          db.init(function (ob) {
            ob.Users.findAll({where: {user_id: respBody.phone.national_number}}).then(function (user) {
              if (user.length > 0) {
                req.session.user = respBody.id
                view.method = 'SMS'
                view.identity = respBody.phone.number
                var html = Mustache.to_html(loadLoginSuccess(), view)
                res.send(html)
              } else {
                console.log('Unauthorised user')
                res.send('Unauthorised user')
              }
            })
          })
        }
      })
    })
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('Something went wrong. :( ')
  }
}

exports.logout = (req, res) => {
  req.session.destroy(err => {
    if (err) console.log(err)
    else res.redirect('/')
  })
}
