const seperateTransactions = (transactionDetails, transaction_name) => {
  let transaction = transactionDetails.filter(function (transaction) {
    return transaction.transaction_name === transaction_name
  })
  return transaction
}

const separatePurchase = (transactionDetails) => {
  return transactionDetails.filter(function (transaction) {
    return (transaction.transaction_name !== 'deposit' && transaction.transaction_name !== 'laundry')
  })
}

const transactionSum = (transactionDetails, type) => {
  return seperateTransactions(transactionDetails, type).reduce(function (acc, val) {
    return acc + val.amount
  }, 0);
}

const purchaseSum = (transactionDetails, type) => {
  return separatePurchase(transactionDetails).reduce(function (acc, val) {
    return acc + val.amount
  }, 0);
}

exports.transactionData = (transaction) => {
  return transaction.map(function (transaction) {
    return transaction.dataValues
  })
}

exports.txnObj = (student_id, transactionDetails) => {
  let transactionObj = {}
  transactionObj.student_id = student_id
  transactionObj.deposit = seperateTransactions(transactionDetails, 'deposit')
  transactionObj.laundry = seperateTransactions(transactionDetails, 'laundry')
  transactionObj.purchase = separatePurchase(transactionDetails)
  return transactionObj
}

exports.studentObj = (student, transactionDetails) => {
  let studentFinal = {}
  studentFinal.student_id = student.id
  studentFinal.student_name = student.student_name
  studentFinal.room_number = student.room_number
  studentFinal.deposit = transactionSum(transactionDetails, 'deposit')
  studentFinal.laundry = transactionSum(transactionDetails, 'laundry')
  studentFinal.purchase = purchaseSum(transactionDetails, 'purchase')
  return studentFinal
}
