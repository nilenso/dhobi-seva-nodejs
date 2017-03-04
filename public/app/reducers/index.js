import React from 'react'
import courses from './courses';
import students from './students';


const reducer = (state = {}, action) => {
  return {
    courses: courses(state.courses, action),
    students: students(state.students, action)
  }
};


export default reducer;
