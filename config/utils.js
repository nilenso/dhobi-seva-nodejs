const pg = require('pg')

const utils = {}

let conString = 'pg://postgres:qwerty@localhost:5432/test'
let client = new pg.Client(conString)
client.connect()

utils.createCourse = (courseName, startDate, endDate) => {
client.query('CREATE TABLE IF NOT EXISTS courses(courseId serial PRIMARY KEY,coursename varchar(35), startdate varchar(12), enddate varchar(12))')
  if ((courseName !== null) && (startDate !== null) && (endDate !== null)) {
     let query = client.query("INSERT INTO courses (coursename, startdate, enddate) VALUES ('"+courseName+"', '"+startDate+"', '"+endDate+"')")
  } else {
    console.log('Error')
  }
}

utils.getCourse = (res) => {
  console.log('inside');
  let query = client.query('SELECT * FROM courses')
  query.on('row', function (row, result) {
    result.addRow(row)
  })
  query.on('end', function (result) {
    console.log(result.rows)
    res.send(result.rows)
  })
}

module.exports = utils
