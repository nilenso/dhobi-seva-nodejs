import React, { Component } from 'react'
import { connect } from 'react-redux';
import 'materialize-css/bin/materialize.css'
import CourseCard from './CourseCard'
import { getCourses } from '../actions/courses';


class CourseBoard extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.getCourses()
	}

	render() {
		return (
			<main>
				<div className="row">
					{this.props.courses ? this.renderCourseCards(): []}
				</div>
			</main>
		);
	}

	renderCourseCards() {
	  return this.props.courses.map((course, index) => {
	    return (
	      <CourseCard key={index} courseid={course.id} coursename={course.course_name} startdate={course.start_date} enddate={course.end_date}/>
	    );
	  })
	}
}

const mapStateToProps = (state) => {
	return {
		courses: state.courses
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getCourses: () => {
			dispatch(getCourses())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseBoard);
