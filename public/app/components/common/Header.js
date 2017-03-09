import React from 'react'
import { Link } from 'react-router'
import 'materialize-css/bin/materialize.css'
import 'main.css'

const Header = (props) => {
  return (
    <header>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <div className="brand-logo page-title">{props.title}</div>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to={`/courses`} className="nav-button">Courses</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;
