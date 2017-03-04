import axios from 'axios';
import {
	COURSES_AVAILABLE
} from './types';
import url from '../constants';

export const getCourses = () => {
	return dispatch => {
		axios
		.get(`api/v1/courses`)
		.then(res => {
			dispatch({
				type: COURSES_AVAILABLE,
				payload: {
					courses: res.data
				}
			});
		})
		.catch(err => {
			console.log(err);
		})
	}
}
