const path = require('path')
const express = require('express')
const app = express()
const utils = require('./utils')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('Http get request for home page!')
})

app.post('/createCourse', (req, res) => {

})

const server = app.listen(process.env.PORT || 3000, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('Server listening at http://%s:%s', host, port)
})

//utils.createCourse('pooja', '12-09-2016', '19-09-2016')
utils.getCourse()
