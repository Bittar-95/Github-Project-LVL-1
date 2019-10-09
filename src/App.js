import React, { Component } from 'react';
import Table from './components/Table';

export default class App extends Component {
  state = {
    repos: [
      {
        id: 1,
        title: 'Array',
        status: 'Private',
        language: 'HTML'
      },
      {
        id: 2,
        title: 'Object',
        status: 'Public',
        language: 'JavaScript'
      }
    ]
  };
  changeStatus=(id)=>
  {

  }
  render() {
    const { repos } = this.state;
    return (
      <div style={{ border: 'black 1px solid' }}>
        <h6>App</h6>
        <Table repo={this.state} />


      </div>
    );
  }
}
