const db = require('../db')
const models = require('../models/course')
const CourseDetails = models.Course

const course = {}

course.createCourse = (req, res) => {
  let courseDetailsObj = new CourseDetails(req)
  db.createCourse(courseDetailsObj, function (validCourse) {
    if (validCourse) res.send(validCourse)
    else res.status(500).send('ERROR')
  })
}

course.getCourse = (req, res) => {
  db.getCourse(function (listOfCourses) {
    if (listOfCourses.length > 0) res.send(listOfCourses)
    else res.status(500).send('ERROR')
  })
}

module.exports = course
