const db = require('../db')
const models = require('../models/course')
const Course = models.course

const course = {}

course.createCourse = (req, res) => {
  let course = new Course(req)
  db.createCourse(course)
  res.send(req.body)
}

course.getCourse = (req, res) => {
  db.getCourse(res)
}

module.exports = course
