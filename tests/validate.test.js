const validate = require('../db/validate')

test('valid student input', () => {
  let student = {
    student_name: 'Pooja',
    room_number: '23',
    seat_number: '2'
  }
  expect(validate.studentDetails(student)).toEqual({
    student_name: 'Pooja',
    room_number: '23',
    seat_number: '2'
  })
})

test('valid deposit input', () => {
  let deposit = {
    amount: 500
  }
  expect(validate.depositDetails(deposit)).toEqual({
    amount: 500
  })
})

test('valid expense input', () => {
  let expense = {
    transaction_name: 'laundry',
    quantity: 2,
    rate: 20
  }
  expect(validate.expenseDetails(expense)).toEqual({
    transaction_name: 'laundry',
    quantity: 2,
    rate: 20
  })
})

test('valid user input', () => {
  let user = {
    user_name: 'Priya',
    user_id: 8241643434
  }
  expect(validate.userDetails(user)).toEqual({
    user_name: 'Priya',
    user_id: 8241643434
  })
})
