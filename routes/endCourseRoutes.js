const endCourse = require('../controllers/endCourseController')

const endCourseRoutes = router => {
  router
    .route('/endcourse/:courseId')
    .get(endCourse.endCourse)
}

module.exports = endCourseRoutes
