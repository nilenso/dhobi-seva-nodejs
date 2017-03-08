import React, { Component } from 'react'
import { connect } from 'react-redux'
import dateFormat from 'dateformat'
import 'materialize-css/bin/materialize.css'
import 'main.css'
import { addTransaction } from '../actions/transactions'
import { getTransactions } from '../actions/transactions';


class Deposits extends Component {
  handleClick() {
    const deposit = {
      student_id: this.props.studentId,
      transaction_name: 'deposit',
      amount: Number(this.deposit.value)
    }
    this.deposit.value = '';
    this.props.addTransaction(deposit)
  }

  componentWillMount() {
    this.props.getTransactions(this.props.studentId)
  }

  render() {
    return (
      <div className="row">
        <div className="col s6">
          <div className="row">
            <div className="input-field col s12">
              <input className="deposit-input" placeholder="DEPOSIT" type="text" ref={(input) => this.deposit = input} />
            </div>
          </div>
        </div>
        <div className="col s3 deposit-button">
          <button className="waves-effect waves-light btn" onClick={() => this.handleClick()}>Submit</button>
        </div>
        <div className="col s6 deposit-table">
          <table className="striped">
            <thead>
              <tr>
                <th data-field="id">Date</th>
                <th data-field="name">Amount</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.deposits ?
                this.props.deposits.map((deposit, index) => {
                  return (
                    <tr>
                      <td>{dateFormat(deposit.createdAt, "mediumDate")}</td>
                      <td>{deposit.amount}</td>
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
    deposits: state.transactions.deposit
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTransaction: (deposit) => {
      dispatch(addTransaction(deposit))
    },
    getTransactions: (studentId) => {
      dispatch(getTransactions(studentId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deposits)
