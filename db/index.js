const pg = require('pg')
const validate = require('./validate')
const db = require('./db_initialise')
let confFile = '../config/db_settings.json'
const setting = require(confFile)
const dbconfig = setting.dbconfig
const utils = require('../db_utils.js')

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
      db.initialize(function (err) {
        console.log(err)
      })
    } else if (err) {
      console.log(err)
    }
  }
  done()
})

exports.createCourse = (course, cb) => {
  if (validate.courseDetails(course)) {
    db.init(function (ob) {
      ob.Courses.create(course).then(function (m) {
        course.course_id = m.dataValues.id
        cb(course)
      })
    })
  } else {
    console.log('Invalid input format')
    cb(null)
  }
}

exports.getCourse = (user, cb) => {
  db.init(function (ob) {
    ob.Courses.findAll({where: {user_id: user}}).then(function (course) {
      var courses = course.map(function (course) {
        return course.dataValues
      })
      cb(courses)
    })
  })
}

exports.addStudent = (student, cb) => {
  if (validate.studentDetails(student)) {
    db.init(function (ob) {
      ob.Students.create(student).then(function (m) {
        student.student_id = m.dataValues.id
        cb(student)
      })
    })
  } else {
    console.log('Invalid input format')
    cb(null)
  }
}

exports.getStudent = (course_id, cb) => {
  db.init(function (ob) {
    ob.Students.findAll({where: {course_id: course_id}}).then(function (student) {
      var students = student.map(function (student) {
        return student.dataValues
      })
      cb(students)
    })
  })
}

exports.addTransaction = (transaction, cb) => {
  if (validate.depositDetails(transaction) || validate.expenseDetails(transaction)) {
    db.init(function (ob) {
      ob.Transactions.create(transaction).then(function (m) {
        transaction.transaction_id = m.dataValues.id
        transaction.createdAt = m.dataValues.createdAt
        cb(m.dataValues)
      })
    })
  } else {
    console.log('Invalid input format')
    cb(null)
  }
}

exports.getTransaction = (student_id, cb) => {
  db.init(function (ob) {
    ob.Transactions.findAll({where: {student_id: student_id}}).then(function (transaction) {
      let transactionDetails = utils.transactionData(transaction)
      cb(utils.txnObj(student_id, transactionDetails))
    })
  })
}

exports.endCourse = (course_id, cb) => {
  var arr = []
  db.init(function (ob) {
    let studentsProcessed = 0;
    ob.Students.findAll({where: {course_id: course_id}}).then(function (students) {
      students.forEach(function (student) {
        ob.Transactions.findAll({where: {student_id: student.id}}).then(function (transaction) {
          ++studentsProcessed
          let transactionDetails = utils.transactionData(transaction)
          arr = arr.concat(utils.studentObj(student, transactionDetails))
          if (studentsProcessed === students.length) {
            cb(arr)
          }
        })
      })
    })
  })
}

exports.addUser = (user, cb) => {
  if (validate.userDetails(user)) {
    db.init(function (ob) {
      ob.Users.create(user).then(function (m) {
        cb(user)
      })
    })
  } else {
    console.log('Invalid input format')
    cb(null)
  }
}

exports.getUser = (cb) => {
  db.init(function (ob) {
    ob.Users.findAll().then(function (user) {
      var users = user.map(function (user) {
        return user.dataValues
      })
      cb(users)
    })
  })
}
