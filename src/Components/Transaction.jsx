import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Transaction extends Component {
  render() {
    return (
      <li>
          {this.props.transaction.title}
      </li>
    );
  }
}

Transaction.propTypes = {
    transaction: PropTypes.object.isRequired
};

export default Transaction;