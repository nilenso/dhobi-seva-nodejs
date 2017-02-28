const pg = require('pg')
let confFile = './db_settings.json'
const setting = require(confFile)
const validate = require('./validate')

const dbconfig = setting.dbconfig

let conString = {
  user: dbconfig.username,
  database: dbconfig.dbname,
  password: dbconfig.password,
  host: dbconfig.dbhost,
  port: dbconfig.dbport,
  max: 10,
  idleTimeoutMillis: 30000
}

let pool = new pg.Pool(conString)

pool.connect(function (err, client, done) {
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
  done()
})

const utils = {}

utils.createCourse = (course, cb) => {
  pool.connect(function (err, client, done) {
    if (err) {
      console.log(err)
      cb(null)
    }
    if (validate.courseDetails(course)) {
        client.query("INSERT INTO courses (coursename, startdate, enddate) VALUES ('"+course.coursename+"', '"+course.startdate+"', '"+course.enddate+"')", function (err) {
          done()
          if (err) console.log(err)
          cb(course)
        })
    } else {
      console.log('Error')
      cb(null)
    }
  })
}

utils.getCourse = (cb) => {
  pool.connect(function (err, client, done) {
    if (err) {
      console.log(err)
      cb(null)
    }
    client.query('SELECT * FROM courses', function (err, result) {
      done()
      if (err) {
        console.log(err)
        cb(null)
      }
      cb(result.rows)
    })
  })
}

pool.on('error', function (err, client) {
  console.log(err)
})

module.exports = utils
