import React, { Component } from 'react';
import Transaction from './Transaction.jsx'
import PropTypes from 'prop-types';

class TransactionList extends Component {
  render() {
    return (
      <ul>
        {this.props.transactions.map(transaction => <Transaction transaction={transaction} key={transaction.id} />)}
      </ul>
    );
  }
}

TransactionList.propTypes = {
    transactions: PropTypes.array.isRequired
};

export default TransactionList;