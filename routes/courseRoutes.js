const course = require('../controllers/courseController')

const courseRoutes = router => {
  router
    .route('/courses')
    .get(course.getCourse)
    .post(course.createCourse)
}

module.exports = courseRoutes
