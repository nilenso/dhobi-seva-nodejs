import {
  COURSE_END
} from '../actions/types';

const INITIAL_STATE = {
  course_name: '',
  students: []
}


const printPage = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case COURSE_END:
      return {
        course_name: action.payload.course_name,
        students: action.payload.students
      }
    default:
      return state;
  }
}

export default printPage;
