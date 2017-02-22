const pg = require('pg')

const utils = {}

let conString = 'pg://postgres:qwerty@localhost:5432/test'
let client = new pg.Client(conString)
client.connect()

utils.createCourse = (req, res) => {
  client.query('CREATE TABLE IF NOT EXISTS courses(courseId serial PRIMARY KEY,coursename varchar(35), startdate varchar(12), enddate varchar(12))')
  console.log(typeof req.body.name)
  if ((typeof req.body.name === 'string') && (req.body.start !== null) && (req.body.end !== null)) {
    let query = client.query("INSERT INTO courses (coursename, startdate, enddate) VALUES ('"+req.body.name+"', '"+req.body.start+"', '"+req.body.end+"')")
    res.send(req.body)
  } else {
    console.log('Error')
    res.status(500).send('ERROR')
  }
}

utils.getCourse = (res) => {
  let query = client.query('SELECT * FROM courses')
  query.on('row', function (row, result) {
    result.addRow(row)
  })
  query.on('end', function (result) {
    res.send(result.rows)
  })
}

module.exports = utils
