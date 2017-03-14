import React from 'react'
import courses from './courses';
import students from './students';
import transactions from './transactions'
import printPage from './print';
import { admin, users } from './admin'


const reducer = (state = {}, action) => {
  return {
    isAdmin: admin(state.isAdmin, action),
    courses: courses(state.courses, action),
    students: students(state.students, action),
    transactions: transactions(state.transactions, action),
    final: printPage(state.final, action),
    users: users(state.users, action)
  }
};


export default reducer;
