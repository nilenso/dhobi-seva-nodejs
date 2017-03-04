import {
  COURSES_AVAILABLE,
  COURSE_ADDED
} from '../actions/types';

const INITIAL_STATE = [];

const courses = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case COURSES_AVAILABLE:
     return [...action.payload.courses]
    case COURSE_ADDED:
    console.log(action.payload.course)
     return [...state, action.payload.course]
    default:
      return state;
  }
};

export default courses;
