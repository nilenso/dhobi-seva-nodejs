const pg = require('pg')

const utils = {}

let conString = 'pg://postgres:qwerty@localhost:5432/test'
let client = new pg.Client(conString)
client.connect()

utils.createCourse = (courseName, startDate, endDate) => {
client.query('CREATE TABLE IF NOT EXISTS courses(courseId serial PRIMARY KEY,coursename varchar(35), startdate varchar(12), enddate varchar(12))')
let query = client.query("insert into courses (coursename, startdate, enddate) values ('"+courseName+"', '"+startDate+"', '"+endDate+"')")
}

utils.getCourse = () => {
  let query = client.query("select * from courses")
  query.on("row", function (row, result) {
            console.log(row) 
        })
}

module.exports = utils
