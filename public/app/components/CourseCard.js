import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import 'materialize-css/bin/materialize.css'
import 'main.css'
import { getStudents, printStudents } from '../actions/students'


class CourseCard extends Component {
  handleClick() {
    this.props.getStudents(this.props.courseid);
  }

  handleEndClick() {
    this.props.printStudents(this.props.courseid, this.props.coursename);
  }

  render() {
    return (
      <div className="col s6 m4 l3">
        <div className="card blue-grey darken-1 small hoverable">
          <div className="card-content white-text course-card">
            <span className="card-title card-title-style">{this.props.coursename}</span>
            <hr/>
            <p className="start-date-style">{this.props.startdate}</p>
            <p className="end-date-style">{this.props.enddate}</p>
          </div>
          <div className="card-action course-action course-buttons">
            <div className="col s6 center-align">
              <a onClick={() => this.handleClick()}>Open</a>
            </div>
            <div className="col s6 center-align">
              <a onClick={() => this.handleEndClick()}>End</a>
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
    },
    printStudents: (id, name) => {
      dispatch(printStudents(id, name))
    }
  }
}

export default connect(null, mapDispatchToProps)(CourseCard)
