import {
  COURSES_AVAILABLE
} from '../actions/types';

const INITIAL_STATE = [];

const courses = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case COURSES_AVAILABLE:
     return [...action.payload.courses]
    default:
      return state;
  }
};

export default courses;
