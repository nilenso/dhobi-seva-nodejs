import React, { Component } from 'react'

class StudentBoard extends Component {

  render() {
    return (
      <main>
        <div className="row">
          {this.props.students ? this.renderStudentCards() : []}
        </div>
      </main>
    );
  }

  renderStudentCards() {
    return this.props.students.map((student, index) => {
      return (
        <StudentCard key={index} studentid={student.student_id} studentname={student.student_name} roomnumber={student.room_number} seatnumber={student.seat_number}/>
      );
    })
  }
}

export default StudentBoard
