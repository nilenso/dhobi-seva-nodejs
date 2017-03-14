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
  var responseData = {}
  responseData.admin = req.session.admin
  responseData.listOfCourses = []
  db.getCourse(req.session.user, function (courses) {
    if (courses.length >= 0) {
      responseData.listOfCourses = courses
      res.send(responseData)
    } else res.status(500).send('ERROR')
  })
}
