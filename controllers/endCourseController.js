const db = require('../db')

exports.endCourse = (req, res) => {
  let course_id = req.params.course_id
  db.endCourse(course_id,
    function (listOfStudents) {
      if (listOfStudents.length > 0) res.send(listOfStudents)
      else res.status(500).send('ERROR')
    })
}
