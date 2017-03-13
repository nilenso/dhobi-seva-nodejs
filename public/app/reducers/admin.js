import {
  ADMIN_STATUS,
  USERS_AVAILABLE
 } from '../actions/types'

const INITIAL_STATE = []

export const users = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case USERS_AVAILABLE:
      return [...action.payload.users]
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
