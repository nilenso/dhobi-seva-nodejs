import axios from 'axios'
import { browserHistory } from 'react-router'
import {
	STUDENTS_AVAILABLE,
	STUDENT_ADDED,
	DEPOSIT_ADDED,
	COURSE_END
} from './types'

export const getStudents = (id) => {
	return dispatch => {
		axios
		.get(`/api/v1/students/${id}`)
		.then(res => {
			dispatch({
				type: STUDENTS_AVAILABLE,
				payload: {
					course_id: id,
					students: res.data
				}
			})
			browserHistory.push(`/students/${id}`);
		})
		.catch(err => {
			alert('Request failed!!');
		})
	};
}

export const addstudent = (student, course_id) => {
	return dispatch => {
		axios
		.post(`/api/v1/students/${course_id}`, {...student, course_id})
		.then(res => {
			const data = res.data;
			dispatch({
				type: STUDENT_ADDED,
				payload: {
					student: {
						id: data.student_id,
						student_name: data.student_name,
						seat_number: data.seat_number,
						room_number: data.room_number
					}
				}
			})
			browserHistory.push(`/students/${course_id}`)
		})
		.catch(err => {
			alert('Request failed!!');
		})
	}
}

export const printStudents = (id, name) => {
	return dispatch => {
		axios
		.get(`/api/v1/endcourse/${id}`)
		.then(res => {
			dispatch({
				type: COURSE_END,
				payload: {
					course_name: name,
					students: res.data
				}
			})
			browserHistory.push(`/endcourse/${id}`);
		})
		.catch(err => {
			console.log(err)
		})
	};
}
