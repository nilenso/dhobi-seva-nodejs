const transaction = require('../controllers/transactionController')

const transactionRoutes = router => {
  router
    .route('/transactions/:student_id')
    .get(transaction.getTransaction)
    .post(transaction.addTransaction)
}

module.exports = transactionRoutes
