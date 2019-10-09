import React, { Component } from 'react';
import Repo from './Repo';
export default class Table extends Component {
  render() {
    const { repos } = this.props.repo;
    return (
      <div style={{ border: '3px green dotted' }}>
        <h6>Table</h6>
        <table>
          <thead>
            <tr><th>Number</th>
              <th>Title</th>
              <th>Repo Status</th>
              <th>Check</th>
              <th>Is Private</th>
              <th>Language</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
                <Repo repositories = {repos} changeRepoStatus = {this.props.changeStatus} removeRepos={this.props.removeRpo}/>
          </tbody>
        </table>
      </div>
    );
  }
}
