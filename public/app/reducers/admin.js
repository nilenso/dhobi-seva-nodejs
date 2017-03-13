import { ADMIN_STATUS } from '../actions/types'


export const admin = (state = '', action) => {
  switch(action.type) {
    case ADMIN_STATUS:
      return action.payload.admin
    default:
      return state;
  }
}
