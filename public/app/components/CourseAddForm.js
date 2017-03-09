import React, { Component } from 'react'
import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom';
import DatePicker from 'material-ui/DatePicker'
import dateFormat from 'dateformat'
import TextField from 'material-ui/TextField'
import 'materialize-css/bin/materialize.css'
import 'main.css'
import 'materialize-css/bin/materialize.js'
import { createCourse } from '../actions/courses'
import { courseDetails } from '../../../db/validate'


class CourseAddForm extends Component {
  handleClick() {
    const course = {
      course_name: this.courseName.value,
      start_date: this.startDate.refs.input.props.value,
      end_date: this.endDate.refs.input.props.value
    }
    courseDetails(course) === null ? alert("Invalid Input") : this.props.createCourse(course)
  }

  formatDate(date) {
    return dateFormat(date, "mediumDate")
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m6 form-inputs">
          <div className="row">
            <div className="col s12">
              <input className="course-name" placeholder="COURSE NAME" ref={(input) => this.courseName = input} type="text" data-length="20" />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <DatePicker fullWidth={true} hintText="START DATE" ref={(input) => this.startDate = input} formatDate={this.formatDate} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <DatePicker fullWidth={true} hintText="END DATE" ref={(input) => this.endDate = input} formatDate={this.formatDate} />
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
