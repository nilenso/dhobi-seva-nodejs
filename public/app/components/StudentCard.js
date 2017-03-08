import React from 'react'
import { Link } from 'react-router'
import 'materialize-css/bin/materialize.css'
import 'main.css'

const StudentCard = (props) => {
  return (
    <div className="col s6 m3">
      <div className="card blue-grey darken-1 small">
        <div className="card-content white-text">
          <span className="card-title card-title-style">{props.studentname}</span>
          <hr/>
          <p className="">{props.roomnumber}</p>
          <p className="">{props.seatnumber}</p>
        </div>
        <div className="card-action course-action">
          <div className="col s4 center-align">
             <Link to={`/deposits/${props.studentid}`}>Deposit</Link>
          </div>
          <div className="col s4 center-align">
            <Link to={`/laundry/${props.studentid}`}>Laundry</Link>
          </div>
          <div className="col s4 center-align">
            <Link to={`/purchases/${props.studentid}`}>Purchase</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentCard