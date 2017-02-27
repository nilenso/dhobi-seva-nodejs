const validate = {}

validate.courseDetails = (course) => {
  var currentDateArr = Date().split(' ')
  var year = currentDateArr[3] + '/' + (new Date().getMonth() + 1) + '/' + currentDateArr[2]
  if (course.coursename.trim().length > 0 && Date.parse(course.enddate) > Date.parse(course.startdate) && Date.parse(course.startdate) >= Date.parse(year)) return course
  return null
}

module.exports = validate
