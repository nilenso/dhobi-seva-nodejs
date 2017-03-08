import React, { Component } from 'react'
import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom';
import 'materialize-css/bin/materialize.css'
import 'main.css'
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
        <div className="col s12 m6 form-inputs">
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="COURSE NAME" ref={(input) => this.courseName = input} type="text" data-length="20" />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="START DATE - YYYY/MM/DD" type="text" className="datepicker" ref={(input) => this.startDate = input} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="END DATE - YYYY/MM/DD" id="end_date" type="text" className="datepicker" ref={(input) => this.endDate = input} />
            </div>
          </div>
        </div>
        <div className="col s3 form-button">
          <button className="waves-effect waves-light btn" onClick={() => this.handleClick()}>Submit</button>
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
