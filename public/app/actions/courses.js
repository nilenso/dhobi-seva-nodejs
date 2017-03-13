import axios from 'axios';
import {
	COURSES_AVAILABLE,
	COURSE_ADDED,
	ADMIN_STATUS
} from './types';
import { browserHistory } from 'react-router';
import url from '../constants';

export const getCourses = () => {
	return dispatch => {
		axios
		.get(`/api/v1/courses`)
		.then(res => {
			dispatch({
				type: COURSES_AVAILABLE,
				payload: {
					courses: res.data
				}
			});
			dispatch({
				type: ADMIN_STATUS,
				payload: {
					admin : res.session.admin
				}
			});
		})
		.catch(err => {
			alert('Request failed!!');
		})
	}
}

export const createCourse = (course) => {
	return dispatch => {
		axios
		 .post(`/api/v1/courses`, course)
		 .then(res => {
		 	dispatch({
		 		type: COURSE_ADDED,
		 		payload: {
		 			course: res.data
		 		}
		 	})
		 	browserHistory.push('/courses');
		 })
		 .catch(err => {
		 	alert('Request failed!!');
		 })
	}
}
