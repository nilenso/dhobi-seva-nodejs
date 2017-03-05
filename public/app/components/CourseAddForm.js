import React, { Component } from 'react'
import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import 'materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize.js'
import { createCourse } from '../actions/courses'


class CourseAddForm extends Component {
  handleClick() {
    const course = {
      course_name: this.courseName.value,
      start_date: this.startDate.value,
      end_date: this.endDate.value
    }
    this.props.createCourse(course)
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="COURSE NAME" ref={(input) => this.courseName = input} type="text" data-length="20" />
              <label htmlFor="course_name">Course Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="YYYY/MM/DD" type="text" className="datepicker" ref={(input) => this.startDate = input} />
                <label htmlFor="start_date">Start Date</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="YYYY/MM/DD" id="end_date" type="text" className="datepicker" ref={(input) => this.endDate = input} />
              <label htmlFor="end_date">End Date</label>
            </div>
          </div>
        </div>
        <div className="col s3">
          <button onClick={() => this.handleClick()}>Submit</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createCourse: (course) => {
      dispatch(createCourse(course))
    }
  }
}

export default connect(null, mapDispatchToProps)(CourseAddForm)
