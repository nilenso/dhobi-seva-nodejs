const path = require('path')
const express = require('express')
const app = express()
const utils = require('./utils')
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, '../public')))
app.use(bodyParser.json())

app.get('/getCourse', (req, res) => {
  utils.getCourse(res)
})

app.post('/createCourse', (req, res) => {
  utils.createCourse(req, res)
})

const server = app.listen(process.env.PORT || 3000, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('Server listening at http://%s:%s', host, port)
})

//utils.getCourse()
