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
