import React, { Component } from 'react'
import { connect } from 'react-redux'

const CourseEnd = (props) => {
  return (
    <div className="row">
      {
        props.final.students.map((student, index) => {
          return (
              <div className="col s6 m3 billCard">
                <div className="card-panel teal">
                  <span className="white-text">Name : {student.student_name}</span>
                  <p className="white-text">Course Name : {props.final.course_name}</p>
                  <p className="white-text">Room Number : {student.room_number}</p>
                  <p className="white-text">Deposit : {student.deposit}</p>
                  <p className="white-text">Laundry : {student.laundry}</p>
                  <p className="white-text">Purchase : {student.purchase}</p>
                </div>
              </div>
          )
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    final: state.final
  }
}

export default connect(mapStateToProps, null)(CourseEnd)
