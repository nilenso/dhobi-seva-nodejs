(function(window){
  window.dsn = window.dsn || {};
  var validate = {}
  validate.courseDetails = function (courseName, startDate, endDate) {
    var start_m = Date.parse(startDate)
    var end_m = Date.parse(endDate)
    var name_m = courseName.trim()
    var currentDateArr = Date().split(' ')
    var newCurrentDate = currentDateArr[3] + '/' + (new Date().getMonth() + 1) + '/' + currentDateArr[2]
    var newCurrentDate_m = Date.parse(newCurrentDate)
    if (name_m.length > 0 && end_m > start_m && start_m >= newCurrentDate_m) return [courseName, startDate, endDate]
    return null
  }
  window.dsn.validate = validate;
})(window);
