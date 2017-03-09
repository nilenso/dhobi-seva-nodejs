import React, { Component } from 'react'
import { connect } from 'react-redux'
import dateFormat from 'dateformat'
import 'materialize-css/bin/materialize.css'
import 'main.css'
import { addTransaction } from '../actions/transactions'
import { getTransactions } from '../actions/transactions';
import { expenseDetails } from '../../../db/validate'


class Laundry extends Component {
  handleClick() {
    const laundry = {
      student_id: this.props.studentId,
      transaction_name: 'laundry',
      quantity: Number(this.quantity.value),
      rate: Number(this.rate.value)
    }
    this.quantity.value = '';
    this.rate.value = '';
    expenseDetails(laundry) === null ? alert('Invalid Input') : this.props.addTransaction(laundry)
  }

  componentWillMount() {
    this.props.getTransactions(this.props.studentId)
  }

  render() {
    return (
      <div className="row">
        <div className="col s4 laundry-quantity">
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="QUANTITY" type="text" ref={(input) => this.quantity = input} />
            </div>
          </div>
        </div>
        <div className="col s4 laundry-rate">
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="RATE" type="text" ref={(input) => this.rate = input} />
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
                <th data-field="date">Date</th>
                <th data-field="quantity">Quantity</th>
                <th data-field="rate">Rate</th>
                <th data-field="amount">Amount</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.laundry ?
                this.props.laundry.map((item, index) => {
                  return (
                    <tr>
                      <td>{dateFormat(item.createdAt, "mediumDate")}</td>
                      <td>{item.quantity}</td>
                      <td>{item.rate}</td>
                      <td>{item.amount}</td>
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
    laundry: state.transactions.laundry
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTransaction: (laundry) => {
      dispatch(addTransaction(laundry))
    },
    getTransactions: (studentId) => {
      dispatch(getTransactions(studentId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Laundry)
