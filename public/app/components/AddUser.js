import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'materialize-css/bin/materialize.css'
import 'main.css'
import { addUser } from '../actions/admin'


class AddUser extends Component {
  handleClick() {
    const user = {
      name: this.name.value,
      mobile_number: Number(this.mobile_number.value)
    }
    this.name.value = ''
    this.mobile_number.value = ''
    this.props.addUser(user)
  }

  render() {
    return (
      <div className="row">
        <div className="col s4 laundry-quantity">
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="NAME" type="text" ref={(input) => this.name = input} />
            </div>
          </div>
        </div>
        <div className="col s4 laundry-rate">
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="MOBILE NUMBER" type="text" ref={(input) => this.mobile_number = input} />
            </div>
          </div>
        </div>
        <div className="col s2 laundry-button">
          <button className="waves-effect waves-light btn" onClick={() => this.handleClick()}>Submit</button>
        </div>
        <div className="col s6 laundry-table">
          <table className="striped">
            <thead>
              <tr>
                <th data-field="name">Name</th>
                <th data-field="mobile_number">Mobile Number</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.users ?
                this.props.users.map((user, index) => {
                  return (
                    <tr>
                      <td>{user.user_name}</td>
                      <td>{user.user_id}</td>
                    </tr>
                  );
                })
                :
                null
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => {
      dispatch(addUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser)
