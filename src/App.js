import React, { Component } from 'react';
import Table from './components/Table';
import AddRpo from './components/Add'
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
  changeStatus = (id) => {
    const { repos } = this.state;
    let newStatus = repos.map((repo) => {
      if (repo.id === id) {
        if (repo.status === "Public")
          repo.status = "Private";
        else
          repo.status = "Public";
      }
      return repo;
    });
    this.setState({ repos: newStatus });
  }
  removeRepository = (id) => {
    const { repos } = this.state;
    let UpdateRepo = repos.filter((repo) => repo.id !== id);
    this.setState({ repos: UpdateRepo });
  }
  addRepository = (repoObject) => {
    let oldData = this.state.repos;
    oldData.push(repoObject);
    this.setState({repos:oldData});
  }
  render() {
    const { repos } = this.state;
    return (
      <div style={{ border: 'black 1px solid' }}>
        <div><AddRpo addNewRepo= {this.addRepository} stateRepos = {repos}/></div>
        <h6>App</h6>
        <Table repo={this.state} changeStatus={this.changeStatus} removeRpo={this.removeRepository}/>
      </div>
    );
  }
}
