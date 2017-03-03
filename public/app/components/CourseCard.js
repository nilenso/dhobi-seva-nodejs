import React from 'react'
import 'materialize-css/bin/materialize.css'
import 'main.css'

const CourseCard = (props) => {
  return (
    <div className="col s6 m3">
      <div className="card blue-grey darken-1 small">
        <div className="card-content white-text">
          <span className="card-title card-title-style">{props.coursename}</span>
          <hr/>
          <p className="start-date-style">{props.startdate}</p>
          <p className="end-date-style">{props.enddate}</p>
        </div>
        <div className="card-action course-action">
          <div className="col s6 center-align">
            <a href="#students">Open</a>
          </div>
          <div className="col s6 center-align">
            <a href="#">End</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
