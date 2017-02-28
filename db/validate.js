const validate = {}

validate.courseDetails = (course) => {
  var start_m = Date.parse(course.startdate)
  var end_m = Date.parse(course.enddate)
  var name_m = course.coursename.trim()
  var currentDateArr = Date().split(' ')
  var newCurrentDate = currentDateArr[3] + '/' + (new Date().getMonth() + 1) + '/' + currentDateArr[2]
  var newCurrentDate_m = Date.parse(newCurrentDate)
  if (name_m.length > 0 && end_m > start_m && start_m >= newCurrentDate_m) return course
  return null
}

module.exports = validate
