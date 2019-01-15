import React, { Component } from 'react';
import TransactionList from './Components/TransactionList.jsx'
import TransactionForm from './Components/TransactionForm.jsx'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [
        { 
          id: 1,
          title: 'Purchase #1' 
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <TransactionList transactions={this.state.transactions} />
        <TransactionForm />
      </div>
    );
  }
}

export default App;
