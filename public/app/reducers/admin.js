import {
  ADMIN_STATUS,
  USERS_AVAILABLE,
  USER_ADDED
 } from '../actions/types'

const INITIAL_STATE = []

export const users = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case USERS_AVAILABLE:
      return [...action.payload.users]
    case USER_ADDED:
      return [...state.users, action.payload.user]
    default:
      return state;
  }
}

export const admin = (state = '', action) => {
  switch(action.type) {
    case ADMIN_STATUS:
      return action.payload.admin
    default:
      return state;
  }
}
