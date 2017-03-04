import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'materialize-css/bin/materialize.css'
import 'main.css'
import { getStudents } from '../actions/students'


class CourseCard extends Component {
  handleClick() {
    this.props.getStudents(this.props.courseid);
  }

  render() {
    return (
      <div className="col s6 m3">
        <div className="card blue-grey darken-1 small">
          <div className="card-content white-text">
            <span className="card-title card-title-style">{this.props.coursename}</span>
            <hr/>
            <p className="start-date-style">{this.props.startdate}</p>
            <p className="end-date-style">{this.props.enddate}</p>
          </div>
          <div className="card-action course-action">
            <div className="col s6 center-align">
              <a onClick={() => this.handleClick()}>Open</a>
            </div>
            <div className="col s6 center-align">
              <a href="#">End</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStudents: (id) => {
      dispatch(getStudents(id))
    }
  }
}

export default connect(null, mapDispatchToProps)(CourseCard)
