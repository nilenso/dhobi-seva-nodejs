function course (req) {
  this.coursename = req.body.coursename
  this.startdate = req.body.startdate
  this.enddate = req.body.enddate
}

module.exports = {
  course
}