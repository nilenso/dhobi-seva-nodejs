import axios from 'axios'
import { browserHistory } from 'react-router'
import { STUDENTS_AVAILABLE } from './types'

export const getStudents = (id) => {
	return dispatch => {
		axios
		.get(`/api/v1/students/${id}`)
		.then(res => {
			dispatch({
				type: STUDENTS_AVAILABLE,
				payload: {
					students: res.data
				}
			})
			browserHistory.push(`/students/${id}`);
		})
		.catch(err => {
			console.log(err)
		})
	};
}
