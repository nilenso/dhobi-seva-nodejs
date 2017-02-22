const path = require('path')
const express = require('express')
const app = express()
const utils = require('./utils')
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, '../public')))
app.use(bodyParser.json())

app.get('/', (req, res) => {

})

app.post('/createCourse', (req, res) => {
  utils.createCourse(req.body.name, req.body.start, req.body.end)
  res.send(req.body)
})

const server = app.listen(process.env.PORT || 3000, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('Server listening at http://%s:%s', host, port)
})

utils.getCourse()
