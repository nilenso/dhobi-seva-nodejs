import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'materialize-css/bin/materialize.css'
import 'main.css'
import 'materialize-css/bin/materialize.js'
import { addstudent } from '../actions/students'
import { studentDetails } from '../../../db/validate'

class StudentAddForm extends Component {
  handleClick() {
    const student = {
      student_name: this.studentName.value,
      room_number: this.roomNumber.value,
      seat_number: this.seatNumber.value
    }
    studentDetails(student) === null ? alert("Invalid Input") : this.props.addstudent(student, this.props.course_id)
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m6 form-inputs">
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="STUDENT NAME" ref={(input) => this.studentName = input} type="text" data-length="20" />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="ROOM NUMBER" type="text" ref={(input) => this.roomNumber = input} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="SEAT NUMBER" type="text" ref={(input) => this.seatNumber = input} />
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

const mapStateToProps = (state) => {
  return {
    course_id: state.students.course_id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addstudent: (student, course_id) => {
      dispatch(addstudent(student, course_id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentAddForm)
