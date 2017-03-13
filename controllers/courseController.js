const db = require('../db')
const models = require('../models/course')
const CourseDetails = models.Course

exports.createCourse = (req, res) => {
  let courseDetailsObj = new CourseDetails(req)
  courseDetailsObj.user_id = req.session.user
  db.createCourse(courseDetailsObj, function (validCourse) {
    if (validCourse) res.send(validCourse)
    else res.status(500).send('ERROR')
  })
}

exports.getCourse = (req, res) => {
  db.getCourse(req.session.user, function (listOfCourses) {
    if (listOfCourses.length > 0) res.send(listOfCourses)
    else res.status(500).send('ERROR')
  })
}
