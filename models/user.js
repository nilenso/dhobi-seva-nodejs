function User (req) {
  this.user_name = req.body.user_name
  this.user_id = req.body.user_id
}

module.exports = {
  User
}
