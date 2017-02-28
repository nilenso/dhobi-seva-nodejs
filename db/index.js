const pg = require('pg')
let confFile = './db_settings.json'
const setting = require(confFile)
const validate = require('./validate')

const dbconfig = setting.dbconfig
let conString = 'pg://' + dbconfig.username + ':' + dbconfig.password + '@' + dbconfig.dbhost + ':' + dbconfig.dbport + '/' + dbconfig.dbname

let client

client = new pg.Client(conString)
client.connect(function (err) {
  if (err) {
    if (err.code === '3D000') {
      console.log('Database does not exist, creating custom db')
      const db = require('./db_initialise')
      db.initialize(function (err) {
        console.log(err)
      })
    } else if (err) {
      console.log(err)
    }
  }
})

const utils = {}

utils.createCourse = (course, cb) => {
  client = new pg.Client(conString)
  client.connect(function (err) {
    if (err) {
      console.log(err)
      cb(null)
    } else {
      if (validate.courseDetails(course)) {
      let query = client.query("INSERT INTO courses (coursename, startdate, enddate) VALUES ('"+course.coursename+"', '"+course.startdate+"', '"+course.enddate+"')", function (err) {
        if (err) console.log(err)
        else {
          client.end(function (err) {
            if (err) {
              console.log(err)
            }
          })
          cb(course)
        }
      })
      } else {
        console.log('Error')
        cb(null)
      }
    }
  })
}

utils.getCourse = (cb) => {
  client = new pg.Client(conString)
  client.connect(function (err) {
    if (err) {
      console.log(err)
      cb(null)
    } else {
      let query = client.query('SELECT * FROM courses', function (err) {
        if (err) console.log(err)
        else {
          query.on('row', function (row, result) {
            result.addRow(row)
          })
          query.on('end', function (result) {
            cb(result.rows)
          })
          client.end(function (err) {
            if (err) console.log(err)
          })
        }
      })
    }
  })
}
module.exports = utils
