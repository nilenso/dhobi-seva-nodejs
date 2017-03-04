const transaction = require('../controllers/transactionController')

const transactionRoutes = router => {
  router
    .route('/transactions')
    .get(transaction.getTransaction)
    .post(transaction.addTransaction)
}

module.exports = transactionRoutes
