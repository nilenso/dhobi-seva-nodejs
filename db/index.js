const pg = require('pg')
const validate = require('./validate')
const db = require('./db_initialise')
let confFile = './db_settings.json'
const setting = require(confFile)
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

exports.getCourse = (cb) => {
  db.init(function (ob) {
    ob.Courses.findAll().then(function (course) {
      var courses = course.map(function (course) {
        return course.dataValues
      })
      cb(courses)
    })
  })
}

exports.addStudent = (student, cb) => {
  //if (validate.studentDetails(student)) {
    db.init(function (ob) {
      ob.Students.create(student).then(function (m) {
        student.student_id = m.dataValues.id
        cb(student)
      })
    })
  //} else {
    console.log('Invalid input format')
  //  cb(null)
  //}
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
  //if (validate.transactionDetails(transaction)) {
    db.init(function (ob) {
      ob.Transactions.create(transaction).then(function (m) {
        transaction.transaction_id = m.dataValues.id
        transaction.createdAt = m.dataValues.createdAt
        cb(m.dataValues)
      })
    })
  //} else {
    console.log('Invalid input format')
    //cb(null)
//  }
}

exports.getTransaction = (student_id, cb) => {
  let transactionObj = {
    student_id: student_id,
    deposit: [],
    laundry: [],
    purchase: []
  }
  function seperateTransactions (transactionDetails, transaction_name) {
    let transaction = transactionDetails.filter(function (transaction) {
      return transaction.transaction_name === transaction_name
    })
    return transaction
  }
  db.init(function (ob) {
    ob.Transactions.findAll({where: {student_id: student_id}}).then(function (transaction) {
      let transactionDetails = transaction.map(function (transaction) {
        return transaction.dataValues
      })
      let deposit = seperateTransactions(transactionDetails, 'deposit')
      let laundry = seperateTransactions(transactionDetails, 'laundry')
      let purchase = transactionDetails.filter(function (transaction) {
        return (transaction.transaction_name !== 'deposit' && transaction.transaction_name !== 'laundry')
      })
      transactionObj.student_id = student_id
      transactionObj.deposit.push(deposit)
      transactionObj.purchase.push(purchase)
      transactionObj.laundry.push(laundry)
      cb(transactionObj)
    })
  })
}
