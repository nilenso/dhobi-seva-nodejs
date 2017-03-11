import React, { Component, cloneElement } from 'react'
import { connect } from 'react-redux'
import StudentCard from './StudentCard';

class StudentBoard extends Component {

  render() {
    return (
      <main>
        <div className="row">
          {cloneElement(this.props.children, { title: 'Add Student', link: `/addstudent/${this.props.course_id}`})}
          {this.props.students ? this.renderStudentCards() : []}
        </div>
      </main>
    );
  }

  renderStudentCards() {
    return this.props.students.map((student, index) => {
      return (
        <StudentCard key={index} studentid={student.id} studentname={student.student_name} roomnumber={student.room_number} seatnumber={student.seat_number}/>
      );
    })
  }
}

const mapStateToProps = (state) => {
  return {
    course_id: state.students.course_id,
    students: state.students.students
  }
}

export default connect(mapStateToProps, null)(StudentBoard)
