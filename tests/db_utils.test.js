const utils = require('../db_utils.js')

let student_id = 33
let student = {
  id: 33,
  student_name: 'Garima',
  room_number: '2A',
  seat_number: '45'
}
let transactionDetails = [
  {
    student_id: 33,
    transaction_name: 'deposit',
    amount: 200,
    quantity: 0,
    rate: 0
  },
  {
    student_id: 33,
    transaction_name: 'laundry',
    amount: 100,
    quantity: 10,
    rate: 10
  },
  {
    student_id: 33,
    transaction_name: 'Soap',
    amount: 60,
    quantity: 2,
    rate: 30
  },
  {
    student_id: 33,
    transaction_name: 'deposit',
    amount: 50,
    quantity: 0,
    rate: 0
  },
  {
    student_id: 33,
    transaction_name: 'laundry',
    amount: 50,
    quantity: 5,
    rate: 10
  }
]

test('separates transactions', () => {
  expect(utils.txnObj(student_id, transactionDetails)).toEqual({
    student_id: 33,
    deposit: [
      {
        student_id: 33,
        transaction_name: 'deposit',
        amount: 200,
        quantity: 0,
        rate: 0
      },
     {
       student_id: 33,
       transaction_name: 'deposit',
       amount: 50,
       quantity: 0,
       rate: 0
     }
    ],
    laundry: [
      {
        student_id: 33,
        transaction_name: 'laundry',
        amount: 100,
        quantity: 10,
        rate: 10
      },
      {
        student_id: 33,
        transaction_name: 'laundry',
        amount: 50,
        quantity: 5,
        rate: 10
      }
    ],
    purchase: [
      {
        student_id: 33,
        transaction_name: 'Soap',
        amount: 60,
        quantity: 2,
        rate: 30
      }
    ]
  });
})

test('adds up transactions', () => {
  expect(utils.studentObj(student, transactionDetails)).toEqual({
    student_id: 33,
    student_name: 'Garima',
    room_number: '2A',
    deposit: 250,
    laundry: 150,
    purchase: 60
  });
})
