function Transaction (req) {
  this.student_id = req.body.student_id
  this.transaction_name = req.body.transaction_name
  this.transaction_date = req.body.transaction_date
  this.amount = req.body.amount
  this.quantity = req.body.quantity
  this.rate = req.body.rate
}

module.exports = {
  Transaction
}
