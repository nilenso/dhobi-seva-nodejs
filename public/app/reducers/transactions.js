import {
  TRANSACTIONS_AVAILABLE,
  DEPOSIT_ADDED,
  LAUNDRY_ADDED,
  PURCHASE_ADDED
} from '../actions/types';

const INITIAL_STATE = {
  student_id: '',
  deposit: [],
  laundry: [],
  purchase: []
};

const transactions = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TRANSACTIONS_AVAILABLE:
     return { ...action.payload.transactions }
    case DEPOSIT_ADDED:
     return {
        ...state,
        deposit: [...state.deposit, action.payload.deposit]
      }
    case LAUNDRY_ADDED:
     return {
        ...state,
        laundry: [...state.laundry, action.payload.laundry]
      }
    case PURCHASE_ADDED:
     return {
        ...state,
        purchase: [...state.purchase, action.payload.purchase]
      }
    default:
      return state;
  }
};

export default transactions;
