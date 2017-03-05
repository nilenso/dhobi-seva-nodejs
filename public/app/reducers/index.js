import React from 'react'
import courses from './courses';
import students from './students';
import transactions from './transactions'


const reducer = (state = {}, action) => {
  return {
    courses: courses(state.courses, action),
    students: students(state.students, action),
    transactions: transactions(state.transactions, action)
  }
};


export default reducer;
