import axios from 'axios'
import { browserHistory } from 'react-router'
import {
  TRANSACTIONS_AVAILABLE,
  DEPOSIT_ADDED,
  LAUNDRY_ADDED,
  PURCHASE_ADDED
} from './types'

export const getTransactions = (studentId) => {
	return dispatch => {
		axios
		.get(`/api/v1/transactions/${studentId}`)
		.then(res => {
			const data = res.data;
			dispatch({
				type: TRANSACTIONS_AVAILABLE,
				payload: {
					transactions: {
            student_id: data.student_id,
            deposit: data.deposit,
            laundry: data.laundry,
            purchase: data.purchase
          }
				}
			})
		})
		.catch(err => {
			alert('Request failed!!');
		})
	}
}

export const addTransaction = (transaction) => {
	return (dispatch, getState) => {
		axios
		.post(`/api/v1/transactions/${transaction.student_id}`, transaction)
		.then(res => {
      switch(transaction.transaction_name) {
        case 'deposit':
    			dispatch({
    				type: DEPOSIT_ADDED,
    				payload: {
              deposit: res.data
    				}
    			})
          break;
        case 'laundry':
    			dispatch({
    				type: LAUNDRY_ADDED,
    				payload: {
              laundry: res.data
    				}
    			})
          break;
        default:
    			dispatch({
    				type: PURCHASE_ADDED,
    				payload: {
              purchase: res.data
    				}
    			})
          break;
      }
		})
		.catch(err => {
			alert('Request failed!!');
		})
	}
}
