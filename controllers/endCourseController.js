const db = require('../db')

exports.endCourse = (req, res) => {
  let courseId = req.params.courseId
  db.endCourse(courseId,
    function (listOfStudents) {
      if (listOfStudents.length > 0) res.send(listOfStudents)
      else res.status(500).send('ERROR')
    })
}
