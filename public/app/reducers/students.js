import {
  STUDENTS_AVAILABLE
} from '../actions/types';

const INITIAL_STATE = {
  courseId: '',
  students: []
}


const students = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case STUDENTS_AVAILABLE:
      return [...action.payload.students];
    default:
      return state;
  }
}

export default students;
