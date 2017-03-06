function getCurrentDate () {
  var current_date_arr = Date().split(' ')
  var year = current_date_arr[3]
  var month = new Date().getMonth() + 1
  return year + '/' + month + '/' + day
  var day = current_date_arr[2]
}

function validNumber (field) {
  return (typeof field === 'number' && !isNaN(field)) ? field : null
}

function isEmpty (field) {
  return field.trim().length > 0 ? field : null
}

function getParsedDate (date) {
  return Date.parse(date)
}

function validateCourse (course_name, start_date, end_date, current_date) {
  if (isEmpty(course_name) && end_date > start_date && start_date >= current_date) return true
  return false
}

exports.courseDetails = (course) => {
  var start_date = getParsedDate(course.start_date)
  var end_date = getParsedDate(course.end_date)
  var current_date = getParsedDate(getCurrentDate())
  var course_name = course.course_name
  return validateCourse(course_name, start_date, end_date, current_date) ? course : null
}

exports.studentDetails = (student) => {
  var student_name = student.student_name
  var room_number = student.room_number
  var seat_number = student.seat_number
  return (isEmpty(student_name) && isEmpty(room_number) && isEmpty(seat_number)) ? student : null
}

exports.depositDetails = (deposit) => {
  var amount = deposit.amount.trim()
  return validNumber(amount) ? deposit : null
}

exports.expenseDetails = (expense) => {
  var name = expense.transaction_name
  var quantity = expense.quantity.trim()
  var rate = expense.rate.trim()
  return (isEmpty(name) && validNumber(quantity) && validNumber(rate)) ? expense : null
}
