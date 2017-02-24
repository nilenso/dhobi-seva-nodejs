var validate = {}

validate.courseDetails = function (courseName, startDate, endDate) {
  var currentDateArr = Date().split(' ')
  var year = currentDateArr[3] + '/' + (new Date().getMonth() + 1) + '/' + currentDateArr[2]
  if (courseName.trim().length > 0 && Date.parse(endDate) > Date.parse(startDate) && Date.parse(startDate) >= Date.parse(year)) return [courseName, startDate, endDate]
  return null
}
