const db = require('../db')
const models = require('../models/transactions')
const TransactionDetails = models.Transaction

const transaction = {}

transaction.addTransaction = (req, res) => {
  if (req.body.transaction_name !== 'deposit') req.body.amount = req.body.quantity * req.body.rate
  let transactionDetailsObj = new TransactionDetails(req)
  db.addTransaction(transactionDetailsObj, function (validTransactoin) {
    if (validTransactoin) res.send(validTransactoin)
    else res.status(500).send('ERROR')
  })
}

transaction.getTransaction = (req, res) => {
  db.getTransaction(req.body.student_id, function (listOfTransactions) {
    if (listOfTransactions.length > 0) res.send(listOfTransactions)
    else res.status(500).send('ERROR')
  })
}

module.exports = transaction
