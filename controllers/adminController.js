const db = require('../db')
const models = require('../models/user')
const UserDetails = models.User

exports.addUser = (req, res) => {
  let userDetailsObj = new UserDetails(req)
  db.addUser(userDetailsObj, function (validUser) {
    if (validUser) res.send(validUser)
    else res.status(500).send('ERROR')
  })
}

exports.getUser = (req, res) => {
  db.getUser(function (listOfUsers) {
    if (listOfUsers.length > 0) res.send(listOfUsers)
    else res.status(500).send('ERROR')
  })
}
