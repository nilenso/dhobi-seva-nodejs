const pg = require('pg')
let confFile = __dirname + '/db_settings.json'
const setting = require(confFile)
const dbconfig = setting.dbconfig

let conString = 'pg://' + dbconfig.username + ':'+ dbconfig.password + '@' + dbconfig.dbhost + ':' + dbconfig.dbport + '/' + dbconfig.dbname
let client = new pg.Client(conString)
client.connect()
//let query = client.query('SELECT 1 from pg_database WHERE datname=test')
console.log(query)
client.query('CREATE TABLE IF NOT EXISTS courses(courseId serial PRIMARY KEY,coursename varchar(35), startdate varchar(20), enddate varchar(20))')
const utils = {}

utils.createCourse = (req, res) => {
  if ((req.body.name.trim().length > 0)) {
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
