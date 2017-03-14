const user = require('../controllers/adminController')

const adminRoutes = router => {
  router
    .route('/adduser')
    .get(user.getUser)
    .post(user.addUser)
}

module.exports = adminRoutes
