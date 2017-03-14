function User (req) {
  this.user_name = req.body.name
  this.user_id = req.body.mobile_number
}

module.exports = {
  User
}
