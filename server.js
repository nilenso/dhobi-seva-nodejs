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

const server = app.listen(process.env.PORT || 3000, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('Server listening at http://%s:%s', host, port)
})
