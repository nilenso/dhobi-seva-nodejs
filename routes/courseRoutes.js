const db = require('../db');

const courseRoutes = router => {
  router
    .route('/courses')
    .get((req, res) => {
      db.getCourse(res);
    })
    .post((req, res) => {
      db.createCourse(req, res);
    });
};

module.exports = courseRoutes;
