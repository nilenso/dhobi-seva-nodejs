import {
  STUDENTS_AVAILABLE,
  STUDENT_ADDED
} from '../actions/types';

const INITIAL_STATE = {
  course_id: '',
  students: []
}


const students = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case STUDENTS_AVAILABLE:
      return {
        ...action.payload
      };
    case STUDENT_ADDED:
      return {
        course_id: state.course_id,
        students: [...state.students, action.payload.student]
      }
    default:
      return state;
  }
}

export default students;
