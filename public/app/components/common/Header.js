import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import 'materialize-css/bin/materialize.css'
import 'main.css'
import { getUsers } from '../../actions/admin'


class Header extends Component {
  handleClick() {
     this.props.getUsers()
  }

  renderAddUser() {
    if(this.props.isAdmin) {
      return (
        <li>
          <a onClick={() => this.handleClick()} className="nav-button">Add User</a>
        </li>
      );
    } else {
      return null
    }
  }

  render() {
      return (
        <header>
          <div className="navbar-fixed">
            <nav>
              <div className="nav-wrapper">
                <div className="brand-logo page-title">{this.props.title}</div>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  { this.renderAddUser() }
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
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch(getUsers())
    }
  }
}

export default connect(null, mapDispatchToProps)(Header)
