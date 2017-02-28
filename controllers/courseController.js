const db = require('../db')
const models = require('../models/course')
const Course = models.course

const course = {}

course.createCourse = (req, res) => {
  let course = new Course(req)
  db.createCourse(course, function cb (course) {
    if (course) res.send(course)
    else res.status(500).send('ERROR')
  })
}

course.getCourse = (req, res) => {
  db.getCourse(function cb (courses) {
    if (courses.length > 0) res.send(courses)
    else res.status(500).send('ERROR')
  })
}

module.exports = course
