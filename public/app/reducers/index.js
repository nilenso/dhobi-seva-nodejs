import React from 'react'
import courses from './courses';
import students from './students';
import transactions from './transactions'
import printPage from './print'

const reducer = (state = {}, action) => {
  return {
    courses: courses(state.courses, action),
    students: students(state.students, action),
    transactions: transactions(state.transactions, action),
    final: printPage(state.final, action)
  }
};


export default reducer;
