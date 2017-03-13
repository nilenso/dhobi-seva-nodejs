import axios from 'axios'
import { browserHistory } from 'react-router'
import { USERS_AVAILABLE } from './types'


export const getUsers = (mobile_number) => {
  return dispatch => {
    axios
    .get(`/api/v1/adduser`)
    .then(res => {
       dispatch({
         type: USERS_AVAILABLE,
         payload: {
           users: res.data
         }
       })
       browserHistory.push('/adduser');
     })
    .catch(err => {
      alert('Request failed!!')
    })
  }
}
