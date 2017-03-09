import React, { Component } from 'react'
import { connect } from 'react-redux'

class CourseEnd extends Component {
  balanceCheck(student) {
    let balance = student.deposit - (student.laundry + student.purchase)
    return <p className="white-text">Balance : {balance}</p>
  }

  render() {
    return (
      <div className="row">
        {
          this.props.final.students.map((student, index) => {
            return (
                <div className="col s6 m3 billCard">
                  <div className="card-panel teal">
                    <p className="white-text">Name : {student.student_name}</p>
                    <p className="white-text">Course Name : {this.props.final.course_name}</p>
                    <p className="white-text">Room Number : {student.room_number}</p>
                    <p className="white-text">Deposit : {student.deposit}</p>
                    <p className="white-text">Laundry : {student.laundry}</p>
                    <p className="white-text">Purchase : {student.purchase}</p>
                    { this.balanceCheck(student) }
                  </div>
                </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    final: state.final
  }
}

export default connect(mapStateToProps, null)(CourseEnd)
