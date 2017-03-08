import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'materialize-css/bin/materialize.css'
import 'main.css'
import { addTransaction } from '../actions/transactions'
import { getTransactions } from '../actions/transactions';


class Purchases extends Component {
  handleClick() {
    const purchase = {
      student_id: this.props.studentId,
      transaction_name: this.name.value,
      quantity: Number(this.quantity.value),
      rate: Number(this.rate.value)
    }
    this.name.value = '';
    this.quantity.value = '';
    this.rate.value = '';
    this.props.addTransaction(purchase)
  }

  componentWillMount() {
    this.props.getTransactions(this.props.studentId)
  }

  render() {
    return (
      <div className="row">
        <div className="col s3 purchase-name">
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="NAME" type="text" ref={(input) => this.name = input} />
            </div>
          </div>
        </div>
        <div className="col s3 purchase-quantity">
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="QUANTITY" type="text" ref={(input) => this.quantity = input} />
            </div>
          </div>
        </div>
        <div className="col s3 purchase-rate">
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="RATE" type="text" ref={(input) => this.rate = input} />
            </div>
          </div>
        </div>
        <div className="col s2 purchase-button">
          <button className="waves-effect waves-light btn" onClick={() => this.handleClick()}>Submit</button>
        </div>
        <div className="col s6 purchase-table">
          <table className="striped">
            <thead>
              <tr>
                <th data-field="date">Date</th>
                <th data-field="name">Name</th>
                <th data-field="quantity">Quantity</th>
                <th data-field="rate">Rate</th>
                <th data-field="amount">Amount</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.purchase ?
                this.props.purchase.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.createdAt}</td>
                      <td>{item.transaction_name}</td>
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
    purchase: state.transactions.purchase
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTransaction: (purchase) => {
      dispatch(addTransaction(purchase))
    },
    getTransactions: (studentId) => {
      dispatch(getTransactions(studentId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Purchases)
